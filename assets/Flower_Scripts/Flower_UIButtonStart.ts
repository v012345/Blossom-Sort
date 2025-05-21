import { _decorator, Component, Node, NodeEventType } from "cc";
import { ISignal } from "./ISignal";
import { Signal } from "./Signal";
const { ccclass, property } = _decorator;

@ccclass("Flower_StartButton")
export class Flower_StartButton extends Component {
    private interactedEvent = new Signal<Flower_StartButton>();

    public start(): void {
        this.node.on(Node.EventType.TOUCH_START, this.interact, this);
    }

    public get InteractedEvent(): ISignal<Flower_StartButton> {
        return this.interactedEvent;
    }

    private interact(): void {
        console.log("Flower_StartButton interact");
        this.interactedEvent.trigger(this);
    }
}
