var quotes = [
  'Tacos with tomatoes and Tabasco are tasty!',
  'Tempeh turkey on Thanksgiving is a tasty treat!',
  'Timmy told on Tommy because a toy was gone.',
  'Thelma sings the television theme song.',
  'Tiny Tom threw Tim three thumbtacks.'
]

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
