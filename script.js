// Global variable to demonstrate scope
const globalMessage = "I'm a global variable!";

// Function to demonstrate local vs global scope
function demoScope() {
  // Local variable with the same name as a global
  const globalMessage = "I'm a local variable!";

  // Another local variable
  const localMessage = "I'm also local!";

  // Display the values
  const output = document.getElementById("output");
  output.innerHTML = `
                <p>Global variable: ${window.globalMessage}</p>
                <p>Local variable with same name: ${globalMessage}</p>
                <p>Another local variable: ${localMessage}</p>
                <p><em>Note how the local variable takes precedence inside the function.</em></p>
            `;

  // Demonstrate block scope with let
  if (true) {
    let blockScoped = "I'm block scoped with let!";
    output.innerHTML += `<p>Inside block: ${blockScoped}</p>`;
  }

  // This would cause an error - uncomment to see
  // output.innerHTML += `<p>Outside block: ${blockScoped}</p>`;
}

// Function that takes parameters and returns a value
function calculateArea(shape, ...dimensions) {
  switch (shape.toLowerCase()) {
    case "rectangle":
      if (dimensions.length < 2) return "Need length and width";
      return dimensions[0] * dimensions[1];
    case "circle":
      if (dimensions.length < 1) return "Need radius";
      return Math.PI * Math.pow(dimensions[0], 2);
    case "triangle":
      if (dimensions.length < 2) return "Need base and height";
      return 0.5 * dimensions[0] * dimensions[1];
    default:
      return "Unknown shape";
  }
}

// Function to demonstrate parameters and return values
function demoParameters() {
  const output = document.getElementById("output");

  // Call the function with different parameters
  const rectArea = calculateArea("rectangle", 5, 8);
  const circleArea = calculateArea("circle", 4);
  const triangleArea = calculateArea("triangle", 6, 9);
  const invalid = calculateArea("square", 5);

  output.innerHTML = `
                <p>Area of rectangle (5x8): ${rectArea}</p>
                <p>Area of circle (r=4): ${circleArea.toFixed(2)}</p>
                <p>Area of triangle (b=6, h=9): ${triangleArea}</p>
                <p>Invalid calculation: ${invalid}</p>
            `;
}

// Function to control animations
function toggleAnimation(elementId, animationClass) {
  const element = document.getElementById(elementId);
  if (element.classList.contains(animationClass)) {
    element.classList.remove(animationClass);
    return false;
  } else {
    element.classList.add(animationClass);
    return true;
  }
}

// Function to demonstrate animation control
function demoAnimationControl() {
  // Create an animation target if it doesn't exist
  if (!document.getElementById("animationTarget")) {
    const output = document.getElementById("output");
    output.innerHTML = `
                    <div id="animationTarget" style="width: 100px; height: 100px; background: #e74c3c; 
                        display: flex; align-items: center; justify-content: center; color: white;">
                        Animate Me!
                    </div>
                    <p>Click the button again to toggle animation</p>
                `;
  }

  // Toggle the animation
  const isAnimating = toggleAnimation("animationTarget", "spin");

  const output = document.getElementById("output");
  if (isAnimating) {
    output.innerHTML += `<p>Animation started!</p>`;
  } else {
    output.innerHTML += `<p>Animation stopped!</p>`;
  }
}

// Function to demonstrate DOM changes
function changeElementAppearance(elementId, changes) {
  const element = document.getElementById(elementId);
  if (!element) return false;

  // Apply each change
  for (const [property, value] of Object.entries(changes)) {
    element.style[property] = value;
  }

  return true;
}

// Function to demonstrate DOM changes
function demoDOMChanges() {
  // Create a target element if it doesn't exist
  if (!document.getElementById("domTarget")) {
    const output = document.getElementById("output");
    output.innerHTML = `
                    <div id="domTarget" style="padding: 15px; margin: 10px 0; background: #3498db; color: white;">
                        Watch me change!
                    </div>
                `;
  }

  // Generate random styles
  const colors = ["#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6"];
  const fonts = ["Arial", "Verdana", "Georgia", "Courier New", "Impact"];

  const randomChanges = {
    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    fontSize: `${Math.floor(Math.random() * 20) + 12}px`,
    fontFamily: fonts[Math.floor(Math.random() * fonts.length)],
    padding: `${Math.floor(Math.random() * 30) + 5}px`,
    borderRadius: `${Math.floor(Math.random() * 20)}px`,
  };

  // Apply the changes
  changeElementAppearance("domTarget", randomChanges);

  // Show what changed
  const output = document.getElementById("output");
  let changesText = "<p>Changes applied:</p><ul>";
  for (const [property, value] of Object.entries(randomChanges)) {
    changesText += `<li>${property}: ${value}</li>`;
  }
  changesText += "</ul>";

  output.innerHTML += changesText;
}

// Function to demonstrate calculations
function demoCalculation() {
  // Generate some random data
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push(Math.floor(Math.random() * 100) + 1);
  }

  // Calculate statistics using helper functions
  const stats = {
    data: data,
    count: calculateCount(data),
    sum: calculateSum(data),
    average: calculateAverage(data),
    min: calculateMin(data),
    max: calculateMax(data),
  };

  // Display the results
  const output = document.getElementById("output");
  output.innerHTML = `
                <p>Data: [${data.join(", ")}]</p>
                <p>Count: ${stats.count}</p>
                <p>Sum: ${stats.sum}</p>
                <p>Average: ${stats.average.toFixed(2)}</p>
                <p>Min: ${stats.min}</p>
                <p>Max: ${stats.max}</p>
            `;
}

// Helper functions for calculations
function calculateCount(data) {
  return data.length;
}

function calculateSum(data) {
  // Using reduce to demonstrate functional programming
  return data.reduce((total, value) => total + value, 0);
}

function calculateAverage(data) {
  return calculateSum(data) / calculateCount(data);
}

function calculateMin(data) {
  // Using Math.min with spread operator
  return Math.min(...data);
}

function calculateMax(data) {
  // Using Math.max with spread operator
  return Math.max(...data);
}

// Initialize the page with some interactive elements
document.addEventListener("DOMContentLoaded", function () {
  // Add click effects to buttons
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      this.style.transform = "scale(0.95)";
      setTimeout(() => {
        this.style.transform = "";
      }, 200);
    });
  });

  // Add animation on scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, observerOptions);

  // Observe all animation sections
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
