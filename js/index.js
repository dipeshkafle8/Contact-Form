const message=document.getElementById('message');
const mailus=document.getElementById('mailus');
const chatWithUs=document.getElementById('chatwithus');
const callUs=document.getElementById('callus');

console.log(window.location);

//for sending mail
mailus.addEventListener('click',()=>{
    window.location.href="mailto:dipeshkaflen2060@gmail.com?body="+message.value;
})

//for chatting in whatsapp
chatWithUs.addEventListener("click",()=>{
    console.log(message.value);
window.location.href='https://wa.me/+9779864652330?text='+message.value;
});

//for calling
callUs.addEventListener('click',()=>{
window.location.href='tel:+919317128221';
})
