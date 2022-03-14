import {
    AmbientLight,
    AmbientLightProbe,
    LineBasicMaterial,
    Mesh,
    MeshPhongMaterial,
    OrthographicCamera,
    PerspectiveCamera,
    PointLight,
    Scene,
    SphereGeometry,
    WebGLRenderer,
} from 'three';
import { keyTracker } from './keyTracker';

export class GameMap {
    scene: Scene;
    camera: OrthographicCamera;
    // camera: PerspectiveCamera;
    renderer: WebGLRenderer;

    ambientLight: AmbientLightProbe;

    v: keyTracker;

    update: () => void;
    scrollBound: (e: WheelEvent) => void;

    updateInterval: number;

    constructor(target: HTMLElement) {
        const rect = target.getBoundingClientRect();

        this.scene = new Scene();
        this.camera = new OrthographicCamera(
            rect.width / -2,
            rect.width / 2,
            rect.height / 2,
            rect.height / -2,
            1,
            5000
        );
        // this.camera = new PerspectiveCamera(
        //     60  ,
        //     rect.width / rect.height,
        //     0.1,
        //     10000
        // );

        this.renderer = new WebGLRenderer();
        this.renderer.setSize(rect.width, rect.height);
        target.appendChild(this.renderer.domElement);

        this.camera.position.z = 100;

        this.ambientLight = new AmbientLightProbe(0xffffff, 0.5);

        const pointLight = new PointLight(0xffffff, 1, 10000, 0.01);

        pointLight.position.set(0, -5000, 500);
        const sun = new Mesh(
            new SphereGeometry(20),
            new LineBasicMaterial({ color: 0xffffff })
        );
        sun.position.set(0, -5000, 500);

        this.scene.add(this.ambientLight, pointLight, sun);

        const world = new Mesh(
            new SphereGeometry(1000, 30, 30),
            new MeshPhongMaterial({ color: 0x40a2a7 })
        );

        world.position.set(-1000, 0, -1000);

        this.scene.add(world);

        this.scrollBound = this.scroll.bind(this);
        window.addEventListener('wheel', this.scrollBound);

        this.v = new keyTracker('v', 'V');

        this.v.onKeyDown(() => {
            this.camera.zoom = 1;
            this.camera.updateProjectionMatrix();
        }, this);
    }

    private scroll(e: WheelEvent) {
        if (e.deltaY > 0) this.camera.zoom /= 1.2;
        else this.camera.zoom *= 1.2;

        if (this.camera.zoom <= 0.1) this.camera.zoom = 0.1;
        if (this.camera.zoom >= 10) this.camera.zoom = 10;

        this.camera.updateProjectionMatrix();
    }

    start() {
        setInterval(this.update.bind(this), 1000 / 30);
        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);

        window.requestAnimationFrame(this.render.bind(this));
    }

    terminate() {
        window.removeEventListener('wheel', this.scrollBound);
    }
}
