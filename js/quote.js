const quoteBook = [
  {
    quote: "Concentration comes out of a combination of confidence and hunger.",
    author: "Arnold Palmer",
  },
  {
    quote:
      "Death is nothing; but to live defeated and inglorious is to die daily.",
    author: "Napoleon Bonaparte",
  },
  {
    quote:
      "Personally I'm always ready to learn, although I do not always like being taught.",
    author: "Sir Winston Churchill",
  },
  {
    quote:
      "Study without desire spoils the memory, and it retains nothing that it takes in.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "Strong reasons make strong actions.",
    author: "William Shakespeare",
  },
  {
    quote: "If you don't risk anything you risk even more.",
    author: "Erica Jong",
  },
  {
    quote: "Employ thy time well, if thou meanest to get leisure.",
    author: "Benjamin Franklin",
  },
  {
    quote: "Happiness gives us the energy which is the basis of health.",
    author: "Henri-Frederic Amiel",
  },
  {
    quote: "Travel is only glamorous in retrospect.",
    author: "Paul Theroux",
  },
  {
    quote: "Maturity is only a short break in adolescence.",
    author: "Jules Feiffer",
  },
];
function quoteSelect() {
  const quotes = document.querySelector("#quotes span:first-child");
  const authors = document.querySelector("#quotes span:last-child");

  const randQuote = quoteBook[Math.floor(Math.random() * quoteBook.length)];

  quotes.innerText = randQuote.quote;
  authors.innerText = randQuote.author;
}

quoteSelect();
