function solve (input) {
	var n = 0;
	var arr = {};
	
	for (i=0; i<input.length; i++){
		input[i] = input[i].trim();
		arr[i] = input[i].split(' ');	
		n++;
	}	
	
	var Normandy_x = parseFloat(arr[n-2][0]);
	var Normandy_y = parseFloat(arr[n-2][1]);	
	var A_x = parseFloat(parseFloat(arr[0][1]));
	var A_y = parseFloat(parseFloat(arr[0][2]));
	var B_x = parseFloat(parseFloat(arr[1][1]));
	var B_y = parseFloat(parseFloat(arr[1][2]));
	var C_x = parseFloat(parseFloat(arr[2][1]));
	var C_y = parseFloat(parseFloat(arr[2][2]));	
	var out="";
	
	for (i=0;i<=(arr[n-1]);i++){			
		if(((Normandy_x >= (A_x-1))&&(Normandy_x <= (A_x+1)))&&((Normandy_y >= (A_y-1))&&(Normandy_y <= (A_y+1)))){
			out = out + arr[0][0].toLowerCase()  + "\n";			
		}else if(((Normandy_x >= (B_x-1))&&(Normandy_x <= (B_x+1)))&&((Normandy_y >= (B_y-1))&&(Normandy_y <= (B_y+1)))){
			out = out + arr[1][0].toLowerCase()  + "\n";
		}else if(((Normandy_x >= (C_x-1))&&(Normandy_x <= (C_x+1)))&&((Normandy_y >= (C_y-1))&&(Normandy_y <= (C_y+1)))){
			out = out + arr[2][0].toLowerCase() + "\n";
		}else{	
			out = out+ "space\n";
		}
		Normandy_y++;
	}
	console.log(out);
}




solve (["Terra-Nova 16 2",
"Perseus 2.6 4.8",
"Virgo 1.6 7",
"2 5",
"6",]);
