function createArr () {
    return Array.from ({length: 10001}, (v, i) => i);
}
let array = createArr

function insertionSort(array){
    let valInsert = array[1];
    let j;
    for(let i = 1; i < array.length; i++){
        for(j = i - 1; j >= 0 && array[j] > valInsert; j--){
            array[j+1] = array[j]
        }
        array[j+1] = valInsert;
    }
    return array;
}

console.time("insertionSortTime");
insertionSort (array);
console.timeEnd("insertionSortTime");