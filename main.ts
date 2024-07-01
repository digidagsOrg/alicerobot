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
    Position1 = ServoSlow.setServoAngle(1, 20, 10, Position1, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 40, 10, Position1, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position1 = ServoSlow.setServoAngle(1, 20, 10, Position1, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 30, 10, Position2, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 60, 10, Position2, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 30, 10, Position2, ServoSlow.ServoDirection.CW)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
}
input.onButtonPressed(Button.AB, function () {
    Ausgangsposition()
})
input.onButtonPressed(Button.B, function () {
    motion2()
})
function Ausgangsposition () {
    Position2 = 85
    Position1 = 90
    ServoSlow.setServoPosition(1, Position1)
    ServoSlow.setServoPosition(2, Position2)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo1)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo2)
}
function motion1 () {
    Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 140, 10, Position2, ServoSlow.ServoDirection.CCW)
    basic.pause(500)
    Position2 = ServoSlow.setServoAngle(2, 70, 10, Position2, ServoSlow.ServoDirection.CW)
    kitronik_simple_servo.servoStop(kitronik_simple_servo.ServoChoice.servo2)
}
let Position2 = 0
let Position1 = 0
radio.setGroup(1)
Ausgangsposition()
