input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.showString("(A) N")
    radio.sendString("Nuke")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
radio.onReceivedString(function (receivedString) {
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
game.setScore(0)
basic.showString("(A) N (B) O")
basic.showLeds(`
    # . . . #
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    `)
