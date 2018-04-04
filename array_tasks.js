var arrayTasks = {

	concat: function (arr1, arr2) {
		var newArray = arr1.concat(arr2);
		return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
			arr.splice(index, 0, itemToAdd);
			return arr;
	},

	square: function (arr) {
		var newArray = [];
		for(let element of arr){
			var num = element * element;
			newArray.push(num);
		};
		return newArray;
	},

	sum: function (arr) {
			let total = arr.reduce(function(x, y) {return x + y}, 0);
			return total;
	},

	findDuplicates: function (arr) {
		let sortedarr = arr.sort();
		let result = [];
		for (let i = 0; i < sortedarr.length - 2; i++) {
    	if (sortedarr[i + 1] === sortedarr[i] && result.includes(i) === false){
        result.push(arr[i]);
    	};
		};
		return result;
	},

	removeAndClone: function (arr, valueToRemove) {
		for(var i = 0; i < arr.length; i++){
        if(arr[i] === valueToRemove) {
            arr.splice(i,1);
					};
				};
				return arr;
	},

	findIndexesOf: function (arr, itemToFind) {
		let indexes = [];
		for(let i = 0; i < arr.length; i++){
				if(arr[i] === itemToFind) {
						let foundIndex = arr.findIndex(i);
							indexes.push(foundIndex);
					};
				};
			return indexes;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let evens = arr.filter(even => even % 2 ===0);
		let sum = 0;
		evens.forEach(function(even){
			sum += (even * even);
		});
		return sum;
	},

}

module.exports = arrayTasks
