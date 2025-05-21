import { _decorator, Component, Prefab, Node, Vec3, instantiate } from 'cc';
import { ObjectPool } from "./ObjectPool";
import { Flower_Flower } from './Flower_Flower';
import { Flower_GraphicsType } from './Flower_GraphicsType';

const { ccclass, property } = _decorator;

@ccclass('Flower_FlowerSpawner')
export class Flower_FlowerSpawner extends Component {

    @property(Prefab) private flowers: Prefab[] = [];
    private flowerGraphicsTypeToPool = new Map<String, ObjectPool<Flower_Flower>>();
    private targetNode: Node;


    public init(targetNode: Node): void {
        this.targetNode = targetNode;
        for (const flower of this.flowers) {
            const flowerPool: ObjectPool<Flower_Flower> = new ObjectPool(flower, this.targetNode, 12, "Flower_Flower");
            console.log("flower.name")
            console.log(flower.name)
            console.log("flower.name")
            this.flowerGraphicsTypeToPool.set(flower.name, flowerPool);
        }
    }

    public gameTick(deltaTime: number): void {
    }


    

    public spawnNewFlower(positionX: number, positionY: number, type: string): Flower_Flower {
        console.log(type)
        console.log(this.flowerGraphicsTypeToPool.get(type))
        const flower = this.flowerGraphicsTypeToPool.get(type).borrow();
        const spawnPosition = new Vec3();
        spawnPosition.x = positionX;
        spawnPosition.y = positionY;
        flower.setup(spawnPosition);
        return flower;
    }

    // public returnEnemy(enemy: Enemy): void {
    //     enemy.DeathEvent.off(this.returnEnemy);
    //     enemy.LifetimeEndedEvent.off(this.returnEnemy);

    //     console.log(enemy.name);
    //     this.enemyGraphicsTypeToPool.get(<EnemyGraphicsType>enemy.node.name).return(enemy);

    //     this.enemyRemovedEvent.trigger(enemy);
    // }
}


