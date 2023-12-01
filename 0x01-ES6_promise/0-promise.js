function getResponseFromAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
	        status: 200,
	        body: 'Sample API response',
	    });
	}, 1000);
    });
}

export default getResponseFromAPI;
