function A () {
    if (state == 2) {
        if (currX > 0) {
            if (block_type == 0) {
                if (block_direction == 0) {
                    if (led.point(currX - 1, currY) == false && led.point(currX - 1, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                    }
                } else {
                    if (led.point(currX - 1, currY) == false) {
                        led.unplot(currX + 1, currY)
                        currX += -1
                        led.plot(currX, currY)
                    }
                }
            } else if (block_type == 1) {
                if (block_direction == 0) {
                    if (led.point(currX - 1, currY) == false && led.point(currX - 1, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                    }
                } else if (block_direction == 1 && currX > 1) {
                    if (led.point(currX - 1, currY) == false && led.point(currX - 2, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX - 1, currY + 1)
                    }
                } else if (block_direction == 2) {
                    if (led.point(currX - 1, currY) == false && led.point(currX, currY + 1) == false) {
                        led.unplot(currX + 1, currY)
                        led.unplot(currX + 1, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY + 1)
                    }
                } else {
                    if (led.point(currX - 1, currY) == false && led.point(currX - 1, currY + 1) == false) {
                        led.unplot(currX + 1, currY)
                        led.unplot(currX, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                    }
                }
            } else {
                if (led.point(currX - 1, currY) == false && led.point(currX - 1, currY + 1) == false) {
                    led.unplot(currX + 1, currY)
                    led.unplot(currX + 1, currY + 1)
                    currX += -1
                    led.plot(currX, currY)
                    led.plot(currX, currY + 1)
                }
            }
        }
    }
}
function Animaton () {
    Leds = true
    basic.showLeds(`
        . # # # .
        # # . # #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        `)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Leds = false
    led.setBrightness(200)
    if (state == -1) {
        basic.clearScreen()
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
        state = 0
    } else if (state == 2) {
        if (block_type == 0) {
            if (block_direction == 0) {
                if (currX < 4) {
                    if (led.point(currX + 1, currY) == false) {
                        led.unplot(currX, currY + 1)
                        led.plot(currX + 1, currY)
                        block_direction = 1
                    }
                }
            } else {
                if (currY < 4) {
                    if (led.point(currX, currY + 1) == false) {
                        led.unplot(currX + 1, currY)
                        led.plot(currX, currY + 1)
                        block_direction = 0
                    }
                }
            }
        } else if (block_type == 1) {
            if (block_direction == 0) {
                if (currX < 4) {
                    if (led.point(currX + 1, currY) == false) {
                        led.unplot(currX, currY)
                        led.plot(currX + 1, currY)
                        currX += 1
                        block_direction = 1
                    }
                }
            } else if (block_direction == 1) {
                if (currX <= 4) {
                    if (led.point(currX - 1, currY) == false) {
                        led.unplot(currX - 1, currY + 1)
                        led.plot(currX - 1, currY)
                        currX += -1
                        block_direction = 2
                    }
                }
            } else if (block_direction == 2) {
                if (currX <= 4) {
                    if (led.point(currX, currY + 1) == false) {
                        led.unplot(currX + 1, currY + 1)
                        led.plot(currX, currY + 1)
                        block_direction = 3
                    }
                }
            } else {
                if (currY < 4) {
                    if (led.point(currX + 1, currY + 1) == false) {
                        led.unplot(currX + 1, currY)
                        led.plot(currX + 1, currY + 1)
                        block_direction = 0
                    }
                }
            }
        }
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.play(music.createSoundExpression(WaveShape.Triangle, 2014, 2013, 255, 0, 168, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    Mode += 1
})
function B () {
    if (state == 2) {
        if (currX < 4) {
            if (block_type == 0) {
                if (block_direction == 0) {
                    if (led.point(currX + 1, currY) == false && led.point(currX + 1, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += 1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                    }
                } else if (block_direction == 1 && currX < 3) {
                    if (led.point(currX + 2, currY) == false) {
                        led.unplot(currX, currY)
                        currX += 1
                        led.plot(currX + 1, currY)
                    }
                }
            } else if (block_type == 1) {
                if (block_direction == 0 && currX < 3) {
                    if (led.point(currX + 1, currY) == false && led.point(currX + 2, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += 1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY + 1)
                    }
                } else if (block_direction == 1) {
                    if (led.point(currX + 1, currY) == false && led.point(currX + 1, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX - 1, currY + 1)
                        currX += 1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                    }
                } else if (block_direction == 2 && currX < 3) {
                    if (led.point(currX + 2, currY) == false && led.point(currX + 2, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY + 1)
                        currX += 1
                        led.plot(currX + 1, currY)
                        led.plot(currX + 1, currY + 1)
                    }
                } else {
                    if (currX < 3) {
                        if (led.point(currX + 2, currY) == false && led.point(currX + 1, currY + 1) == false) {
                            led.unplot(currX, currY)
                            led.unplot(currX, currY + 1)
                            currX += 1
                            led.plot(currX + 1, currY)
                            led.plot(currX, currY + 1)
                        }
                    }
                }
            } else {
                if (currX < 3) {
                    if (led.point(currX + 2, currY) == false && led.point(currX + 2, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += 1
                        led.plot(currX + 1, currY)
                        led.plot(currX + 1, currY + 1)
                    }
                }
            }
        }
    }
}
function check_line () {
    line_del = 4
    while (line_del >= 0) {
        clear_row = 1
        for (let x = 0; x <= 4; x++) {
            if (led.point(x, line_del) == false) {
                clear_row = 0
            }
        }
        if (clear_row == 1) {
            for (let x2 = 0; x2 <= 4; x2++) {
                led.unplot(x2, line_del)
            }
            basic.pause(100)
            for (let y = 0; y <= line_del - 1; y++) {
                for (let x3 = 0; x3 <= 4; x3++) {
                    if (led.point(x3, line_del - 1 - y) == true) {
                        led.plot(x3, line_del - y)
                        led.unplot(x3, line_del - 1 - y)
                    }
                }
            }
        } else {
            line_del += -1
        }
    }
}
function init () {
    Mode = 0
    Sound = 0
    fail = 0
    score = 0
    state = -1
    currX = 0
    currY = 0
    block_type = 0
    block_direction = 0
}
input.onButtonPressed(Button.AB, function () {
    Sound += 1
})
function display () {
    for (let x4 = 0; x4 <= 4; x4++) {
        let row4: number[] = []
        let row3: number[] = []
        let row2: number[] = []
        let row1: number[] = []
        let row0: number[] = []
        if (row0[x4] == 1) {
            led.plot(x4, 0)
        }
        if (row1[x4] == 1) {
            led.plot(x4, 1)
        }
        if (row2[x4] == 1) {
            led.plot(x4, 2)
        }
        if (row3[x4] == 1) {
            led.plot(x4, 3)
        }
        if (row4[x4] == 1) {
            led.plot(x4, 4)
        }
    }
}
function check_start () {
    if (led.point(2, 0) == true) {
        fail = 1
    } else if (led.point(2, 1) == true) {
        fail = 1
    } else if (led.point(3, 0) == true) {
        fail = 1
    } else if (led.point(3, 1) == true) {
        fail = 1
    }
    if (fail == 1) {
        for (let y2 = 0; y2 <= 1; y2++) {
            for (let x5 = 0; x5 <= 1; x5++) {
                led.plot(x5 + 2, y2)
            }
        }
        basic.pause(500)
    }
}
let score = 0
let fail = 0
let Sound = 0
let clear_row = 0
let line_del = 0
let Mode = 0
let Leds = false
let currY = 0
let block_direction = 0
let block_type = 0
let currX = 0
let state = 0
basic.clearScreen()
Animaton()
init()
loops.everyInterval(10, function () {
    if (Mode == 0) {
        if (input.buttonIsPressed(Button.A)) {
            A()
            basic.pause(100)
        } else if (input.buttonIsPressed(Button.B)) {
            B()
            basic.pause(100)
        }
    } else if (Mode == 1) {
        if (input.acceleration(Dimension.X) >= 500) {
            B()
            basic.pause(25)
        } else if (input.acceleration(Dimension.X) <= -500) {
            A()
            basic.pause(25)
        }
    } else if (Mode >= 2) {
        Mode = 0
    }
    if (Sound == 0) {
        music.setVolume(127)
    } else if (Sound == 1) {
        music.stopAllSounds()
    } else if (Sound >= 2) {
        Sound = 0
    }
})
basic.forever(function () {
    if (Leds == true) {
        led.setBrightness(input.soundLevel())
    }
    if (state == 1) {
        block_type = randint(0, 2)
        block_direction = 0
        currX = 2
        currY = 0
        if (block_type == 0) {
            led.plot(currX, currY)
            led.plot(currX, currY + 1)
        } else if (block_type == 1) {
            led.plot(currX, currY)
            led.plot(currX, currY + 1)
            led.plot(currX + 1, currY + 1)
        } else {
            led.plot(currX, currY)
            led.plot(currX, currY + 1)
            led.plot(currX + 1, currY + 1)
            led.plot(currX + 1, currY)
        }
        state = 2
    } else if (state == 2) {
        if (block_type == 0) {
            if (block_direction == 0) {
                if (currY < 3) {
                    if (led.point(currX, currY + 2) == false) {
                        led.unplot(currX, currY)
                        currY += 1
                        led.plot(currX, currY + 1)
                    } else {
                        state = 0
                    }
                } else {
                    state = 0
                }
            } else {
                if (currY < 4) {
                    if (led.point(currX, currY + 1) == false && led.point(currX + 1, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY)
                        currY += 1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY)
                    } else {
                        state = 0
                    }
                } else {
                    state = 0
                }
            }
        } else if (block_type == 1) {
            if (block_direction == 0) {
                if (currY < 3) {
                    if (led.point(currX, currY + 2) == false && led.point(currX + 1, currY + 2) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY + 1)
                        currY += 1
                        led.plot(currX, currY + 1)
                        led.plot(currX + 1, currY + 1)
                    } else {
                        state = 0
                    }
                } else {
                    state = 0
                }
            } else if (block_direction == 1) {
                if (currY < 3) {
                    if (led.point(currX, currY + 2) == false && led.point(currX - 1, currY + 2) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX - 1, currY + 1)
                        currY += 1
                        led.plot(currX, currY + 1)
                        led.plot(currX - 1, currY + 1)
                    } else {
                        state = 0
                    }
                } else {
                    state = 0
                }
            } else if (block_direction == 2) {
                if (currY < 3) {
                    if (led.point(currX, currY + 1) == false && led.point(currX + 1, currY + 2) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY)
                        currY += 1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY + 1)
                    } else {
                        state = 0
                    }
                } else {
                    state = 0
                }
            } else {
                if (currY < 3) {
                    if (led.point(currX, currY + 2) == false && led.point(currX + 1, currY + 1) == false) {
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY)
                        currY += 1
                        led.plot(currX + 1, currY)
                        led.plot(currX, currY + 1)
                    } else {
                        state = 0
                    }
                } else {
                    state = 0
                }
            }
        } else {
            if (currY < 3) {
                if (led.point(currX, currY + 2) == false && led.point(currX + 1, currY + 2) == false) {
                    led.unplot(currX, currY)
                    led.unplot(currX + 1, currY)
                    currY += 1
                    led.plot(currX, currY + 1)
                    led.plot(currX + 1, currY + 1)
                } else {
                    state = 0
                }
            } else {
                state = 0
            }
        }
    } else if (state == 0) {
        check_line()
        check_start()
        if (fail == 0) {
            music.play(music.builtinPlayableSoundEffect(soundExpression.happy), music.PlaybackMode.InBackground)
            score += 1
            state = 1
        } else {
            music.stopAllSounds()
            basic.clearScreen()
            basic.pause(100)
            billy.say("Game Over")
            basic.showString("SCORE:")
            basic.showNumber(score)
            init()
        }
    }
    basic.pause(500)
})
basic.forever(function () {
    if (Leds == true) {
        led.setBrightness(input.soundLevel())
    }
})
