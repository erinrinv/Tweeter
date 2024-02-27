/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [];


const renderTweets = function(tweets) {
  $('#tweets-container').empty();
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  }
};


const createTweetElement = function(data) {
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

//renderTweets(data);

const loadTweets = function() {
  $.get("/tweets/", function(newTweet) {
    renderTweets(newTweet.reverse());
  });
};

loadTweets();







// Add event listener for form submission
$(document).ready(function() {
  $('form.tweetform').submit(function(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Serialize form data
    const formData = $(this).serialize();

    // Send POST request with AJAX
    $.ajax({
      method: 'POST',
      url: '/tweets/',
      data: formData
    })
    .then(function(response) {
      // Optionally, you can handle the response from the server here
      console.log('Tweet successfully submitted:', response);

      // After successful submission, you may want to fetch and render tweets again
      // renderTweets(response); // Assuming the response contains updated tweet data
    })
    .catch(function(error) {
      console.error('Error submitting tweet:', error);
    });
  });
});