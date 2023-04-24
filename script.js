//your JS code here. If required.
function sayHello() {
	return new Promise((resolve,reject)=>{
		resolve('Hello, world!');
	});
}
sayHello().then((result)=>{
	const outputElement = document.getElementById("output");
	outputElement.innerText = result;
});