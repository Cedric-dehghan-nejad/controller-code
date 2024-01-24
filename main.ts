/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Bruneau
 * Created on: Dec 2023
 * This program that makes controller for a car
*/

// variables
let commandNumber: number = 0

// setup
basic.showLeds(`
. . . . .
# # # # .
# # # # #
# . . . #
. . . . .
`)
radio.setGroup(7)

// loop
while (true) {
  // drive forward or backwards
  if (input.buttonIsPressed(Button.A) == true) {
    commandNumber = 3
    radio.sendNumber(commandNumber)
    commandNumber = null
    basic.pause(800)
  }

  // changes drive direction
  if (input.buttonIsPressed(Button.B) == true) {
    commandNumber = 4
    radio.sendNumber(commandNumber)
    commandNumber = null
    basic.pause(800)
  }

  // makes honking noise
  if (input.isGesture(Gesture.Shake) == true) {
    commandNumber = 5
    radio.sendNumber(commandNumber)
    commandNumber = null
    basic.pause(1000)
  }

  // reset
  basic.pause(10)
  basic.clearScreen()

  // to close
  radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber <= 10) {
      basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
      `)
    }
  })
}
