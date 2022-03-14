import { MeshPhongMaterial, Texture } from 'three';

export interface Assets {
    ships: {
        [key: string]: ShipData;
    };
}

export interface rawAssetsIndex {
    ships: string[];
    maps: string[];
    parts: string[];
}

export interface ShipData {
    name: string;
    width: number;
    height: number;

    material: MeshPhongMaterial;
}

export interface RawShipData {
    name: string;
    width: number;
    height: number;

    img: string;
    normal: string;
    specular: string;
}
