input.onButtonPressed(Button.A, function () {
    npix.showRainbow(1, 360)
    basic.pause(500)
    npix.clear()
    for (let i = 0; i <= 16; i++) {
        npix.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        npix.show()
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P12, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(500)
})
let npix: neopixel.Strip = null
npix = neopixel.create(DigitalPin.P0, 16, NeoPixelMode.RGB)
npix.setBrigthness(10)
pins.digitalWritePin(DigitalPin.P12, 1)
basic.forever(function () {
    for (let i = 0; i <= 16; i++) {
        npix.clear()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        npix.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        npix.show()
        basic.pause(10)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
