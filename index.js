let tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  tutorials = tutorials.map( tutorial => {
    let words = tutorial.split(" ")
    words = words.map(word => capitalWord(word))
    return words.join(" ")
  })

  return tutorials
}

const capitalWord = word => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}