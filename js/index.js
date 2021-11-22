import { Course } from "./Courses.js";

const library = [];

const course = new Course("JavaScript", "Damian Moliński", "Opis kursu JS");
const course1 = new Course("PHP", "Damian Moliński", "Opis kursu PHP");

course.addToLibrary(library);
course1.addToLibrary(library);

course.getCourse(library, 0);
course1.getCourse(library, 1);

console.log(library);

const testInner = document.querySelector(".test-wrapper > .test");
const testWrapper = document.querySelector(".test-wrapper");

// course2.innerHTML = course1.getCourse(library, 0);

for (let i = 0; i <= library.length; i++) {
    testInner.innerHTML = course1.getCourse(library, i);
}

// console.log(library);
