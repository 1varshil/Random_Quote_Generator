console.log("hi this is working:");

const quoteText = document.querySelector(".quote");
quoteBtn = document.querySelector("button");

function randomQuote() {
    fetch("https://api.quotable.io/random")
    .then(res=> 
        res.json())
    
    .then(data=>
        {  
        console.log(data)
        quoteText.innerText = data.content;
});
}

quoteBtn.addEventListener("click",randomQuote)