import { cube, foo, user } from "./myModule.js"; //named
import jane from "./myModule.js"; //default

console.log(cube(5));
console.log(foo);
console.log(user.num, user.name, user.address);
console.log(jane.id, jane.name, jane.tel);