controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.spray, randint(0, 10))
})
let mySprite: Sprite = null
scene.setBackgroundColor(5)
game.splash("You found me")
mySprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 4 4 4 2 2 2 2 4 4 4 2 2 2 2 
    2 4 5 5 5 e 2 2 e 5 5 5 4 2 2 2 
    4 5 5 5 5 5 e e 5 5 5 5 5 4 2 2 
    4 5 5 4 4 5 5 5 5 4 4 5 5 4 2 2 
    e 5 4 4 5 5 5 5 5 5 4 4 5 e 2 2 
    2 e e 5 5 5 5 5 5 5 5 e e 2 2 2 
    2 2 e 5 f 5 5 5 5 f 5 e 2 2 2 2 
    2 2 f 5 5 5 4 4 5 5 5 f 2 f f 2 
    2 2 2 4 5 5 f f 5 5 6 f f 5 f 2 
    2 2 2 f 6 6 6 6 6 6 4 4 4 5 f 2 
    2 2 2 f 5 5 5 5 5 5 5 f f f 2 2 
    2 2 2 f 5 4 5 f f f 5 f 2 2 2 2 
    2 2 2 f f f f f 2 2 f f 2 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 90, 90)
controller.player2.moveSprite(mySprite)
