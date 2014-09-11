/* Controllers */

//Start Controller
var StartCtrl=['$scope','$location','AppName',function($scope,$location,AppName) {
	$scope.name=AppName;
}]; 

//Game Controller
var ScenceCtrl=['$scope','$location','$timeout','$interval','AppName',function($scope,$location,$timeout,$interval,AppName) {
	
	$scope.name=AppName;

	$scope.progress=100;
	$scope.dismissCount=0;
	$scope.isWinned=false;


	var PARAMS={
		startDelay:2000,
		selectedDelay:400,
		gameTime:60000,
		heartBit:100
	};

	var remainTime;
	var dismissCount=0;

	$scope.go=function(url){
		$location.url(url);
	}
	$scope.startGame=function(){
		$scope.lastSelected=null;
		$scope.cards=initCards(4);
		$scope.clickCount=0;
		$scope.isStart=false;
		$scope.isWinned=false;

		if(gameTimer){
			$interval.cancel(gameTimer);
		}
		$scope.progress=100;

		//start game
		$timeout(function(){
			for(var i in $scope.cards){
				for(var j in $scope.cards[i]){
					$scope.cards[i][j].selected=false;	
				}
			}
			//set default value
			$scope.isStarted=true;
			remainTime=PARAMS.gameTime;

		},PARAMS.startDelay);

		//game timer
		var gameTimer=$interval(function(){
			remainTime=remainTime - PARAMS.heartBit;
			var p=remainTime/PARAMS.gameTime*100;
			if(p<1){
				$scope.isStarted=false;
			}
			$scope.progress=p;
		},PARAMS.heartBit);

	}

	$scope.selected=function(card){
		if(!$scope.isStarted){
			return;
		}
		$scope.clickCount++;
		if($scope.lastSelected){
			card.selected=true;
			$timeout(function(){
				card.selected=false;
				$scope.lastSelected.selected=false;

				if($scope.lastSelected.icon==card.icon && $scope.lastSelected.id!=card.id){
					$scope.lastSelected.dismiss=true;
					card.dismiss=true;
					dismissCount=dismissCount+2;
					$scope.isWinned=dismissCount==Math.pow($scope.cards.length,2);
				}
				$scope.lastSelected=null;

			},PARAMS.selectedDelay);
		}
		else{
			card.selected=true;
			$scope.lastSelected=card;
		}
	}

	$scope.startGame();

}];


var randomColor = function(){
    return '#'+'0123456789abcdef'.split('').map(function(v,i,a){return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
};

var initCards=function(level){
	var icons=['music','heart','star','paper-plane','lightbulb','t-shirt','thumbs-up','diamond'];
	var iconCount=Math.min(level*level/2,icons.length);
	var selectedIcons=icons.slice(0,iconCount);
	selectedIcons=selectedIcons.concat(selectedIcons).sort(function(){
		return Math.random()>0.5 ? -1 : 1; 
	});
	var cards=[];
	var j=0;
	var colors={};
	for(var i=0;i<level;i++){
		var row=[];
		for(;j<level*(i+1);j++){
			//set color
			var icon=selectedIcons[j],
			color=colors[icon] || randomColor();
			colors[icon]=color;
			row.push({id:j,icon:selectedIcons[j],dismiss:false,selected:true,color:color});
		}
		cards.push(row);
	}
	return cards;
}

