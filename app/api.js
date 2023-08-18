import fetch from 'node-fetch'; // Import the fetch function

// Define the API endpoint URL
const apiUrl = 'https://suggest-tool.internal.mangoads.com.vn/related-products';

// Define an asynchronous function to fetch and print the data
async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json(); // Assuming the response is in JSON format

    // Print the fetched data
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the fetchData function
fetchData();
