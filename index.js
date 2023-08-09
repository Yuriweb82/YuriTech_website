function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("mesaage").value,
    };
    const serviceID = "service_xouk0ri";
    const tempelateID = "template_n8i2798";
    
    emailjs.send(serviceID,tempelateID,params)
    .then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been sent to YuriTech. Thank you!");
    })
    .catch((err) => console.log(err));
}