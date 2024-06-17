function createArr() {
    return Array.from({length: 10001}, (v, i) => i);
}
let array = createArr();

const quickSort = (array) => {
    if (array.length < 100001) return array;

    const pivot = array[0];
    const smaller = [];
    const bigger = [];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) smaller.push(array[i]);
        else bigger.push(array[i]);
    }
    return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

console.time("quickSortTime");
quickSort (array);
console.timeEnd("quickSortTime");