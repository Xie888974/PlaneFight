import {
  _decorator,
  Component,
  EventTouch,
  Input,
  input,
  Node,
  Vec3,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("Player")
export class Player extends Component {
  protected onLoad(): void {
    input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
  }

  protected onDestroy(): void {
    input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
  }

  onTouchMove(event: EventTouch) {
    const p = this.node.position;
    let targetPosition = new Vec3(
      p.x + event.getDeltaX(),
      p.y + event.getDeltaY(),
      p.z
    );

    if (targetPosition.x < -230) {
      targetPosition.x = -230;
    }

    if (targetPosition.x > 230) {
      targetPosition.x = 230;
    }

    if (targetPosition.y > 380) {
      targetPosition.y = 380;
    }

    if (targetPosition.y < -380) {
      targetPosition.y = -380;
    }

    this.node.setPosition(targetPosition);
  }
}
