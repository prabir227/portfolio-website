var typed = new Typed('#desig', {
    strings: ['Software Developer'],
    typeSpeed: 90,
    backDelay: 1100,
      backSpeed: 30,
    loop:true
  });

  function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("messagebox").value
    };
    emailjs.send("service_1ruj0sv", "template_dg7hoqb", params)
        .then(function(response) {
            alert("Your email has been sent successfully!");
            console.log("SUCCESS!", response.status, response.text);
        })
        .catch(function(error) {
            alert("Failed to send the email. Please try again.");
            console.log("FAILED...", error);
        });
}
