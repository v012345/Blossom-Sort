import { _decorator, Component, Node, Vec3 } from 'cc';
import { Flower_FlowerSpawner } from './Flower_FlowerSpawner';
import { Flower_GraphicsType } from './Flower_GraphicsType';
const { ccclass, property } = _decorator;

@ccclass('Flower_FlowerWorker')
export class Flower_FlowerWorker extends Component {

    start() {


    }


    public putFlower(s: Flower_FlowerSpawner) {

        let f = s.spawnNewFlower(-160, 200, Flower_GraphicsType.Flower_1)
        f.node.setRotationFromEuler(new Vec3(0, 0, 30));
        s.spawnNewFlower(-130, 200, Flower_GraphicsType.Flower_1)
        f = s.spawnNewFlower(-100, 200, Flower_GraphicsType.Flower_2)
        f.node.setRotationFromEuler(new Vec3(0, 0, -30));


        f = s.spawnNewFlower(0, 200, Flower_GraphicsType.Flower_1)
        f.node.setRotationFromEuler(new Vec3(0, 0, 30));
        s.spawnNewFlower(20, 200, Flower_GraphicsType.Flower_1)
        f = s.spawnNewFlower(50, 200, Flower_GraphicsType.Flower_2)
        f.node.setRotationFromEuler(new Vec3(0, 0, -30));
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(0, 0, Flower_GraphicsType.Flower_1)
        // s.spawnNewFlower(100, 100, Flower_GraphicsType.Flower_1)
    }

    update(deltaTime: number) {

    }
}


