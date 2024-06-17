function compareAlg (){

console.time("bubbleSortTime");
bubbleSort(array);
console.timeEnd("bubbleSortTime");

console.time("selectionSortTime");
selectionSort (array);
console.timeEnd("selectionSortTime");

console.time("insertionSortTime");
insertionSort (array);
console.timeEnd("insertionSortTime");

console.time("quickSortTime");
quickSort (array);
console.timeEnd("quickSortTime");

console.time("mergeSortTime");
mergeSort (array);
console.timeEnd("mergeSortTime");
}

if (console.timeLog('bubbleSort') < console.timeLog('quickSort')) {
    return 'Bubble Sort';
    } else {
    return 'Quicksort';
    }




console.log('El algoritmo más rápido es:', compareAlg(array));