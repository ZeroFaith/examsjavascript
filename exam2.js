function solve (input) {
	input = input[0].trim();
	var match = [];
	var numberPattern = /\d+/g;
	match = input.match( numberPattern );
	len = match.length;
	var hexarr = [];
	
	for (i = 0; i<len; i++){
		hexarr = parseInt(match[i]);
		match[i] = hexarr.toString(16).toUpperCase();
	}
	
	var out = ""
	for (i=0;i<len; i++){		
		if (match[i].length == 3){
			out = out + "0x";
			match[i] = "0" + match[i];
			out = out + match[i];
		}else if (match[i].length == 2){
			out = out + "0x";
			match[i] = "00" + match[i];
			out = out + match[i];
		}else if (match[i].length == 1){
			out = out + "0x";
			match[i] = "000" + match[i];
			out = out + match[i];
		}else{
			out = out + "0x";
			out = out + match[i];
		}
		if(i<len-1){
			out = out+"-";
		}
	}	
	console.log(out);
}



solve (["5tffwj(//*7837xzc2---34rlxXP%$."]);