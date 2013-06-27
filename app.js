function draw(){ 
var board=new Array(length);
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

/*function cell(x,y,moji){
	return '<span id="id'+x+y+'">'+moji+'</span>';
}*/

var length=4;//

function cell(x,y,moji){
	return moji;
}

function drawSquare(){
	for(var x=0;x<length;x++){
		board[x]=new Array(length);
		
		for(var y=0;y<length;y++){
			board[x][y]=cell(x,y,'□');
		}	
	}
}

function output(){
	var line='';
	for(var y=0;y<length;y++){
		for(var x=0;x<length;x++){line+=board[x][y];}
			line+="<br>"
	}	
	document.getElementById("board").innerHTML=line;
}

var turn=0;//●のターン,turn=1は○のターン

function newStone(){
	//ラジオボタンの値を設定
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

	    if(board[newX][newY]==cell(newX,newY,"□")){//空いてるかどうか
			judge(newX,newY,turn);
		}
		console.log(turn);
	    output();
	} 
}



function judge(x,y,turn){
	vertical(x,y,turn);
	horizon(x,y,turn);
}

function vertical(x,y,turn){//

	var party="●";
	var enemy="○";
	if(turn==1){
		party="○";
		enemy="●";
	}

	var i=1;
	if(x<length/2){	
		while(board[x+i][y]==enemy){
			i++;
		}
		if(i>=2&&board[x+i][y]==party){
			for(var j=x;j<x+i;j++){			
				board[j][y]=cell(j,y,party);
			}
		}
		else{
			checker=false;
		}
	}if(x>=length/2){
		while(board[x-i][y]==enemy){
			i++;
		}
		if(i>=2&&board[x-i][y]==party){
			for(var j=x;j>x-i;j--){			
				board[j][y]=cell(j,y,party);
			}
		}
		else{
			checker= false;
		}
	}	
}


function horizon(x,y,turn){//

	var party="●";
	var enemy="○";
	if(turn==1){
		party="○";
		enemy="●";
	}

	var i=1;
	if(y<length/2){	
		while(board[x][y+i]==enemy){
			i++;
		}
		if(i>=2&&board[x][y+i]==party){
			for(var j=y;j<y+i;j++){			
				board[x][j]=cell(x,j,party);
			}
		}
		else{
			
		}
	}if(x>=length/2){
		while(board[x][y-i]==enemy){
			i++;
		}
		if(i>=2&&board[x][y-i]==party){
			for(var j=y;j>y-i;j--){			
				board[x][j]=cell(x,j,party);
			}
		}
		else{
			
		}
	}	
}

function diagonal(){


}


