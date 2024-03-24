/**
 * G か Y
 */
function on_forever () {
    while (true) {
        if (input.rotation(Rotation.Pitch) > 50 || input.rotation(Rotation.Pitch) < -50) {
            serial.writeLine("")
            timeout()
            break;
        }
    }
}
function timeout () {
    if (input.rotation(Rotation.Pitch) > 50 || input.rotation(Rotation.Pitch) < -50) {
        basic.pause(1000)
        timeout()
    } else {
        on_forever()
    }
}
on_forever()
