/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

const objA={
  name: 'Bob',
  age: 25
}
const objB ={
  country: 'USA'
}
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const merged = merge(objA, objB)
export {}