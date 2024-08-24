## Type Guards
#### `never` Type
It represents values that will never occur. The `never` type is useful in situations where you have code that should never execute, such as unreachable code or code that throws an error or when we are certain that a particular situation will never happen, we use the `never` type. By using the `never` type, you can ensure that the TypeScript compiler will catch any errors that may arise from these scenarios.
For example, let’s say you have a function that should never return, such as a function that always throws an error. You can annotate the return type of this function as “never” to tell TypeScript that this function will never complete normally:
```ts
function throwError(message:string):never {
    throw new Error(message);
}
```
In the example above, if you call the `throwError` function, it will always throw an error and never return normally. By annotating the return type as `never`, TypeScript knows that any code that follows the call to `throwError` will never execute.

We cannot assign any value to `never`
```ts
let variable: void = null; 
let variable1: never = null;	 // error 
let variable2: never = 1;        // error 
let variable3: never = "geek";	 // error 
let variable4: never = true;	 // error
```
