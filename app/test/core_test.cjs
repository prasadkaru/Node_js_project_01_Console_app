const fs = require('fs');

// Sample data
const guests = [
    {
        name: "name1",
        address: "add1"
    },
    {
        name: "name2",
        address: "add2"
    },
    // Add more guest objects as needed
];

// Convert the array to JSON format
const guestsJSON = JSON.stringify(guests, null, 2);

// Specify the file path
const filePath = 'guests.json';

// Write data to the file
fs.writeFileSync(filePath, guestsJSON);

console.log('Data has been written to', filePath);
