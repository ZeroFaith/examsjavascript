function solve (input) {
	var mood = input[1];
	var money = parseFloat(input[0]);
	var tip = 0;
	
	if (mood == "happy"){
		tip = (money/100)*10;
	}else if(mood == "married"){
		tip = (money/100)*0.05;
	}else if(mood == "drunk"){
		tip = (money/100)*15;
		var tip1 = (money/100)*15;
		var times = tip1.toString();
		var len = Number(times.charAt(0));
		
		for (i=0; i<len-1; i++){			
			tip = tip*tip1;
		}		
	}else{
		tip = (money/100)*5;
	}
	console.log(tip.toFixed(2));	
}



solve (["200",
"drunk"]);