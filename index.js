function makeGetRequest(url) {
	fetch(url)
		.then((response) => {
			console.log("Fetching Github Account");
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.text();
		})
		.then((data) => {
			console.log("Fetched Github Account");
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
const intervalInMilliseconds = 45000; // 30 seconds

// Set up the interval
setInterval(() => {
	makeGetRequest(websiteUrl);
}, intervalInMilliseconds);
