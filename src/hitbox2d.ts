// hitbox2d.ts

import G2D from "geometry2d/dist/geometry2d";

export default Hitbox2D;

namespace Hitbox2D {
    export type Hitbox = G2D.Circle | G2D.AABox;

    export function isCollisionCircleToCircle(hitbox1: G2D.Circle, move1: G2D.Vector, hitbox2: G2D.Circle, move2: G2D.Vector): boolean {
        return G2D.circleToCircleOverlap(G2D.translateCircle(hitbox1, move1), G2D.translateCircle(hitbox2, move2));
    } // isCollisionCircleToCircle

    export function isCollisionCircleToAARect(hitbox1: G2D.Circle, move1: G2D.Vector, hitbox2: G2D.AARect, move2: G2D.Vector): boolean {
        return G2D.circleToAARectOverlap(G2D.translateCircle(hitbox1, move1), G2D.translateAARect(hitbox2, move2));
    } // isCollisionCircleToRect

    export function isCollisionCircleToAABox(hitbox1: G2D.Circle, move1: G2D.Vector, hitbox2: G2D.AABox, move2: G2D.Vector): boolean {
        return G2D.circleToAABoxOverlap(G2D.translateCircle(hitbox1, move1), G2D.translateAABox(hitbox2, move2));
    } // isCollisionCircleToAABox

    export function isCollisionAABoxToAABox(hitbox1: G2D.AABox, move1: G2D.Vector, hitbox2: G2D.AABox, move2: G2D.Vector): boolean {
        return G2D.aaBoxToBoxOverlap(G2D.translateAABox(hitbox1, move1), G2D.translateAABox(hitbox2, move2));
    } // isCollisionAABoxToAABox

    export function isCollisionAABoxToAARect(hitbox1: G2D.AABox, move1: G2D.Vector, hitbox2: G2D.AARect, move2: G2D.Vector): boolean {
        return G2D.aaBoxToBoxOverlap(G2D.translateAABox(hitbox1, move1), G2D.translateAABox(G2D.aaRectToBox(hitbox2), move2));
    } // isCollisionAABoxToAABox

    export function isCollisionAARectToAARect(hitbox1: G2D.AARect, move1: G2D.Vector, hitbox2: G2D.AARect, move2: G2D.Vector): boolean {
        return G2D.aaRectToRectOverlap(G2D.translateAARect(hitbox1, move1), G2D.translateAARect(hitbox2, move2));
    } // isCollisionRectToRect

    export function isCollision(hitbox1: Hitbox, move1: G2D.Vector, hitbox2: Hitbox, move2: G2D.Vector): boolean {
        if (G2D.isCircle(hitbox1)) {
            if (G2D.isCircle(hitbox2)) {
                return isCollisionCircleToCircle(hitbox1, move1, hitbox2, move2);
            }
            else if (G2D.isAABox(hitbox2)) {
                return isCollisionCircleToAABox(hitbox1, move1, hitbox2, move2);
            }
            else if (G2D.isAARect(hitbox2)) {
                return isCollisionCircleToAARect(hitbox1, move1, hitbox2, move2);
            }
        }
        if (G2D.isAABox(hitbox1)) {
            if (G2D.isCircle(hitbox2)) {
                return isCollisionCircleToAABox(hitbox2 as G2D.Circle, move1, hitbox1 as G2D.AABox, move2);
            }
            else if (G2D.isAABox(hitbox2)) {
                return isCollisionAABoxToAABox(hitbox1 as G2D.AABox, move1, hitbox2 as G2D.AABox, move2);
            }
            else if (G2D.isAARect(hitbox2)) {
                return isCollisionAABoxToAARect(hitbox1 as G2D.AABox, move1, hitbox2 as G2D.AARect, move2);
            }
        }
        else if (G2D.isAARect(hitbox1)) {
            if (G2D.isCircle(hitbox2)) {
                return isCollisionCircleToAARect(hitbox2 as G2D.Circle, move2, hitbox1 as G2D.AARect, move1);
            }
            else if (G2D.isAABox(hitbox2)) {
                return isCollisionAABoxToAARect(hitbox2 as G2D.AABox, move1, hitbox1 as G2D.AARect, move2);
            }
            else if (G2D.isAARect(hitbox2)) {
                return isCollisionAARectToAARect(hitbox1 as G2D.AARect, move1, hitbox2 as G2D.AARect, move2);
            }
        }
        return false;
    } // isCollision

    export function pointInHitbox(point: G2D.Point, hitbox: Hitbox): boolean {
        if (G2D.isCircle(hitbox)) {
            return G2D.pointInCircle(point, hitbox as G2D.Circle);
        }
        if (G2D.isAABox(hitbox)) {
            return G2D.pointInAABox(point, hitbox as G2D.AABox);
        }
        else if (G2D.isAARect(hitbox)) {
            return G2D.pointInAARect(point, hitbox as G2D.AARect);
        }
        return false;
    } // pointInHitbox
} // Hitbox2D
