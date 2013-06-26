function draw(){ 
	var board=new Array(4);
	var line='';

	for(var x=0;x<4;x++){
		board[x]=new Array(4);
		
		for(var y=0;y<4;y++){
			board[x][y]=cell(x,y,'□');
		}		
	}
	
	board[1][1]=cell(1,1,'○');
	board[2][2]=cell(2,2,'○');
	board[1][2]=cell(1,2,'●');
	board[2][1]=cell(2,1,'●');
			
	for(var y=0;y<4;y++){
		for(var x=0;x<4;x++){line+=board[x][y];}
			line+="<br>"
	}	
	document.getElementById("board").innerHTML=line;
}

function cell(x,y,moji){
	return '<span id="id'+x+y+'">'+moji+'</span>';
}

