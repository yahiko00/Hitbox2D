// hitbox2d.ts
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "geometry2d/dist/geometry2d"], factory);
    }
})(function (require, exports) {
    "use strict";
    var geometry2d_1 = require("geometry2d/dist/geometry2d");
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Hitbox2D;
    var Hitbox2D;
    (function (Hitbox2D) {
        function isCollisionCircleToCircle(hitbox1, move1, hitbox2, move2) {
            return geometry2d_1.default.circleToCircleOverlap(geometry2d_1.default.translateCircle(hitbox1, move1), geometry2d_1.default.translateCircle(hitbox2, move2));
        }
        Hitbox2D.isCollisionCircleToCircle = isCollisionCircleToCircle; // isCollisionCircleToCircle
        function isCollisionCircleToAARect(hitbox1, move1, hitbox2, move2) {
            return geometry2d_1.default.circleToAARectOverlap(geometry2d_1.default.translateCircle(hitbox1, move1), geometry2d_1.default.translateAARect(hitbox2, move2));
        }
        Hitbox2D.isCollisionCircleToAARect = isCollisionCircleToAARect; // isCollisionCircleToRect
        function isCollisionCircleToAABox(hitbox1, move1, hitbox2, move2) {
            return geometry2d_1.default.circleToAABoxOverlap(geometry2d_1.default.translateCircle(hitbox1, move1), geometry2d_1.default.translateAABox(hitbox2, move2));
        }
        Hitbox2D.isCollisionCircleToAABox = isCollisionCircleToAABox; // isCollisionCircleToAABox
        function isCollisionAABoxToAABox(hitbox1, move1, hitbox2, move2) {
            return geometry2d_1.default.aaBoxToBoxOverlap(geometry2d_1.default.translateAABox(hitbox1, move1), geometry2d_1.default.translateAABox(hitbox2, move2));
        }
        Hitbox2D.isCollisionAABoxToAABox = isCollisionAABoxToAABox; // isCollisionAABoxToAABox
        function isCollisionAABoxToAARect(hitbox1, move1, hitbox2, move2) {
            return geometry2d_1.default.aaBoxToBoxOverlap(geometry2d_1.default.translateAABox(hitbox1, move1), geometry2d_1.default.translateAABox(geometry2d_1.default.aaRectToBox(hitbox2), move2));
        }
        Hitbox2D.isCollisionAABoxToAARect = isCollisionAABoxToAARect; // isCollisionAABoxToAABox
        function isCollisionAARectToAARect(hitbox1, move1, hitbox2, move2) {
            return geometry2d_1.default.aaRectToRectOverlap(geometry2d_1.default.translateAARect(hitbox1, move1), geometry2d_1.default.translateAARect(hitbox2, move2));
        }
        Hitbox2D.isCollisionAARectToAARect = isCollisionAARectToAARect; // isCollisionRectToRect
        function isCollision(hitbox1, move1, hitbox2, move2) {
            if (geometry2d_1.default.isCircle(hitbox1)) {
                if (geometry2d_1.default.isCircle(hitbox2)) {
                    return isCollisionCircleToCircle(hitbox1, move1, hitbox2, move2);
                }
                else if (geometry2d_1.default.isAABox(hitbox2)) {
                    return isCollisionCircleToAABox(hitbox1, move1, hitbox2, move2);
                }
                else if (geometry2d_1.default.isAARect(hitbox2)) {
                    return isCollisionCircleToAARect(hitbox1, move1, hitbox2, move2);
                }
            }
            if (geometry2d_1.default.isAABox(hitbox1)) {
                if (geometry2d_1.default.isCircle(hitbox2)) {
                    return isCollisionCircleToAABox(hitbox2, move1, hitbox1, move2);
                }
                else if (geometry2d_1.default.isAABox(hitbox2)) {
                    return isCollisionAABoxToAABox(hitbox1, move1, hitbox2, move2);
                }
                else if (geometry2d_1.default.isAARect(hitbox2)) {
                    return isCollisionAABoxToAARect(hitbox1, move1, hitbox2, move2);
                }
            }
            else if (geometry2d_1.default.isAARect(hitbox1)) {
                if (geometry2d_1.default.isCircle(hitbox2)) {
                    return isCollisionCircleToAARect(hitbox2, move2, hitbox1, move1);
                }
                else if (geometry2d_1.default.isAABox(hitbox2)) {
                    return isCollisionAABoxToAARect(hitbox2, move1, hitbox1, move2);
                }
                else if (geometry2d_1.default.isAARect(hitbox2)) {
                    return isCollisionAARectToAARect(hitbox1, move1, hitbox2, move2);
                }
            }
            return false;
        }
        Hitbox2D.isCollision = isCollision; // isCollision
        function pointInHitbox(point, hitbox) {
            if (geometry2d_1.default.isCircle(hitbox)) {
                return geometry2d_1.default.pointInCircle(point, hitbox);
            }
            if (geometry2d_1.default.isAABox(hitbox)) {
                return geometry2d_1.default.pointInAABox(point, hitbox);
            }
            else if (geometry2d_1.default.isAARect(hitbox)) {
                return geometry2d_1.default.pointInAARect(point, hitbox);
            }
            return false;
        }
        Hitbox2D.pointInHitbox = pointInHitbox; // pointInHitbox
    })(Hitbox2D || (Hitbox2D = {})); // Hitbox2D
});
//# sourceMappingURL=hitbox2d.js.map