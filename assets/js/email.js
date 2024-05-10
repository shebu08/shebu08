function emailSend(){

	var userName = document.getElementById('name').value;
	var phone_number = document.getElementById('phone_number').value;
	

	var message = document.getElementById('message').value;
	var msg_subject = document.getElementById('msg_subject').value;
    var email = document.getElementById('email').value;

	var messageBody = "Name : " + userName +
	"<br/> <br/> Email : " + email +
	"<br/> <br/> Phone Number : " + phone_number +
	"<br/> <br/> Subject : " + msg_subject +
	"<br/> <br/> Message : " + message;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "support@maplecloudtechnologies.com",
    Password : "C41AAA7D5E5D80B4627C41E64A3EA112BA45",
    To : 'support@maplecloudtechnologies.com ',
    From : "support@maplecloudtechnologies.com",
    Subject : "New Contact Form Submission",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Successful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "Fill Form Correctly!", "error");
  	}
  }
);
}