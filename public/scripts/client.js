/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  
  // Hide error messages initially
  $("#error-message-empty").hide();
  $("#error-message-tooLong").hide();

  // Array to store tweet data
  const data = [];

  // Function to escape HTML characters
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Function to render tweets on the page
  const renderTweets = function(tweets) {
    // Empty the tweets container before rendering new tweets
    $('#tweets-container').empty();
    // Iterate over each tweet and create HTML elements to display them
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  // HTML structure for a single tweet
  const createTweetElement = function(tweetData) {
    let $tweet = $(`
      <article class="tweet">
        <header class="tweet-header">
          <div class="user-profile">
            <img class="user-icon" src="${tweetData.user.avatars}"></img> 
            <h4 class="user-name">${tweetData.user.name}</h4>
          </div>
          <div>
            <h4 class="user-handle">${tweetData.user.handle}</h4>
          </div>
        </header>
        <div class="tweet-text">
          ${escape(tweetData.content.text)}
        </div>
        <footer class="tweet-footer">
          <span class="tweet-date">${timeago.format(tweetData.created_at)}</span>
          <div class="tweet-response">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>`);
    return $tweet;
  };

  // Function to load tweets from the server using AJAX
  const loadTweets = function() {
    $.get("/tweets/", function(newTweet) {
      // Reverse the order of tweets and render them
      renderTweets(newTweet.reverse());
    });
  };

  // Call loadTweets function to initially load tweets
  loadTweets();

  // Event handler for submitting a new tweet
  $("#new-tweet-form").submit(function(event) {
    event.preventDefault();
    const maxChar = 140;
    const inputLength = $(this).find("#tweet-text").val().length;
  
    // Hide error messages
    $("#error-message-empty").slideUp("slow");
    $("#error-message-tooLong").slideUp("slow");

    // Check if tweet text is empty
    if (!inputLength) {
      $("#error-message-empty").slideDown("slow");
      $("#error-message-tooLong").hide();
    } else if (inputLength - maxChar > 0) { // Check if tweet text exceeds character limit
      $("#error-message-tooLong").slideDown("slow");
      $("#error-message-empty").hide();
    } else {
      // If tweet is valid, serialize form data and send POST request to server
      const newTweet = $(this).serialize();
      $.post("/tweets/", newTweet, () => {
        // Clear tweet input and reload tweets
        $(this).find("#tweet-text").val("");
        $(this).find(".counter").val(maxChar);
        loadTweets();
      });
    }
  });
});


