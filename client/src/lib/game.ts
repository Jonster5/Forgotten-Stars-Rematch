import { BoxGeometry, Mesh, MeshBasicMaterial, Vector2 } from 'three';
import { ShipData } from './assetTypes';
import { GameMap } from './map';
import { PlayerShip } from './player';

export class Game {
    player: PlayerShip;
    remotes: [];

    map: GameMap;

    constructor(target: HTMLElement) {
        this.map = new GameMap(target);

        this.map.update = () => {
            this.player.update();

            this.map.camera.position.x = this.player.position.x;
            this.map.camera.position.y = this.player.position.y;
        };

        this.map.start();
    }

    spawnPlayer(ship: ShipData) {
        this.player = new PlayerShip(this.map, ship, new Vector2(500, 0));
    }

    terminate() {
        if (this.player) this.player.terminate();
        this.map.terminate();
    }
}
