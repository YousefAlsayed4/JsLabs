function outerFunction(outerVariable) {
    // Inner function declared inside the outer function
    console.log(`Outer Variable: ${outerVariable}`);

    function innerFunction(innerVariable) {
        // Accessing both outerVariable and innerVariable 
        console.log(`Inner Variable: ${innerVariable}`);
    }

    // Returning the inner function
    return innerFunction;
}

// Creating a closure by calling outerFunction
const closure = outerFunction(1942001);

// Calling the closure with an argument
closure(1942001);
