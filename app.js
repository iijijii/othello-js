function draw(){ 
	var board=new Array();
	drawSquare();
	drawFirst();
	output();
	turn=0;
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

var turn;//●のターン,turn=1は○のターン

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
			judge(newX,newY);
		}
		console.log(turn);
	    output();
	} 
}


function judge(x,y){
	if(judges(x,y)==true){

		for(var i=0;i<directions.length;i++){
			rollOver(x,y,stones[i],directions[i]);
			}
		if(turn==0){turn=1;}
		else{turn=0;}
	}	
}

var stones=new Array();//インデックスはdirectionsのインデックスを表す、要素はひっくりかえせる個数

function judges(x,y){
	var party="●";
	var enemy="○";
	if(turn==1){
		party="○";
		enemy="●";
	}

	var flag=false;//裏返せない

	while(stones.length!==0){
		stones.pop();
	}

	for(var i=0;i<directions.length;i++){
		var n=1;
		while(board[x+n*directions[i].dx][y+n*directions[i].dy]==enemy){
			n++;          //n-1=ひっくりかえせる数
		}	
		if(n>=2&&board[x+n*directions[i].dx][y+n*directions[i].dy]==party){
			stones.push(n-1);
			flag=true;
		}else{
			stones.push(0);
		}
	}
	return flag;
}


var directions=[{dx:-1,dy:-1},{dx:0,dy:-1},{dx:1,dy:-1},{dx:1,dy:0},
				{dx:1,dy:1},{dx:0,dy:1},{dx:-1,dy:1},{dx:-1,dy:0}];

function rollOver(x,y,n,d){//(x,y)からn-1個dの方向に裏返す
	var party="●";
	var enemy="○";
	if(turn==1){
		party="○";
		enemy="●";
	}
	
	for(var j=0;j<=n;j++){
		board[x+j*d.dx][y+j*d.dy]=party;
	}
}

