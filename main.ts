input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "1234") {
        alarm = 1
        Sound = 1
    } else if (receivedString == "5678") {
        Sound = 1
        alarm = 2
    } else {
        radio.sendString("Incorrect!")
        alarm = 3
    }
})
let Sound = 0
let alarm = 0
radio.setGroup(1)
alarm = 2
music.setVolume(255)
basic.forever(function () {
    if (alarm == 1) {
        radio.sendString("Alarm set!")
        basic.showIcon(IconNames.Happy)
        if (Sound == 1) {
            music.playMelody("F C5 A C5 A C5 C5 B ", 200)
            Sound = 0
            music.stopAllSounds()
        }
        if (input.lightLevel() > 200) {
            alarm = 3
        }
    } else if (alarm == 2) {
        radio.sendString("Alarm disabled!")
        basic.showIcon(IconNames.Sad)
        if (Sound == 1) {
            music.playMelody("F C5 A C5 A C5 C5 B ", 200)
            Sound = 0
            music.stopAllSounds()
        }
    } else if (alarm == 3) {
        basic.showIcon(IconNames.Angry)
        music.playMelody("C C5 C C5 C C5 C C5 ", 500)
    }
})
