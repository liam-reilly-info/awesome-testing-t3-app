import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import Greeting from "./greeting"

test("name supplied - displays personalised greeting", async () => {
  // ARRANGE
  render(<Greeting name="liam" />)

  // ACT
  await screen.findByRole("heading")

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Hello liam")
})

test("name not supplied - asks for name", async () => {
  // ARRANGE
  render(<Greeting name="" />)

  // ACT
  await screen.findByRole("heading")

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("I'm sorry I didn't catch your name?")
})