const axios = require("axios");

async function makeGetRequest(url) {
	try {
		console.log("Fetching Github Account");
		const response = await axios.get(url);
		console.log("Fetched Github Account");
	} catch (error) {
		console.error("Error making GET request:", error.message);
		if (error.response) {
			console.error("Response Status:", error.response.status);
			console.error("Response Data:", error.response.data);
		}
	}
}

// Example usage
const websiteUrl = "https://github.com/Developer-Utkarsh/";
const intervalInMilliseconds = 30000; // 30 seconds

// Set up the interval
setInterval(() => {
	makeGetRequest(websiteUrl);
}, intervalInMilliseconds);
