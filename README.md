# Frontend Mentor - Frontend quiz app

![Design preview for the Frontend quiz app coding challenge](./preview.jpg)

## The challenge

Your challenge is to build out this quiz app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

We provide the data in a local `data.json` file, so use that to populate the content for the quizzes.

Your users should be able to:

- :white_check_mark: Select a quiz subject [Check solution here](#quiz-subject):point_left:
- :white_check_mark: Select a single answer from each question from a choice of four
- :white_check_mark: See an error message when trying to submit an answer without making a selection
- :white_check_mark: See if they have made a correct or incorrect choice when they submit an answer
- :white_check_mark: Move on to the next question after seeing the question result
- :white_check_mark: See a completed state with the score after the final question
- :white_check_mark: Play again to choose another subject
- :white_check_mark: View the optimal layout for the interface depending on their device's screen size
- :white_check_mark: See hover and focus states for all interactive elements on the page
- :white_check_mark: Navigate the entire app only using their keyboard [Check solution here](#keyboard):point_left:
- :white_check_mark: **Bonus**: Change the app's theme between light and dark

# Frontend Mentor - Frontend quiz app solution

This is a solution to the [Frontend quiz app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


### Screenshot

![Desktop](./Desktop (1440px).png)

![Mobile](./Mobile (375px).png)

### Links

- Solution URL: [Solution source files](https://github.com/marcfranciss/Frontend-quiz-app/tree/main/src)
- Live Site URL: [Add live site URL here](https://marcfranciss.github.io/Frontend-quiz-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Preprocessor (SaSS)
- Flexbox
- [React](https://reactjs.org/) - JS library
- [SaSS](https://sass-lang.com/) - For styles
- [Typescript](https://www.typescriptlang.org/) - For cleaner JS

### What I learned

I leared a lot about React's ThemeContext and ThemeProvider. How to use it in dynamically changing themes. Also, scss' mixins and function help greatly in the theme's building process.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Katie McTigue's Dark Mode in Sass](https://medium.com/@katiemctigue/how-to-create-a-dark-mode-in-sass-609f131a3995) - This is an amazing article which helped me finally understand mixins and how to implement it throughout the project. I'd recommend it to anyone still learning this concept.
- [David Xu's 'Light mode/Dark mode: Dynamic theming through SCSS mixin'](https://david-x.medium.com/light-mode-dark-mode-dynamic-theming-through-scss-mixin-c86e57a4de49) - This is also an amazing article which helped me minify the usage of mixins and functions for dark/light theme. Check this out as well if you're trying to learn themes using sass.

## Author

- Website - [MackersDev](https://mackersdev.net)
- Frontend Mentor - [@marcfranciss](https://www.frontendmentor.io/profile/marcfranciss)

## Quiz subject

- Selecting quiz subject requires that the landing page is visible or the quiz is refreshed/resets.
- Setting conditional statement to check if the client has selected a subject in **<main>** and display the quiz in <section>
```
const [subjectSelected, setSubjectSelected] = useState(true);

{subjectSelected ? (<main>...</main>) : (<section>...</section>)}
```

## Keyboard accessibility

To have the options on radio button easily accessible with key board, the 'autoFocus' attribute is added.

```html
<input autoFocus />
```

Then, for the first radio button to be focussed, a simple code is added 'autoFocus={i===0}', where 'i' is index and '0' is the first item in the index.

```html
<input autoFocus={i === 0} />
```
