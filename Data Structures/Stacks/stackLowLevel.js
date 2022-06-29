// Low level stack example. Traversty media
class Stack {
    constructor() {
      this.items = []
      this.count = 0 // position of element in stack(.length)
    }
    // Add element to top of stack
    push(element){
      this.items[this.count] = element // this.items.push()
      console.log(`${element} added to ${this.count}`)
      this.count += 1 // adding more to the stack 
      return this.count - 1 // want to start the count from 0, 1 would be the first push 
    }
    // Return and remove top element in stack 
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined 
        // count always starts from 1, need to decrement by 1 to have correct indexing [0]
        let deleteItem = this.items[this.count - 1]
        this.count -= 1 
        console.log(`${deleteItem} removed`)
        return deleteItem
    }
    // Check top element in stack 
    peek() {
      console.log(`Top element is ${this.items[this.count - 1]}`)
      return this.items[this.count - 1]
    }

    // Check if stack is empty 
    isEmpty() {
      console.log(this.count == 0 ? 'stack is empty' : 'stack is not empty')
      return this.count == 0
    }

    // Check size of Stack 
    size() {
      console.log(`${this.count} element(s) in stack`)
      return this.count
    }

    // Print elements in stack 
    print() {
      let str = ''
      for (let i = 0; i < this.count; i++){
        str += this.items[i] + ' '
      }
      return str
    }

    // Clear 
    clear() {
      this.items = []
      this.count = 0
      console.log('Stack cleared');
      return this.items
    }
  }
  
  // Creating a stack object
  const stack = new Stack ()
  
  stack.push(100)
  stack.push(200)

  stack.peek()

  stack.push(300)

  console.log(stack.print());

  stack.pop()
  stack.pop()

  stack.clear()
  console.log(stack.print());
  stack.size()
  stack.isEmpty()

