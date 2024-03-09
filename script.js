// Function to display the current date
function displayDate() {
    // Create a new Date object
    var currentDate = new Date();

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    var dayOfWeek = currentDate.getDay();
    
    // Array of messages for each day of the week
    var messages = [
        "Happy Sunday! It's a day to relax and recharge.",
        " Monday! Time to get this Money!!!",
        "Tuesday! Lets stay focused and productive.",
        "Wednesday! We half way there! Keep Pushing.",
        "Happy Thursday! Keep pushing forward, the weekend is near.",
        "Its Friday! Time to celebrate the end of the week.",
        "Saturday! Enjoy your weekend and have fun!"
    ];

    // Construct the date string
    var dateString = "Today is " + currentDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Get the message for the current day
    var message = messages[dayOfWeek];

    // Display the date and message in the HTML elements
    document.getElementById("currentDate").textContent = dateString;
    document.getElementById("message").textContent = message;
}

// // Call the displayDateAndMessage function when the page loads
// window.onload = displayDate;


// Call the displayDateAndMessage function when the page loads
button.onclick = displayDate;


function setBg () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    console.log("Done! You did it!!!");
    // color.innerHTML = "#" + randomColor;
}












