# SASS Workshop

## SASS, what is it?

SASS, an acronym for Syntactically Awesome Style Sheets, is a *CSS Preprocessor*, in other words, we can write `.sass` files, and then these can be translated through a process called _preprocessing_ into regular CSS which is readable by the browser. Also see: [Sass Docs](https://sass-lang.com/guide)

## Why write SASS? 

* Cleaner, more concise syntax
    * SASS code does away with the curly-braces and semicolons of CSS, instead using indentation to convey semantic value. 
* Easy to use variables
    * While CSS does allow variables, SASS variable syntax is much simpler. Just use `$my-var: [some value]` to declare a variable, and `background: $my-var` to access it.
* Nesting!!!
    * Nesting syntax is a way to control specificity and condense our style sheets.
* Partials, Mixins, and Placeholder Classes
    * These tools allow us to further condense our code and adhere to the DRY principle -- Don't Repeat Yourself!
* Color functions (lighten, darken, etc)
    * Need a lighter shade of a color? Simply use `lighten([color], [percent value])`. 

## Getting started

### Using SASS in a create-react-app project

Source: https://github.com/Rasbandit/SASS-in-Create-React-App

Install the following packages:

<pre>
npm install node-sass-chokidar npm-run-all
</pre>

Then, go to `package.json` and add the following lines to the scripts list.

<pre>
"build-css": "node-sass-chokidar src/ -o src/",
"watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
"start-js": "react-scripts start",
</pre>

Then modify the start and build scripts in `package.json`

<pre>
"start": "npm-run-all -p watch-css start-js",
"build": "npm run build-css && react-scripts build",
</pre>

Now when you run `npm start`, it will watch for changes in your SASS files and actively translate them into CSS files. 

## File Structure and Partials

* In the `src` folder create a `main.sass` file. 
    * This will be the file that gets converted to the `main.css` file, when we run our scripts. This file will import all our other SASS files like so: `@import './components/home/_home.sass'`. 
    * All other SASS files should begin with an underscore, so that they will be ignored by the preprocessor -- we only want to end up with one CSS file -- `main.css`. A SASS file that begins with an underscore is known as a `partial`. 

## Mixins

* Mixins look like functions, and they allow us to make groups of CSS declarations that you can reuse. 
    * These can be used for vendor prefixes or for commonly grouped settings like `flex`, `align-items`, and `justify-content`.

## Color Functions

These include: lighten, darken, saturate, invert, complement, grayscale, and mix.

Examples: https://codepen.io/nate_08/pen/MBqaVa
