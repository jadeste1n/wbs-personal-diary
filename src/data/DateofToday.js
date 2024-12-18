//Get Date of Today
const today = Date.now();

// Extract day, month, and year
const day = date.getDate().toString().padStart(2, '0'); // Ensures 2-digit day
const month = (date.getMonth() + 1).toString().padStart(2, '0'); // getMonth() returns 0-based index
const year = date.getFullYear();

// Format the date
const formattedToday = `${day}-${month}-${year}`;

export default formattedToday