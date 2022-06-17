basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 25) {
        basic.showString("Hot")
    } else if (input.temperature() < 15) {
        basic.showString("Cold")
    } else {
        basic.showIcon(IconNames.Happy)
        basic.showString("Temperatura Agradable")
    }
})
