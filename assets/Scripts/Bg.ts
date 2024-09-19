import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Bg")
export class Bg extends Component {
  @property(Node)
  Bg01: Node = null;

  @property(Node)
  Bg02: Node = null;

  @property
  speed: number = 100;

  start() {}

  update(deltaTime: number) {
    let position_1 = this.Bg01.position;
    this.Bg01.setPosition(
      position_1.x,
      position_1.y - this.speed * deltaTime,
      position_1.z
    );

    let position_2 = this.Bg02.position;
    this.Bg02.setPosition(
      position_2.x,
      position_2.y - this.speed * deltaTime,
      position_2.z
    );

    let p1 = this.Bg01.position;
    let p2 = this.Bg02.position;
    if (this.Bg01.position.y < -852) {
      this.Bg01.setPosition(p2.x, p2.y + 852, p2.z);
    }

    if (this.Bg02.position.y < -852) {
      this.Bg02.setPosition(p1.x, p1.y + 852, p1.z);
    }
  }
}
