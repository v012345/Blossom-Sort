import { _decorator, director, Node } from 'cc';

import { Flower_Game } from "./Flower_Game";
import { Flower_FlowerSpawner } from "./Flower_FlowerSpawner";
import { delay } from "./AsyncUtils";
const { ccclass, property } = _decorator;

@ccclass('Flower_GameRunner')
export class Flower_GameRunner {
    private static instance: Flower_GameRunner = new Flower_GameRunner();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    private constructor() { }


    public static get Instance(): Flower_GameRunner {
        return this.instance;
    }


    public async playGame(): Promise<void> {
        director.loadScene("Flower_Game");
        while (Flower_Game.Instance == null) await delay(10); // 等实例化
        await Flower_Game.Instance.play(); // 开玩
    }
}


