let tittle=document.querySelector(".tittle");
let turn='x';
let squares=[];
let number=0;
let gameOver=false;
function end(num1,num2,num3){

    tittle.innerHTML=`${squares[num1]}  winner`;
    document.getElementById('item'+num1).style.backgroundColor='#000';
    document.getElementById('item'+num2).style.backgroundColor='#000';
    document.getElementById('item'+num3).style.backgroundColor='#000';
    setInterval(function(){tittle.innerHTML +='.'},1000)
    setTimeout(function(){
        location.reload();
    },4000)
}
function winner(){
for(let i=1;i<10;i++){
    squares[i]=document.getElementById('item'+i).innerHTML;
   
}
if(squares[1]==squares[2] && squares[1]==squares[3] && squares[1]!=''){
    end(1,2,3);
     gameOver = true;
}
else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[6]!=''){
    end(4,5,6);
    gameOver = true;
}
else if(squares[9]==squares[7] && squares[7]==squares[8] && squares[8]!=''){
    end(7,8,9);
     gameOver = true;
}
else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[7]!=''){
    end(1,4,7);
     gameOver = true;
}
else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[8]!=''){
    end(2,5,8);
     gameOver = true;
}
else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[9]!=''){
    end(3,6,9); 
    gameOver = true;
}
else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[9]!=''){
    end(1,5,9); 
    gameOver = true;
}
else if(squares[3]==squares[5] && squares[7]==squares[5] && squares[7]!=''){
    gameOver = true;
end(3,5,7);

}else if(number==9){
    tittle.innerHTML=` no winner`;
    setInterval(function(){tittle.innerHTML +='.'},1000)
    setTimeout(function(){
        location.reload();
    },4000)
}
}


function game(id){
    if(gameOver){return;}
let element=document.getElementById(id);
if(turn ==='x' && element.innerHTML==''){
    element.innerHTML='x';
    turn='o';
tittle.innerHTML=' trun o ';
number++;
}
else if(turn ==='o' && element.innerHTML==''){
    element.innerHTML=' o';
    turn='x';
    number++; 
tittle.innerHTML='  trun x ';
}
winner();
}