let steps = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Strength) > 1500) {
        steps += 1
        basic.showNumber(steps)
    } else if (steps == 15) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            . # # # .
            `)
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # # .
            . . . . #
            . . . . .
            `)
        basic.pause(1000)
        basic.showIcon(IconNames.Snake)
        basic.pause(5000)
        basic.clearScreen()
        steps = 0
    }
})
