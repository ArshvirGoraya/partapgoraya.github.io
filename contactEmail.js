emailjs.init("nlS4nH9RaDjmX-X4g"); // Initalized EmailJS.

function sendEmail(ContactEmail, Message){

    var templateParams = {
        contact_email: ContactEmail,
        message: Message
    };

    emailjs.send('service_car7gqp', 'template_oar1zzm', templateParams).then(
        function(response){
            console.log("Success: ", response)
            notifSuccess.classList.add("JS-notifExpand");

            let delatTimer = setTimeout(() => {
                notifSuccess.classList.remove("JS-notifExpand");
            }, 4000);
        },
        function(error){
            //fail!
            console.log("Error: ", error)
            notifFail.classList.add("JS-notifExpand");

            let delatTimer = setTimeout(() => {
                notifFail.classList.remove("JS-notifExpand");
            }, 4000);
        }
    )
}

//

const emailForm = document.querySelector('.emailForm');
const contactEmail = document.querySelector('.ContactEmail_input');
const contactMessage = document.querySelector('.Message_input');
//
const notifSuccess = document.querySelector('.notif-success')
const notifFail = document.querySelector('.notif-fail')


emailForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log("Submitted!");
    
    // sendEmail(contactEmail.value, contactMessage.value);
})

