function sendMail(contactForm) {
    emailjs.send("service_zh24dll","template_a5akf58", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {s
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}

