let value = 0
// Make the pressure sensor at pin 0 and show how much pressure is on it.
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(value)
})
