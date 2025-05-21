import { _decorator, Canvas, Component, Node } from 'cc';
import { delay } from "./AsyncUtils";
import { Flower_FlowerManager } from "./Flower_FlowerManager";
import { Flower_FlowerSpawner } from './Flower_FlowerSpawner';
import { Flower_FlowerWorker } from './Flower_FlowerWorker';
const { ccclass, property } = _decorator;

@ccclass('Flower_Game')
export class Flower_Game extends Component {
    private static instance: Flower_Game;
    @property(Flower_FlowerManager) private flowerManager: Flower_FlowerManager;
    @property(Flower_FlowerSpawner) private flowerSpawner: Flower_FlowerSpawner;
    @property(Flower_FlowerWorker) private flowerWorker: Flower_FlowerWorker;
    @property(Canvas) private canvas: Canvas;
    public static get Instance(): Flower_Game {
        return this.instance;
    }

    public start(): void {
        Flower_Game.instance = this;

    }

    public async play(): Promise<String> {
        await this.setup();
        // while (1) {
        //     // console.log("每 0.3 秒检查一下游戏是否成功 失败 重新开始 退出等")
        //     await delay(300);
        // }
        return "1";
    }

    private async setup(): Promise<void> {
        this.flowerSpawner.init(this.canvas.node)
        this.flowerWorker.putFlower(this.flowerSpawner)
        // this.flowerManager.init(this.canvas.node);
        // Flower_FlowerWork.Instance.putFlower()
        // this.flowerManager.init();

    }

    update(deltaTime: number) {
        this.flowerManager.gameTick(deltaTime);
    }
}


