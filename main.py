def on_up_pressed():
    if encounter != 1:
        P1.y += -20
        P1.vy = 10
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    global encounter, WordIndice, InsertLocation, response, question
    QuestionIndices: List[number] = []
    WrongIndices: List[number] = []
    # definitions
    # , response
    encounter = 1
    WordIndice = randint(0, len(WordList))
    InsertLocation = randint(0, 3)
    response = 5
    # make list of wrong answers
    while len(WrongIndices) < 3:
        indice = randint(0, len(WordList))
        if WrongIndices.index(indice) < 0 and indice != WordIndice:
            WrongIndices.append(indice)
            QuestionIndices.append(indice)
    # add right answer at random location
    if InsertLocation != 3:
        QuestionIndices.insert_at(0, WordIndice)
    else:
        QuestionIndices.append(WordIndice)
        game.show_long_text(QuestionIndices.length, DialogLayout.BOTTOM)
    question = "Definition of " + WordList[indice][0] + "is: [1] " + WordList[QuestionIndices[0]][1] + ", [2] " + WordList[QuestionIndices[1]][1] + ", [3] " + WordList[QuestionIndices[2]][1] + ", [4] " + WordList[QuestionIndices[3]][1]
    #question = "num 1-4"
    while encounter == 1:
        game.show_long_text(question, DialogLayout.BOTTOM)
        response = game.ask_for_number("answer (5 to show question again):")
        if response == 5:
            continue
        else:
            game.show_long_text("you answered!", DialogLayout.BOTTOM)
            encounter = 0
            P1.x += 40
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

question = ""
response = 0
InsertLocation = 0
WordIndice = 0
P1: Sprite = None
encounter = 0
WordList: List[List[str]] = []
question22 = ""
response23 = 0
InsertLocation22 = 0
WordIndice22 = 0
response22 = 0
WordIndice2 = 0
InsertLocation2 = 0
response2 = 0
question2 = ""
scene.set_background_color(6)
WordList = [["abate", "to stop"],
    ["abyss", "pit"],
    ["exiate", "idk tbh"],
    ["import", "bring in"]]
tiles.set_current_tilemap(tilemap("""
    level1
"""))
encounter = 0
P1 = sprites.create(img("""
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
    """),
    SpriteKind.player)
coin = sprites.create(img("""
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
    """),
    SpriteKind.food)
coin.set_position(30, 105)
P1.set_position(10, 100)
P1.set_velocity(20, 60)
scene.camera_follow_sprite(P1)

def on_forever():
    if P1.is_hitting_tile(CollisionDirection.RIGHT):
        P1.vy = 0
    else:
        P1.vy = 10
    if P1.is_hitting_tile(CollisionDirection.BOTTOM):
        P1.vy = 0
    else:
        P1.vy = 10
forever(on_forever)
