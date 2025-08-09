let user = {
    name: "John",
    age: 30,
    isAdmin: true, 
    greet: function() { 
        console.log("Hello, " + this.name);
    }
};

console.log(user.name);  // Outputs: John
user.greet();            // Outputs: Hello, John