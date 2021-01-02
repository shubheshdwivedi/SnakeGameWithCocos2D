"use strict";
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