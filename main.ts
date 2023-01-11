controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (encounter != 0) {
        P1.setPosition(P1.x, P1.y + 1)
    }
})
let encounter = 0
let P1: Sprite = null
scene.setBackgroundColor(6)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(P1)
encounter = 0
P1 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
P1.setVelocity(50, 100)
console.logValue(P1, 0)
P1.setPosition(0, 0)
