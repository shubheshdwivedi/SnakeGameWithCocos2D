
const { ccclass, property } = cc._decorator;

enum Direction {
    UP,
    DOWN,
    RIGHT,
    LEFT
}

@ccclass
export default class GameController extends cc.Component {

    @property(cc.Prefab) snakeBody: cc.Prefab = new cc.Prefab();
    @property(cc.Prefab) applePrefab: cc.Prefab = new cc.Prefab();
    @property(cc.Label) scoreText: cc.Label = new cc.Label();
    @property(cc.Node) gameText: cc.Node = new cc.Node();

    private snake: Array<cc.Node> = [];
    private snakeInitialLength: number = 5;
    private isPlaying: boolean = true;

    private speed: number = 0;
    private score: number = 0;
    private updateDelay: number = 0;
    private addNew: boolean = false;
    private direction: Direction = Direction.UP;
    private apple: cc.Node = null;

    onLoad() {
        this.registerKeyEvent()
        this.spawnFood();
        this.initSnake();
    }

    initSnake() {
        this.snake = [];
        for (let i = 0; i < this.snakeInitialLength; i++) {
            this.incrementSnakeBody(i);
        }
    }

    // Code crime! Overloading seemed too much work, ts doesn't make it easy :P
    incrementSnakeBodyWithPosition(position: cc.Vec2) {
        const snakeBodyNode = cc.instantiate(this.snakeBody);
        snakeBodyNode.parent = this.node;
        snakeBodyNode.setPosition(position.x, position.y);
        this.snake.unshift(snakeBodyNode);
    }

    incrementSnakeBody(i: number) {
        const snakeBodyNode = cc.instantiate(this.snakeBody);
        snakeBodyNode.parent = this.node;
        snakeBodyNode.setPosition(i * 70, 0);
        this.snake.push(snakeBodyNode);
    }

    registerKeyEvent() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.w:
                if (this.direction != Direction.DOWN)
                    this.direction = Direction.UP;
                break;
            case cc.macro.KEY.d:
                if (this.direction != Direction.LEFT)
                    this.direction = Direction.RIGHT;
                break;
            case cc.macro.KEY.a:
                if (this.direction != Direction.RIGHT)
                    this.direction = Direction.LEFT;
                break;
            case cc.macro.KEY.s:
                if (this.direction != Direction.UP)
                    this.direction = Direction.DOWN;
                break;
            case cc.macro.KEY.space:
                this.reset();
                break;
            default:
                break;
        }
    }

    getRandomPosition(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    spawnFood() {
        let randomX = this.getRandomPosition(-450, 450);
        let randomY = this.getRandomPosition(-800, 800);
        this.apple = cc.instantiate(this.applePrefab);
        this.apple.setPosition(randomX, randomY);
        this.apple.parent = this.node.parent;
    }

    appleCollision() {
        this.apple.destroy();
        this.spawnFood();
        this.score++;
        this.scoreText.string = String(this.score);
        this.addNew = true;
    }

    getScore() {
        return this.score;
    }

    update(dt) {
        if (this.isPlaying) {
            this.speed = Math.min(15, Math.floor(this.score / 10));
            this.updateDelay++;
            if ((this.updateDelay % (15 - this.speed)) === 0) {

                let firstCell = this.snake[this.snake.length - 1],
                    lastCell = this.snake.shift(),
                    oldLastCellx = lastCell.x,
                    oldLastCelly = lastCell.y;
                if (this.direction === Direction.RIGHT) {
                    lastCell.x = firstCell.x + 70;
                    lastCell.y = firstCell.y;
                }
                else if (this.direction === Direction.LEFT) {
                    lastCell.x = firstCell.x - 70;
                    lastCell.y = firstCell.y;
                }
                else if (this.direction === Direction.UP) {
                    lastCell.x = firstCell.x;
                    lastCell.y = firstCell.y + 70;
                }
                else if (this.direction === Direction.DOWN) {
                    lastCell.x = firstCell.x;
                    lastCell.y = firstCell.y - 70;
                }

                this.snake.push(lastCell);
                firstCell = lastCell;

                if (this.addNew) {
                    this.incrementSnakeBodyWithPosition(new cc.Vec2(oldLastCellx, oldLastCelly));
                    this.addNew = false;
                }
            }

        }
    }

    gameOver() {
        this.gameText.active = true;
        this.apple.destroy();
        for (let i = 0; i < this.snake.length; i++) {
            this.snake[i].destroy();
        }
        this.isPlaying = false;
    }

    reset() {
        this.isPlaying = true;
        this.initSnake();
        this.spawnFood();
        this.gameText.active = false;
        this.score = 0;
        this.scoreText.string = "0";
        this.speed = 0;
        this.direction = Direction.UP;
        this.updateDelay = 0;
    }
}
