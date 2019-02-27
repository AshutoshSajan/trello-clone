// bubble sort

// take the first two numbers of the array
// and compare them.
// if second no is bigger than first then dont swap the position
// if its less then first then swap the position
// iterate till the false condition

let a = [1,2,3,4,9,3,1];
function sortedArray(array){
	return array.sort((a,b) => a - b);
}

// ======================================
// version 2
// ======================================
function sortedArray(array){
	var counter = 0;
	// var isSorted = [1,2,3,4,5]
	for(var i = 0; i < array.length; i++){
		counter++
		// isSorted = true;
		console.log(counter);
		for(var j = 0; j < array.length - 1; j++){

			if(array[j] > array[j + 1]){
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
    }
	return array;
}