# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

Build a simplified single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX.


## Features


1. Start by writing a tweet in the tweet box and clicking on "Tweet". This will "Submit" the tweet to the back-end via AJAX.
2. A successful POST request will then GET the tweet object back from the back-end and update the feed without having to refresh the page.
3. Error messages will be displayed if an empty tweet or a tweet longer than 140 characters is being submitted.
4. This app uses responsive design and will adjust depending on the display size.


## Screenshots
!["Main Page"](https://github.com/erinrinv/Tweeter/blob/master/public/images/tweetsquish.png)
!["responsive design"](https://github.com/erinrinv/Tweeter/blob/master/public/images/tweetsquish.png)
!["Error: blank submittion"](https://github.com/erinrinv/Tweeter/blob/master/public/images/error.png)
!["Error: Over tweet limit"](https://github.com/erinrinv/Tweeter/blob/master/public/images/toomanycharacters.png)


## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- nodemon
