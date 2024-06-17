function generateArr () {
    return Array.from({length: 10001}, (v, i) => i);
}
let array = generateArr();

//Iterativa
function bubbleSort (array){
    let swapped = false;
    for (let i = array.length; i > 0; i--) {
        swapped = true;
        for (let j = 0; j < i-1; j++) {
            if (array[j] > array[j +1]) {
                swapped = false;
                const temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
        if(swapped) break;
    }
    return array;
}
console.time("bubbleSortTime");
bubbleSort(array);
console.timeEnd("bubbleSortTime");

//Recursiva
function bubbleSort (array) {
    for(let i = 0; i < array.length; i++) {
        if(array [i] > array [i +1 ]){
            let j = array [i + 1];
            array [i + 1] = array [i];
            array [i] = j;
            bubbleSort(array);
        }
    }
    return array;
}

console.time("bubbleSortTime");
bubbleSort(array);
console.timeEnd("bubbleSortTime");