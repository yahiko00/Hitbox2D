import G2D from "geometry2d/dist/geometry2d";
export default Hitbox2D;
declare namespace Hitbox2D {
    type Hitbox = G2D.Circle | G2D.AABox;
    function isCollisionCircleToCircle(hitbox1: G2D.Circle, move1: G2D.Vector, hitbox2: G2D.Circle, move2: G2D.Vector): boolean;
    function isCollisionCircleToAARect(hitbox1: G2D.Circle, move1: G2D.Vector, hitbox2: G2D.AARect, move2: G2D.Vector): boolean;
    function isCollisionCircleToAABox(hitbox1: G2D.Circle, move1: G2D.Vector, hitbox2: G2D.AABox, move2: G2D.Vector): boolean;
    function isCollisionAABoxToAABox(hitbox1: G2D.AABox, move1: G2D.Vector, hitbox2: G2D.AABox, move2: G2D.Vector): boolean;
    function isCollisionAABoxToAARect(hitbox1: G2D.AABox, move1: G2D.Vector, hitbox2: G2D.AARect, move2: G2D.Vector): boolean;
    function isCollisionAARectToAARect(hitbox1: G2D.AARect, move1: G2D.Vector, hitbox2: G2D.AARect, move2: G2D.Vector): boolean;
    function isCollision(hitbox1: Hitbox, move1: G2D.Vector, hitbox2: Hitbox, move2: G2D.Vector): boolean;
    function pointInHitbox(point: G2D.Point, hitbox: Hitbox): boolean;
}
