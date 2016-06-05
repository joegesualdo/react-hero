console.log("meow")
import Person from './person.js'
import style from './test.css'

// console.log(style)

document.querySelector(".header").style['backgroundColor'] = "yellow"
document.querySelector(".header").style['marginLeft'] = "0px"
var count = 100;
let joe = new Person();

document.querySelector(".header").innerHTML = joe.name();
