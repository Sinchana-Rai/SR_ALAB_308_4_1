// const csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

// const rows = csvString.trim().split("\n"); // Split into rows
// const headers = rows[0].split(","); // Extract headers

// const dataArray = [];

// for (let i = 1; i < rows.length; i++) { // Loop through rows (excluding headers)
//   const row = rows[i].split(","); // Split row into cells
//   dataArray.push(row); 
// }

// console.log(dataArray);



const the_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

const rows = the_string.split("\n"); // Split into rows

const cols = []

for (let i = 0; i < rows.length; i++) { 
  const row = rows[i].split(",") // Split row elements into cells
  cols.push(row) // Push the elements into an column array
}

console.log(cols) // Display as 2D array


