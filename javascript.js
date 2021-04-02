//challenge 1: your age in days
function born()
{
    var bithyear=prompt("what year were you born");
    var ageInDays=(2020-bithyear)-365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('your are ' + ageInDays + 'days');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);  
    document.getElementById("flex-box-result").appendChild(h1);
    console.log(ageInDays);
}
function reset()
{
    document.getElementById("ageInDays").remove();
}
function generate()
{
    var image=document.createElement('img');
    var div=document.getElementById('lambo');
    image.src="C:/Users/admin/Documents/New folder2/lambogini.jpg";
    image.setAttribute("alt","suga");
    div.appendChild(image);
}
// challenge 3: rock, paper, scissor
function rpsGame(yourchoice)
{
    console.log(yourchoice); 
    var humanChoice,botChoice;
    humanChoice=yourchoice.id;
    botChoice=numberchoice(ran()) ;
    console.log(humanChoice,botChoice);
    results=decides(humanChoice,botChoice);
    console.log(results);
    Message=finalmessage(results); // return  like {'message':'you won','color':'greeon}
    console.log(Message);
    rpsfrontend(yourchoice.id,Message,botChoice);
}
function ran()
{
  return Math.floor(Math.random()*3);
}
function numberchoice(number)
{
    return ["rock","paper","scissor"][number];
}
function decides(humanChoice,botChoice)
{
    rpsdatabase={
        'rock':{'scissor':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissor':0},
        'scissor':{'paper':1,'scissor':0.5,'rock':0}

}
    yourscore=rpsdatabase[humanChoice][botChoice];
    botscore=rpsdatabase[botChoice][humanChoice];
    return [yourscore,botscore];
}
function finalmessage([yourscore,botscore])
{
    if(yourscore === 0)
    {
        return {"message":"YOU LOST!","color":"red"};
    }
    else if(yourscore === 0.5)
    {
        return {"message":"YOU TIE!","color":"yellow"};
    }
    else
    {
        return {"message":"YOU WON!","color":"green"};
    }
}
function rpsfrontend(humanChoice,finalmessage,botChoice)
{

    var imagedatabase={
        "rock":document.getElementById('rock').src,
        "paper":document.getElementById('paper').src,
        "scissor":document.getElementById('scissor').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var msgDiv = document.createElement('div');
    humanDiv.innerHTML="<img src='"+imagedatabase[humanChoice]+"' height=150px width=150px style='box-shadow: 0px 10px 50px green;'>";
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    msgDiv.innerHTML="<h1 style='color:"+finalmessage.color+";font-size:60px;padding:30px;'>"+finalmessage.message+"</h1>";
    document.getElementById("flex-box-rps-div").appendChild(msgDiv);
    botDiv.innerHTML="<img src='"+imagedatabase[botChoice]+"' height=150px width=150px style='box-shadow: 0px 10px 50px red;'>";
    document.getElementById("flex-box-rps-div").appendChild(botDiv);   
}
//challenge 4:  change the color of all buttons
var all_button=document.getElementsByTagName('input');
console.log(all_button);
let  copyAllButton=[]
for(var i=0;i<all_button.length;i++)
{
    copyAllButton.push(all_button[i].classList[1]);
}


function buttoncolorchange(button)
{
 if(button.value ==='red')
 {
     buttonred();
 }
 else if(button.value ==='green')
 {
     buttongreen();
 }
 else if(button.value === 'reset')
{
    buttonreset();
}
else
{
    buttonrandom();
}
}
function buttonred()
{
    for(var i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]); //access classlist and remove the second class 
        all_button[i].classList.add('btn btn-danger');
    }
}
function buttonred()
{
    for(var i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]); //access classlist and remove the second class 
        all_button[i].classList.add('btn-danger');
    }
}
function buttongreen()
{
    for(var i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]); //access classlist and remove the second class 
        all_button[i].classList.add('btn-success');
    }
}
function buttonreset()
{
    for(var i=0;i<all_button.length;i++)
    {
        all_button[i].classList.remove(all_button[i].classList[1]); //access classlist and remove the second class 
        all_button[i].classList.add(copyAllButton[i]);
    }
}
function buttonrandom()
{
    var choices=['btn-primary','btn-danger','btn-success','btn-warning'];
    for(var i=0;i<all_button.length;i++)
    {
    all_button[i].classList.remove(all_button[i].classList[1]);
    all_button[i].classList.add(choices[Math.floor(Math.random()*4)]);
    }
}
//Challange 5: Blackjack
let blackjackGame={
    "you":{'scorespan':'#your-blackjack-score','div':'#Your-Box','score':0},
    "dealer":{'scorespan':"#dealer-blackjack-score",'div':'#Dealer-Box','score':0},
    "cards":['2','3','4','5','6','7','8','9','10','J','K','Q','A'],
    "cardsmap":{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'K':10,'Q':10,'A':[1,11]},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand':false,
    'turnsover':false,
};
const  hitsound=new Audio("C:/Users/admin/Desktop/javascript course/sounds/swish.m4a");
const  winsound=new Audio("C:/Users/admin/Desktop/javascript course/sounds/cash.mp3");
const  lostsound=new Audio("C:/Users/admin/Desktop/javascript course/sounds/aww.mp3");
//if button with that id is clicked eventlistener look for the click event and then call the blackjack function
document.querySelector("#Blackjack-hit-button").addEventListener("click",blackjackhit);//queryselector is similar to css selector.
document.querySelector('#Blackjack-Stand-button').addEventListener("click",dealerlogic);
document.querySelector("#Blackjack-deal-button").addEventListener("click",blackjackDeal);
function blackjackhit()
{
    if(blackjackGame['isStand']===false)
    {
  let card=randomCard();
  showcard("you",card);
  updatescore(card,'you');
  showscore('you');
    }
}
function randomCard()
{
    let randomIndex=Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}
function showcard(activeplayer,card)
{
    if(blackjackGame[activeplayer]['score']<=21)
    {
        let cardimage = document.createElement('img');
        card=String(card);
        cardimage.src=`C:/Users/admin/Desktop/javascript course/images/${card}.png`;//we use this `` to pass the variable by giving $ and bracket{} and variable 
        console.log(cardimage);
        document.querySelector(blackjackGame[activeplayer]['div']).appendChild(cardimage);
        hitsound.play();
    }
}
function blackjackDeal()
{
    if(blackjackGame['turnsover']==true)
    {
        blackjackGame['isStand']=false;
        blackjackGame['turnsover']=false;

    let yourimages=document.querySelector('#Your-Box').querySelectorAll('img');
    let dealerimages=document.querySelector('#Dealer-Box').querySelectorAll('img');
    for(let i=0;i<yourimages.length;i++)
    {
        yourimages[i].remove();
    }
    for(let i=0;i<dealerimages.length;i++)
    {
        dealerimages[i].remove();
    }
    blackjackGame['you']['score']=0;
    blackjackGame['dealer']['score']=0;
    document.querySelector('#your-blackjack-score').textContent=0;
    document.querySelector('#dealer-blackjack-score').textContent=0;
    document.querySelector('#your-blackjack-score').style.color='white';
    document.querySelector('#dealer-blackjack-score').style.color='white';
    document.querySelector('#blackjack-result').textContent="Let's Play";
    document.querySelector('#blackjack-result').style.color='black';
}
}
function updatescore(card,activeplayer)
{
    //if adding 11 keeps me below 21,add 11,otherwise add 1
    if(card=='A')
    {    
        if(blackjackGame[activeplayer]['score']+blackjackGame['cardsmap'][card][1]<=21)
        {
            blackjackGame[activeplayer]['score']+=blackjackGame['cardsmap'][card][1];
        }
        else
        {
            blackjackGame[activeplayer]['score']+=blackjackGame['cardsmap'][card][0];
        }
    }
    else
    {
        blackjackGame[activeplayer]['score']+=blackjackGame['cardsmap'][card];
    }
    console.log(blackjackGame[activeplayer]['score']);
} 
function showscore(activeplayer)
{
    if(blackjackGame[activeplayer]['score']>21)
    {
        document.querySelector(blackjackGame[activeplayer]['scorespan']).textContent='BUST';
        document.querySelector(blackjackGame[activeplayer]['scorespan']).style.color='red';
    }
    else
    {
        document.querySelector(blackjackGame[activeplayer]['scorespan']).textContent=blackjackGame[activeplayer]['score'];
    }
}
function dealerlogic()
{
    blackjackGame['isStand']=true;
    if(blackjackGame['turnsover']===false)
    {
    let card=randomCard();
    showcard('dealer',card);
    updatescore(card,'dealer');
    showscore('dealer');
    if(blackjackGame['dealer']['score']>15)
    {
        blackjackGame['turnsover']=true;

        showResult(computeWinner());
    }
}
  
}
function computeWinner()
{
    let winner;
    if(blackjackGame['you']['score'] <= 21)
    {
        if(blackjackGame['you']['score']>blackjackGame['dealer']['score']||blackjackGame['dealer']['score']>21)
        {
            blackjackGame['wins']++;
            winner='you';
            console.log('you won');
        }
        else if(blackjackGame['you']['score']<blackjackGame['dealer']['score'])
        {
            blackjackGame['losses']++;
            winner='dealer';
            console.log('bot won');
        }
        else if(blackjackGame['you']['score']===blackjackGame['dealer']['score'])
        {
            blackjackGame['draws']++;
                console.log('you drew');
        }
    }
    else if(blackjackGame['dealer']['score']<=21)
    {
        blackjackGame['losses']++;
        winner='dealer'
        console.log('you lost');
    }
    else if(blackjackGame['dealer']['score']>21)
    {
        blackjackGame['draws']++;
        console.log('you drew');
    }
    console.log('winner is',winner);
    return winner;
}
function showResult(winner)
{
    if(blackjackGame['turnsover']===true)
    {
    let message,messageColor;
    if(winner=='you')
    {
        document.querySelector('#wins').textContent=blackjackGame['wins'];
        message='You Won!';
        messageColor='green';
        winsound.play();
    }
    else if(winner==='dealer')
    {
        document.querySelector('#losses').textContent=blackjackGame['losses'];
        message='You Lost!';
        messageColor='red';
        lostsound.play();
    }
    else
    {
        document.querySelector('#draws').textContent=blackjackGame['draws'];
        message="You draw!";
        messageColor='red';
        lostsound.play();
    }
    document.querySelector("#blackjack-result").textContent=message;
    document.querySelector("#blackjack-result").style.color=messageColor;
}
}