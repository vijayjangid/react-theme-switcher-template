# Theme switcher template in React

### Using React Hooks, Context API & CSS Variables (Custom Props)

#### CodeSandbox: https://vzmid.csb.app/

- Provides a simple and clean way of implementing a theme toggle.
- Allows theme selection to be stored into localStorage (browser API)
- Makes use of CSS custom properties to provide values for background, text, border, shadow etc in dark/default theme.
- Additional component for showing a random character to in the middle of the screen whenever theme is changed.

![Demo Screenshot](https://user-images.githubusercontent.com/11829883/117410409-ff828680-af2f-11eb-9e0f-8f1c15407a73.gif)


## Folder Structure
- `State` folder contains the context to provide current theme selection and method to toggle theme. It makes use of `useState, useEffect` hooks to create and share context. Additionally, the localStorage API is used to persist theme selection in browser storage.
- `ThemeToggle` component renders the button to toggle theme.
- `Styles.css` in `src` directory defines the variable/properties for various CSS values like background, text color, shadow, text shadow, border etc.
