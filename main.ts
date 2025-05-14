let value = 0
irRemote.connectInfrared(DigitalPin.P16)
basic.forever(function on_forever() {
    
    value = irRemote.returnIrButton()
    if (value == 70) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 100)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 100)
    } else if (value == 68) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 70)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 130)
    } else if (value == 67) {
        MiniCar.motor(Motorlist.M1, Direction1.Forward, 130)
        MiniCar.motor(Motorlist.M2, Direction1.Forward, 70)
    } else if (value == 21) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 100)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 100)
    } else if (value == 64) {
        MiniCar.motor(Motorlist.M1, Direction1.Backward, 0)
        MiniCar.motor(Motorlist.M2, Direction1.Backward, 0)
    }
    
})
