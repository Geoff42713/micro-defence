def on_button_pressed_a():
    game.add_score(1)
    basic.show_string("(A) N")
    radio.send_string("Nuke")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    basic.show_string("Developed by")
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_screen_up():
    basic.show_icon(IconNames.ASLEEP)
    game.resume()
input.on_gesture(Gesture.SCREEN_UP, on_gesture_screen_up)

def on_gesture_screen_down():
    game.pause()
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    basic.show_number(game.score())
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_string(receivedString):
    basic.show_leds("""
        # # # # #
        # . # . #
        # . # . #
        . # # # .
        . # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # . # . #
        # . # . #
        . # # # .
        . # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.show_leds("""
        # # # # #
        # . # . #
        # . # . #
        . # # # .
        . # # # .
        """)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    game.add_score(1)
    basic.show_string("(B) O")
    radio.send_string("Orbital strike")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    basic.show_string("Matthew Campbell")
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

game.set_score(0)
basic.show_string("(A) N (B) O")
basic.show_leds("""
    # . . . #
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    """)