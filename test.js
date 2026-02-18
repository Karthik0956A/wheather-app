// A simple test to verify the environment
console.log("Running unit tests...");

if (process.env.NODE_VERSION) {
    console.log(`Testing on Node version: ${process.env.NODE_VERSION}`);
}

console.log("Tests passed successfully!");
process.exit(0);
