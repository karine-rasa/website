const contactForm = document.getElementById('contact-form'), contact_message = document.getElementById('contact-message');
console.log(contactForm, contact_message);

const sendMail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_nngytb6','template_fj5s8za','#contact-form','YPt7i2Jl1Is68cWu-')
    .then(() => {
        contact_message.innerHTML = "Message sent successfully!";
        contact_message.style.color = "#00ff00";
        setTimeout(() => {
            contact_message.innerHTML = "";
        }, 5000);
        contactForm.reset();
    })
}

contactForm.addEventListener('submit', sendMail);