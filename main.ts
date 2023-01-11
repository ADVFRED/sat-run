namespace SpriteKind {
    export const objective = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    encounter = 1
    WordIndice = randint(0, WordList.length)
    DefinitionIndice = randint(0, WordList.length)
    //  checks if randomly selected word and definition match
    if (WordList[WordIndice][0] == WordList[DefinitionIndice][0]) {
        answer = true
    } else {
        answer = false
    }
    
    response = 2
    question = "Is the definition of " + WordList[WordIndice][0] + " " + WordList[DefinitionIndice][1] + "? \nTrue=1, False =0"
    while (encounter == 1) {
        game.showLongText(question, DialogLayout.Full)
        response = game.askForNumber("answer (2 to show question again)")
        if (response == 2) {
            continue
        } else {
            if (answer == false && response == 0 || answer == true && response == 1) {
                score = score + 1
                game.showLongText("" + "Score!\n Score is: " + ("" + ("" + score)), DialogLayout.Bottom)
            } else {
                game.showLongText("Missed one. Score is: " + ("" + ("" + score)), DialogLayout.Bottom)
            }
            
            encounter = 0
            P1.x += 40
        }
        
    }
})
let score = 0
let question = ""
let response = 0
let answer = false
let DefinitionIndice = 0
let WordIndice = 0
let P1 : Sprite = null
let encounter = 0
let WordList : string[][] = []
let InsertLocation = 0
let QuestionIndices : number[] = []
scene.setBackgroundColor(6)
WordList = [["abate", "to stop"], ["abyss", "a pit"], ["exiate", "to atone"], ["import", "to bring in"], ["incongruity", "not in harmony with ones surroundings"], ["indefatigable", "not tiring"], ["inexplicable", "unexplainable or Inconceivable!"], ["infamous", "a well known reputation of evil"], ["piety", "being reverent, religous"], ["scintillating", "sparkly, shiny"]]
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
let coin1 = sprites.create(img`
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
    `, SpriteKind.objective)
coin1.setPosition(32, 105)
P1.setPosition(10, 100)
scene.cameraFollowSprite(P1)
forever(function on_forever() {
    if (controller.up.isPressed() && controller.right.isPressed()) {
        if (encounter != 1 && P1.isHittingTile(CollisionDirection.Bottom)) {
            P1.y += -20
            P1.x += 20
            P1.vy = 10
        }
        
    } else if (controller.up.isPressed()) {
        if (encounter != 1 && P1.isHittingTile(CollisionDirection.Bottom)) {
            P1.y += -20
            P1.vy = 20
        }
        
    } else if (controller.right.isPressed()) {
        if (encounter != 1 && P1.isHittingTile(CollisionDirection.Bottom)) {
            P1.vx = 20
        }
        
    } else {
        
    }
    
})
forever(function on_forever2() {
    if (P1.isHittingTile(CollisionDirection.Right)) {
        P1.vy = 0
    } else {
        P1.vy = 20
    }
    
    if (P1.isHittingTile(CollisionDirection.Bottom)) {
        P1.vy = 0
    } else {
        P1.vy = 20
    }
    
})
