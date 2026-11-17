let Juego = 0
input.onGesture(Gesture.Shake, function () {
    Juego = randint(1, 3)
    if (Juego == 1) {
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(500)
    }
    if (Juego == 2) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
    }
    if (Juego == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})
