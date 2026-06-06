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

9:"Well, it's finally June. I know you've been waiting for this.",

8:"Question of the Day 🌷<br><br>What's a book you've read that you'd recommend to absolutely everyone?",

7:"Scientific Observation: Subject Shambhavi becomes increasingly excited as birthday approaches.",

6:"I was going to write something clever today. This is apparently not that message.",

5:"You deserve a really good birthday this year.",

4:"Question of the Day 🌷<br><br>What's your favourite birthday memory?",

3:"Question of the Day 🌷<br><br>If you had the chance to change one thing from your past, what would it be and why?",

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

Because how do you fit someone who loves books, creates beautiful art, writes incredibly well, dreams about physics, and somehow manages to be both incredibly smart and incredibly creative into a single gift?

You don't.

So instead, I made this.

A small corner of the internet that exists entirely because today is your day.

I hope this year brings you good memories, new opportunities, countless reasons to smile.

So today, I hope you celebrate properly.

Eat too much cake.

Take too many photos.

Laugh a lot.

Make good memories.

Happy Birthday, Shambhavi.

Now go enjoy your day properly.

You deserve it. 🌷

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

<li>You care deeply about the things that matter to you.</li>

<li>Your curiosity is one of my favourite things about you.</li>

<li>I don't think you realize how memorable you are.</li>

<li>I think your future self is going to be very proud of you.</li>

<li>I admire how calmly you handle difficult situations and find solutions to problems.</li>

<li>You are the kind of person people remember.</li>

<li>You have a way of making people feel comfortable around you.</li>

<li>You're weirdly good at motivating people.</li>

<li>I am lucky to have a friend like you.</li>

<li>You put a lot of effort into the things you care about.</li>

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

    if(section==="secret"){

area.innerHTML = `

<button class="backBtn" onclick="goBack()">
← Back
</button>

<div class="letterCard">

<h2>🌷 One Last Thing</h2>

<p>

This section is password protected.

</p>

<input
type="password"
id="secretPassword"
placeholder="Enter password"
style="
padding:10px;
border-radius:10px;
width:250px;
">

<br><br>

<button onclick="unlockSecret()">
Unlock
</button>

<div id="secretArea"></div>

</div>

`;

}

 if(section==="future"){

area.innerHTML = `

<button class="backBtn" onclick="goBack()">
← Back
</button>

<div class="letterCard">

<h2>⭐ For Future Shambhavi</h2>

<p>

Since this is your birthday, I thought I'd leave one final question.

A year from now, when your next birthday arrives...

what's one thing you'd like to have done, achieved, learned, experienced, or simply be proud of?

</p>

<textarea
id="futureAnswer"
rows="6"
style="width:80%;max-width:600px;border-radius:12px;padding:10px;">
</textarea>

<br><br>

<button onclick="submitFuture()">
Send To Future Shambhavi 🌷
</button>

<div id="futureMessage"></div>

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

1:"You make people around you smile more often than you'd probably guess.",

2:"You make people feel heard.",

3:"You're capable of doing so many things and that is impressive.",

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

18:"You ask really good questions.",

19:"You always have something interesting to say.",

20:"🌷 Secret Tulip: You're the kind of friend people are lucky to have."
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

function submitFuture(){

document.getElementById("futureMessage").innerHTML =

`

<div class="messageCard">

<p>

I hope future-you gets to do it.

I hope you're a little closer to your dreams.

I hope you're still curious.

I hope you're still creating.

And I hope this year is kind to you.

🌷

</p>

</div>

`;

}

function unlockSecret(){

const password =
document.getElementById("secretPassword").value;

if(password==="Somuuu"){

document.getElementById("secretArea").innerHTML = `

<div class="letterCard">

<h2>For Your Eyes Only 🌷</h2>

<p>

Happy birthday Shambhavi aka Somu aka my cute little rabit, i hope this birthday will bring you joy, positivity and lots of gifts.

Shambhavi i am lucky to have a girl like you in my life and i hope and pray to have you with me forever. 

Shambhavi i know i have said sorry to you so many times and made countless mistakes which you forgive me for and i am grateful for it.

But i am gonna improve yarr. i am gonna try to not make those mistakes again and on your next birthday i hope you will get a improved Krishna.




</p>

<br>

<h3>🎙️ Voice Note</h3>

<audio controls>

<source src="voice.mp3" type="audio/mpeg">

</audio>

</div>

`;

}

else{

document.getElementById("secretArea").innerHTML =

`

<p>

Wrong password 🌷

</p>

`;

}

}

updatePage();
setInterval(updatePage,1000);
