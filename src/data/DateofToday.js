//Get Date of Today
const today = new Date; // use new to initiate 

// Extract day, month, and year
const day = today.getDate().toString().padStart(2, '0'); // Ensures 2-digit day
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-based index
const year = today.getFullYear();

// Format the date
const formattedToday = `${day}-${month}-${year}`;

export default formattedToday