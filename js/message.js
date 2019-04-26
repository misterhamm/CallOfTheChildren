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
}