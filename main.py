from microbit import *

soundDisplay = True

while soundDisplay == True:
    if input.sound_level() > 204:
        basic.show_leds("""
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            """)
    elif input.sound_level() > 153:
        basic.show_leds("""
            . . . . .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            """)
    elif input.sound_level() > 102:
        basic.show_leds("""
            . . . . .
            . . . . .
            # # # . .
            # # # . .
            # # # . .
            """)
    elif input.sound_level() > 51:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            # # . . .
            # # . . .
            """)
    elif input.sound_level() > 0:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            """)