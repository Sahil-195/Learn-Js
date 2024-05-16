// Dates

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023,4,2);
// let myCreatedDate = new Date(2023, 4, 2, 4, 43);
// let myCreatedDate = new Date("2024-01-22");
let myCreatedDate = new Date("10-9-2024");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());


console.log(newDate.toLocaleString('default', {
    weekday : 'long',
})); 



