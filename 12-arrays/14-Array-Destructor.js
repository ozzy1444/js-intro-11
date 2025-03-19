let date = '02/23/2025'; 

const dateArr = date.split('/');

let [month, day, year] = dateArr; 

console.log(month)
console.log(day)
console.log(year)

const currentDate = new Date();

if(month === currentDate.getMonth() + 1 && 
day === currentDate.getDate() &&
year === currentDate.getFullYear()
){
    console.log('The day retrieved is today')
}
else{
    console.log('There is a problem with the last login date')
}
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());


// a smipler example of destructoring 
const credentials = ['techglobal', 'techglobal@gmail.com', 'Test1234$'];

const [username, email, password] = credentials;

console.log(username); // techglobal 
console.log(password); // Test1234$

const favs = ['wings', 'amok', 14, 'batch-11', true]; 
const [ , favNum, , favBatch] = favs

console.log(favNum);
console.log(favBatch);

