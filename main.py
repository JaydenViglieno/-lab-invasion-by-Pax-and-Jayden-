def bob_card(selected_card: Sprite):
    selected_card.y += -2
    pause(200)
    selected_card.y += -2
    pause(200)
    selected_card.y += 2
    pause(200)
    selected_card.y += 2
    pause(200)
scene.set_background_image(assets.image("""
    Background
"""))
Card_1 = sprites.create(assets.image("""
    Card Back
"""), SpriteKind.player)
Card_1.set_position(78, 105)

def on_forever():
    bob_card(Card_1)
forever(on_forever)
