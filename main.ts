radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        motion1()
    } else if (receivedNumber == 2) {
        motion2()
    } else if (receivedNumber == 0) {
        Ausgangsposition()
    }
})
input.onButtonPressed(Button.A, function () {
    motion1()
})
function motion2 () {
	
}
input.onButtonPressed(Button.AB, function () {
    Ausgangsposition()
})
input.onButtonPressed(Button.B, function () {
    motion2()
})
function Ausgangsposition () {
    Position1 = 90
    Position2 = 90
    ServoSlow.setServoPosition(1, Position1)
    ServoSlow.setServoPosition(2, Position2)
}
function motion1 () {
    Position1 = ServoSlow.setServoAngle(1, 70, 10, Position1, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 140, 10, Position1, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 70, 10, Position1, ServoSlow.ServoDirection.CW)
}
let Position2 = 0
let Position1 = 0
radio.setGroup(1)
Ausgangsposition()
