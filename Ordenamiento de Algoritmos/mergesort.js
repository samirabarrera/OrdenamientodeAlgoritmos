function createArr (){
    return array.from({length: 10001}, (_, i) => i);
}
let array = createArr();

function emptyArr (){
    return array2.from({length: 0});
}
let array2 = emptyArr();


const mergeSort = (array, array2) => {
    const result = [];
    while (array.length && array2.length) {
        if(array[0] <= array2[0]){
            result.push(array.shift());
        } else {
            result.push(array2.shift());
        }
    }
    return [result, array, array2];
};

console.time("mergeSortTime");
mergeSort (array);
console.timeEnd("mergeSortTime");