const birthdayDate = new Date("June 10, 2026 00:00:00");

const countdown = document.getElementById("countdown");
const dailyMessage = document.getElementById("dailyMessage");
const birthdayContent = document.getElementById("birthdayContent");
const countdownPage = document.getElementById("countdownPage");

function updatePage(){

    const now = new Date();

    const diff = birthdayDate - now;

    const days = Math.ceil(diff/(1000*60*60*24));

    if(diff > 0){

        countdown.innerHTML =
        `${days} days to go 🌷`;

        const messages = {

11:"The countdown has begun 🌷",

10:"The countdown has officially begun. Yes, I am enabling your birthday obsession🌷.",

9:"Yes, today is officially the start of the birth month of one of my favourite people.",

8:"Question of the Day 🌷<br><br>What's a book you've read that you'd recommend to absolutely everyone?",

7:"Scientific Observation: Subject Shambhavi becomes increasingly excited as birthday approaches.",

6:"I was going to write something clever today. This is apparently not that message.",

5:"You deserve a really good birthday this year.",

4:"I was trying to think of what to write today and ended up thinking about how excited you probably are already.",

3:"I was going to write something clever today. This is apparently not that message.",

2:"One last question before tomorrow 🌷<br><br>What's one thing you'd like to do before your next birthday?",

1:"Tomorrow is your day 🌷"
};

        dailyMessage.innerHTML =
        messages[days] || "The surprise is getting closer...";
    }

    else{

    countdownPage.style.display = "none";

    birthdayContent.style.display = "block";

    if(!window.petalsPlayed){

        launchPetals();

        window.petalsPlayed = true;

    }

}

}

function showSection(section){

    const area =
    document.getElementById("contentArea");

    const grid =
document.getElementById("sectionGrid");

const hero =
document.getElementById("birthdayHero");

grid.style.display = "none";

hero.style.display = "none";

    if(section==="letter"){

area.innerHTML=`

<button class="backBtn" onclick="goBack()">
← Back
</button>

<div class="letterCard">

<h2>Happy Birthday 🌷</h2>

<p>

I spent a long time wondering what I could possibly make for you.

The problem was that none of the usual birthday gifts felt enough.

Because how do you fit someone who loves books, creates beautiful art, writes incredibly well, dreams about physics, and somehow manages to be both incredibly smart and incredibly cute into a single gift?

You don't.

So instead, I made this.

A small corner of the internet that exists entirely because today is your day.

I hope this year brings you new adventures, new discoveries, new opportunities, and countless reasons to smile.

So today, I hope you celebrate properly.

Eat too much cake.

Take too many photos.

Laugh a lot.

Make good memories.

And selfishly, I hope it brings me many more conversations with you too.

Happy Birthday, Shambhavi.

And thank you for being one of my favorite people. 🌷

</p>

</div>

`;

}

   if(section==="admire"){

area.innerHTML=`

<button class="backBtn" onclick="goBack()">
← Back
</button>

<h2>Things I Don't Say Enough 💌</h2>

<ul>

<li>You're one of the smartest people I've ever met.</li>

<li>I think you'll make an amazing physicist someday.</li>

<li>You somehow manage to be both intelligent and adorable at the same time.</li>

<li>Your curiosity is one of my favourite things about you.</li>

<li>I don't think you realize how memorable you are.</li>

<li>I think your future self is going to be very proud of you.</li>

<li>You are one of the few people I can talk to for hours without getting bored.</li>

<li>You are the kind of person people remember.</li>

<li>You have a way of making people feel comfortable around you.</li>

<li>I think you're beautiful.</li>

<li>Meeting you has been one of my favorite surprises.</li>

</ul>

`;

}

    if(section==="tulips"){

area.innerHTML = `

<button class="backBtn" onclick="goBack()">
← Back
</button>

<h2>🌷 Tulip Garden 🌷</h2>

<p>
Every tulip hides a small message.
Click them one by one.
</p>

<div id="garden" class="garden">

<button class="tulip" onclick="showTulip(1)">🌷</button>
<button class="tulip" onclick="showTulip(2)">🌷</button>
<button class="tulip" onclick="showTulip(3)">🌷</button>
<button class="tulip" onclick="showTulip(4)">🌷</button>
<button class="tulip" onclick="showTulip(5)">🌷</button>

<button class="tulip" onclick="showTulip(6)">🌷</button>
<button class="tulip" onclick="showTulip(7)">🌷</button>
<button class="tulip" onclick="showTulip(8)">🌷</button>
<button class="tulip" onclick="showTulip(9)">🌷</button>
<button class="tulip" onclick="showTulip(10)">🌷</button>

<button class="tulip" onclick="showTulip(11)">🌷</button>
<button class="tulip" onclick="showTulip(12)">🌷</button>
<button class="tulip" onclick="showTulip(13)">🌷</button>
<button class="tulip" onclick="showTulip(14)">🌷</button>
<button class="tulip" onclick="showTulip(15)">🌷</button>

<button class="tulip" onclick="showTulip(16)">🌷</button>
<button class="tulip" onclick="showTulip(17)">🌷</button>
<button class="tulip" onclick="showTulip(18)">🌷</button>
<button class="tulip" onclick="showTulip(19)">🌷</button>

<button class="tulip special" onclick="showTulip(20)">🌷</button>

</div>

<div id="tulipMessage"></div>

`;

}

    if(section==="voice"){

area.innerHTML=`

<button class="backBtn" onclick="goBack()">
← Back
</button>

<div class="letterCard">

<h2>🎙️ One Last Thing</h2>

<p>

Shambhavi, If you've made it all the way here...

thank you.

Everything on this website was made with one goal:

to make you smile on your birthday.

And here is the final words before i let you go enjoy your birthday in my voice, i know it is not that good , but it is the best you can get(huh because it's my voice)

🌷

</p>

<audio controls>

<source src="voice.mp3" type="audio/mpeg">

</audio>

</div>

`;

}
}

function showTulip(number){

    if(number===13){

document.getElementById("tulipMessage").innerHTML =

`<div class="messageCard">

<h3>🔬 Physicist Detected</h3>

<p>
Bonus Fact Unlocked.
</p>

<p>
Every atom of carbon in your body was forged inside a star that lived and died long before Earth existed.
</p>

<p>
Which means...
</p>

<p>
You are technically made of stardust.
</p>

<p>
You're welcome. 🌷
</p>

</div>`;

return;

}

const messages = {

1:"You make me smile more often than you'd probably guess.",

2:"I'm really glad you exist.",

3:"You're one of my favourite people to talk to.",

4:"Your curiosity is one of your best qualities.",

5:"I think you'll do amazing things someday.",

6:"You make conversations feel effortless.",

7:"You are much more talented than you realize.",

8:"I admire how seriously you take your dreams.",

9:"The world needs more people like you.",

10:"Your future self is going to be proud of you.",

11:"You're the kind of person people remember.",

12:"You have excellent taste in books.",

13:"🔬 Physicist Detected. Click again.",

14:"You're one of the most talented people I've ever met.",

15:"You have a way of making people feel comfortable around you.",

16:"I genuinely admire your creativity.",

17:"I think you're pretty amazing.",

18:"Getting to know you has been one of my favorite parts of this year.",

19:"You became important to me much faster than I expected.",

20:"🌷 Secret Tulip: Meeting you has been one of my favorite moments."
};

document.getElementById("tulipMessage").innerHTML =

`<div class="messageCard">${messages[number]}</div>`;

}

function goBack(){

const area =
document.getElementById("contentArea");

const grid =
document.getElementById("sectionGrid");

const hero =
document.getElementById("birthdayHero");

area.innerHTML = "";

grid.style.display = "grid";

hero.style.display = "block";

}

function launchPetals(){

    for(let i=0;i<30;i++){

        const petal =
        document.createElement("div");

        petal.classList.add("petal");

        petal.innerHTML = "🌷";

        petal.style.left =
        Math.random()*100 + "vw";

        petal.style.animationDuration =
        (4 + Math.random()*3) + "s";

        document.body.appendChild(petal);

        setTimeout(()=>{
            petal.remove();
        },7000);

    }

}

updatePage();
setInterval(updatePage,1000);
