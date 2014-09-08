function solve (input) {
	var prices = [];
	var n = 0;
	var count = 0;
	for (i=0; i<input.length; i++){
		var temp = parseFloat(input[i]).toFixed(2);
		prices[i] = temp;
		n++;
		//console.log(prices[i]);
	}	
	
	for (i=0; i<n; i++){
		if(i==0){
			console.log(prices[i] + "fixed");
		}else{
			if(prices[i]>prices[i-1]){
				console.log(prices[i] + "up");
			}else if(prices[i]<prices[i-1]){
				console.log(prices[i] + "down");
			}else if(prices[i]==prices[i-1]){
				console.log(prices[i] + "fixed");
			}
		}
	
	}
	
}


solve (["36.333",
"36.5",
"37.019",
"35.4",
"35",
"35.001",
"36.225",
]);