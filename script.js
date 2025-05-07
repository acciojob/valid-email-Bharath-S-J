function validEmail(str) {
  //your JS code here.
	const regix=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/
	return regix.test(str)
}

// // Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
