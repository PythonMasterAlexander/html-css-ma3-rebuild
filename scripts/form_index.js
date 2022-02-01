const currentTime = new Date();

//Get minutes and seconds
const hour = currentTime.getHours();
const minutes = currentTime.getMinutes();

//Choose the input field where we display the time
const inputElement = document.querySelector("[type=time]");

//Create an array to hold hour and minute
let timeArray = [];
timeArray.push(hour, minutes);

//Use join() methode to join the time value, and use the : symbol between hour and minute as a seperator 
let timeInTimeElement = timeArray.join(":");

//Insurt the current time format into the time input on the page
inputElement.value = timeInTimeElement;

