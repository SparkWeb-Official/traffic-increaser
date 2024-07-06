function makeGetRequest(url) {
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.text();
		})
		.then((data) => {
			console.log("Response received:", data);
		})
		.catch((error) => {
			console.error(
				"There was a problem with the fetch operation:",
				error,
			);
		});
}

// Example usage
const websiteUrl = "https://github.com/Developer-Utkarsh/";
const intervalInMilliseconds = 30000; // 30 seconds

// Set up the interval
setInterval(() => {
	makeGetRequest(websiteUrl);
}, intervalInMilliseconds);
