
const the_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


const rows = the_string.split('\n') // split the string ny new line character
const headers = rows[0].split(',') // split first row to headers 


// console.log(headers)
const result = []  // create an empty array

for (let i = 1; i < rows.length; i++)  // loop for each row of data
   {
  const cols = rows[i].split(',') // split the columns at comma character 
  const obj = {}  // create an empty object 

  for (let j = 0; j < headers.length; j++) // for length of headers 
     {
    obj[headers[j].toLowerCase()] = cols[j] // matching the headers to column data
  }

  result.push(obj)
}

console.log(result)



