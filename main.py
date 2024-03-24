"""

G か Y

"""
def on_forever():
    while True:
        if input.rotation(Rotation.PITCH) > 50 or input.rotation(Rotation.PITCH) < -50:
            serial.write_line("")
            timeout()
            break
def timeout():
    if input.rotation(Rotation.PITCH) > 50 or input.rotation(Rotation.PITCH) < -50:
        basic.pause(1000)
        timeout()
    else:
        on_forever()
on_forever()