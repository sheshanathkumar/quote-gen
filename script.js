//get quote from api
//https://forismatic.com/en/api/

const author = document.getElementById('author');
const quote = document.getElementById('quote');
const quoteCotainer = document.getElementById('quote-container');
const loader = document.getElementById('loader');

function loading() {
    if (! quoteCotainer.hidden) {
        quoteCotainer.hidden = true;
        loader.hidden = false;
    }
}

function complete() {

    if ( ! loader.hidden ) {
        loader.hidden = true;
        quoteCotainer.hidden = false;
    }
}

async function getQuote() {
    
    loading()
    try {
        
    
    const apiUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    
    author.innerText= data.quoteAuthor;
    quote.innerText = data.quoteText ;
    complete();
    } catch (error) {
        author.innerText= 'Error: Data has somr unexpected character';
        quote.innerText = '...';
        complete();
    }
}

function tweetQuote() {
    const quoteTweet = quote.innerText;
    const authorTweet = author.innerText
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteTweet} -${authorTweet}` ;
    window.open(tweetUrl, '_blank');
}