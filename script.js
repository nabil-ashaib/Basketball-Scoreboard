let newHomeScore = 0
let newGuestScore = 0

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = "00"
guestScore.textContent = "00"

// Start
function start() {
    // Score
    newHomeScore = 0
    newGuestScore = 0
    homeScore.textContent = "00"
    guestScore.textContent = "00"
    homeScore.style.border = "2px solid rgb(0, 0, 20)"
    guestScore.style.border = "2px solid rgb(0, 0, 20)"
    // Timer
    countdown( "timer-screen", 10, 0);
    // Period
    document.getElementById("add-period-btn").style.visibility = "hidden"
    document.getElementById("minus-period-btn").style.visibility = "hidden"
    // Fouls
    homeFouls.textContent = "00"
    guestFouls.textContent = "00"
    // Start + New Game
    document.getElementById("start").style.display = "none";
    document.getElementById("new-game").style.display = "inline"
}
// New Game
function newGame() {
    location.reload()
}


// Add Points To Home 
function add1PointToHome() {
    newHomeScore += 1
    if (newHomeScore < 10 ){
        homeScore.textContent = "0" + newHomeScore
    }
    else {
        homeScore.textContent = newHomeScore
    }
    leader()
}
function add2PointToHome() {
    newHomeScore += 2
    if (newHomeScore < 10 ){
        homeScore.textContent = "0" + newHomeScore
    }
    else {
        homeScore.textContent = newHomeScore
    }
    leader()
}
function add3PointToHome() {
    newHomeScore += 3
    if (newHomeScore < 10 ){
        homeScore.textContent = "0" + newHomeScore
    }
    else {
        homeScore.textContent = newHomeScore
    }
    leader()
}

// Add Points To Guest 
function add1PointToGuest() {
    newGuestScore += 1
    if (newGuestScore < 10 ){
        guestScore.textContent = "0" + newGuestScore
    }
    else {
        guestScore.textContent = newGuestScore
    }
    leader()
}
function add2PointToGuest() {
    newGuestScore += 2
    if (newGuestScore < 10 ){
        guestScore.textContent = "0" + newGuestScore
    }
    else {
        guestScore.textContent = newGuestScore
    }
    leader()
}
function add3PointToGuest() {
    newGuestScore += 3
    if (newGuestScore < 10 ){
        guestScore.textContent = "0" + newGuestScore
    }
    else {
        guestScore.textContent = newGuestScore
    }
    leader()
}


//Highlight The Leader
function leader(){
    if(newHomeScore > newGuestScore) {
        homeScore.style.border = "2px solid #f1bf36"
        guestScore.style.border = "2px solid rgb(0, 0, 20)"
    }
    else if(newHomeScore < newGuestScore) {
        homeScore.style.border = "2px solid rgb(0, 0, 20)"
        guestScore.style.border = "2px solid #f1bf36"
    }
    else {
        homeScore.style.border = "2px solid rgb(0, 0, 20)"
        guestScore.style.border = "2px solid rgb(0, 0, 20)"
    }
}


// Timer
function countdown( elementName, minutes, seconds)
{
    let element, endTime, hours, mins, time , msLeft;

    function twoDigits( n )
    {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer()
    {
        msLeft = endTime - (+new Date);
        if ( msLeft < 1000 ) {
            element.textContent = "00:00";
            setTimeout(timeisup, 500)
            function timeisup() {
                if (newHomeScore > newGuestScore) {
                    alert("Time's Up! Yay, Home team won!")
                }
                else if (newHomeScore < newGuestScore) {
                    alert("Time's Up! Guest team won!")
                }
                else if (newHomeScore == newGuestScore) {
                    alert("Time's Up! Its a draw.")
                }
            }
        }
        else if ( msLeft < 60000 ) {
            element.style.color = "#f13636";
            element.style.border = "2px solid #f13636"
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.textContent = "0" + (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
        else if ( msLeft < 600000 ) {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.textContent = "0" + (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
        else {
            time = new Date( msLeft );
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.textContent = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
            setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
        }
    }

    element = document.getElementById( elementName );
    endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
    updateTimer();
}

// Period
let newPeriod = 1
let period = document.getElementById("period")
 /* add period */
function addPeriod() {
    if (newPeriod == 9) {
        newPeriod = 9
    }
    else {
        newPeriod += 1
        period.textContent = newPeriod
    }
}
 /* minus period */
function minusPeriod() {
    if (newPeriod == 1) {
        newPeriod = 1
    }
    else {
        newPeriod -= 1
        period.textContent = newPeriod
    }
    
}


// Fouls
let newHomeFouls = 0
let newGuestFouls = 0
let homeFouls = document.getElementById("home-fouls")
let guestFouls = document.getElementById("guest-fouls")

function addFoulToHome() {
    newHomeFouls += 1
    if (newHomeFouls < 10 ){
        homeFouls.textContent = "0" + newHomeFouls
    }
    else {
        homeFouls.textContent = newHomeFouls
    }
}
function addFoulToGuest() {
    newGuestFouls += 1
    if (newGuestFouls < 10 ){
        guestFouls.textContent = "0" + newGuestFouls
    }
    else {
        guestFouls.textContent = newGuestFouls
    }
}
