// Task 1.1: Create a variable named studentName with value "John Doe"


// Task 1.2: Create a variable named studentAge with value 20


// Task 1.3: Create a variable named isEnrolled with value true


// Task 2.1: Create a function named greet that takes a name parameter and returns "Hello, [name]!"


// Task 2.2: Create a function named add that takes two parameters and returns their sum


// Task 2.3: Create a function named isEven that returns true if number is even, false otherwise


// Task 3.1: Create an array named colors with three strings: "red", "green", "blue"


// Task 3.2: Create a function named getFirstElement that returns the first element of an array


// Task 4.1: Create an object named car with properties: brand ("Toyota"), model ("Camry"), year (2020)


// Task 4.2: Create a function named getFullName that takes an object with firstName and lastName properties


// Export all variables and functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        studentName,
        studentAge,
        isEnrolled,
        greet,
        add,
        isEven,
        colors,
        getFirstElement,
        car,
        getFullName
    };
}
