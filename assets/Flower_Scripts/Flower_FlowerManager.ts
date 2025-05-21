import { _decorator, Component, Node } from 'cc';
import { Flower_Flower } from './Flower_Flower';
import { Flower_FlowerSpawner } from './Flower_FlowerSpawner';
const { ccclass, property } = _decorator;

@ccclass('Flower_FlowerManager')
export class Flower_FlowerManager extends Component {
    private flowers: Flower_Flower[] = [];
    start() {

    }

    public init(targetNode: Node): void {
        console.log(" public init(targetNode: Node): void {")
        // Flower_FlowerSpawner.Instance.init(targetNode);

    }
    public gameTick(deltaTime: number): void {
        for (const flower of this.flowers) {
            flower.gameTick(deltaTime);
        }

        // for (const kvp of this.movementTypeToMover) {
        //     kvp[1].gameTick(deltaTime);
        // }
    }
    update(deltaTime: number) {

    }
}


