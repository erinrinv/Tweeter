/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense, donc je suis"
    },
    "created_at": 1461113959088
  }
];


const renderTweets = function(tweets) {
  // Empty the tweets container before rendering new tweets
  $('#tweets-container').empty();

  // Loop through the tweets array
  tweets.forEach(tweet => {
    // Create a tweet element for each tweet object
    const $tweet = createTweetElement(tweet);
    // Append the tweet element to the tweets container
    $('#tweets-container').prepend($tweet);
  });
};


const createTweetElement = function(tweet) {
  // Create HTML structure for tweet
  const $tweet = $(`
    <article class="tweet">
      <header>
        <img src="${tweet.user.avatars}" alt="Profile Picture">
        <div class="tweet-header">
          <h3>${tweet.user.name}</h3>
          <p>${tweet.user.handle}</p>
        </div>
      </header>
      <p class="tweet-content">${tweet.content.text}</p>
      <footer>
        <span class="tweet-icon"><i class="fas fa-heart"></i> 0</span>
        <span class="tweet-icon"><i class="fas fa-retweet"></i> 0</span>
        <span class="tweet-icon"><i class="fas fa-comment"></i> 0</span>
      </footer>
    </article>
  `);

  return $tweet;
};

//renderTweets(data);