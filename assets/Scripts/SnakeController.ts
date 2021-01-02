import { Colliders } from './Utils';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SnakeController extends cc.Component {

    private gameControllerScript;
    private gameManagerScript;

    onLoad() {
        // There's got to be a better way
        this.gameControllerScript = cc.director.getScene().getChildByName("Canvas").
            getChildByName("GameController").getComponent("GameController");
    }

    onCollisionEnter(other, self) {
        switch (other.node.name) {
            case Colliders.APPLE:
                this.gameControllerScript.appleCollision();
                break;
            case Colliders.SNAKE:
            case Colliders.BOTTOM_BORDER:
            case Colliders.RIGHT_BORDER:
            case Colliders.LEFT_BORDER:
            case Colliders.TOP_BORDER:
                this.gameControllerScript.gameOver();
            default:
                break;
        }

    }
}
