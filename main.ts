basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        basic.showString("HOT")
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (input.temperature() < 15) {
        basic.showString("COLD")
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Happy)
        basic.showString("Temperatura Agradable")
    }
})
