class Heap {
    constructor() {
        this.data = [];
    }

    getParentIndex(i) {
        return Math.floor((i -1) / 2);
    }

    getLeftChildIndex(i) {
        return i * 2 + 1;

    }

    getRightChildIndex(i) {
        return i * 2 + 2;
    }

    swap(i1, i2) {
        const temp = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = temp;
    }

    push(key) {
        this.data[this.data.length] = key;
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.data.length - 1;

        while (this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex, this.getParentIndex(currentIndex));

            currentIndex = this.getParentIndex(currentIndex);
        }
    }



poll() {
    const MaxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();

    return MaxValue;
}

heapifyDown() {
    let currentIndex = 0;

    /* 
    Recursion is a process in which a function calls itself as a subroutine. This allows the 
    function to be repeated several times, since it calls itself during its execution. 
    Recursion is often seen an efficient method of programming since it requires the least
    amount o fcode to perform the necessary functions.
    */

    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined){
        let biggestChildIndex = this.getLeftChildIndex(currentIndex);

        if (this.data[this.getRightChildIndex(currentIndex)] !== undefined
        && this.data[this.getRightChildIndex(currentIndex)] 
        > this.data[this.getLeftChildIndex(currentIndex)]) {
            biggestChildIndex = this.getRightChildIndex(currentIndex);
        }

        if (this.data[currentIndex] < this.data[biggestChildIndex]) {
            this.swap(currentIndex, biggestChildIndex);
            currentIndex = biggestChildIndex;
        } else {
            return;
        }
    }
}


}




const heap = new Heap();
console.log(heap);
heap.push(25);
heap.push(5);
heap.push(40);
heap.push(70);
heap.push(90);
heap.push(44);

console.log(heap.data.join(','));

let a = [];
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())
a.push(heap.poll())

console.log('Top 5 items:', a);

console.log(heap.data.join(','));