import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Flower_Flower')
export class Flower_Flower extends Component {
    start() {

    }

    public setup(v: Vec3): void {
        this.node.setPosition(v);
        this.node.active = true;
    }

    




    update(deltaTime: number) {

    }
    public gameTick(deltaTime: number): void {

    }
}


