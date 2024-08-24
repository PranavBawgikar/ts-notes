## Introduction
TypeScript is a statically typed superset of JavaScript.
#### Difference between `.ts` and `.tsx` in TypeScript
The `.ts` file extension is used when you are creating functions, classes, reducers, etc. that do not require the use of JSX syntax and elements, whereas the `.tsx` file extension is used when you create a React component and use JSX elements and syntax.

#### Simple TypeScript Program:
```typescript
let printNumbers = (start:number, end:number):void => { 
  //`=>` syntax indicates an arrow function, which is a shorthand way of defining a function
    let temp:string = '';
    if(start < end){
        for(let i:number = start; i <= end; i++){
            temp += `${i} `; //Appends the current value of i (converted to a string) followed by a space to the temp string
        }
        console.log(temp);
    } else {
        console.log('Invalid Numbers');
    }
};

printNumbers(5, 10);
```
