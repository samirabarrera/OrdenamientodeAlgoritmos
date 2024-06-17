function createArr () {
    return Array.from({length: 10001}, (v, i) => i);
}
let array = createArr();

function selectionSort(array){
    if(array.length < 2) return array;
    let min;
    let index;

    for (let i = 0; i < array.length; i++){
        min = array[i]
        for (let j = i+1; j < array.length; j++) {
            if (min > array[j]){
                min = array[j];
                index = j;
            }
        }
        if(index) {
            [array[i], array[index]] = [array[index], array[i]]
            index = undefined
        }
    }
    return array;
}

console.time("selectionSortTime");
selectionSort (array);
console.timeEnd("selectionSortTime");