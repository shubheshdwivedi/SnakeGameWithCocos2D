"use strict";
cc._RF.push(module, '8bd0d8Zf01P1LFu9fy+m+J/', 'GameController');
// Scripts/GameController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
    Direction[Direction["LEFT"] = 3] = "LEFT";
})(Direction || (Direction = {}));
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.snakeBody = new cc.Prefab();
        _this.applePrefab = new cc.Prefab();
        _this.scoreText = new cc.Label();
        _this.gameText = new cc.Node();
        _this.snake = [];
        _this.snakeInitialLength = 5;
        _this.isPlaying = true;
        _this.speed = 0;
        _this.score = 0;
        _this.updateDelay = 0;
        _this.addNew = false;
        _this.direction = Direction.UP;
        _this.apple = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
        this.registerKeyEvent();
        this.spawnFood();
        this.initSnake();
    };
    GameController.prototype.initSnake = function () {
        this.snake = [];
        for (var i = 0; i < this.snakeInitialLength; i++) {
            this.incrementSnakeBody(i);
        }
    };
    // Code crime! Overloading seemed too much work, ts doesn't make it easy :P
    GameController.prototype.incrementSnakeBodyWithPosition = function (position) {
        var snakeBodyNode = cc.instantiate(this.snakeBody);
        snakeBodyNode.parent = this.node;
        snakeBodyNode.setPosition(position.x, position.y);
        this.snake.unshift(snakeBodyNode);
    };
    GameController.prototype.incrementSnakeBody = function (i) {
        var snakeBodyNode = cc.instantiate(this.snakeBody);
        snakeBodyNode.parent = this.node;
        snakeBodyNode.setPosition(i * 70, 0);
        this.snake.push(snakeBodyNode);
    };
    GameController.prototype.registerKeyEvent = function () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    GameController.prototype.onKeyDown = function (event) {
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
    };
    GameController.prototype.getRandomPosition = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    GameController.prototype.spawnFood = function () {
        var randomX = this.getRandomPosition(-450, 450);
        var randomY = this.getRandomPosition(-800, 800);
        this.apple = cc.instantiate(this.applePrefab);
        this.apple.setPosition(randomX, randomY);
        this.apple.parent = this.node.parent;
    };
    GameController.prototype.appleCollision = function () {
        this.apple.destroy();
        this.spawnFood();
        this.score++;
        this.scoreText.string = String(this.score);
        this.addNew = true;
    };
    GameController.prototype.getScore = function () {
        return this.score;
    };
    GameController.prototype.update = function (dt) {
        if (this.isPlaying) {
            this.speed = Math.min(15, Math.floor(this.score / 10));
            this.updateDelay++;
            if ((this.updateDelay % (15 - this.speed)) === 0) {
                var firstCell = this.snake[this.snake.length - 1], lastCell = this.snake.shift(), oldLastCellx = lastCell.x, oldLastCelly = lastCell.y;
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
    };
    GameController.prototype.gameOver = function () {
        this.gameText.active = true;
        this.apple.destroy();
        for (var i = 0; i < this.snake.length; i++) {
            this.snake[i].destroy();
        }
        this.isPlaying = false;
    };
    GameController.prototype.reset = function () {
        this.isPlaying = true;
        this.initSnake();
        this.spawnFood();
        this.gameText.active = false;
        this.score = 0;
        this.scoreText.string = "0";
        this.speed = 0;
        this.direction = Direction.UP;
        this.updateDelay = 0;
    };
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "snakeBody", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameController.prototype, "applePrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "scoreText", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "gameText", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

cc._RF.pop();