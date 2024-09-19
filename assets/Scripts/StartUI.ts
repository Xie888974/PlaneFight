import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('StartUI')
export class StartUI extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    OnStartButtonClick() {
        director.loadScene("02-Game");
    }
}


