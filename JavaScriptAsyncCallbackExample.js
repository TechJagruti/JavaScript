function myFunction(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const success = true;

        if (success) {
            const data = { name: "Aman", age: 21 };
            callback(null, data);   // No error
        } else {
            callback("Something went wrong!", null); // Error case
        }
    }, 3000);
}

myFunction((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data received:", data);
    }
});
