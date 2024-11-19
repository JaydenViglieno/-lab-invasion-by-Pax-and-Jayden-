
// Cutscene at start of the game.
function gameStart() {
    scene.setBackgroundImage(assets.image`titleScreen`)
    music.play(music.createSong(assets.song`titleTheme`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("Welcome to Lab Invasion!", DialogLayout.Bottom)
    game.showLongText("Press A to start", DialogLayout.Bottom)
    music.stopAllSounds()
    backgroundFade = sprites.create(assets.image`backgroundFadeSprite`, SpriteKind.Player)
    animation.runImageAnimation(
        backgroundFade,
        assets.animation`backgroundFadeTo`,
        150,
        false
    )
    pause(2000)
    animation.runImageAnimation(
        backgroundFade,
        assets.animation`backgroundFadeFrom`,
        150,
        false
    )
    pause(600)
    music.play(music.createSong(assets.song`suspense`), music.PlaybackMode.LoopingInBackground)
    sprites.destroy(backgroundFade)
    scene.setBackgroundImage(assets.image`cutsceneLabBackground`)
    cutscenePlayer = sprites.create(assets.image`playerSprite`, SpriteKind.Player)
    cutscenePlayer.setScale(2.4, ScaleAnchor.Middle)
    cutscenePlayer.y = 90
    cutsceneTable = sprites.create(assets.image`cutsceneTable`, SpriteKind.Player)
    pause(2000)
    game.showLongText("One day,", DialogLayout.Top)
    game.showLongText("you, an acclaimed scientist, ", DialogLayout.Top)
    game.showLongText("were doing some ", DialogLayout.Top)
    game.showLongText("late night research alone", DialogLayout.Top)
    sprites.destroy(cutscenePlayer)
    sprites.destroy(cutsceneTable)
    scene.setBackgroundImage(assets.image`backgroundFadeSprite`)
    game.showLongText("When suddenly...", DialogLayout.Full)
    music.stopAllSounds()
    cutsceneExplosion = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    cutsceneExplosion.setScale(5, ScaleAnchor.Middle)
    animation.runImageAnimation(
        cutsceneExplosion,
        assets.animation`explosion`,
        200,
        false
    )
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(1000)
    sprites.destroy(cutsceneExplosion)
    backgroundFade = sprites.create(assets.image`backgroundFadeSprite`, SpriteKind.Player)
    animation.runImageAnimation(
        backgroundFade,
        assets.animation`backgroundFadeTo`,
        150,
        false
    )
    pause(750)
    animation.runImageAnimation(
        backgroundFade,
        assets.animation`backgroundFadeFrom`,
        150,
        false
    )
    pause(600)
    sprites.destroy(backgroundFade)
    scene.setBackgroundImage(assets.image`cutsceneBrokenBackground`)
    music.play(music.createSong(assets.song`suspense`), music.PlaybackMode.LoopingInBackground)
    cutsceneEnemy1 = sprites.create(assets.image`enemy1`, SpriteKind.Player)
    cutsceneEnemy1.setScale(1.5, ScaleAnchor.Middle)
    cutsceneEnemy1.setVelocity(-60, 20)
    pause(1000)
    cutsceneEnemy1.setVelocity(0, 0)
    cutsceneEnemy2 = sprites.create(assets.image`enemy3`, SpriteKind.Player)
    cutsceneEnemy2.setScale(1.5, ScaleAnchor.Middle)
    cutsceneEnemy2.setVelocity(60, 20)
    pause(1000)
    cutsceneEnemy2.setVelocity(0, 0)
    game.showLongText("Aliens attacked!", DialogLayout.Top)
    game.showLongText("Now it's your job to use your knowledge of chemical compounds to defend your lab and defeat the aliens once and for all!", DialogLayout.Full)
    game.showLongText("Use the left and right arrow keys to select a card. Use 'A' to confirm and disconfirm which elements will be in your compound.", DialogLayout.Full)
    game.showLongText("When your compound is ready, press 'B' to mix it together and unleash an attack on the aliens!", DialogLayout.Full)
    cutsceneEnemy1.setPosition(35, 90)
    cutsceneEnemy1.setScale(5, ScaleAnchor.Middle)
    cutsceneEnemy2.setPosition(120, 90)
    cutsceneEnemy2.setScale(5, ScaleAnchor.Middle)
    game.showLongText("Good luck!", DialogLayout.Top)
    sprites.destroy(cutsceneEnemy1)
    sprites.destroy(cutsceneEnemy2)
    music.stopAllSounds()
    scene.setBackgroundImage(assets.image`backgroundFadeSprite`)
    pause(1000)
}

let currentElement = ""
let image2: Image = null
let randomElement = ""
let cutsceneEnemy2: Sprite = null
let cutsceneExplosion: Sprite = null
let cutsceneTable: Sprite = null
let damage = 0
let confirmedCard = false
let skullAnimation: Sprite = null
let swipeAnimation: Sprite = null
let initialEnemyCreation = false
let isEnemyTurn = false
let runCombatLoop = true
let isBossfight = false
let backgroundFade: Sprite = null
let cutsceneEnemy1: Sprite = null
let cutscenePlayer: Sprite = null
let isPlayerTurn = false
let star: Sprite = null
let wholedeck: Sprite = null
let card6: Sprite = null
let card5: Sprite = null
let card4: Sprite = null
let card3: Sprite = null
let card2: Sprite = null
let cutsceneExplosion2: Sprite = null
let selectedElement = ""
let joinCard = false
let card1: Sprite = null
let fistAnimation: Sprite = null
let enemyLife = 1
let attackAnimation: Sprite = null
let elementCounter = 0
let playerSprite: Sprite = null
let enemySprite: Sprite = null
let laserAnimation: Sprite = null
let card6Confirmed = false
let card5Confirmed = false
let card4Confirmed = false
let card3Confirmed = false
let card2Confirmed = false
let card1Confirmed = false
let selectedCard = 0
let selectionArrow: Sprite = null
let actionable = false
let successfulAttack = false
let indexOfCompound = 0
let difficulty = 1
let deck: string[] = []
let attacks: string[] = []
let card6Element = ""
let card5Element = ""
let card4Element = ""
let card3Element = ""
let card2Element = ""
let card1Element = ""
let list: string[] = []
let enemyDeaths = 0
let selectedCards = ""
// attacks that allow elements to be selected in amy order.
// still does not allow fake compounds.
attacks = [
    "HHO",
    "HOH",
    "OHH",

    "HOO",
    "OHO",
    "OOH",

    "CHHHH",
    "HCHHH",
    "HHCHH",
    "HHHCH",
    "HHHHC",

    "COO",
    "OCO",
    "OOC",

    "HCOOH",
    "HCOHO",
    "HCHOO",
    "HOCOH",
    "HOCHO",
    "HOOCH",
    "HOOHC",
    "HOHOC",
    "HOHCO",
    "HHOOC",
    "HHOCO",
    "HHCOO",
    "CHOOH",
    "CHOHO",
    "CHHOO",
    "COHOH",
    "COHHO",
    "COOHH",
    "OCHOH",
    "OCHHO",
    "OCOHH",
    "OHCOH",
    "OHCHO",
    "OHOCH",
    "OHOHC",
    "OHHOC",
    "OHHCO",
    "OOHCH",
    "OOHHC",
    "OOCHH",

    "HHCOOO",
    "HHOCOO",
    "HHOOCO",
    "HHOOOC",
    "HCHOOO",
    "HCOHOO",
    "HCOOHO",
    "HCOOOH",
    "HOCHOO",
    "HOCOHO",
    "HOCOOH",
    "HOHCOO",
    "HOHOCO",
    "HOHOOC",
    "HOOHCO",
    "HOOHOC",
    "HOOCHO",
    "HOOCOH",
    "HOOOCH",
    "HOOOHC",
    "CHHOOO",
    "CHOHOO",
    "CHOOHO",
    "CHOOOH",
    "COHHOO",
    "COHOHO",
    "COHOOH",
    "COOHHO",
    "COOHOH",
    "COOOHH",
    "OHCHOO",
    "OHCOHO",
    "OHCOOH",
    "OHHCOO",
    "OHHOCO",
    "OHHOOC",
    "OHOHCO",
    "OHOHOC",
    "OHOCHO",
    "OHOCOH",
    "OHOOCH",
    "OHOOHC",
    "OCHHOO",
    "OCHOHO",
    "OCHOOH",
    "OCOHHO",
    "OCOHOH",
    "OCOOHH",

    "CHHO",
    "CHOH",
    "COHH",
    "HCHO",
    "HCOH",
    "HHCO",
    "HHOC",
    "HOHC",
    "HOCH",
    "OHHC",
    "OHCH",
    "OCHH",

    "CO",
    "OC",

    "CHHHOH",
    "CHHHHO",
    "CHHOHH",
    "CHOHHH",
    "COHHHH",
    "HCHHOH",
    "HCHHHO",
    "HCHOHH",
    "HCOHHH",
    "HHCHOH",
    "HHCHHO",
    "HHCOHH",
    "HHHCOH",
    "HHHCHO",
    "HHHOCH",
    "HHHOHC",
    "HHHHOC",
    "HHHHCO",
    "HHOHCH",
    "HHOHHC",
    "HHOCHH",
    "HOHHCH",
    "HOHHHC",
    "HOHCHH",
    "HOCHHH",
    "OHHHCH",
    "OHHHHC",
    "OHHCHH",
    "OHCHHH",
    "OCHHHH",

    "CCHHOO",
    "CCHOHO",
    "CCHOOH",
    "CCOHHO",
    "CCOHOH",
    "CCOOHH",
    "CHCHOO",
    "CHCOHO",
    "CHCOOH",
    "CHHCOO",
    "CHHOCO",
    "CHHOOC",
    "CHOHCO",
    "CHOHOC",
    "CHOCHO",
    "CHOCOH",
    "CHOOCH",
    "CHOOHC",
    "COHHCO",
    "COHHOC",
    "COHCHO",
    "COHCOH",
    "COHOCH",
    "COHOHC",
    "COCHHO",
    "COCHOH",
    "COCOHH",
    "COOHCH",
    "COOHHC",
    "COOCHH",
    "HCCHOO",
    "HCCOHO",
    "HCCOOH",
    "HCHCOO",
    "HCHOCO",
    "HCHOOC",
    "HCOHCO",
    "HCOHOC",
    "HCOCHO",
    "HCOCOH",
    "HCOOCH",
    "HCOOHC",
    "HHCCOO",
    "HHCOCO",
    "HHCOOC",
    "HHOCCO",
    "HHOCOC",
    "HHOOCC",
    "HOCHCO",
    "HOCHOC",
    "HOCCHO",
    "HOCCOH",
    "HOCOCH",
    "HOCOHC",
    "HOHCCO",
    "HOHCOC",
    "HOHOCC",
    "HOOHCC",
    "HOOCHC",
    "HOOCCH",
    "OCHHCO",
    "OCHHOC",
    "OCHCHO",
    "OCHCOH",
    "OCHOCH",
    "OCHOHC",
    "OCCHHO",
    "OCCHOH",
    "OCCOHH",
    "OCOHCH",
    "OCOHHC",
    "OCOCHH",
    "OHCHCO",
    "OHCHOC",
    "OHCCHO",
    "OHCCOH",
    "OHCOCH",
    "OHCOHC",
    "OHHCCO",
    "OHHCOC",
    "OHHOCC",
    "OHOHCC",
    "OHOCHC",
    "OHOCCH",

    "CCHHHH",
    "CHCHHH",
    "CHHCHH",
    "CHHHCH",
    "CHHHHC",
    "HCCHHH",
    "HCHCHH",
    "HCHHCH",
    "HCHHHC",
    "HHCCHH",
    "HHCHCH",
    "HHCHHC",
    "HHHCCH",
    "HHHCHC",
    "HHHHCC",

    "CCHH",
    "CHCH",
    "CHHC",
    "HCCH",
    "HCHC",
    "HHCC",

    "CCCOO",
    "CCOCO",
    "CCOOC",
    "COCCO",
    "COCOC",
    "COOCC",
    "OCCCO",
    "OCCOC",
    "OCOCC",
    "OOCCC",

    "CCO",
    "COC",
    "OCC",

    "OO",

    "HCOO",
    "HOCO",
    "HOOC",
    "CHOO",
    "COHO",
    "COOH",
    "OCHO",
    "OCOH",
    "OHCO",
    "OHOC",
    "OOHC",
    "OOCH",

    "C",
    
    "H",
    "O",

    "HHOO",
    "HOHO",
    "HOOH",
    "OHHO",
    "OHOH",
    "OOHH",
]
let enemy4Life = 220
let enemy3Life = 180
let enemy2Life = 140
let enemy1Life = 100
let playerLIfe = 100
let enemyBossLife = 275
let randomnumber = 0
let multiplier = 0

// list to randomize the amount of damage dealt.
let randonDamagePoint = ['0.8', '0.9', '1.0', '1.1', '1.2']
function randomDMG() {
    // a number is selected from randonDamagePoint and is set to multiplier.
    randomnumber = Math.floor(Math.random() * randonDamagePoint.length)
    multiplier = +randonDamagePoint[randomnumber]
}
let damageMultiplier = 0

// sets the block when text appears.
game.setDialogFrame(assets.image`labBorder`)
// text colour.
game.setDialogTextColor(1)
// sets the background when playing against the first 4 enemies.
scene.setBackgroundImage(assets.image`backgroundLab`)
let playGame = true
// whenever the player presses B the players turn will end.
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (actionable) {
        // actionable removes the ability for the player to disrupt the game while they can't attack or do anything
        actionable = false
        sprites.destroy(selectionArrow)
        selectedCard = 0
        playerTurnEnd()
    }
})
function playerTurnEnd() {
    // check if cards have been selected.
    checkForConfirmedCard()

    if (confirmedCard == true) {
        // if 1 or more cards are selected cardAttackAnimation1 will then happen
        cardAttackAnimation1()
    }
    // attackAnimation2 is when no cards are selected and aplies to cards not selected.
    attackAnimation2()
    // deconfirmAllCards makes sure that no cards are selected next turn.
    deconfirmAllCards()
    // set playerturn to false so that player can not interupt the game while not their turn
    isPlayerTurn = false
}
function checkForConfirmedCard() {
    // checks each card 1 by 1 and looks if a card has been confirmed.
    confirmedCard = false
    if (card1Confirmed == true) {
        confirmedCard = true
    }
    if (card2Confirmed == true) {
        confirmedCard = true
    }
    if (card3Confirmed == true) {
        confirmedCard = true
    }
    if (card4Confirmed == true) {
        confirmedCard = true
    }
    if (card5Confirmed == true) {
        confirmedCard = true
    }
    if (card6Confirmed == true) {
        confirmedCard = true
    }
}
function cardAttackAnimation1() {
    // animtion made by pax to show cards flying to center.
    elementCounter = 0
    if (card1Confirmed == true) {
        animation.runMovementAnimation(
            card1,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
        )
        // elememtCounter by Jayden to calculate damage.
        elementCounter += 1
    }
    if (card2Confirmed == true) {
        animation.runMovementAnimation(
            card2,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
        )
        elementCounter += 1
    }
    if (card3Confirmed == true) {
        animation.runMovementAnimation(
            card3,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
        )
        elementCounter += 1
    }
    if (card4Confirmed == true) {
        animation.runMovementAnimation(
            card4,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
        )
        elementCounter += 1
    }
    if (card5Confirmed == true) {
        animation.runMovementAnimation(
            card5,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
        )
        elementCounter += 1
    }
    if (card6Confirmed == true) {
        animation.runMovementAnimation(
            card6,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
        )
        elementCounter += 1
    }
    pause(1100)
    // this destroys the cards sprites that are confirmed 
    if (card1Confirmed == true) {
        sprites.destroy(card1)
    }
    if (card2Confirmed == true) {
        sprites.destroy(card2)
    }
    if (card3Confirmed == true) {
        sprites.destroy(card3)
    }
    if (card4Confirmed == true) {
        sprites.destroy(card4)
    }
    if (card5Confirmed == true) {
        sprites.destroy(card5)
    }
    if (card6Confirmed == true) {
        sprites.destroy(card6)
    }
    // animation made by pax to show when a compound is being made 
    attackAnimation = sprites.create(assets.image`attackFrame1`, SpriteKind.Player)
    animation.runImageAnimation(
        attackAnimation,
        assets.animation`swirlAnimation`,
        200,
        true
    )
    pause(2000)
    animation.stopAnimation(animation.AnimationTypes.All, attackAnimation)
    sprites.destroy(attackAnimation)
    // checkCompound makes successfulAttack true of false depending on the attack
    checkCompound()
    // sets difficulty 
    challenge()
    if (successfulAttack == true) {
        if (isBossfight == true) {
            // will only run when doing the boss fight
            bossSuccessfulAttackAnimation()
            // randomDMG is used to find the random multiplier for attacks
            randomDMG()
            // damage is elementCounter(1 point) * 10 * random multiplier
            damage = elementCounter * 10 * multiplier
            // this subtacts the damage from the current enemies life.
            enemyLife = enemyLife - damage
            // reset selectedCard to 0
            selectedCards = ""
            // reset element counter.
            elementCounter = 0
            if (enemyLife <= 0) {
                // when eneny dies the runCombatLoop = false skipping enemy turn and showing the death animation. 
                runCombatLoop = false
            }
        } 
        // when fighting first 4 emeies this will apply.
        if (isBossfight == false) {
            // randomDMG is used to find the random multiplier for attacks
            randomDMG();
            // damage is elementCounter(1 point) * 10 * random multiplier
            damage = elementCounter * 10 * multiplier
            // this subtacts the damage from the current enemies life.
            enemyLife = enemyLife - damage
            // run animation made by Pax to show that the player made a successful compound.
            successfulAttackAnimation()
            // reset selectedCards.
            selectedCards = ""
            // reset damageMultiplier
            damageMultiplier = 0
            // reset multiplier
            multiplier = 0
            // reset elememtCounter.
            elementCounter = 0
            // if enemy dies their attack is skipped and shows death animation.
            if (enemyLife <= 0) {
                runCombatLoop = false
                playerLIfe = 100 
            }
        }
    }
    // if checkCompound returned false they did not make a compound and animation by pax is shown of small explosion
    if (successfulAttack == false) {
        unsuccessfulAttackAnimation()
    }

}


// function used to check the compound
function checkCompound() {
    // searches the list of attacks to find if the selectedCards are in there in a sertain order.
    indexOfCompound = attacks.indexOf(selectedCards)
    successfulAttack = true
    //if the return is not -1 (no matching item in list) then the attack is true
    if (indexOfCompound != -1) {
        successfulAttack = true
    } else {
        successfulAttack = false
    }
    selectedCards = ""

}
// based on the amound of elements used a different potion bottle is used for each lenghth of attack.
function setAttackPotion() {
    if (elementCounter == 1) {
        attackAnimation = sprites.create(assets.image`attackPotion1`, SpriteKind.Player)
    }
    if (elementCounter == 2) {
        attackAnimation = sprites.create(assets.image`attackPotion2`, SpriteKind.Player)
    }
    if (elementCounter == 3) {
        attackAnimation = sprites.create(assets.image`attackPotion3`, SpriteKind.Player)
    }
    if (elementCounter == 4) {
        attackAnimation = sprites.create(assets.image`attackPotion4`, SpriteKind.Player)
    }
    if (elementCounter == 5) {
        attackAnimation = sprites.create(assets.image`attackPotion5`, SpriteKind.Player)
    }
    if (elementCounter == 6) {
        attackAnimation = sprites.create(assets.image`attackPotion6`, SpriteKind.Player)
    }
}

function attackAnimation2() {
// Animation by Pax to destoy cards sprite when they are not selected.
    if (card1Confirmed == false) {
        animation.runImageAnimation(
            card1,
            assets.animation`cardDestruction`,
            150,
            false
        )
    }
    if (card2Confirmed == false) {
        animation.runImageAnimation(
            card2,
            assets.animation`cardDestruction`,
            150,
            false
        )
    }
    if (card3Confirmed == false) {
        animation.runImageAnimation(
            card3,
            assets.animation`cardDestruction`,
            150,
            false
        )
    }
    if (card4Confirmed == false) {
        animation.runImageAnimation(
            card4,
            assets.animation`cardDestruction`,
            150,
            false
        )
    }
    if (card5Confirmed == false) {
        animation.runImageAnimation(
            card5,
            assets.animation`cardDestruction`,
            150,
            false
        )
    }
    if (card6Confirmed == false) {
        animation.runImageAnimation(
            card6,
            assets.animation`cardDestruction`,
            150,
            false
        )
    }
    pause(1950)
    sprites.destroy(card1)
    sprites.destroy(card2)
    sprites.destroy(card3)
    sprites.destroy(card4)
    sprites.destroy(card5)
    sprites.destroy(card6)
}

function successfulAttackAnimation() {
    // if the attack is true then the animation by Pax begins to play.
    star = sprites.create(assets.image`star`, SpriteKind.Player)
    star.setScale(2, ScaleAnchor.Middle)
    animation.runImageAnimation(
        star,
        assets.animation`starAnimation`,
        500,
        true
    )
    setAttackPotion()
    pause(2000)
    animation.stopAnimation(animation.AnimationTypes.All, star)
    sprites.destroy(star)
    animation.runMovementAnimation(
        playerSprite,
        animation.animationPresets(animation.flyToCenter),
        1000,
        false
    )
    pause(800)
    attackAnimation.setVelocity(82, 48)
    pause(550)
    attackAnimation.setVelocity(0, 0)
    animation.runImageAnimation(
        attackAnimation,
        assets.animation`beakerShatter`,
        80,
        false
    )
    assignDamagedEnemy()
    animation.runMovementAnimation(
        enemySprite,
        animation.animationPresets(animation.shake),
        1000,
        false
    )
    pause(480)
    sprites.destroy(attackAnimation)
    playerSprite.setVelocity(0, 52)
    pause(500)
    assignEnemy()
    playerSprite.setVelocity(-61, 0)
    pause(750)
    playerSprite.setVelocity(0, 0)

}
function unsuccessfulAttackAnimation() {
    // if the attack is not real then the Aimation by Pax plays.
    attackAnimation = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    animation.runImageAnimation(
        attackAnimation,
        assets.animation`explosion`,
        200,
        false
    )
    pause(800)
    sprites.destroy(attackAnimation)
}

// when A is presses on controller
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // if actionable is true then effects will take place.
    if (actionable == true) {
        // changeSelected changes the varable of selectedCards and changes stprite image. 
        changeSelected()
    }
})
function changeSelected() {
    // for the card the arrow is above 
    if (selectedCard == 1) {
        // if the card is confirmed it is then unconfirmed and the spriteis changed.and removed from the attack. 
        if (card1Confirmed == true) {
            card1Confirmed = false
            cardDeconfirmSprite(card1, card1Element)
            selectedCards = selectedCards.replace(card1Element, "")
        } else {
            // if the card is not confirmed then it is comfirmed, added to attack and sprite is changed.
            if (card1Confirmed == false) {
                card1Confirmed = true
                changeConfirmSprite(card1, card1Element)
                joinCard = true
                selectedElement = card1Element
                // Add the selected card element to the string
                selectedCards = "" + selectedCards + card1Element
            }
        }
    }
    if (selectedCard == 2) {
        if (card2Confirmed == true) {
            card2Confirmed = false
            cardDeconfirmSprite(card2, card2Element)
            selectedCards = selectedCards.replace(card2Element, "")
        } else {
            if (card2Confirmed == false) {
                card2Confirmed = true
                changeConfirmSprite(card2, card2Element)
                joinCard = true
                selectedElement = card2Element
                // Add the selected card element to the string
                selectedCards = "" + selectedCards + card2Element
            }
        }
    }
    if (selectedCard == 3) {
        if (card3Confirmed == true) {
            card3Confirmed = false
            cardDeconfirmSprite(card3, card3Element)
            selectedCards = selectedCards.replace(card3Element, "")
        } else {
            if (card3Confirmed == false) {
                card3Confirmed = true
                changeConfirmSprite(card3, card3Element)
                joinCard = true
                selectedElement = card3Element
                // Add the selected card element to the string
                selectedCards = "" + selectedCards + card3Element
            }
        }
    }
    if (selectedCard == 4) {
        if (card4Confirmed == true) {
            card4Confirmed = false
            cardDeconfirmSprite(card4, card4Element)
            selectedCards = selectedCards.replace(card4Element, "")
        } else {
            if (card4Confirmed == false) {
                card4Confirmed = true
                changeConfirmSprite(card4, card4Element)
                joinCard = true
                selectedElement = card4Element
                // Add the selected card element to the string
                selectedCards = "" + selectedCards + card4Element
            }
        }
    }
    if (selectedCard == 5) {
        if (card5Confirmed == true) {
            card5Confirmed = false
            cardDeconfirmSprite(card5, card5Element)
            selectedCards = selectedCards.replace(card5Element, "")
        } else {
            if (card5Confirmed == false) {
                card5Confirmed = true
                changeConfirmSprite(card5, card5Element)
                joinCard = true
                selectedElement = card5Element
                // Add the selected card to the string
                selectedCards = "" + selectedCards + card5Element
            }
        }
    }
    if (selectedCard == 6) {
        if (card6Confirmed == true) {
            card6Confirmed = false
            cardDeconfirmSprite(card6, card6Element)
            selectedCards = selectedCards.replace(card6Element, "")
        } else {
            if (card6Confirmed == false) {
                card6Confirmed = true
                changeConfirmSprite(card6, card6Element)
                joinCard = true
                selectedElement = card6Element
                // Add the selected card element to the string
                selectedCards = "" + selectedCards + card6Element
            }
        }
    }
}
// whena card is selected the sprite will change to have a red border
function changeConfirmSprite(card: Sprite, cardElement: string) {
    if (cardElement == "H") {
        card.setImage(assets.image`hydrogenCardSelected`)
    }
    if (cardElement == "O") {
        card.setImage(assets.image`oxygenCardSelected`)
    }
    if (cardElement == "C") {
        card.setImage(assets.image`carbonCardSelected`)
    }
}
// when a card is deselected the sptire changed back.
function cardDeconfirmSprite(card: Sprite, cardElement: string) {
    if (cardElement == "H") {
        card.setImage(assets.image`hydrogenCard`)
    }
    if (cardElement == "O") {
        card.setImage(assets.image`oxygenCard`)
    }
    if (cardElement == "C") {
        card.setImage(assets.image`carbonCard`)
    }
}
// when the player triggers the left key.
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (actionable == true) {
        // change the selected cards and which card the arrow is on
        selectedCard += -1
        // when players reach the last card.
        if (selectedCard == 0) {
            selectedCard = 6
        }
        // sets where the arror much be.
        setSelectionArrow()
    }
})
// based on selectedcard the arrow is given coordiantes to be.
function setSelectionArrow() {
    if (selectedCard == 1) {
        selectionArrow.setPosition(card1.x, 90)
    }
    if (selectedCard == 2) {
        selectionArrow.setPosition(card2.x, 90)
    }
    if (selectedCard == 3) {
        selectionArrow.setPosition(card3.x, 90)
    }
    if (selectedCard == 4) {
        selectionArrow.setPosition(card4.x, 90)
    }
    if (selectedCard == 5) {
        selectionArrow.setPosition(card5.x, 90)
    }
    if (selectedCard == 6) {
        selectionArrow.setPosition(card6.x, 90)
    }
}
// when the right button is triggered the selectedcard is reduced by one and arrow possition is changed.
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (actionable == true) {
        selectedCard += 1
        if (selectedCard == 7) {
            selectedCard = 1
        }
        setSelectionArrow()
    }
})
// shuffels the possition of all the cards in a random order
function shuffle(list: any[]) {
    return list.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
}
// based on the ammount of enemy deaths the difficulty is set.
function challenge() {
    if (enemyDeaths == 0) {
        difficulty = 1
    }
    if (enemyDeaths == 1) {
        difficulty = 2
    }
    if (enemyDeaths == 2) {
        difficulty = 3
    }
    if (enemyDeaths == 3) {
        difficulty = 4
    }
    if (enemyDeaths == 4) {
        difficulty = 5
    }
}

// the assigned enemy life is dependant on the amount of enemies that have died.
function assignEnemyLife() {
    if (enemyDeaths == 0) {
        enemyLife = enemy1Life
    }
    if (enemyDeaths == 1) {
        enemyLife = enemy2Life
    }
    if (enemyDeaths == 2) {
        enemyLife = enemy3Life
    }
    if (enemyDeaths == 3) {
        enemyLife = enemy4Life
    }
}
// damaged enemy dependant on enemies that have died
function assignDamagedEnemy() {
    if (enemyDeaths == 0) {
        enemySprite.setImage(assets.image`enemy1Damaged`)
    }
    if (enemyDeaths == 1) {
        enemySprite.setImage(assets.image`enemy2Damaged`)
    }
    if (enemyDeaths == 2) {
        enemySprite.setImage(assets.image`enemy3Damaged`)
    }
    if (enemyDeaths == 3) {
        enemySprite.setImage(assets.image`enemy4Damaged`)
    }
}
// assignes enemy normal state depending on the enemyDeaths
function assignEnemy() {
    // if theire is no enemy sprite a new one is made
    if (initialEnemyCreation == true) {
        enemySprite = sprites.create(assets.image`explosionBeginning`, SpriteKind.Enemy)
        initialEnemyCreation = false
    }
    if (enemyDeaths == 0) {
        enemySprite.setImage(assets.image`enemy1`)
    }
    if (enemyDeaths == 1) {
        enemySprite.setImage(assets.image`enemy2`)
    }
    if (enemyDeaths == 2) {
        enemySprite.setImage(assets.image`enemy3`)
    }
    if (enemyDeaths == 3) {
        enemySprite.setImage(assets.image`enemy4`)
    }
}
// the loop that is used for fighting normal enemies. 
function combatLoop() {
    // set background
    scene.setBackgroundImage(assets.image`backgroundLab`)
    // set music for while playing the game
    music.play(music.createSong(assets.song`battleTheme`), music.PlaybackMode.LoopingInBackground)
    // make the sprite for the deck
    wholedeck = sprites.create(assets.image`cardBack`, SpriteKind.Food)
    // possition the deck sprite
    wholedeck.setPosition(150, 10)
    // make a new enemy sprite. 
    initialEnemyCreation = true
    // assign the enemies life 
    assignEnemyLife()
    // assign the enemy sprite
    assignEnemy()
    // set the possition of the enemy
    enemySprite.setPosition(125, 85)
    // player sprite
    playerSprite = sprites.create(assets.image`playerSprite`, SpriteKind.Player)
    // playersprite possition
    playerSprite.y += 25
    playerSprite.x += -45
    // set runcombatloop to true to make a whole combat loop 
    runCombatLoop = true
    if (playerLIfe < 1) {
        game.showLongText("OOOOH NOOO player has died.", DialogLayout.Bottom)
        game.showLongText("Restart game to play", DialogLayout.Bottom)
        runCombatLoop = false
    }
    // gives the player information on a compound when fighting a new enemy.
    giveHint()
    // loop that repeats for each enemy. 
    while (runCombatLoop) {
        // player turn begins
        playerTurnStart()
        // player can do anything until they bush B
        pauseUntil(() => isPlayerTurn == false)
        if (runCombatLoop == true) {
            // enemy attack.
            enemyTurn()
            pauseUntil(() => isEnemyTurn == false)
        }

    }
    // when an enemy dies, sprite animation
    battleEnd()
    if (enemyDeaths <= 4) {
        // sets to true for boss fight.
        runCombatLoop = true
    }
    

}
// each hint appears once for each enemy depending on amount of enemyDeaths
function giveHint() {

    if (enemyDeaths == 0) {
        game.showLongText("In this game, the elements you can form compounds with are: Hydrogen, Oxygen and Carbon.", DialogLayout.Full)
        game.showLongText("These are very common elements, being found in common compounds that you may know.", DialogLayout.Full)
        game.showLongText("Like Carbon Dioxide (1 carbon and 2 oxygen), Carbon Monoxide (1 carbon and 1 oxgen) and Water (2 hydrogen and 1 oxygen).", DialogLayout.Full)
        game.showLongText("Try make one of those! (if you can)", DialogLayout.Bottom)
    }
    if (enemyDeaths == 1) {
        game.showLongText("Some more compounds are Hydrogen Peroxide and Acetylene.", DialogLayout.Full)
        game.showLongText("Hydrogen Peroxide (2 hydrogen and 2 oxygen) is found in lots of disinfectant and cleaning products.", DialogLayout.Full)
        game.showLongText("Acetylene (2 carbon and 2 hydrogen) is used as industrial fuel due to it's high burning temperatures ", DialogLayout.Full)
    }
    if (enemyDeaths == 2) {
        game.showLongText("Hydrocarbons are more complex compounds, made up of mostly hydrogen and some carbon.", DialogLayout.Full)
        game.showLongText("Hydrocarbons are found quite commonly, like in most fuels and in asphalt.", DialogLayout.Full)
        game.showLongText("Some makeable hydrocarbons are Methane (1 carbon and 4 hydrogen) and Ethene (2 hydrogen and 2 carbon)", DialogLayout.Full)
    }
    if (enemyDeaths == 3) {
        game.showLongText("In this game, you have 6 elements available to you. Why not use them all?", DialogLayout.Full)
        game.showLongText("Acetylenediol (2 hydrogen, 2carbon and 2 oxygen) is used to prevent foam forming in industrial process liquids.", DialogLayout.Full)
        game.showLongText("Carbonic Acid (2 hydrogen, 1 carbon and 3 oxygen) forms when CO2 hits the ocean, causing the water to acidify.", DialogLayout.Full)
        game.showLongText("This is harmful for the ocean's ecosystems, and another negative impact of global warming.", DialogLayout.Full)
    }
}

function playerTurnStart() {
    // make a deck 
    for (let index = 0; index < 30; index++) {
        list.push("H")
        list.push("C")
        list.push("O")
    }

    // shuffle the deck
    deck = shuffle(list)
    // tell player whos turn
    game.showLongText("PLAYER TURN", DialogLayout.Bottom)
    // set the cards 
    card1 = sprites.create(assets.image`cardBack`, SpriteKind.Player)
    card2 = sprites.create(assets.image`cardBack`, SpriteKind.Player)
    card3 = sprites.create(assets.image`cardBack`, SpriteKind.Player)
    card4 = sprites.create(assets.image`cardBack`, SpriteKind.Player)
    card5 = sprites.create(assets.image`cardBack`, SpriteKind.Player)
    card6 = sprites.create(assets.image`cardBack`, SpriteKind.Player)
    // deal animation by Pax
    cardDealAnimation()
    // assign card sprite based on card element
    assignCardsElements()
    selectedCard = 1
    actionable = true
    selectionArrow = sprites.create(assets.image`selectionArrow`, SpriteKind.Player)
    selectionArrow.setPosition(card1.x, 90)
    isPlayerTurn = true
}
// animation by Pax to set possition and animation of the cards being dealt
function cardDealAnimation() {
    card1.setPosition(150, 10)
    card1.setVelocity(-129, 0)
    card2.setPosition(150, 10)
    card2.setVelocity(-106, 0)
    card3.setPosition(150, 10)
    card3.setVelocity(-83, 0)
    card4.setPosition(150, 10)
    card4.setVelocity(-60, 0)
    card5.setPosition(150, 10)
    card5.setVelocity(-37, 0)
    card6.setPosition(150, 10)
    card6.setVelocity(-14, 0)
    pause(1000)
    card1.setVelocity(0, 100)
    card2.setVelocity(0, 100)
    card3.setVelocity(0, 100)
    card4.setVelocity(0, 100)
    card5.setVelocity(0, 100)
    card6.setVelocity(0, 100)
    pause(1000)
    card1.setVelocity(0, 0)
    card2.setVelocity(0, 0)
    card3.setVelocity(0, 0)
    card4.setVelocity(0, 0)
    card5.setVelocity(0, 0)
    card6.setVelocity(0, 0)
}
// assign the card element 
function assignCardsElements() {
    assignElement(card1)
    card1Element = currentElement
    assignElement(card2)
    card2Element = currentElement
    assignElement(card3)
    card3Element = currentElement
    assignElement(card4)
    card4Element = currentElement
    assignElement(card5)
    card5Element = currentElement
    assignElement(card6)
    card6Element = currentElement
}
// assing the card sprite
function assignElement(card: Sprite) {
    // takes a random element from the shuffeled deck and
    randomElement = deck.pop()
    if (randomElement == "H") {
        image2 = assets.image`hydrogenCard`
        currentElement = "H"
    } else if (randomElement == "O") {
        image2 = assets.image`oxygenCard`
        currentElement = "O"
    } else if (randomElement == "C") {
        image2 = assets.image`carbonCard`
        currentElement = "C"
    }
    card.setImage(image2)
    return randomElement
}
function enemyTurn() {
    // enemyturn is only true if enemy is still 
    isEnemyTurn = true
    // tell player it is enemy's turn
    game.showLongText("ENEMY TURN", DialogLayout.Bottom)
    if (isBossfight == true) {
        // only if fighting the boss animation by Pax
        bossAttackAnimation()
        // player losed 20 life 
        playerLIfe - playerLIfe - 20
        // end enemy turn.
        isEnemyTurn = false
        
        }

     else {
        // swipe attack for normal aliens, animation by Pax
        trialAttack3()
        // player loses 15 life
        playerLIfe = playerLIfe - 15
        isEnemyTurn = false
    }

}
// swipe attack for enemies by Pax
function trialAttack3() {
    enemySprite.setVelocity(-68, 0)
    pause(1000)
    enemySprite.setVelocity(0, 0)
    swipeAnimation = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    swipeAnimation.setPosition(enemySprite.x - 8, enemySprite.y)
    animation.runImageAnimation(
        swipeAnimation,
        assets.animation`swipeAnimation`,
        100,
        false
    )
    pause(40)
    playerSprite.setImage(assets.image`playerSpriteDamaged`)
    animation.runMovementAnimation(
        playerSprite,
        animation.animationPresets(animation.shake),
        1000,
        false
    )
    pause(60)
    enemySprite.setVelocity(68, 0)
    sprites.destroy(swipeAnimation)
    pause(940)
    playerSprite.setImage(assets.image`playerSprite`)
    pause(60)
    enemySprite.setVelocity(0, 0)
    enemySprite.setPosition(125, 85)
    pause(1000)
}

// when the enemy is killed battleEnd plays showing a animation by Pax of the enemy dying
function battleEnd() {
    sprites.destroy(wholedeck)

    assignEnemy()
    animation.runMovementAnimation(
        enemySprite,
        animation.animationPresets(animation.shake),
        1000,
        false
    )
    if (enemyLife <= 0) {
        pause(1000)
        animation.runImageAnimation(
            enemySprite,
            assets.animation`explosion`,
            200,
            false
        )
        pause(800)
        sprites.destroy(enemySprite)
        game.showLongText("Congratulations! You defeated the enemy!", DialogLayout.Bottom)
        playerSprite.setVelocity(80, 0)
        pause(2000)

        scene.setBackgroundImage(assets.image`backgroundFadeSprite`)
        pause(1000)
        enemyDeaths++
    }
    sprites.destroy(playerSprite)
    sprites.destroy(enemySprite)

    music.stopAllSounds()
}
// deconfims all cards before start of the next turn.
function deconfirmAllCards() {
    card1Confirmed = false
    card2Confirmed = false
    card3Confirmed = false
    card4Confirmed = false
    card5Confirmed = false
    card6Confirmed = false
}

// cutscene before meeting the boss by Pax
function bossCutscene() {
    scene.setBackgroundImage(assets.image`backgroundFadeSprite`)
    music.stopAllSounds()
    music.play(music.createSong(assets.song`suspense`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("After having defeated all but one of the alien invaders, you apprehensively approach their leader...", DialogLayout.Full)
    cutscenePlayer = sprites.create(assets.image`playerSprite`, SpriteKind.Player)
    cutscenePlayer.setScale(6, ScaleAnchor.Middle)
    cutscenePlayer.setPosition(20, 60)
    cutscenePlayer.setVelocity(20, 0)
    pause(3000)
    sprites.destroy(cutscenePlayer)
    pause(1000)
    music.stopAllSounds()
    cutsceneEnemy1 = sprites.create(assets.image`finalBossEye`, SpriteKind.Player)
    cutsceneEnemy1.setScale(6, ScaleAnchor.Middle)
    animation.runImageAnimation(
        cutsceneEnemy1,
        assets.animation`finalBossEyeOpen`,
        300,
        false
    )
    pause(2000)
    backgroundFade = sprites.create(assets.image`backgroundFadeSprite`, SpriteKind.Player)
    animation.runImageAnimation(
        backgroundFade,
        assets.animation`backgroundFadeTo`,
        150,
        false
    )
    pause(1000)
    sprites.destroy(backgroundFade)
    scene.setBackgroundImage(assets.image`backgroundBossfight`)
    cutsceneEnemy1.setImage(assets.image`finalBossDamaged`)
    cutsceneEnemy1.setScale(1.5, ScaleAnchor.Middle)
    cutsceneEnemy1.setPosition(80, 60)
    animation.runImageAnimation(
        cutsceneEnemy1,
        assets.animation`bossHit`,
        200,
        false
    )
    music.play(music.createSong(assets.song`bossIntroduction`), music.PlaybackMode.InBackground)
    pause(3000)
    sprites.destroy(cutsceneEnemy1)
    scene.setBackgroundImage(assets.image`backgroundFadeSprite`)
    pause(1000)
}
function bossCombatLoop() {
    // play the cutscene
    bossCutscene()
    // set boss fight background
    scene.setBackgroundImage(assets.image`backgroundBossfight`)
    // set the music.
    music.play(music.createSong(assets.song`battleTheme`), music.PlaybackMode.LoopingInBackground)
    // sets varuable as true for attacking and being attacked
    isBossfight = true
    // make deck sprite
    wholedeck = sprites.create(assets.image`cardBack`, SpriteKind.Food)
    wholedeck.setPosition(150, 10)
    // make enemy sprite and possition
    enemySprite = sprites.create(assets.image`finalBoss`, SpriteKind.Player)
    enemySprite.setPosition(120, 65)
    // make playersprite and possition it.
    playerSprite = sprites.create(assets.image`playerSprite`, SpriteKind.Player)
    playerSprite.y += 25
    playerSprite.x += -45
    runCombatLoop = true
    // set enemy life
    enemyLife = 275
    difficulty = 5
    while (runCombatLoop == true) {
        // normal cutscene for playerturn
        playerTurnStart()
        pauseUntil(() => isPlayerTurn == false)
        if (runCombatLoop == true) {
            // enemy turn with boss attack
            enemyTurn()
            pauseUntil(() => isEnemyTurn == false)
            
        }
        // when the boss dies. 
    } gameEnd()
    
}
// successful attack on the boss animation by Pax
function bossSuccessfulAttackAnimation() {
    star = sprites.create(assets.image`star`, SpriteKind.Player)
    star.setScale(2, ScaleAnchor.Middle)
    animation.runImageAnimation(
        star,
        assets.animation`starAnimation`,
        500,
        true
    )
    setAttackPotion()
    pause(2000)
    animation.stopAnimation(animation.AnimationTypes.All, star)
    sprites.destroy(star)
    animation.runMovementAnimation(
        playerSprite,
        animation.animationPresets(animation.flyToCenter),
        1000,
        false
    )
    pause(800)
    attackAnimation.setVelocity(82, 48)
    pause(550)
    attackAnimation.setVelocity(0, 0)
    animation.runImageAnimation(
        attackAnimation,
        assets.animation`beakerShatter`,
        80,
        false
    )
    enemySprite.setImage(assets.image`finalBossDamaged`)
    enemySprite.x += -8
    enemySprite.y += -16
    animation.runImageAnimation(
        enemySprite,
        assets.animation`bossHit`,
        200,
        false
    )
    pause(680)
    sprites.destroy(attackAnimation)
    playerSprite.setVelocity(0, 52)
    pause(500)
    enemySprite.x += 8
    enemySprite.y += 16
    enemySprite.setImage(assets.image`finalBoss`)
    playerSprite.setVelocity(-61, 0)
    pause(750)
    playerSprite.setVelocity(0, 0)
}
// boss attacking animation by Pax
function bossAttackAnimation() {
    enemySprite.setImage(assets.image`finalBossAttacking`)
    enemySprite.x += -16
    skullAnimation = sprites.create(assets.image`flamingSkull`, SpriteKind.Player)
    skullAnimation.setPosition(135, -20)
    animation.runImageAnimation(
        skullAnimation,
        assets.animation`flamingSkullAnimation`,
        100,
        true
    )
    skullAnimation.setVelocity(-100, 100)
    pause(900)
    playerSprite.setImage(assets.image`playerSpriteDamaged`)
    animation.runMovementAnimation(
        playerSprite,
        animation.animationPresets(animation.shake),
        1000,
        false
    )
    pause(600)
    skullAnimation.setVelocity(0, 0)
    sprites.destroy(skullAnimation)
    enemySprite.setImage(assets.image`finalBoss`)
    enemySprite.x += 16
    pause(700)
    playerSprite.setImage(assets.image`playerSprite`)
    pause(1000)
    playerLIfe = playerLIfe - 20
}
// part of the cutscene when boss dies.
function miniExplosions() {
    cutsceneExplosion = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    cutsceneExplosion.x = 120
    cutsceneExplosion.y = 50
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
        cutsceneExplosion,
        assets.animation`explosion`,
        100,
        false
    )
    pause(400)
    sprites.destroy(cutsceneExplosion)
    cutsceneExplosion2 = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    cutsceneExplosion2.x = 140
    cutsceneExplosion2.y = 30
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
        cutsceneExplosion2,
        assets.animation`explosion`,
        100,
        false
    )
    pause(400)
    sprites.destroy(cutsceneExplosion2)
    cutsceneExplosion = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    cutsceneExplosion.x = 130
    cutsceneExplosion2.y = 70
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
        cutsceneExplosion,
        assets.animation`explosion`,
        100,
        false
    )
    pause(400)
    sprites.destroy(cutsceneExplosion)
    cutsceneExplosion2 = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    cutsceneExplosion2.x = 100
    cutsceneExplosion2.y = 80
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
        cutsceneExplosion2,
        assets.animation`explosion`,
        100,
        false
    )
    pause(400)
    sprites.destroy(cutsceneExplosion2)
}
// boss defeat and dying cutscene by Pax
function gameEnd() {
    music.stopAllSounds()
    sprites.destroy(wholedeck)
    pause(3000)

    enemySprite.setImage(assets.image`finalBossDamaged`)
    enemySprite.x += -8
    enemySprite.y += -16
    animation.runMovementAnimation(
        enemySprite,
        animation.animationPresets(animation.shake),
        1000,
        true
    )
    pause(1000)
    miniExplosions()
    game.showLongText("NOOOOOOOOOOOOOOOO!!!", DialogLayout.Bottom)
    miniExplosions()
    cutsceneExplosion = sprites.create(assets.image`explosionBeginning`, SpriteKind.Player)
    cutsceneExplosion.setPosition(112, 49)
    cutsceneExplosion.setScale(6, ScaleAnchor.Middle)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    animation.runImageAnimation(
        cutsceneExplosion,
        assets.animation`explosion`,
        200,
        false
    )
    sprites.destroy(enemySprite)
    pause(800)
    sprites.destroy(cutsceneExplosion)
    pause(1000)
    music.play(music.createSong(assets.song`victoryTheme`), music.PlaybackMode.LoopingInBackground)
    game.showLongText("Congratulations! You defeated the final boss!", DialogLayout.Full)
    game.showLongText("You win!", DialogLayout.Bottom)
    game.showLongText("Thanks for playing Lab Invasion!", DialogLayout.Bottom)
}
let playerdeath = 0
function playerdies() {
    if (playerLIfe < 1) {
        enemyDeaths = -1
    }
    
}
// play opening cutscene
gameStart()

// loop to play the game.
while (playGame) {
    
    // check if the player has dies
    

    //while fighting first 4 enemies
    if (enemyDeaths >= 0 && enemyDeaths <= 3) {
        combatLoop()
        
    }
    playerdies()
    if (enemyDeaths == -1) {
        game.showLongText("OOOOOH NOOOOO. ", DialogLayout.Bottom)
        pause(100)
        game.showLongText("Player has died restart the game to play. ", DialogLayout.Bottom)
        break
    }
    if (enemyDeaths == 4) {
        // while fighting the boss
        bossCombatLoop()
        enemyDeaths +=1
        
        

    }
}