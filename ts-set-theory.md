## Set Theory in TypeScript
Set theory is a branch of mathematical logic that deals with the study of sets, which are collections of distinct objects. Set theory is concerned with understanding the properties and relationships between sets, including their size, intersection, union, and complement. The study of set theory has many applications in mathematics, computer science, linguistics, and philosophy.

In simple terms - Set Theory tells you about the relationships between distinct groups of items.
### How do we use Set Theory in TypeScript?
All the examples will make use of the followins sets:
```typescript
// Base sets to use for our types
const one = new Set([1, 2, 3, 4] as const)
const two = new Set([3, 4, 5, 6,] as const)
```
### Union: `A ∪ B`
In Set Theory, a union is a new set that contains all the distinct elements that are present in at least one of the original sets. To represent this in TypeScript there are two phases:
1. Implementing a function that will return the correct set values.
2. Creating the types so that the `types` are represented correctly.
#### Using `any`
```ts
// As a reusable function
function Union(one: Set<any>, two: Set<any>) {
  return new Set([...one, ...two])
}
console.log(Union(one, two)) // Type is Set<any>
```
This function takes two sets `one` and `two` that can contain `any` type of values. The result is a new `set` that can hold any type of values, but TypeScript will just treat it as `Set<any>`. However, when you use `any`, TypeScript loses track of what specific types are in your sets. It can't help you catch errors if you accidentally mix types you didn't intend to.
#### Using Generics `<T, U>`
```ts
// Adding types T and U
function Union<T, U>(one: Set<T>, two: Set<U>) {
    return new Set([...one, ...two])
}
console.log(Union(one, two)) // Type is Set<1|2|3|4|5|6>
```
