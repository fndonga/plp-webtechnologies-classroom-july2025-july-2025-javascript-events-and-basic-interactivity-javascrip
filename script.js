// =====================================
// Part 1: Event Handling
// =====================================

// Event: Change background color
document.getElementById("colorBtn").addEventListener("click", function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightyellow" ? "#f4f4f4" : "lightyellow";
});

// Event: Hover over text
document.getElementById("hoverText").addEventListener("mouseover", function() {
    this.textContent = "You're hovering over me!";
});
document.getElementById("hoverText").addEventListener("mouseout", function() {
    this.textContent = "Hover over me!";
});

// =====================================
// Part 2: Interactive Features
// =====================================

// Feature 1: Light/Dark Mode Toggle
document.getElementById("toggleModeBtn").addEventListener("click", function() {
    if(document.body.style.backgroundColor === "black"){
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "#fff";
    }
});

// Feature 2: Counter
let count = 0;
const countSpan = document.getElementById("count");

document.getElementById("incrementBtn").addEventListener("click", function() {
    count++;
    countSpan.textContent = count;
});
document.getElementById("decrementBtn").addEventListener("click", function() {
    count--;
    countSpan.textContent = count;
});

// =====================================
// Part 3: Custom Form Validation
// =====================================
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission
    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if(name === ""){
        isValid = false;
        document.getElementById("nameError").textContent = "Name is required.";
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === ""){
        isValid = false;
        document.getElementById("emailError").textContent = "Email is required.";
    } else if(!emailPattern.test(email)){
        isValid = false;
        document.getElementById("emailError").textContent = "Invalid email format.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    const password = document.getElementById("password").value.trim();
    if(password.length < 6){
        isValid = false;
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Success message
    if(isValid){
        document.getElementById("formSuccess").textContent = "Form submitted successfully!";
        this.reset();
    } else {
        document.getElementById("formSuccess").textContent = "";
    }
});
