// # JS Stack
// you are building a financial trading plateform that need to track stock prices over time.For regulatory compliance, you need to quickly identify the minimum price seen at any point during a trading session.Design a special stack data structure that supports standrad stack operation(push . pop , top) AND an additional operation getmin() that recieve the minimum element in the stack, all in 0(1) time complexity.

//Your MinStack will help traders analyze price movements and comply with financial regulations thats require real time access to minimum prices.



//example :

//Push 5, Push 2, Push 4 , getMin -> 2 (Minimum value in stack).
// Push 3 , push -1 , getMin , pop , getMin -> -1 , then 3 (after-1 is popped)



// Note : your MinStack should have the following methods:
/*
1. push(val): Add an element to the top of stack
2. pop() : Remove the element on top of the stack and retrun it. If the stack is empty , return null.
3. top() : Get the top element without removing it , if the stack is empty , return null.
4. getMin() : Retrieve the minimum element in the stack without removig it. if the stack is empty , return null.
*/


function MinStack() {
    this.stack = [];
    this.minStack = [];

    this.push = function (val) {
        this.stack.push(val);

        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val)
        }
    }

}
