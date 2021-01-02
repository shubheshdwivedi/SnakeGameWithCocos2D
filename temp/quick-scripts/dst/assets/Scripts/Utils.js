
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