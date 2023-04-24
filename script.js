//your JS code here. If required.
Promise promise = new Promise(()=>{
	setTimeout(resolve(),1000);
});
promise.then(()=>{
	const ele = document.getElementById('output');
	ele.innerText = 'Hello, world!';
});
