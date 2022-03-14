import {
    MeshPhongMaterial,
    ObjectSpaceNormalMap,
    TangentSpaceNormalMap,
    Texture,
    TextureLoader,
    Vector2,
} from 'three';
import { Assets, rawAssetsIndex, RawShipData, ShipData } from './assetTypes';

export async function LoadAssets(location: string): Promise<Assets> {
    try {
        const index: rawAssetsIndex = await fetch(`${location}/index`)
            .then((x) => x.json())
            .catch((err) => {
                throw err;
            });

        const rawShips: RawShipData[] = await Promise.all(
            index.ships.map((s) =>
                fetch(`${location}/?section=ships&name=${s}&type=json`)
                    .then((x) => x.json())
                    .catch((err) => {
                        throw err;
                    })
            )
        );

        const ships = {};

        rawShips.forEach(async (s) => {
            ships[s.name] = await LoadShip(s, location);
        });

        return {
            ships,
        };
    } catch (error) {
        return error;
    }
}

async function LoadShip(
    input: RawShipData,
    location: string
): Promise<ShipData> {
    try {
        const { name, width, height, img, normal } = input;

        const loader = new TextureLoader();

        const map = (await loader
            .loadAsync(`${location}/?section=ships&name=${img}&type=image`)
            .catch(handle)) as Texture;

        const normalMap = (await loader
            .loadAsync(`${location}/?section=ships&name=${normal}&type=image`)
            .catch(handle)) as Texture;

        const material = new MeshPhongMaterial({
            map: map,
            transparent: true,
        });

        return {
            name,
            width,
            height,

            material,
        };
    } catch (error) {
        throw error;
    }
}

function handle(err: any): void {
    throw err;
}
