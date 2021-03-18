let soundDisplay = true
while (soundDisplay == true) {
    if (input.soundLevel() > 204) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (input.soundLevel() > 153) {
        basic.showLeds(`
            . . . . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (input.soundLevel() > 102) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            `)
    } else if (input.soundLevel() > 51) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # . . .
            `)
    } else if (input.soundLevel() > 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            `)
    }
    
}
