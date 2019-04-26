let urlParams = new URLSearchParams(window.location.search);
let rep = urlParams.get('rep');
$('.rep').text(rep);

$('.message-builder').on('submit', function (e) {
  e.preventDefault();
  let name = $('.name-input').val();
  let age = $('.age-input').val();
  let issue = $('.issue-input').val();
  let opinion = $('.opinion-input').val();
  let action = $('.action-input').val();
  fillMessage(name, age, issue, opinion, action);
});

function fillMessage(name, age, issue, opinion, action) {
  $('.name').text(name);
  $('.age').text(age);
  $('.issue').text(issue);
  $('.opinion').text(opinion);
  $('.action').text(action);

  $twitterButton.attr('disabled', false);
}

const $twitterButton = $('.twitter-share-button');


$twitterButton.on('click', (e) => {
  e.preventDefault();
  const referer = "http://www.callofthechildren.com";
  let rawText = $('article').text();
  let text = encodeURI(rawText);
  
  let twitterHref = `https://twitter.com/intent/tweet?original_referer=${referer}&text=${text}&tw_p=tweetbutton&url=${referer}`;
  window.open(twitterHref, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
});