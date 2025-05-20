import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Flower_StartButton')
export class Flower_StartButton extends Component {
    start() {
        this.node.on(Node.EventType.TOUCH_START, this.playGame, this)
    }
    private playGame(): void {
        director.loadScene("Flower_GameMainScene")
    }
    update(deltaTime: number) {
        
    }
}


