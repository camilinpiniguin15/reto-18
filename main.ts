input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P0, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 0)
})
