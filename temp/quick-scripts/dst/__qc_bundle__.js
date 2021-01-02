
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scripts/GameController');
require('./assets/Scripts/GameInit');
require('./assets/Scripts/SnakeController');
require('./assets/Scripts/Utils');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/Utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6f07oKWAJIRoA5iyAe1jLO', 'Utils');
// Scripts/Utils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colliders = void 0;
var Colliders;
(function (Colliders) {
    Colliders["APPLE"] = "Apple";
    Colliders["SNAKE"] = "Snake";
    Colliders["RIGHT_BORDER"] = "Right Border";
    Colliders["LEFT_BORDER"] = "Left Border";
    Colliders["TOP_BORDER"] = "Top Border";
    Colliders["BOTTOM_BORDER"] = "Bottom Border";
})(Colliders = exports.Colliders || (exports.Colliders = {}));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBWSxTQU9YO0FBUEQsV0FBWSxTQUFTO0lBQ2pCLDRCQUFlLENBQUE7SUFDZiw0QkFBZSxDQUFBO0lBQ2YsMENBQTZCLENBQUE7SUFDN0Isd0NBQTJCLENBQUE7SUFDM0Isc0NBQXlCLENBQUE7SUFDekIsNENBQStCLENBQUE7QUFDbkMsQ0FBQyxFQVBXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBT3BCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBlbnVtIENvbGxpZGVycyB7XHJcbiAgICBBUFBMRSA9IFwiQXBwbGVcIixcclxuICAgIFNOQUtFID0gXCJTbmFrZVwiLFxyXG4gICAgUklHSFRfQk9SREVSID0gXCJSaWdodCBCb3JkZXJcIixcclxuICAgIExFRlRfQk9SREVSID0gXCJMZWZ0IEJvcmRlclwiLFxyXG4gICAgVE9QX0JPUkRFUiA9IFwiVG9wIEJvcmRlclwiLFxyXG4gICAgQk9UVE9NX0JPUkRFUiA9IFwiQm90dG9tIEJvcmRlclwiXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/SnakeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35d569LuZZNB4IZ5+OStaQZ', 'SnakeController');
// Scripts/SnakeController.ts

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
var Utils_1 = require("./Utils");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SnakeController = /** @class */ (function (_super) {
    __extends(SnakeController, _super);
    function SnakeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SnakeController.prototype.onLoad = function () {
        // There's got to be a better way
        this.gameControllerScript = cc.director.getScene().getChildByName("Canvas").
            getChildByName("GameController").getComponent("GameController");
    };
    SnakeController.prototype.onCollisionEnter = function (other, self) {
        switch (other.node.name) {
            case Utils_1.Colliders.APPLE:
                this.gameControllerScript.appleCollision();
                break;
            case Utils_1.Colliders.SNAKE:
            case Utils_1.Colliders.BOTTOM_BORDER:
            case Utils_1.Colliders.RIGHT_BORDER:
            case Utils_1.Colliders.LEFT_BORDER:
            case Utils_1.Colliders.TOP_BORDER:
                this.gameControllerScript.gameOver();
            default:
                break;
        }
    };
    SnakeController = __decorate([
        ccclass
    ], SnakeController);
    return SnakeController;
}(cc.Component));
exports.default = SnakeController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcU25ha2VDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUF6RDs7SUEyQkEsQ0FBQztJQXRCRyxnQ0FBTSxHQUFOO1FBQ0ksaUNBQWlDO1FBQ2pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUM7WUFDdkUsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLEtBQUssaUJBQVMsQ0FBQyxLQUFLO2dCQUNoQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzNDLE1BQU07WUFDVixLQUFLLGlCQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3JCLEtBQUssaUJBQVMsQ0FBQyxhQUFhLENBQUM7WUFDN0IsS0FBSyxpQkFBUyxDQUFDLFlBQVksQ0FBQztZQUM1QixLQUFLLGlCQUFTLENBQUMsV0FBVyxDQUFDO1lBQzNCLEtBQUssaUJBQVMsQ0FBQyxVQUFVO2dCQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDekM7Z0JBQ0ksTUFBTTtTQUNiO0lBRUwsQ0FBQztJQTFCZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTJCbkM7SUFBRCxzQkFBQztDQTNCRCxBQTJCQyxDQTNCNEMsRUFBRSxDQUFDLFNBQVMsR0EyQnhEO2tCQTNCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbGxpZGVycyB9IGZyb20gJy4vVXRpbHMnO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNuYWtlQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lQ29udHJvbGxlclNjcmlwdDtcclxuICAgIHByaXZhdGUgZ2FtZU1hbmFnZXJTY3JpcHQ7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIC8vIFRoZXJlJ3MgZ290IHRvIGJlIGEgYmV0dGVyIHdheVxyXG4gICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXJTY3JpcHQgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpLlxyXG4gICAgICAgICAgICBnZXRDaGlsZEJ5TmFtZShcIkdhbWVDb250cm9sbGVyXCIpLmdldENvbXBvbmVudChcIkdhbWVDb250cm9sbGVyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBzd2l0Y2ggKG90aGVyLm5vZGUubmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbGxpZGVycy5BUFBMRTpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXJTY3JpcHQuYXBwbGVDb2xsaXNpb24oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIENvbGxpZGVycy5TTkFLRTpcclxuICAgICAgICAgICAgY2FzZSBDb2xsaWRlcnMuQk9UVE9NX0JPUkRFUjpcclxuICAgICAgICAgICAgY2FzZSBDb2xsaWRlcnMuUklHSFRfQk9SREVSOlxyXG4gICAgICAgICAgICBjYXNlIENvbGxpZGVycy5MRUZUX0JPUkRFUjpcclxuICAgICAgICAgICAgY2FzZSBDb2xsaWRlcnMuVE9QX0JPUkRFUjpcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZUNvbnRyb2xsZXJTY3JpcHQuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ1YscUNBQUUsQ0FBQTtJQUNGLHlDQUFJLENBQUE7SUFDSiwyQ0FBSyxDQUFBO0lBQ0wseUNBQUksQ0FBQTtBQUNSLENBQUMsRUFMSSxTQUFTLEtBQVQsU0FBUyxRQUtiO0FBR0Q7SUFBNEMsa0NBQVk7SUFBeEQ7UUFBQSxxRUErSkM7UUE3SndCLGVBQVMsR0FBYyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN2QyxpQkFBVyxHQUFjLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFDLGVBQVMsR0FBYSxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxjQUFRLEdBQVksSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFN0MsV0FBSyxHQUFtQixFQUFFLENBQUM7UUFDM0Isd0JBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBQy9CLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsZUFBUyxHQUFjLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDcEMsV0FBSyxHQUFZLElBQUksQ0FBQzs7SUErSWxDLENBQUM7SUE3SUcsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FB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QUMsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUE1Sm9CO1FBQXBCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUF3QztJQUN2QztRQUFwQixRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFBMEM7SUFDMUM7UUFBbkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQXNDO0lBQ3RDO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUFtQztJQUxwQyxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBK0psQztJQUFELHFCQUFDO0NBL0pELEFBK0pDLENBL0oyQyxFQUFFLENBQUMsU0FBUyxHQStKdkQ7a0JBL0pvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5lbnVtIERpcmVjdGlvbiB7XHJcbiAgICBVUCxcclxuICAgIERPV04sXHJcbiAgICBSSUdIVCxcclxuICAgIExFRlRcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUNvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpIHNuYWtlQm9keTogY2MuUHJlZmFiID0gbmV3IGNjLlByZWZhYigpO1xyXG4gICAgQHByb3BlcnR5KGNjLlByZWZhYikgYXBwbGVQcmVmYWI6IGNjLlByZWZhYiA9IG5ldyBjYy5QcmVmYWIoKTtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbCkgc2NvcmVUZXh0OiBjYy5MYWJlbCA9IG5ldyBjYy5MYWJlbCgpO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGdhbWVUZXh0OiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKTtcclxuXHJcbiAgICBwcml2YXRlIHNuYWtlOiBBcnJheTxjYy5Ob2RlPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzbmFrZUluaXRpYWxMZW5ndGg6IG51bWJlciA9IDU7XHJcbiAgICBwcml2YXRlIGlzUGxheWluZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzcGVlZDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgc2NvcmU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHVwZGF0ZURlbGF5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBhZGROZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBEaXJlY3Rpb24uVVA7XHJcbiAgICBwcml2YXRlIGFwcGxlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlcktleUV2ZW50KClcclxuICAgICAgICB0aGlzLnNwYXduRm9vZCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNuYWtlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFNuYWtlKCkge1xyXG4gICAgICAgIHRoaXMuc25ha2UgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc25ha2VJbml0aWFsTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnRTbmFrZUJvZHkoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvZGUgY3JpbWUhIE92ZXJsb2FkaW5nIHNlZW1lZCB0b28gbXVjaCB3b3JrLCB0cyBkb2Vzbid0IG1ha2UgaXQgZWFzeSA6UFxyXG4gICAgaW5jcmVtZW50U25ha2VCb2R5V2l0aFBvc2l0aW9uKHBvc2l0aW9uOiBjYy5WZWMyKSB7XHJcbiAgICAgICAgY29uc3Qgc25ha2VCb2R5Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc25ha2VCb2R5KTtcclxuICAgICAgICBzbmFrZUJvZHlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzbmFrZUJvZHlOb2RlLnNldFBvc2l0aW9uKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMuc25ha2UudW5zaGlmdChzbmFrZUJvZHlOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnRTbmFrZUJvZHkoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgY29uc3Qgc25ha2VCb2R5Tm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc25ha2VCb2R5KTtcclxuICAgICAgICBzbmFrZUJvZHlOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICBzbmFrZUJvZHlOb2RlLnNldFBvc2l0aW9uKGkgKiA3MCwgMCk7XHJcbiAgICAgICAgdGhpcy5zbmFrZS5wdXNoKHNuYWtlQm9keU5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyS2V5RXZlbnQoKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnc6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT0gRGlyZWN0aW9uLkRPV04pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uVVA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiAhPSBEaXJlY3Rpb24uTEVGVClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5SSUdIVDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9IERpcmVjdGlvbi5SSUdIVClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5MRUZUO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnM6XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gIT0gRGlyZWN0aW9uLlVQKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gRGlyZWN0aW9uLkRPV047XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuc3BhY2U6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRSYW5kb21Qb3NpdGlvbihtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhd25Gb29kKCkge1xyXG4gICAgICAgIGxldCByYW5kb21YID0gdGhpcy5nZXRSYW5kb21Qb3NpdGlvbigtNDUwLCA0NTApO1xyXG4gICAgICAgIGxldCByYW5kb21ZID0gdGhpcy5nZXRSYW5kb21Qb3NpdGlvbigtODAwLCA4MDApO1xyXG4gICAgICAgIHRoaXMuYXBwbGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmFwcGxlUHJlZmFiKTtcclxuICAgICAgICB0aGlzLmFwcGxlLnNldFBvc2l0aW9uKHJhbmRvbVgsIHJhbmRvbVkpO1xyXG4gICAgICAgIHRoaXMuYXBwbGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBsZUNvbGxpc2lvbigpIHtcclxuICAgICAgICB0aGlzLmFwcGxlLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnNwYXduRm9vZCgpO1xyXG4gICAgICAgIHRoaXMuc2NvcmUrKztcclxuICAgICAgICB0aGlzLnNjb3JlVGV4dC5zdHJpbmcgPSBTdHJpbmcodGhpcy5zY29yZSk7XHJcbiAgICAgICAgdGhpcy5hZGROZXcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNjb3JlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gTWF0aC5taW4oMTUsIE1hdGguZmxvb3IodGhpcy5zY29yZSAvIDEwKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVsYXkrKztcclxuICAgICAgICAgICAgaWYgKCh0aGlzLnVwZGF0ZURlbGF5ICUgKDE1IC0gdGhpcy5zcGVlZCkpID09PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0Q2VsbCA9IHRoaXMuc25ha2VbdGhpcy5zbmFrZS5sZW5ndGggLSAxXSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Q2VsbCA9IHRoaXMuc25ha2Uuc2hpZnQoKSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRMYXN0Q2VsbHggPSBsYXN0Q2VsbC54LFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZExhc3RDZWxseSA9IGxhc3RDZWxsLnk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IERpcmVjdGlvbi5SSUdIVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RDZWxsLnggPSBmaXJzdENlbGwueCArIDcwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RDZWxsLnkgPSBmaXJzdENlbGwueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTEVGVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RDZWxsLnggPSBmaXJzdENlbGwueCAtIDcwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RDZWxsLnkgPSBmaXJzdENlbGwueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVVApIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Q2VsbC54ID0gZmlyc3RDZWxsLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdENlbGwueSA9IGZpcnN0Q2VsbC55ICsgNzA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkRPV04pIHtcclxuICAgICAgICAgICAgICAgICAgICBsYXN0Q2VsbC54ID0gZmlyc3RDZWxsLng7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdENlbGwueSA9IGZpcnN0Q2VsbC55IC0gNzA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFrZS5wdXNoKGxhc3RDZWxsKTtcclxuICAgICAgICAgICAgICAgIGZpcnN0Q2VsbCA9IGxhc3RDZWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZE5ldykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5jcmVtZW50U25ha2VCb2R5V2l0aFBvc2l0aW9uKG5ldyBjYy5WZWMyKG9sZExhc3RDZWxseCwgb2xkTGFzdENlbGx5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGROZXcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2FtZU92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lVGV4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYXBwbGUuZGVzdHJveSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbmFrZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNuYWtlW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICB0aGlzLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbml0U25ha2UoKTtcclxuICAgICAgICB0aGlzLnNwYXduRm9vZCgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRleHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zY29yZVRleHQuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBEaXJlY3Rpb24uVVA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZWxheSA9IDA7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Scripts/GameInit.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2501XO/SJHhqB8+GQrM43d', 'GameInit');
// Scripts/GameInit.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var GameManager = /** @class */ (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameManager.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        cc.director.getCollisionManager().enabled = true;
    };
    GameManager.prototype.play = function (event, sceneName) {
        cc.director.loadScene(sceneName);
    };
    GameManager = __decorate([
        ccclass
    ], GameManager);
    return GameManager;
}(cc.Component));
exports.default = GameManager;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0c1xcR2FtZUluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBV0EsQ0FBQztJQVJHLDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxFQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyRCxDQUFDO0lBRUQsMEJBQUksR0FBSixVQUFLLEtBQUssRUFBRSxTQUFTO1FBQ2pCLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFWZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQVcvQjtJQUFELGtCQUFDO0NBWEQsQUFXQyxDQVh3QyxFQUFFLENBQUMsU0FBUyxHQVdwRDtrQkFYb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5KGV2ZW50LCBzY2VuZU5hbWUpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmVOYW1lKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
