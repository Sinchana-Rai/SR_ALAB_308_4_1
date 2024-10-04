const the_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";


const rows = the_string.split('\n');
const headers = rows[0].split(',')


// console.log(headers)
const result = [];

for (let i = 1; i < rows.length; i++) {
  const row = rows[i].split(',');
  const obj = {};

  for (let j = 0; j < headers.length; j++) {
    obj[headers[j].toLowerCase()] = row[j];
  }
  
  result.push(obj);
}

console.log(`Initial array of objects`)
console.log(result) //displays the 2D array


//---------------------------------------------------
// Remove the last element from the sorted array.

console.log(`After popping the last element from array`)
result.pop()
console.log(result)



//----------------------------------------------------
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

const add_string_at_index = { id: "48", name: "Barry", occupation: "Runner", age: "25" }

const indextoinsert = 1
// result.splice(indextoinsert, 0, ...Object.keys(add_string_at_index))

console.log(`After inserting the object at index 1`)
result.splice(indextoinsert, 0, add_string_at_index)
console.log(result)


//-----------------------------------------------------
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

console.log(`After concatenating the new object`)

const string_concat = { id: "7", name: "Bilbo", occupation: "None", age: "111" }

const merged_array = result.concat(string_concat)
console.log(merged_array)