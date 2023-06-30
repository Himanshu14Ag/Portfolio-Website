
/*-----------------Toggle Icon navbar-----------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


/*-----------------Scroll Sections Active Link-----------------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top < offset+height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href* = ' + id + ']').classList.add('active');
            });
        };
    });

    /*-----------------Sticky NavBar-----------------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*-----------------remove toggle icon and NavBar when click navbar link (scroll)-----------------*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


    /*-----------------scroll reveal-----------------*/

ScrollReveal({
    // reset : true,
    distance : '80px',
    duration : 2000,
    delay : 100
});

ScrollReveal().reveal('.home-content , .heading', {origin : 'top'});
ScrollReveal().reveal('.home-img , .services-container, .portfolio-box, .contact form', {origin : 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin : 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin : 'right'});


    
/*-----------------Typed JS-----------------*/

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer','SDE Student'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1000,
    loop: true
});


function SendMail(){
    let name = document.getElementById('FullName').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('mobNo').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('BodyMessage').value;

    let body = "Name: "+ name +"<br/> Email: "+ email +"<br/> Contact No: "+ contact +"<br/> Subject: "+ subject +"<br/> Message: "+ message; 

    Email.send({
        SecureToken: "5da72f6d-b5c0-4c44-baad-e2f461bf795f",
        To : 'himanshu9145822814@gmail.com',
        From : "himanshu9145822814@gmail.com",
        Port: '2525',
        Subject : "Message From Portfolio Web.",
        Body : body
    }).then(
      message => alert(message)
    );
}