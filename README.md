# Haiku Reviews #

[Visit the site!](https://haikureviews.herokuapp.com)

## Where brevity is the soul of movies ##

**Description:** Did you just see a movie you love and want to write a review for it? Check out Haiku Reviews, where you must submit your review in a 5-7-5 format. Use all your cleverness and share with other users!

**User**: Movie lovers who want to share their opinions in clever ways

**User Story:**
* A user should be able to access the homepage and see the top Haikus of the moment.
* They should also be able to search movies and find associated Haikus.
* They can also look at an individual Haiku and the rating/comments associated with it.
* Logged in users can see their profile page
* Logged in users can add Haikus to movies
* Logged in users may edit/remove their own Haikus
* Logged in users can comment on/rate other Haikus

### ERD ###

![ERD](/public/ERD.png)


### Wireframes ###

**Homepage**
![Homepage](/public/Homescreen.png)

**Movie Search**

![MovieSearch](/public/MovieSearch.png)

**Profile Page**

![ProfilePage](/public/Profile.png)

**Haiku with Comments**
![HaikuShow](/public/HaikuShow.png)

**User View of Haiku**

![UserHaiku](/public/UserComment.png)

**Add Haiku View**

![AddHaiku](/public/AddHaiku.png)

##Milestones##

###Sprint 1: Backend###
* Auth model created for User
* Models created for Profile, Haiku, and Comment
* Full CRUD routes on Haiku, and Comment
* Profile has an Update route
* Bonus: Delete function on User/Profile

###Sprint 2: Tying Front to back (minimal front)###
* All routes implemented in React Router
* Show pages for Haiku and Profile showing info
* Add/update pages for Haiku
* Movie show page
* Front page with login/signup/logout

###Sprint 3: Frontend Beautification###
* Navbar implemented with changing text if user is logged in or not
* CSS for all pages
* Front page with carousel implemented
* Rating/Comment system added into Frontend
* Arrange Haikus by rating -- then date
* Profile Image uploader / Profile Update
* Edit/Delete functionality for user’s Haikus and comments

###Sprint 4: Tying in APIs###
* Tie in OMDB data to appear on the Movie show page
* OMDB data should also be scraped into a Model if non exist
* Check Add/Edit Haiku line length against Words API

###Sprint 5: Extras###
* Simple Rating system (no comment required)
* Haiku Pagination (on Profile & Movie show pages)
* Links to external sites (IMDB, Amazon, etc)
* Thesaurus/word help (from Words API)
* About page
* Message system

###Schedule###
* Friday - Sprint 1
* Saturday - Sprint 1
* Sunday - Sprint 2
* Monday - Sprint 3
* Tuesday - Sprint 4
* Wednesday - Sprint 5
* Thursday - Final Cleanup


##Tech used##

###Languages, Libraries, Frameworks###
* Python
* Django
* Django Rest Framework
* React
* JS
* HTML
* CSS

###APIs###
* OMDB API (to find/return movie data)
* Words API (to test syllables)

###Dependencies###
* react-router-dom
* axios
* jwt-decode
* dotenv

## What I learned from this project ##
It's become obvious that clear initial vision equates to speedy and thoughtful progress. There were a number of innovations in this project from the outset. Knowing this allowed me to factor my code in reusable ways--just what you need for a React project!

Working with both react-router-dom AND Django Rest Framework at the same time was a challenge! I love React, and am growing fond of Django, but getting both to interact exactly as I wanted felt a little fiddly. I'm pleased with the results, but want to continue learning as I'm sure there are faster, smarter ways of structuring my code (in Django Rest Framework), or utilizing paths in smarter, more effective ways.

React's component system continues to be my favorite. I kept trimming down my components, realizing I didn't need this shell, or that view. I want to continue tightening up this code--particularly on the models or extraneous function end--React makes that interesting. And adding react-router-dom's Switch/Routes, I was able to utilize some fun tricks on my Movie Container.

I'm proud of this capstone project--and hope to continue iterating it to be the pristine, seamless app that any haiku writer would be proud of.