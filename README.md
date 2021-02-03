# News Explorer App

[Link to gitgub pages](https://momofcats.github.io/news-explorer-frontend/).

## App Overview
This app was created as a part of Practicum by Yandex educational curriculum.
The app allows the user to search  news articles by keywords. The search results are displayed below the search bar. The fetched articles dates are withing 7 days of a search date. The user is able to create an account and log into it. If the user was previously logged in the page won’t prompt the user and display the content with this user’s data.  If the user is logged in, he is able to bookmark and unbookmark the articles. Saved articles are shown on the saved articles page. The user can remove articles by clicking on a trash can icon on a news card. Also, the user can navigate to an article source upon clicking on an article’s title. 

## Technologies Used

The API for user authentication and saving articles was created using Node.js, Express.js and Mongo DB. Back end code is deployed on AWS remote server. [Link to back end repo](https://github.com/momofcats/news-explorer-api)
The front end interface was created  with help of React.js, CSS. The layout adapts to different screen resolutions using media queries. CSS classes follow BEM methodology.  Articles search is performed by sending requests to [News API](https://newsapi.org). 

