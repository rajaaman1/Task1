function bubbleSortDescending(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++)
    {
    for (var j = i+1; j < len ; j++)
     {
        if (arr[i]<arr[j]) 
        {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
return arr;
}

let myArray = [5, 1, 9, 3, 7, 6];
let sortedArray = bubbleSortDescending(myArray);
console.log(sortedArray); 