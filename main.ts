input.onButtonPressed(Button.A, function () {
    basic.showString(".:NUKE LAUNCHED:.")
    radio.sendString("Y")
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        . # # # .
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString(".:O-S DEPLOYED:.")
    radio.sendString("N")
})
basic.showString("(A) NUKE      (B)ORBITAL STRIKE")
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    # # # # #
    # . # . #
    `)
