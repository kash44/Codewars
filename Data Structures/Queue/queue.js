// FIFO - First In First Out 
// Could use a linked list to implement Queue (more effort)

// Queue implentation with an Object 
class Queue{
    constructor() {
        // essentially a map with id's and values 
        this.data = {};

        // keeping track of total size
        this.size = 0;

        // Keeping track of starting point
        // Whenever we dequeue something we need to change the start index to be the next item in the queue 
        this.startIndex = 0;
    }
    enqueue(item){
        // when we enqueue we put it into our object at the current size 
        // where they key is current size and value is the item itself 
        this.data[this.size] = item;

        // increment the size, next time we enqueue something, the queue gets bigger 
        // Essentially incrementing the key of the item 
        this.size += 1; 

        console.log(this.data);
        // output: 
        // { '0': 'Kash' }
        // { '0': 'Kash', '1': 'CJ' }
        // { '0': 'Kash', '1': 'CJ', '2': 'Doc' }
        // { '0': 'Kash', '1': 'CJ', '2': 'Doc', '3': 'Andrew' }
    }
    dequeue() {
        // Accessing the item 
        // when we want to dequeue, have to take item at 0 
        // startIndex starts at 0 
        const item = this.data[this.startIndex]; 

        // we need to move everything elses index by 1 
        delete this.data[this.startIndex];

        // increment the start index because the item we just dequeued was at that specific index e.g [4]
        // the next time we dequeue we want the item that was after that e.g [5]
        this.startIndex += 1; 
        return item;
    }
}

// // Queue implentation with an Array 
// class Queue{
//     constructor() {
//         this.data = [];
//     }
//     enqueue(item){
//         this.data.push(item)
//     }
//     dequeue() {
//         return this.data.shift()
//     }
// }

module.exports = Queue;


// ------------------run.js code-------------------------
// const Queue = require('./Data Structures/Queue/queue')

// const pokemonPurchasers = new Queue();

// pokemonPurchasers.enqueue('Kash')
// pokemonPurchasers.enqueue('CJ')
// pokemonPurchasers.enqueue('Doc')
// pokemonPurchasers.enqueue('Andrew')

// console.log(pokemonPurchasers.dequeue());
// console.log(pokemonPurchasers.dequeue());
// console.log(pokemonPurchasers.dequeue());
