def A():
    global currX
    if state == 2:
        if currX > 0:
            if block_type == 0:
                if block_direction == 0:
                    if led.point(currX - 1, currY) == False and led.point(currX - 1, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                else:
                    if led.point(currX - 1, currY) == False:
                        led.unplot(currX + 1, currY)
                        currX += -1
                        led.plot(currX, currY)
            elif block_type == 1:
                if block_direction == 0:
                    if led.point(currX - 1, currY) == False and led.point(currX - 1, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                elif block_direction == 1 and currX > 1:
                    if led.point(currX - 1, currY) == False and led.point(currX - 2, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX - 1, currY + 1)
                elif block_direction == 2:
                    if led.point(currX - 1, currY) == False and led.point(currX, currY + 1) == False:
                        led.unplot(currX + 1, currY)
                        led.unplot(currX + 1, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY + 1)
                else:
                    if led.point(currX - 1, currY) == False and led.point(currX - 1, currY + 1) == False:
                        led.unplot(currX + 1, currY)
                        led.unplot(currX, currY + 1)
                        currX += -1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
            else:
                if led.point(currX - 1, currY) == False and led.point(currX - 1, currY + 1) == False:
                    led.unplot(currX + 1, currY)
                    led.unplot(currX + 1, currY + 1)
                    currX += -1
                    led.plot(currX, currY)
                    led.plot(currX, currY + 1)
def Animaton():
    global Leds
    Leds = True
    basic.show_leds("""
        . # # # .
        # # . # #
        # . . . #
        # . . . #
        . # # # .
        """)
    basic.pause(100)
    music.play(music.builtin_playable_sound_effect(soundExpression.hello),
        music.PlaybackMode.IN_BACKGROUND)
    basic.show_leds("""
        . # # # .
        # . . . #
        # # . # #
        # . . . #
        . # # # .
        """)

def on_logo_pressed():
    global Leds, state, block_direction, currX
    Leds = False
    led.set_brightness(135)
    if state == -1:
        basic.clear_screen()
        music._play_default_background(music.built_in_playable_melody(Melodies.NYAN),
            music.PlaybackMode.LOOPING_IN_BACKGROUND)
        state = 0
    elif state == 2:
        if block_type == 0:
            if block_direction == 0:
                if currX < 4:
                    if led.point(currX + 1, currY) == False:
                        led.unplot(currX, currY + 1)
                        led.plot(currX + 1, currY)
                        block_direction = 1
            else:
                if currY < 4:
                    if led.point(currX, currY + 1) == False:
                        led.unplot(currX + 1, currY)
                        led.plot(currX, currY + 1)
                        block_direction = 0
        elif block_type == 1:
            if block_direction == 0:
                if currX < 4:
                    if led.point(currX + 1, currY) == False:
                        led.unplot(currX, currY)
                        led.plot(currX + 1, currY)
                        currX += 1
                        block_direction = 1
            elif block_direction == 1:
                if currX <= 4:
                    if led.point(currX - 1, currY) == False:
                        led.unplot(currX - 1, currY + 1)
                        led.plot(currX - 1, currY)
                        currX += -1
                        block_direction = 2
            elif block_direction == 2:
                if currX <= 4:
                    if led.point(currX, currY + 1) == False:
                        led.unplot(currX + 1, currY + 1)
                        led.plot(currX, currY + 1)
                        block_direction = 3
            else:
                if currY < 4:
                    if led.point(currX + 1, currY + 1) == False:
                        led.unplot(currX + 1, currY)
                        led.plot(currX + 1, currY + 1)
                        block_direction = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_logo_long_pressed():
    global Mode
    music.play(music.create_sound_expression(WaveShape.TRIANGLE,
            2014,
            2013,
            255,
            0,
            168,
            SoundExpressionEffect.VIBRATO,
            InterpolationCurve.CURVE),
        music.PlaybackMode.UNTIL_DONE)
    Mode += 1
input.on_logo_event(TouchButtonEvent.LONG_PRESSED, on_logo_long_pressed)

def B():
    global currX
    if state == 2:
        if currX < 4:
            if block_type == 0:
                if block_direction == 0:
                    if led.point(currX + 1, currY) == False and led.point(currX + 1, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += 1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                elif block_direction == 1 and currX < 3:
                    if led.point(currX + 2, currY) == False:
                        led.unplot(currX, currY)
                        currX += 1
                        led.plot(currX + 1, currY)
            elif block_type == 1:
                if block_direction == 0 and currX < 3:
                    if led.point(currX + 1, currY) == False and led.point(currX + 2, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += 1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY + 1)
                elif block_direction == 1:
                    if led.point(currX + 1, currY) == False and led.point(currX + 1, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX - 1, currY + 1)
                        currX += 1
                        led.plot(currX, currY)
                        led.plot(currX, currY + 1)
                elif block_direction == 2 and currX < 3:
                    if led.point(currX + 2, currY) == False and led.point(currX + 2, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY + 1)
                        currX += 1
                        led.plot(currX + 1, currY)
                        led.plot(currX + 1, currY + 1)
                else:
                    if currX < 3:
                        if led.point(currX + 2, currY) == False and led.point(currX + 1, currY + 1) == False:
                            led.unplot(currX, currY)
                            led.unplot(currX, currY + 1)
                            currX += 1
                            led.plot(currX + 1, currY)
                            led.plot(currX, currY + 1)
            else:
                if currX < 3:
                    if led.point(currX + 2, currY) == False and led.point(currX + 2, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX, currY + 1)
                        currX += 1
                        led.plot(currX + 1, currY)
                        led.plot(currX + 1, currY + 1)
def check_line():
    global line_del, clear_row
    line_del = 4
    while line_del >= 0:
        clear_row = 1
        for x in range(5):
            if led.point(x, line_del) == False:
                clear_row = 0
        if clear_row == 1:
            for x2 in range(5):
                led.unplot(x2, line_del)
            basic.pause(100)
            y = 0
            while y <= line_del - 1:
                for x3 in range(5):
                    if led.point(x3, line_del - 1 - y) == True:
                        led.plot(x3, line_del - y)
                        led.unplot(x3, line_del - 1 - y)
                y += 1
        else:
            line_del += -1
def init():
    global Mode, Sound, fail, score, state, currX, currY, block_type, block_direction
    Mode = 0
    Sound = 0
    fail = 0
    score = 0
    state = -1
    currX = 0
    currY = 0
    block_type = 0
    block_direction = 0

def on_button_pressed_ab():
    global Sound
    Sound += 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def display():
    for x4 in range(5):
        row4: List[number] = []
        row3: List[number] = []
        row2: List[number] = []
        row1: List[number] = []
        row0: List[number] = []
        if row0[x4] == 1:
            led.plot(x4, 0)
        if row1[x4] == 1:
            led.plot(x4, 1)
        if row2[x4] == 1:
            led.plot(x4, 2)
        if row3[x4] == 1:
            led.plot(x4, 3)
        if row4[x4] == 1:
            led.plot(x4, 4)
def check_start():
    global fail
    if led.point(2, 0) == True:
        fail = 1
    elif led.point(2, 1) == True:
        fail = 1
    elif led.point(3, 0) == True:
        fail = 1
    elif led.point(3, 1) == True:
        fail = 1
    if fail == 1:
        for y2 in range(2):
            for x5 in range(2):
                led.plot(x5 + 2, y2)
        basic.pause(500)
score = 0
fail = 0
Sound = 0
clear_row = 0
line_del = 0
Mode = 0
Leds = False
currY = 0
block_direction = 0
block_type = 0
currX = 0
state = 0
basic.clear_screen()
Animaton()
init()

def on_every_interval():
    global Mode, Sound
    if Mode == 0:
        if input.button_is_pressed(Button.A):
            A()
            basic.pause(100)
        elif input.button_is_pressed(Button.B):
            B()
            basic.pause(100)
    elif Mode == 1:
        if input.acceleration(Dimension.X) >= 500:
            B()
            basic.pause(25)
        elif input.acceleration(Dimension.X) <= -500:
            A()
            basic.pause(25)
    elif Mode >= 2:
        Mode = 0
    if Sound == 0:
        music.set_volume(127)
    elif Sound == 1:
        music.stop_all_sounds()
    elif Sound >= 2:
        Sound = 0
loops.every_interval(10, on_every_interval)

def on_forever():
    global block_type, block_direction, currX, currY, state, score
    if Leds == True:
        led.set_brightness(input.sound_level())
    if state == 1:
        block_type = randint(0, 2)
        block_direction = 0
        currX = 2
        currY = 0
        if block_type == 0:
            led.plot(currX, currY)
            led.plot(currX, currY + 1)
        elif block_type == 1:
            led.plot(currX, currY)
            led.plot(currX, currY + 1)
            led.plot(currX + 1, currY + 1)
        else:
            led.plot(currX, currY)
            led.plot(currX, currY + 1)
            led.plot(currX + 1, currY + 1)
            led.plot(currX + 1, currY)
        state = 2
    elif state == 2:
        if block_type == 0:
            if block_direction == 0:
                if currY < 3:
                    if led.point(currX, currY + 2) == False:
                        led.unplot(currX, currY)
                        currY += 1
                        led.plot(currX, currY + 1)
                    else:
                        state = 0
                else:
                    state = 0
            else:
                if currY < 4:
                    if led.point(currX, currY + 1) == False and led.point(currX + 1, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY)
                        currY += 1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY)
                    else:
                        state = 0
                else:
                    state = 0
        elif block_type == 1:
            if block_direction == 0:
                if currY < 3:
                    if led.point(currX, currY + 2) == False and led.point(currX + 1, currY + 2) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY + 1)
                        currY += 1
                        led.plot(currX, currY + 1)
                        led.plot(currX + 1, currY + 1)
                    else:
                        state = 0
                else:
                    state = 0
            elif block_direction == 1:
                if currY < 3:
                    if led.point(currX, currY + 2) == False and led.point(currX - 1, currY + 2) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX - 1, currY + 1)
                        currY += 1
                        led.plot(currX, currY + 1)
                        led.plot(currX - 1, currY + 1)
                    else:
                        state = 0
                else:
                    state = 0
            elif block_direction == 2:
                if currY < 3:
                    if led.point(currX, currY + 1) == False and led.point(currX + 1, currY + 2) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY)
                        currY += 1
                        led.plot(currX, currY)
                        led.plot(currX + 1, currY + 1)
                    else:
                        state = 0
                else:
                    state = 0
            else:
                if currY < 3:
                    if led.point(currX, currY + 2) == False and led.point(currX + 1, currY + 1) == False:
                        led.unplot(currX, currY)
                        led.unplot(currX + 1, currY)
                        currY += 1
                        led.plot(currX + 1, currY)
                        led.plot(currX, currY + 1)
                    else:
                        state = 0
                else:
                    state = 0
        else:
            if currY < 3:
                if led.point(currX, currY + 2) == False and led.point(currX + 1, currY + 2) == False:
                    led.unplot(currX, currY)
                    led.unplot(currX + 1, currY)
                    currY += 1
                    led.plot(currX, currY + 1)
                    led.plot(currX + 1, currY + 1)
                else:
                    state = 0
            else:
                state = 0
    elif state == 0:
        check_line()
        check_start()
        if fail == 0:
            music.play(music.builtin_playable_sound_effect(soundExpression.happy),
                music.PlaybackMode.IN_BACKGROUND)
            score += 1
            state = 1
        else:
            music.stop_all_sounds()
            basic.clear_screen()
            basic.pause(100)
            music._play_default_background(music.built_in_playable_melody(Melodies.POWER_DOWN),
                music.PlaybackMode.IN_BACKGROUND)
            basic.show_string("GAME OVER")
            basic.show_string("SCORE:")
            basic.show_number(score)
            init()
    basic.pause(500)
basic.forever(on_forever)

def on_forever2():
    if Leds == True:
        led.set_brightness(20 - input.sound_level())
basic.forever(on_forever2)
