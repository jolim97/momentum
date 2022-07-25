const quotes = [
    {
        author: "Richard Feynman",
        quote: "It doesn't matter how beautiful your theory is, it doesn't matter how smart you are. If it doesn't agree with experiment, it's wrong.",
    },
    {
        author: "Carl Sagan",
        quote: "In order to make an apple pie from scratch, you must first create the universe.",
    },
    {
        author: "Albert Einstein",
        quote: "Nothing happens until something moves.",
    },
    {
        author: "Richard Feynman",
        quote: "Nature has a great simplicity and therefore a great beauty."
    },
    {
        author: "Roy T. Bennett",
        quote: "Start each day with a positive thought and a grateful heart.",
    },
    {
        author: "Friedrich Nietzsche",
        quote: "Without music, life would be a mistake."
    },
    {
        author: "Elbert Hubbard",
        quote: "A friend is someone who knows all about you and still loves you.",
    },
    {
        author: "William Shakespeare",
        quote: "Love looks not with the eyes, but with the mind, and therefore is winged Cupid painted blind.",
    },
    {
        author: "William Shakespeare",
        quote: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    },
    {
        author: "William Shakespear",
        quote: "There is nothing either good or bad, but thinking makes it so.",
    },
    {
        author: "Victor Hugo",
        quote: "Music expresses that which cannot be said and on which it is impossible to be silent.",
    }
]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todaysQuote);
quote.innerText = todaysQuote.quote;
author.innerText = "- " + todaysQuote.author + " -";