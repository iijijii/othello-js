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
		    if(turn==0){
		    	if(judge(newY,newY)==true){
			    	board[newX][newY]=cell(newX,newY,"●");
			    	turn=1;
			    }
			}else{
				//if(judge()==true){
					board[newX][newY]=cell(newX,newY,"○");
			    	turn=0;
			    //}
			}
		}
		console.log(turn);
	    output();
	} 
}



function judge(x,y){
	vertical(y);
	horizon(x);
}

function vertical(y){//
	var blacks=new Array();//黒があるところのインデックスを格納
	var whites=new Array();

	for(var i=0;i<4;i++){
		var isBlackOne=$.inArray(cell(i,y,"●"),board[y]);//黒があるところのインデックス
		var isWhiteOne=$.inArray(cell(i,y,"○"),board[y]);
		console.log("i="+i+isBlackOne+isWhiteOne);
		if(isBlackOne!=-1){
			blacks.push(isBlackOne);
		}
		if(isWhiteOne!=-1){
			whites.push(isWhiteOne);
		}	
	}
	 if(whites.length=1){
	 	return true;
	 }
}

function horizon(x){
	var blacks=new Array();
	var whites=new Array();

	for(var i=0;i<4;i++){		
		var isBlackOne=$.inArray(cell(x,i,"●"),board[x]);//黒があるところのインデックス
		var isWhiteOne=$.inArray(cell(x,i,"○"),board[x]);
		console.log("i="+i+isBlackOne+isWhiteOne);
		if(isBlackOne!=-1){
			blacks.push(isBlackOne);
		}
		if(isWhiteOne!=-1){
			whites.push(isWhiteOne);
		}	
	}
	if(whites.length=1){
		return true;
	}
}
