namespace SpriteKind {
    export const hoop = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.hoop, function (sprite, otherSprite) {
    game.over(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`ballon`, mySprite, 0, -100)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`terrain`)
mySprite = sprites.create(img`
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 d b b d 5 5 5 f . 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b 4 1 f d d f 1 4 b b f 
    . f b f d d d d d d f b f . 
    . f e f e 4 4 4 4 e f e f . 
    . e 4 f 6 9 9 9 9 6 f 4 e . 
    . 4 d c 9 9 9 9 9 9 c d 4 . 
    . 4 f b 3 b 3 b 3 b b f 4 . 
    . . f f 3 b 3 b 3 3 f f . . 
    . . . . f f b b f f . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(82, 111)
mySprite.setVelocity(50, 0)
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    . . . e . . . . . . . . e . . . 
    . . . e e . . . . . . e e . . . 
    . . . . e e . . . . e e . 1 . . 
    . 1 1 1 . e e e e e e . . 1 1 . 
    . . . . . 1 . . 1 . 1 1 . . 1 1 
    . . . . . 1 . . 1 . . 1 . . . . 
    . . . . 1 1 . . 1 . . . 1 . . . 
    . . . 1 1 . . . 1 . . . 1 1 . . 
    . . . 1 . . . . . . . . . 1 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.hoop)
mySprite2.setPosition(75, 8)
