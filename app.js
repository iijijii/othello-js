function draw(){ 
var board=new Array(4);
	drawSquare();
	drawFirst();
	output();
}

function drawFirst(){
	board[1][1]=cell(1,1,'○');
	board[2][2]=cell(2,2,'○');
	board[1][2]=cell(1,2,'●');
	board[2][1]=cell(2,1,'●');
}

function cell(x,y,moji){
	return '<span id="id'+x+y+'">'+moji+'</span>';
}



function drawSquare(){
	for(var x=0;x<4;x++){
		board[x]=new Array(4);
		
		for(var y=0;y<4;y++){
			board[x][y]=cell(x,y,'□');
		}	
	}
}

function output(){
	var line='';
	for(var y=0;y<4;y++){
		for(var x=0;x<4;x++){line+=board[x][y];}
			line+="<br>"
	}	
	document.getElementById("board").innerHTML=line;
}

var turn=0;//●のターン,turn=1は○のターン

function newStone(){

	var i;
	if(document.form1.formx.length&&document.form1.formy.length){
	    for (i = 0; i < document.form1.formx.length; i++) {
	        if (document.form1.formx[i].checked) {
	            var newX=document.form1.formx[i].value;

	        }
	    }
	    for (i = 0; i < document.form1.formy.length; i++) {
	        if (document.form1.formy[i].checked) {
	            var newY=document.form1.formy[i].value;
	        }
	    }
	    if(board[newX][newY]==cell(newX,newY,"□")){
		    if(turn==0){
		    	board[newX][newY]=cell(newX,newY,"○");
		    	turn=1;
			}else{
				board[newX][newY]=cell(newX,newY,"●");
		    	turn=0;
			}
		}
	    output();
	}   
}
