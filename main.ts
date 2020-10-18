input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.showString("(A) N")
    radio.sendString("Nuke")
})
input.onGesture(Gesture.ScreenDown, function () {
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
radio.onReceivedString(function (receivedString) {
    game.removeLife(1)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    game.addScore(1)
    basic.showString("(B) O")
    radio.sendString("Orbital strike")
})
basic.showNumber(input.lightLevel())
game.setScore(0)
game.addLife(16)
radio.setGroup(420)
basic.showString("(A) N (B) O")
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
