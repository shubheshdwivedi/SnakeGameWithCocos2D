
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