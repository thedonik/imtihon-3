var elMoviesList = document.querySelector(".card_list");
elMoviesList.innerHTML = null

var elSearchResult = document.querySelector(".search_result")
elSearchResult.textContent = null



var moviesArray = movies.slice(0, 500);

elSearchResult.textContent = moviesArray.length

// console.log(moviesArray);

for (const item of moviesArray) {
  var newWatchTralier = document.createElement("a");
  newWatchTralier.href = `https://www.youtube.com/watch?v=${item.ytid}`;
  newWatchTralier.setAttribute("class", "btn btn-outline-primary");
  newWatchTralier.setAttribute("target", "blank");
  newWatchTralier.textContent = "Watch trailer";

  var moreInfoBtn = document.createElement("button");
  moreInfoBtn.type = "button";
  moreInfoBtn.setAttribute("class", "btn btn-outline-secondary");
  moreInfoBtn.textContent = "More info";

  var bookmarkBtn = document.createElement("button");
  bookmarkBtn.type = "button";
  bookmarkBtn.setAttribute("class", "btn btn-outline-success");
  bookmarkBtn.textContent = "Bookmark";

  var btnWrapper = document.createElement("div");
  btnWrapper.setAttribute(
    "class",
    "d-flex justife-content-between flex-colum flex-xl-row"
  );
  btnWrapper.appendChild(newWatchTralier);
  btnWrapper.appendChild(moreInfoBtn);
  btnWrapper.appendChild(bookmarkBtn);

  var newScoreSpan = document.createElement("span");
  newScoreSpan.classList.add("ms-2");
  newScoreSpan.textContent = item.imdb_rating;

  var starImg = document.createElement("img");
  starImg.src =
    "./images/cartoon-star-icon-vector-illustration_444196-1109.webp";
  starImg.setAttribute("alt", "...");
  starImg.setAttribute("height", "20");
  starImg.setAttribute("width", "20");

  var scoreCard = document.createElement("div");
  scoreCard.setAttribute("class", "d-flex align-item-center mb-3");
  scoreCard.appendChild(starImg);
  scoreCard.appendChild(newScoreSpan);

  var newYearSpan = document.createElement("span");
  newYearSpan.classList.add("ms-2");
  newYearSpan.textContent = item.movie_year;

  var calendarImg = document.createElement("img");
  calendarImg.src = "./images/calendar.png";
  calendarImg.setAttribute("alt", "...");
  calendarImg.setAttribute("height", "20");
  calendarImg.setAttribute("width", "20");

  var yearCard = document.createElement("div");
  yearCard.setAttribute("class", "d-flex align-item-center mb-1");
  yearCard.appendChild(calendarImg);
  yearCard.appendChild(newYearSpan);

  var h5Heading = document.createElement("h5");
  h5Heading.classList.add("card-title");
  h5Heading.textContent = item.Title;

  var newCardBody = document.createElement("div");
  newCardBody.classList.add("card-body");
  newCardBody.appendChild(h5Heading);
  newCardBody.appendChild(yearCard);
  newCardBody.appendChild(scoreCard);
  newCardBody.appendChild(btnWrapper);

  var newCardImg = document.createElement("img");
  newCardImg.src = `https://i3.ytimg.com/vi/${item.ytid}/hqdefault.jpg`;
  newCardImg.classList.add("card-img-top");
  newCardImg.alt = "...";

  var newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.appendChild(newCardImg);
  newCard.appendChild(newCardBody);

  var newLi = document.createElement("li");
  newLi.classList.add("col-sm-6");
  newLi.appendChild(newCard);

  elMoviesList.appendChild(newLi);
}
