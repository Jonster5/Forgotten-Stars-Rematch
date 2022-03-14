import {
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshPhongMaterial,
    PlaneGeometry,
    PointLight,
    SphereGeometry,
    Vector2,
    Vector3,
} from 'three';
import { ShipData } from './assetTypes';
import { keyTracker } from './keyTracker';
import { GameMap } from './map';

export class PlayerShip {
    map: GameMap;
    sprite: Mesh;

    velocity: Vector2;

    w: keyTracker;
    a: keyTracker;
    s: keyTracker;
    d: keyTracker;

    constructor(map: GameMap, data: ShipData, location: Vector2) {
        this.map = map;

        this.sprite = new Mesh(
            new PlaneGeometry(data.width, data.height),
            data.material
        );

        this.position.set(location.x, location.y, 0);
        this.velocity = new Vector2(0, 0);

        this.map.scene.add(this.sprite);

        this.w = new keyTracker('w');
        this.a = new keyTracker('a');
        this.s = new keyTracker('s');
        this.d = new keyTracker('d');
    }

    update() {
        const dv = new Vector2(0, 0);

        if (this.w.isDown) dv.setX(1);
        if (this.a.isDown) this.rotation.z += 0.05;
        if (this.d.isDown) this.rotation.z += -0.05;

        dv.rotateAround(new Vector2(0, 0), this.rotation.z);

        this.velocity.x += dv.x;
        this.velocity.y += dv.y;

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    private onKeydown(e: KeyboardEvent) {
        switch (e.key) {
            case 'W':
            case 'w':
            case 'ArrowUp':
                break;
        }
    }

    get position() {
        return this.sprite.position;
    }

    get rotation() {
        return this.sprite.rotation;
    }

    terminate() {
        this.w.terminate();
        this.a.terminate();
        this.s.terminate();
        this.d.terminate();
    }
}
