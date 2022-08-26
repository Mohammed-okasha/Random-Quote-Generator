//* [Random Quote Generator]

// Get Btn
const getBtn = document.getElementById("get-btn");


// fetchQuoteData Function Return Promise
async function fetchQuoteData(apiUrl) {
    try {
        let result = await fetch(apiUrl);
        return result;

    } catch {
        error => console.log(error);

    } finally {
        console.log("End Operation");
    }
};

getBtn.addEventListener("click", _ => {
    fetchQuoteData("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        // Get Quote Tag
        let tag = data.tags.shift();
        // Destructions Quote Data
        let {
            _id: id,
            tags,
            content,
            author
        } = data;

        // Invoke displayQuoteInDOM Fun
        displayQuoteInDOM(tag, content, author);
    })
});


// Invoke fetchQuoteData Function
fetchQuoteData("https://api.quotable.io/random")
.then(response => response.json())
.then(data => {
    // Get Quote Tag
    let tag = data.tags.shift();
    // Destructions Quote Data
    let {
        _id: id,
        tags,
        content,
        author
    } = data;

    // Invoke displayQuoteInDOM Fun
    displayQuoteInDOM(tag, content, author);
});

// displayQuoteInDOM Function
function displayQuoteInDOM(tag, content, author) {
    //*TODO: Access DOM Elements
    const quoteTag = document.getElementById("quote-tag");
    const quoteContent = document.getElementById("quote-content");
    const quoteAuthor= document.getElementById("quote-author");

    quoteTag.innerText = tag;
    quoteContent.innerText = content;
    quoteAuthor.innerHTML = `&hyphen; ${author} &hyphen;`;
};