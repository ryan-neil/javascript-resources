# Movie Duel
<!-- <img src="" width="800" alt=""> -->

## Introduction
For this practice application, the user is going to use a search box on the left-hand side of the screen to search for a movie and use another search box on the right-hand side for a different movie.

Once the user has searched for two different movies we will display data from both of those movies. Data such as, earnings, critic rating, etc. These two movies will then go head to head on each of those subjects and which ever movie has a higher or better "score" we will highlight in green and the lower "score" will be highlighted in yellow.

The last feature to our practice application will be a "smart search" feature that shows suggestions for what the user is searching.

## 📂 File Tree
```bash
└─ movie-duel
  ├─ index.html
  ├─ style.css
  ├─ app.js
```

----
 
## ⚒️ Main Application Features
1. Smart search bar
2. Display real world data from movie searches
    * Harnessing [OMDb API](https://www.omdbapi.com/)
3. Highlight comparison feature

----

## 🗒️ Application Architecture 

### UI
__Search box__
```bash
└─ search-box
  ├─ default-state
  ├─ user starts typing...
  ├─ user finishes typing and we find matching movies -> show menu, display results
    ├─ user finishes typing and we find no results -> hide menu
  ├─ user presses "Enter" -> do nothing
    ├─ user clicks an entry -> update text, close menu
    ├─ user clicks outside the dropdown -> close menu
```
Steps:
  1. Show user a plain text input
    * Anytime the user types inside the text input we're going to initiate a search of our API and try and find some corresponding list of movies