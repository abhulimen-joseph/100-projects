const getQuoteBtn = document.getElementById('getQuoteBtn');
const quoteText = document.querySelector('#quoteText');

getQuoteBtn.addEventListener('click', () => {
    getQuoteBtn.classList.add('loading');
    getQuoteBtn.textContent = 'Loading...';
    getQuote()

});

getQuoteBtn.classList.remove('loading');
getQuoteBtn.textContent = 'Get Quote';

function getQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            quoteText.innerHTML = "${data.content} <br>  - ${data.author} ";
            getQuoteBtn.classList.remove('loading');
            getQuoteBtn.textContent = 'Get Quote';
        })

        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteText.innerHTML = 'Failed to fetch quote, please try again later or check internet connection';
            getQuoteBtn.classList.remove('loading');
            getQuoteBtn.textContent = 'Get Quote';
        });
}