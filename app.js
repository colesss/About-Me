'use strict';

//confirmed: asks user if they are ready to play
var confirmed = confirm ('Are you sure you want to know more about Cole?');

//if/else statement responding to previous command block depending on whether user pressed ok or not
if(confirmed){
  alert('You do!?! D\'awwww');
} else {
  alert('Cancel?!? That is close enough to ok...');
}

var user = prompt ('Wait a minute...who is asking?');
  console.log('The user\'s name is ' + user);
  alert('Ohhhhhh, heya ' + user + '! Let\'s answer five yes and no questions about Cole and see how many you get right, yeah?');

//correct: tracks correct answers
var correct = 0;

var quest1 = (user + ', does Cole love tattoos? Make sure you answer with Yes or No!');
var quest1Correct = ('Hmmmm, that was pretty obvious wasn\'t it? Next question!');
var quest1Incorrect = ('No! Really? Ummm, did you see their tats? Errr...well I suppose they are covered most of the time since it is super cold in the classrooms.');
var quest1Incomprehensible = ('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');

var quest2 = (user + ', did Cole turn 20 earlier this month?');
var quest2Correct = ('HAHAHAHAHA, you flatterer you!!!');
var quest2Incorrect = ('*snorts* That is correct! Bartenders stopped carding Cole when they started drinking gin on the rocks. Hey!!! No judgement, it\'s a quick dry martini with no fuss.');
var quest2Incomprehensible = ('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');

var quest3 = (user + ', does Cole have a dog?');
var quest3Correct = ('They certainly do! His name is Cid and he loves to cuddle, as pitties typically do with their humans.');
var quest3Incorrect = ('Ahh, so you haven\'t noticed the dog hairs. Good!');
var quest3Incomprehensible = ('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');

var quest4 = (user + ', does Cole know a bit of sign language?');
var quest4Correct = ('That is correct! They learned a bit a couple years ago and can\'t wait to learn more.');
var quest4Incorrect = ('Actually, Cole is the one in front of class looking at Rowen to confirm the letters used in those tricky short cut keys.');
var quest4Incomprehensible = ('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');

var quest5 = ('Last question, ' + user + '! Is Cole\'s favorite beer an IPA?');
var quest5Correct = ('Wow, you really do know Cole. No beer is too hoppy!');
var quest5Incorrect = ('Pssshhh, terrible! In Cole\'s world, there is no better beer!');
var quest5Incomprehensible = ('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');

var questArray = [quest1, quest2, quest3, quest4, quest5];
var questCorrectArray = [quest1Correct, quest2Correct, quest3Correct, quest4Correct, quest5Correct];
var questIncorrectArray = [quest1Incorrect, quest2Incorrect, quest3Incorrect, quest4Incorrect, quest5Incorrect];
var questIncomprehensibleArray = [quest1Incomprehensible, quest2Incomprehensible, quest3Incomprehensible, quest4Incomprehensible, quest5Incomprehensible];


//yes or no quessing questions
function question1() {
  var question1 = prompt //(user + ', does Cole love tattoos? Make sure you answer with Yes or No!');
  if (question1.toUpperCase() == 'YES') {
    alert//('Hmmmm, that was pretty obvious wasn\'t it? Next question!');
    console.log('User\'s choice was ' + question1 + '.');
    correct++;
    console.log('Correct=' + '' + correct);
  } else if (question1.toUpperCase() == 'NO') {
    alert//('No! Really? Ummm, did you see their tats? Errr...well I suppose they are covered most of the time since it is super cold in the classrooms.');
  } else {
    alert//('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');
  }
}

function question2() {
  var question2 = prompt //(user + ', did Cole turn 20 earlier this month?');
  if (question2.toUpperCase () == 'YES') {
    alert//('HAHAHAHAHA, you flatterer you!!!');
  } else if (question2.toUpperCase() == 'NO') {
    alert//('*snorts* That is correct! Bartenders stopped carding Cole when they started drinking gin on the rocks. Hey!!! No judgement, it\'s a quick dry martini with no fuss.');
      console.log('User\'s choice was ' + question2 + '.');
      correct++;
        console.log('Correct=' + '' + correct);
  } else {
    alert//('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');
  }
}

function question3(){
  var question3 = prompt //(user + ', does Cole have a dog?');
  if (question3.toUpperCase () === 'YES') {
    alert//('They certainly do! His name is Cid and he loves to cuddle, as pitties typically do with their humans.');
      console.log('User\'s choice was ' + question1 + '.');
      correct++;
      console.log('Correct=' + '' + correct);
  } else if (question3.toUpperCase() == 'NO') {
    alert//('Ahh, so you haven\'t noticed the dog hairs. Good!');
  } else {
    alert//('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');
  }
}

function question4(){
  var question4 = prompt //(user + ', does Cole know a bit of sign language?');
  if (question4.toUpperCase () === 'YES') {
    alert//('That is correct! They learned a bit a couple years ago and can\'t wait to learn more.');
      console.log('User\'s choice was ' + question1 + '.');
      correct++;
      console.log('Correct=' + '' + correct);
  } else if (question4.toUpperCase() == 'NO') {
    alert//('Actually, Cole is the one in front of class looking at Rowen to confirm the letters used in those tricky short cut keys.');
  } else {
    alert//('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');
  }
}

function question5(){
  var question5 = prompt //('Last question, ' + user + '! Is Cole\'s favorite beer an IPA?');
  if (question5.toUpperCase () === 'YES') {
    alert//('Wow, you really do know Cole. No beer is too hoppy!');
    console.log('User\'s choice was ' + question1 + '.');
    correct++;
    console.log('Correct=' + '' + correct);
  } else if (question5.toUpperCase() == 'NO') {
    alert//('Pssshhh, terrible! In Cole\'s world, there is no better beer!');
  } else {
    alert//('Errmmmhh, sorry. I did not understand your response. I\'m gonna count that as a no.');
  }
}

var answer6 = false;
var guesses = 5;
var guess = true;

function question6(){
  var question6 = prompt('What is my favorite number. You have ' + guesses + ' guesses left.');

  for(var i = 0; i < 5; i++){
    if (guesses === 0) {
      alert('Oh dear...no more guesses!');
      guess = false;
    }
    if (answer > 5) {
      alert('Nope! That was too high!');
      guess--;
    }
    if (answer < 5) {
      alert('Nope! That was too low.');
      guess--;
    }
    if (guesstion6 === 5) {
      alert('Yup! My favorite number is 5');
      guess = false;
      correct++;
    }
  }
}

question1();
question2();
question3();
question4();
question5();
question6();
