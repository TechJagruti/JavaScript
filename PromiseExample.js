function mydata() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const data = { name: "Rohit", age: 23 };
            resolve(data);  // success
        }, 2000);
    });
}

mydata()
    .then((data) => {
        console.log("Data received:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

console.log("Program continues...");
