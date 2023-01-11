controller.up.onEvent(ControllerButtonEvent.Pressed, function on_up_pressed() {
    if (encounter != 1) {
        P1.y += -20
        P1.vy = 10
    }
    
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    let indice: number;
    
    let QuestionIndices : number[] = []
    let WrongIndices : number[] = []
    //  definitions
    //  , response
    encounter = 1
    WordIndice = randint(0, WordList.length)
    InsertLocation = randint(0, 3)
    response = 5
    //  make list of wrong answers
    while (WrongIndices.length < 3) {
        indice = randint(0, WordList.length)
        if (WrongIndices.indexOf(indice) < 0 && indice != WordIndice) {
            WrongIndices.push(indice)
            QuestionIndices.push(indice)
        }
        
    }
    //  add right answer at random location
    if (InsertLocation != 3) {
        QuestionIndices.insertAt(0, WordIndice)
    } else {
        QuestionIndices.push(WordIndice)
        game.showLongText(QuestionIndices.length, DialogLayout.Bottom)
    }
    
    question = "Definition of " + WordList[indice][0] + "is: [1] " + WordList[QuestionIndices[0]][1] + ", [2] " + WordList[QuestionIndices[1]][1] + ", [3] " + WordList[QuestionIndices[2]][1] + ", [4] " + WordList[QuestionIndices[3]][1]
    // question = "num 1-4"
    while (encounter == 1) {
        game.showLongText(question, DialogLayout.Bottom)
        response = game.askForNumber("answer (5 to show question again):")
        if (response == 5) {
            continue
        } else {
            game.showLongText("you answered!", DialogLayout.Bottom)
            encounter = 0
            P1.x += 40
        }
        
    }
})
let question = ""
let response = 0
let InsertLocation = 0
let WordIndice = 0
let P1 : Sprite = null
let encounter = 0
let WordList : string[][] = []
let question22 = ""
let response23 = 0
let InsertLocation22 = 0
let WordIndice22 = 0
let response22 = 0
let WordIndice2 = 0
let InsertLocation2 = 0
let response2 = 0
let question2 = ""
scene.setBackgroundColor(6)
WordList = [["abate", "to stop"], ["abyss", "pit"], ["exiate", "idk tbh"], ["import", "bring in"]]
tiles.setCurrentTilemap(tilemap`
    level1
`)
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
let coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . . 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Food)
coin.setPosition(30, 105)
P1.setPosition(10, 100)
P1.setVelocity(20, 60)
scene.cameraFollowSprite(P1)
forever(function on_forever() {
    if (P1.isHittingTile(CollisionDirection.Right)) {
        P1.vy = 0
    } else {
        P1.vy = 10
    }
    
    if (P1.isHittingTile(CollisionDirection.Bottom)) {
        P1.vy = 0
    } else {
        P1.vy = 10
    }
    
})
