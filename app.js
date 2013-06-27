function draw(){ 
	var board=new Array();
	drawSquare();
	drawFirst();
	output();
}

function drawFirst(){
	board[length/2-1][length/2-1]=cell(length/2-1,length/2-1,'○');
	board[length/2][length/2]=cell(length/2,length/2,'○');
	board[length/2-1][length/2]=cell(length/2-1,length/2,'●');
	board[length/2][length/2-1]=cell(length/2,length/2-1,'●');
}

/*function cell(x,y,moji){
	return '<span id="id'+x+y+'">'+moji+'</span>';
}*/

var length=4+2;

function cell(x,y,moji){
	return moji;
}

function drawSquare(){
	for(var x=0;x<length;x++){
		board[x]=new Array();
		for(var y=0;y<length;y++){
			board[x][y]=".";
		}
	}

	for(var x=1;x<length-1;x++){
		for(var y=1;y<length-1;y++){
			board[x][y]="□";
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
	    for (i = 0; i < document.form1.formx.length; i++) {//0~4
	        if (document.form1.formx[i].checked) {
	            var newX=parseInt(document.form1.formx[i].value);
	        }
	    }
	    for (i = 0; i < document.form1.formy.length; i++) {
	        if (document.form1.formy[i].checked) {
	            var newY=parseInt(document.form1.formy[i].value);
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
//	vertical(x,y,turn);
	horizon(x,y,turn);
	if(turn==1){turn=0;}
	else{turn=1;}
}

function horizon(x,y,turn){//

	var party="●";
	var enemy="○";
	if(turn==1){
		party="○";
		enemy="●";
	}

	var i=1;
	
	//(board[x+i][y]!=".")

	while(board[x+i][y]==enemy){
		i++;
	}
	if(i>=2&&board[x+i][y]==party){
		for(var j=x;j<x+i;j++){			
			board[j][y]=cell(j,y,party);
		}
	}
	

	//else{
	
	//}

	var k=1;
	while(board[x-k][y]==enemy){
		k++;
	}
	if(k>=2&&board[x-k][y]==party){
		for(var j=x;j>x-k;j--){			
			board[j][y]=cell(j,y,party);
		}
	}
	//else{
	
	//}
}	




function verical(x,y,turn){//

	var party="●";
	var enemy="○";
	if(turn==1){
		party="○";
		enemy="●";
	}

	var i=1;
	
	while(board[x][y+i]==enemy){
		i++;
	}
	if(i>=2&&board[x][y+i]==party){
		for(var j=y;j<y+i;j++){			
			board[x][j]=party;
		}
	}
	//else{
		
	//}


	while(board[x][y-i]==enemy){
		i++;
	}
	if(i>=2&&board[x][y-i]==party){
		for(var j=y;j>y-i;j--){			
			board[x][j]=party;
		}
	}
	//else{
		
	//}
		
}

function diagonal(){


}


