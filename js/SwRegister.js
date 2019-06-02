if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('./sw.js')
	.then(function() {
		console.log(' yaaaaaah Registration succeeded!');
	})
	.catch(function() {
		console.log(' oooppppsss Registration failed!');
	});
}