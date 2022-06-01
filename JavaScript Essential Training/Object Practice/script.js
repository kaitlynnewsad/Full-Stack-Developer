/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


var student = {
    name: "Kaitlyn Newsad",
    major: "Computer Science",
    age: 22,
    gpa: 3.58,
    gradudating: {
        year: 2022,
        onTrack: true,

    },
};

console.log ("The student object :" , student);
