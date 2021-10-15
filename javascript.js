var quotes = [
  {
    name: "Mendeleyev Russian chemist.",
    quote: "Genius only means hard-working all one’s life.",
  },

  {
    name: "Balzac.",
    quote:
      "There is no such thing as a great talent without great will – power.",
  },

  {
    name: "Thomas Addison.",
    quote: "A strong man will struggle with the storms of fate.",
  },

  {
    name: "John Ruskin.",
    quote: "Living without an aim is like sailing without a compass.",
  },

  {
    name: "Charles Chaplin.",
    quote: "You have to believe in yourself. That’s the secret of success.",
  },

  {
    name: "Ralph Waldo Emerson , American thinker.",
    quote: "The first wealth is health.",
  },

  {
    name: "Charles Darwin.",
    quote:
      "A man who dares to waste one hour of time has not discovered the value of life.",
  },

  {
    name: "Thomas A. Edison.",
    quote:
      "Genius is one percent inspiration, ninety-nine percent perspiration.",
  },

  {
    name: "Rabindranath Tagore.",
    quote:
      "It is very simple to be happy, but it is very difficult to be simple.",
  },

  {
    name: "Mohandas Gandhi.",
    quote:
      "Strength does not come from physical capacity. It comes from an indomitable will.",
  },
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(randomNumber);
  document.getElementById("nameDisplay").innerHTML = quotes[randomNumber].name;
  document.getElementById("quoteDisplay").innerHTML =
    quotes[randomNumber].quote;
}

// student = {
//   name: "raphael",
// };

// student.name;
