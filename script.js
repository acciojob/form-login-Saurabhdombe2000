function getFormvalue() {
    //Write your code here
	event.preventDefault();
  let firstName = document.querySelector('input[name=fname]').vlaue.trim();
  let lastName = document.querySelector('input[name=lname]').value.trim();

  let fullName = (firstName + "" + lastName);
	alert(fullName);
}
