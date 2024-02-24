let randomQuote = document.querySelector(".quote");
let authorName = document.querySelector(".author");
let generateBtn = document.querySelector(".btn");
let storage = JSON.parse(localStorage.getItem("quotes"));

let quoteUrl = "https://api.quotable.io/random";
let getRandomQuote = () => {
  fetch(quoteUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      randomQuote.innerText = data.content;
      authorName.innerText = data.author;
      console.log(data.content);
      console.log(data.author);
    });
};

generateBtn.addEventListener("click", getRandomQuote);
// window.addEventListener("load", getRandomQuote);
