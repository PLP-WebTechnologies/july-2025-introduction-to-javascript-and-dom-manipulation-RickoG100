// 🎯 Part 1: Variables and Conditionals
let systemHealthScore = 75;
let hasAdware = true;

if (systemHealthScore < 50 || hasAdware) {
  console.log("⚠️ Your system needs attention!");
} else {
  console.log("✅ Your system is running smoothly.");
}

// ❤️ Part 2: Custom Functions
function runSystemScan() {
  // Simulate scan result
  let result = hasAdware ? "Adware detected!" : "System clean!";
  document.getElementById("scanResult").innerText = result;
}

function formatTip(tip) {
  return `💡 ${tip}`;
}

// 🔁 Part 3: Loops
let cleanupTips = [
  "Uninstall unused apps",
  "Clear browser cache",
  "Run antivirus scan",
  "Disable startup bloatware"
];

// Using forEach loop
function showTips() {
  let tipsList = document.getElementById("tipsList");
  tipsList.innerHTML = ""; // Clear previous tips
  cleanupTips.forEach(tip => {
    let li = document.createElement("li");
    li.innerText = formatTip(tip);
    tipsList.appendChild(li);
  });
}

// Using for loop
for (let i = 0; i < cleanupTips.length; i++) {
  console.log(`Tip ${i + 1}: ${cleanupTips[i]}`);
}

// 🌐 Part 4: DOM Interactions
document.getElementById("scanBtn").addEventListener("click", runSystemScan);

document.getElementById("toggleTipsBtn").addEventListener("click", () => {
  let tipsList = document.getElementById("tipsList");
  tipsList.style.display = tipsList.style.display === "none" ? "block" : "none";
});

// Creating a new DOM element dynamically
let footer = document.createElement("footer");
footer.innerText = "© 2025 System Hygiene Assistant";
document.body.appendChild(footer);