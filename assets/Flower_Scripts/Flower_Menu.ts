import { _decorator, Component, Node } from 'cc';
import { Flower_StartButton } from "./Flower_UIButtonStart"
import { Flower_GameRunner } from "./Flower_GameRunner";
const { ccclass, property } = _decorator;

@ccclass('Flower_Menu')
export class Flower_Menu extends Component {
    @property(Flower_StartButton) private playBtn: Flower_StartButton;
    start() {
        this.playBtn.InteractedEvent.on(this.startGame, this);
    }

    update(deltaTime: number) {

    }
    private startGame(): void {
        Flower_GameRunner.Instance.playGame(); // 开始游戏
    }
}


