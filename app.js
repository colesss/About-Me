'use strict';

//confirm asking user if they are ready to play
var confirmed = confirm ('Are you sure you want to know more about Cole?');

//if/else statement responding to previous command block depending on whether user pressed ok or not
if(confirmed === true){
  console.log('You do!?! D\'awwww');
} else {
  console.log('No?!? Those letters are pretty far away from the letters that make up the answer yes...hate to tell you, but you might need some more lessons on typing...')
}

//prompt asking for the user's name, console.log logging name entered into var user
var user = prompt ('Wait a minute...who is asking?');
  console.log('The user\'s name is ' + user);

//alert greeting user and informing user about coming questions
alert('Ohhhhhh, heya ' + user + ', let\'s answer some yes and no questions about Cole and see how many you get right, yeah?');

//prompt for question1, telling user that this is a y/n question and then asking question about developer
var answer1 = prompt (user + ', does Cole love tattoos? Make sure you answer with Yes or No!');

//if/else statement with responses to whether the question1 was answered correctly, condition needs a response that matches prompt format
if (answer1.toUpperCase () === 'YES') {
  alert('Hmmmm, that was pretty obvious wasn\' it? Next question!');
} else {
  alert('No! Really? Ummm, did you see their tats? Errr...well I suppose they are covered most of the time since it is super cold in the classrooms.');
}

//prompt for question2, telling user that this is a y/n question and then asking question about developer
var answer2 = prompt (user + ', did Cole turn 20 earlier this month?');

//if/else statement with responses to whether the question2 was answered correctly, condition needs a response that matches prompt format
if (answer2.toUpperCase () === 'YES') {
  alert('HAHAHAHAHA, you flatterer you!!!');
} else {
  alert('*snorts* That is correct! Bartenders stopped carding Cole when they started drinking gin on the rocks. Hey!!! No judgement, it\'s a quick dry martini with no fuss.');
}

//prompt for question3, telling user that this is a y/n question and then asking question about developer
var answer3 = prompt (user + ', does Cole have a dog?');

//if/else statement with responses to whether the question3 was answered correctly, condition needs a response that matches prompt format
if (answer3.toUpperCase () === 'YES') {
  alert('They certianly do! His name is Cid and he loves to cuddle, as pitties typically do with their humans.');
} else {
  alert('Ahh, so you haven\'t noticed the dog hairs. Good!');
}

//prompt for question4, telling user that this is a y/n question and then asking question about developer
var answer4 = prompt (user + ', does Cole know a bit of sign language?');

//if/else statement with responses to whether the question4 was answered correctly, condition needs a response that matches prompt format
if (answer4.toUpperCase () === 'YES') {
  alert('That is correct! They learned a bit a couple years ago and can\'t wait to learn more.');
} else {
  alert('Actually, Cole is the one in front of class looking at Rowen to confirm the letters used in those tricky short cut keys.');
}

//prompt for question5, telling user that this is a y/n question and then asking question about developer
var answer5 = prompt ('Last question, ' user + '! Is Cole\'s favorite beer an IPA?');

//if/else statement with responses to whether the question5 was answered correctly, condition needs a response that matches prompt format
if (answer5.toUpperCase () === 'YES') {
  alert('Wow, you really do know Cole. No beer is too hoppy!');
} else {
  alert('Pssshhh, terrible! In Cole\'s world, there is no better beer!');
}
