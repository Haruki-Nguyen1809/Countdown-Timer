# Countdown Timer

A browser-based countdown timer built with vanilla HTML, CSS, and JavaScript (no frameworks or libraries) — practicing `setInterval`, `clearInterval`, input validation, and time formatting.

## How to Use

1. Enter a number of seconds into the input field.
2. Click **Generate** to start the countdown.
3. The timer displays the remaining time in `minutes:seconds` format, updating every second.
4. When the countdown reaches zero, it stops automatically and shows a "Hết giờ rồi!" message.
5. If the input is left empty or isn't a valid number, an alert prompts the user to enter a correct number, and the countdown does not start.

## Features

- Converts a single total-seconds value into minutes and seconds for display, without storing them as separate state
- Countdown updates every second via `setInterval`, and stops itself via `clearInterval` once it hits zero
- Zero-padded seconds display (e.g. `1:05` instead of `1:5`)
- Input validation: rejects empty input and non-numeric input before starting the timer
- Timer only starts on button click — nothing runs automatically on page load

## Project Structure

```
├── index.html      # Page structure: title, seconds input, Generate button, timer display, message area
├── index.js        # Timer logic: input handling, countdown loop, formatting, validation
└── style.css       # Styling: layout, timer typography, colors
```

## Core Logic Overview

- **`totalSeconds`** — a single integer holding the remaining time in seconds. Decremented by 1 on every tick; never split into separate minute/second variables, avoiding manual "borrowing" logic.
- **`timerID`** — stores the return value of `setInterval`, declared in the outer scope so both the click handler and `countdownFinished()` can reference it (needed to call `clearInterval(timerID)`).
- **Click handler (Generate button)** — reads the input's `.value` (a string), converts it with `Number()`, validates it with `isNaN()` and an empty-string check (returning early via `alert()` if invalid), then starts `setInterval(countdown, 1000)`.
- **`countdown()`** — runs once per second: decrements `totalSeconds`, computes minutes (`Math.floor(totalSeconds / 60)`) and seconds (`totalSeconds % 60`), zero-pads the seconds when under 10, updates the display, then calls `countdownFinished()`.
- **`countdownFinished()`** — checks if `totalSeconds === 0`; if so, clears the interval and displays the "time's up" message.

## What This Project Practices

- `setInterval` for repeating logic, paired with `setInterval`'s return value and `clearInterval` to stop it
- Storing a single source of truth (`totalSeconds`) and deriving display values from it, rather than storing redundant state
- `Math.floor` and `%` (modulo) together to split a total into two display units
- Converting `<input>` string values to numbers (`Number()`) and validating with `isNaN()`
- Passing a function reference to `setInterval` vs. accidentally calling the function immediately
- Guarding against invalid state (empty/non-numeric input) with an early `return` before starting a timer

## Possible Improvements

- Switch the input to `type="number"` to restrict input at the browser level
- Add a Pause/Resume button
- Add a visual progress bar alongside the numeric display
- Reuse this countdown logic inside the Whack-a-Mole project to add a time limit
