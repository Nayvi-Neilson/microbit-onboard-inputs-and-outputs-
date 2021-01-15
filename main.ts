input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Giraffe)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Nayvi")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showString("" + (input.temperature()))
})
basic.forever(function () {
	
})
