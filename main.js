const dayOfTheWeek = document.querySelector('.day');
const phrase = document.querySelector('.phrase-of-the-day');

let objectWeekDay = {
    Monday:'I hate Mondays!',
    Tuesday:'Nothing spoils Friday like the realization that today is Tuesday.',
    Wednesday:'You work like that, you work, it seems like a whole week, and then once, and Wednesday.',
    Thursday:'The most beautiful thing on Thursday is waiting for Friday!',
    Friday:'Friday is not only a short day, but also a long night ...',
    Saturday:'I\'ve made a lot of stupid mistakes in my life, but being sober on Saturday is too much ...',
    Sunday:'The best thing about Sunday is Saturday night.',
}

function showDay (){
    let date = new Date();
    let option = {
        weekday: 'long'
    };
    let dateLocalString = date.toLocaleString('en-US', option);
    dayOfTheWeek.innerHTML = dateLocalString;
    return dateLocalString;
}
showDay ();
function getPhrase (){
    let weekDay = showDay ()
    if (weekDay === 'Monday'){
         phrase.innerHTML = objectWeekDay.Monday;
    }else if (weekDay === 'Tuesday'){
        phrase.innerHTML = objectWeekDay.Tuesday;
    }else if (weekDay === 'Wednesday'){
        phrase.innerHTML = objectWeekDay.Wednesday;
    }else if (weekDay === 'Thursday'){
        phrase.innerHTML = objectWeekDay.Thursday;
    }else if (weekDay === 'Friday'){
        phrase.innerHTML = objectWeekDay.Friday;
    }else if (weekDay === 'Saturday'){
        phrase.innerHTML = objectWeekDay.Saturday;
    }else if (weekDay === 'Sunday'){
        phrase.innerHTML = objectWeekDay.Sunday;
    }
}
getPhrase()

