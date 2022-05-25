input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . #
        . # # . #
        . # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # # # # #
        . # . . .
        . # . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . # # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . # # . .
            . # # . .
            . . # . .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . .
        # . # . #
        # # # # #
        . . # # #
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        . . # # #
        . # . # .
        . . # . #
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # # .
        . # . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . #
        # # # # #
        # . # . #
        # . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # .
            . . # . .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # # .
            . . # # .
            . . # . .
            . . # . .
            `)
    }
})
music.playMelody("E G D C D E G D ", 77)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
music.playMelody("E G B - - - - - ", 120)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.showString("The legend of zelda: first attempt")
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . . # # .
    . . # # .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
	
})
control.inBackground(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . # # .
        . . # # .
        `)
    basic.showLeds(`
        . . . # #
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . .
        . . . . #
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        . # # . #
        . . . . #
        . . # # #
        # . . . #
        # . . # #
        `)
    basic.showLeds(`
        # # . . #
        . . . # .
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        # # . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
