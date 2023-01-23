let elMoviesList = document.querySelector(".card_list");
elMoviesList.innerHTML = null;

let elSearchResult = document.querySelector(".search_result");
elSearchResult.textContent = null;

let elForm  = document.querySelector("form")
let elSelect = document.querySelector(".caregories")

elForm.addEventListener("submit", function(evt) {
	evt.preventDefault()
	console.log(elSelect.value);
})
let sliced = movies.slice(0, 10)

elSearchResult.textContent = sliced.length;


let newMoviesArray = sliced.map(function(item) {
	
	return {
		title:  item.Title.toString(),
		movieYear: item.movie_year,
		categories: item.Categories.split("|"),
		summary: item.summary,
		imgUrl: `https://i3.ytimg.com/vi/${item.ytid}/hqdefault.jpg`,
		videoUrl:  `https://www.youtube.com/watch?v=${item.ytid}`,
		rating: item.imdb_rating
	}
	
})

// console.log(moviesArray);

for (const item of newMoviesArray) {
	let newWatchTralier = document.createElement("a");
	newWatchTralier.href = item.videoUrl;
	newWatchTralier.setAttribute("class", "btn btn-outline-primary");
	newWatchTralier.setAttribute("target", "blank");
	newWatchTralier.textContent = "Watch trailer";
	
	let moreInfoBtn = document.createElement("button");
	moreInfoBtn.type = "button";
	moreInfoBtn.setAttribute("class", "btn btn-outline-secondary");
	moreInfoBtn.textContent = "More info";
	
	let bookmarkBtn = document.createElement("button");
	bookmarkBtn.type = "button";
	bookmarkBtn.setAttribute("class", "btn btn-outline-success");
	bookmarkBtn.textContent = "Bookmark";
	
	let btnWrapper = document.createElement("div");
	btnWrapper.setAttribute(
		"class",
		"d-flex justife-content-between flex-colum flex-xl-row"
		);
		btnWrapper.appendChild(newWatchTralier);
		btnWrapper.appendChild(moreInfoBtn);
		btnWrapper.appendChild(bookmarkBtn);
		
		let newScoreSpan = document.createElement("span");
		newScoreSpan.classList.add("ms-2");
		newScoreSpan.textContent = item.rating;
		
		let starImg = document.createElement("img");
		starImg.src =
		"./images/cartoon-star-icon-vector-illustration_444196-1109.webp";
		starImg.setAttribute("alt", "...");
		starImg.setAttribute("height", "20");
		starImg.setAttribute("width", "20");
		
		let scoreCard = document.createElement("div");
		scoreCard.setAttribute("class", "d-flex align-item-center mb-3");
		scoreCard.appendChild(starImg);
		scoreCard.appendChild(newScoreSpan);
		
		let newYearSpan = document.createElement("span");
		newYearSpan.classList.add("ms-2");
		newYearSpan.textContent = item.movieYear;
		
		let calendarImg = document.createElement("img");
		calendarImg.src = "./images/calendar.png";
		calendarImg.setAttribute("alt", "...");
		calendarImg.setAttribute("height", "20");
		calendarImg.setAttribute("width", "20");
		
		let yearCard = document.createElement("div");
		yearCard.setAttribute("class", "d-flex align-item-center mb-1");
		yearCard.appendChild(calendarImg);
		yearCard.appendChild(newYearSpan);
		
		let h5Heading = document.createElement("h5");
		h5Heading.classList.add("card-title");
		h5Heading.textContent = item.title;
		
		let newCardBody = document.createElement("div");
		newCardBody.classList.add("card-body");
		newCardBody.appendChild(h5Heading);
		newCardBody.appendChild(yearCard);
		newCardBody.appendChild(scoreCard);
		newCardBody.appendChild(btnWrapper);
		
		let newCardImg = document.createElement("img");
		newCardImg.src = item.imgUrl;
		newCardImg.classList.add("card-img-top");
		newCardImg.alt = "...";
		
		let newCard = document.createElement("div");
		newCard.classList.add("card");
		newCard.appendChild(newCardImg);
		newCard.appendChild(newCardBody);
		
		let newLi = document.createElement("li");
		newLi.classList.add("col-sm-6");
		newLi.appendChild(newCard);
		
		elMoviesList.appendChild(newLi);
	}
	
	// console.log(newli);
	
	
	
	
	
	
	
	// console.log(newMoviesArray);
	
	let allCategories = []
	for (const item of newMoviesArray) {
		
		let categoryArray = item.categories
		// console.log(categoryArray);   
		for (const oneCategory of categoryArray) {
			if (!allCategories.includes(oneCategory)) {
				allCategories.push(oneCategory)
				
			}
			
		}  
	}
	
	console.log(allCategories.sort());
	
	
	
	
	function renderOptions(array, place) {
		place.innerHTML = null
		let newOption = document.createElement("option")
		newOption.value = "All"
		newOption.textContent = "All"
		place.appendChild(newOption)
		
		
		for (const item  of array) {
			let newOption = document.createElement("option")
			newOption.value = item
			newOption.textContent =item
			
			place.appendChild(newOption)
		}
		
	}
	
	renderOptions(allCategories, elSelect)     
	