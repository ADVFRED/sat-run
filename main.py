@namespace
class SpriteKind:
    objective = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global encounter, WordIndice, DefinitionIndice, answer, response, question, score
    encounter = 1
    WordIndice = randint(0, len(WordList))
    DefinitionIndice = randint(0, len(WordList))
    # checks if randomly selected word and definition match
    if WordList[WordIndice][0] == WordList[DefinitionIndice][0]:
        answer = True
    else:
        answer = False
    response = 2
    question = "Is the definition of " + WordList[WordIndice][0] + " " + WordList[DefinitionIndice][1] + "? \nTrue=1, False =0"
    while encounter == 1:
        game.show_long_text(question, DialogLayout.FULL)
        response = game.ask_for_number("answer (2 to show question again)")
        if response == 2:
            continue
        else:
            if answer == False and response == 0 or answer == True and response == 1:
                score = score + 1
                game.show_long_text("" + "Score!\n Score is: " + ("" + str(score)),
                    DialogLayout.BOTTOM)
            else:
                game.show_long_text("Missed one. Score is: " + ("" + str(score)),
                    DialogLayout.BOTTOM)
            encounter = 0
            P1.x += 40
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

score = 0
question = ""
response = 0
answer = False
DefinitionIndice = 0
WordIndice = 0
P1: Sprite = None
encounter = 0
WordList: List[List[str]] = []
InsertLocation = 0
QuestionIndices: List[number] = []
scene.set_background_color(6)
WordList = [["abate", "to stop"],
    ["abyss", "a pit"],
    ["exiate", "to atone"],
    ["import", "to bring in"],
    ["incongruity", "not in harmony with ones surroundings"],
    ["indefatigable", "not tiring"],
    ["inexplicable", "unexplainable or Inconceivable!"],
    ["infamous", "a well known reputation of evil"],
    ["piety", "being reverent, religous"],
    ["scintillating", "sparkly, shiny"]]
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
coin1 = sprites.create(img("""
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
    SpriteKind.objective)
coin1.set_position(32, 105)
P1.set_position(10, 100)
scene.camera_follow_sprite(P1)

def on_forever():
    if controller.up.is_pressed() and controller.right.is_pressed():
        if encounter != 1 and P1.is_hitting_tile(CollisionDirection.BOTTOM):
            P1.y += -20
            P1.x += 20
            P1.vy = 10
    elif controller.up.is_pressed():
        if encounter != 1 and P1.is_hitting_tile(CollisionDirection.BOTTOM):
            P1.y += -20
            P1.vy = 20
    elif controller.right.is_pressed():
        if encounter != 1 and P1.is_hitting_tile(CollisionDirection.BOTTOM):
            P1.vx = 20
    else:
        pass
forever(on_forever)

def on_forever2():
    if P1.is_hitting_tile(CollisionDirection.RIGHT):
        P1.vy = 0
    else:
        P1.vy = 20
    if P1.is_hitting_tile(CollisionDirection.BOTTOM):
        P1.vy = 0
    else:
        P1.vy = 20
forever(on_forever2)
