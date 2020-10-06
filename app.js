/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score,round_score,active_player,gameplaying,prev,next,x;
prev=0;
next=0;
gameplaying=true;
score=[0,0];
x='a';

round_score=0;
//console.log(dice);

active_player=0;

document.querySelector('.dice').style.display='none';
document.querySelector('.dice1').style.display='none';
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

var cur_score=[0,0];
var score=[0,0]
var hist=[0,0]
document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if (gameplaying){

        x=document.getElementById('win').value;
        console.log(x)

        dice=Math.floor(Math.random()*6)+1;
        dice1=Math.floor(Math.random()*6)+1;
        console.log(dice,dice1);
        hist.unshift(dice);
        console.log(hist);
        document.querySelector('.dice').style.display='block'
        document.querySelector('.dice1').style.display='block'
        document.querySelector('.dice').src='dice-'+dice+'.png';
        document.querySelector('.dice1').src='dice-'+dice1+'.png';
        if (dice!==1 &&dice1!==1){
            if (hist[0]===hist[1] && hist[0]===6){
                next_player(hist);
            }
            
            cur_score[active_player]+=dice+dice1;
            document.getElementById('current-'+active_player).textContent=cur_score[active_player];
            
            
        }
        else {
            cur_score[0]=0;
            cur_score[1]=0;
            document.getElementById('score-'+active_player).textContent=0;
            document.getElementById('current-'+active_player).textContent=0;
            score[active_player]=0;
            active_player === 0 ? active_player=1 : active_player=0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            
            hist[0]=0;
        }
    }    
})
function next_player(hist)
{
    
        cur_score[0]=0;
            cur_score[1]=0;
            document.getElementById('score-'+active_player).textContent=0;
            document.getElementById('current-'+active_player).textContent=0;
            score[active_player]=0;
            active_player === 0 ? active_player=1 : active_player=0;
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

                        hist[0]=0;
    
}
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying)
    {
        document.getElementById('score-'+active_player).textContent=score[active_player]+cur_score[active_player];
        score[active_player]+=cur_score[active_player];
        if(score[active_player]>x-1){
            document.getElementById('name-'+active_player).textContent='WINNER!!';
            document.querySelector('.dice').style.display='none';
            gameplaying=false
        }
        document.getElementById('current-'+active_player).textContent=0;
        cur_score[0]=0;
        cur_score[1]=0;
        active_player === 0 ? active_player=1 : active_player=0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display='none'; 
        document.querySelector('.dice1').style.display='none';
        hist[0]=0;   
    }    
})

document.querySelector('.btn-new').addEventListener('click',function(){
    gameplaying=true;
    score=[0,0];
    cur_score=[0,0];
    active_player=0;
    document.getElementById("win").value = '';
    document.getElementById('name-0').textContent='PLAYER 1';
    document.getElementById('name-1').textContent='PLAYER 2';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.dice1').style.display='none';
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;
    hist[0]=0;
    

})
