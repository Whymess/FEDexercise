(function() {
  "use strict";

  // Code is broken down into render functions and two main parsing functions. 

  Promise.all([
    fetch(
      `http://mtrest.advance.net/mtrest/articles/?blog_id=3674&limit=10&offset=0`
    ),
    fetch(`https://swapi.co/api/people/`)
  ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([apiOneResult, apiTwoResult]) => {
      parseApiOne(apiOneResult);
      parseApiTwo(apiTwoResult);
    });



  function parseApiOne(apiOneResult) {
    var { result } = apiOneResult;
    result.forEach(function(el, i) {
      var { title, short_title, summary, author } = el;

      if (i % 2 == 0) {
        renderCardTitle(title, i);
        renderCardSubTitle(short_title, i);
        renderCardInfo(summary, i);
        renderAuthor(author, i);
        renderAuthorProfileUrl(author, i);
      }
    });
  }

  function parseApiTwo(apiTwoResult) {
    var { results } = apiTwoResult;
    results.forEach(function(el, i) {
      var { name, created, height, homeworld, films } = el;
      if (i % 2 !== 0) {
        renderCardTitle(name, i);
        renderCardSubTitle(homeworld, i);
        renderCardInfo(created, i);
        renderAuthor(height, i);
        renderAuthorProfileUrl(films, i);
      }
    });
  }

  function renderCardTitle(title, i) {
    document.getElementsByClassName("card-title")[i].innerHTML = title;
  }

  function renderCardSubTitle(short_title, i) {
    if (short_title.length === 0) {
      short_title = "No Title";
    }
    document.getElementsByClassName("card-subtitle")[i].innerHTML = short_title;
  }

  function renderCardInfo(summary, i) {
    if (i % 2 !== 0) {
      var dateString = new Date(summary).toString();
      document.getElementsByClassName("card-text")[
        i
      ].innerHTML = `Created on: ${dateString.substring(0, 15)}`;
    } else {
      document.getElementsByClassName("card-text")[i].innerHTML = summary;
    }
  }

  function renderAuthor(author, i) {
    if (i % 2 !== 0) {
      document.getElementsByClassName("author")[
        i
      ].innerHTML = `Height: ${author}`;
    } else {
      var { display_name } = author;
      document.getElementsByClassName("author")[
        i
      ].innerHTML = `Author: ${display_name}`;
    }
  }

  function renderAuthorProfileUrl(author, i) {
    if (i % 2 !== 0) {
      document.getElementsByClassName("link")[i].innerHTML = `I have been in ${
        author.length
      } films`;
    } else {
      var { profile_url } = author;
      document.getElementsByClassName("link")[i].href = profile_url;
    }
  }
}.call(this));
