function solve (input) {
	files = {};
	var n = 0;
	var count = 0;
	
	for (i=0; i<input.length; i++){
		var temp = input[i].split(' ');
		files[i] = [temp[1].trim(), temp[0].trim(), temp[2].trim()];
		n++;
	}		
	column_sort_main(0, files, n);
	column_sort_main_sec(0, 1, files, n);
	var arr_hold = [];
	arr_hold = fill_selector(0, arr_hold, files, n);
	var summb = 0;
	var count = arr_hold.length;
	var filenames = "";
	var out = "{";
	
	for (j=0;j<count;j++){	
		for (i=0;i<n;i++){		
			if (files[i][0] == arr_hold[j]) {
				if (filenames.indexOf(files[i][1]) == -1){	
					if (filenames == ""){				
							filenames = filenames + "\"" + files[i][1]+"\"";							
					}else{
							filenames = filenames + ",\"" + files[i][1]+"\"";
					}
				}
				summb = summb + parseFloat(files[i][2]);		
			}			
		}		
		if (j == count-1){
			out = out+"\""+arr_hold[j]+"\":{\"files\":["+ filenames+"],\"memory\":\""+summb.toFixed(2)+"\"}";
		}else{
			out = out+"\""+arr_hold[j]+"\":{\"files\":["+ filenames+"],\"memory\":\""+summb.toFixed(2)+"\"},";
		}		
		summb = 0;
		filenames = "";
	}
	out = out + "}"
	console.log(out);	
	
	function column_sort_main(ix_m, arr, lenght) {
		var lenght = lenght;
		var holder_arr = {};
		for (i=0;i<lenght-1;i++){
			for (j=i+1;j<lenght;j++){				
				if (arr[i][ix_m] >= arr[j][ix_m]) {
				}else{					
					hoder_arr = arr[i];
					arr[i] = arr[j];
					arr[j] = hoder_arr;
				}
			}
		}
		return arr;       
	} //SORT MULTIDIMENTIONAL /primary colum/ ALPHABETICALLY       	
	function column_sort_main_sec(ix_m, ix_sec, arr, lenght) {
		var lenght = lenght;
		var holder_arr = {};
		for (i=0;i<lenght-1;i++){
			for (j=i+1;j<lenght;j++){
				if ((arr[i][ix_sec] <= arr[j][ix_sec])&&(arr[i][ix_m] == arr[j][ix_m])){
				}else{
					hoder_arr = arr[i];
					arr[i] = arr[j];
					arr[j] = hoder_arr;
				}
			}
		}
		return arr; 
	} //SORT MULTIDIMENTIONAL /by secondary cloum/ ALPHABETICALLY
	function fill_selector(ix_m, selector, subject, len) {
		var counter = 0;
		selector[0]= subject[0][ix_m];
		for (i=0;i<len-1;i++){
			if (subject[i][ix_m] != subject[i+1][ix_m]) {
				counter++;				
				selector[counter] = subject[i+1][ix_m];
			}
		} 
		return selector;	
	} //FILL SUBJECT SELECTOR ARRAY with choseen value
}



solve (["sentinel .exe 15MB",
"zoomIt .msi 3MB",
"skype .exe 45MB",
"trojanStopper .bat 23MB",
"kindleInstaller .exe 120MB",
"setup .msi 33.4MB",
"winBlock .bat 1MB"
]);