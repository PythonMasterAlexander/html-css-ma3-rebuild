/*TODO
- Get welcome message container
- Get time on the day and display in the html
- Create html for welcome message
- Put new html in div message container
*/
const welcomeMessageContainer = document.querySelector(".welcome-message-container");

const getHourOfDay = function() {

  const date = new Date();
  const hourOfDay = date.getHours();
  let greeting = "";

  if(hourOfDay > 06 && hourOfDay < 12) {
    greeting = "Morning";
  }

  else if(hourOfDay > 12 && hourOfDay < 18) {
    greeting = "Afternoon";

  } else {
    greeting = "Night";
  }

  return greeting;
}
let greeting = getHourOfDay();

let welcomeMessageHtml = `<p>God ${greeting}</p><img src="images/icon-awesome-smile-wink.svg" 
class="welcome-image" alt="Smile symbol">`;

welcomeMessageContainer.innerHTML = welcomeMessageHtml;

/*TODO
- Build a form validation code for the form */

//?
const currentTime = new Date();

const hour = currentTime.getHours();
const minutes = currentTime.getMinutes();

const inputElement = document.querySelector("[type=time]");

let timeArray = [];
timeArray.push(hour, minutes);

let timeInTimeElement = timeArray.join(":");
inputElement.value = timeInTimeElement;