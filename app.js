'use strict';

var confirmed = comfirm ('Are you ready to rock and roll!?');

if(confirmed === true){
  console.log('The user is ready!');
} else {
  console.log('The user said they were not ready...but too bad!')
}
