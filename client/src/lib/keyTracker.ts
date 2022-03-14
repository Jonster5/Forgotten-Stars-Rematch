export class keyTracker {
    keys: string[];

    isDown: boolean;
    isUp: boolean;

    private okd: () => void;
    private oku: () => void;

    private kdb: () => void;
    private kub: () => void;

    constructor(...keys: string[]) {
        this.keys = keys;

        this.isDown = false;
        this.isUp = true;

        this.kdb = this.kd.bind(this);
        this.kub = this.ku.bind(this);

        window.addEventListener('keydown', this.kdb);
        window.addEventListener('keyup', this.kub);
    }

    terminate() {
        window.removeEventListener('keydown', this.kdb);
        window.removeEventListener('keyup', this.kub);
    }

    private kd(e: KeyboardEvent) {
        if (this.keys.indexOf(e.key) !== -1) {
            this.isDown = true;
            this.isUp = false;
            if (this.okd) this.okd();
        }
    }
    private ku(e: KeyboardEvent) {
        if (this.keys.indexOf(e.key) !== -1) {
            this.isDown = false;
            this.isUp = true;

            if (this.oku) this.oku();
        }
    }

    onKeyDown(cb: () => void, thisArg?: any) {
        this.okd = cb.bind(thisArg ?? cb);
    }

    onKeyUp(cb: () => void, thisArg?: any) {
        this.oku = cb.bind(thisArg ?? cb);
    }
}
