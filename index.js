
// cod for contact form
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")
const submit = document.getElementsByClassName("contact-form")[0]

submit.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('clicked!')
    let ebody = `
    <b>name:</b>${fullName.value}
    <br>
    <b>email:</b>${email.value}
    <br>
    <b>Phone:</b>${phone.value}
    <br>
    <b>subject:</b>${subject.value}
    <br>
    <b>message:</b>${message.value}
    <br>
    `
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "abdulkerimhassen744@gmail.com",
        Password: "339B09D47269A854B403974E690027BE9E0B",
        To: 'abdulkerimhassen744@gmail.com',
        From: "abdulkerimhassen744@gmail.com",
        Subject: email,
        Body: ebody
    }).then(
        message => alert(`Thanks i am ${message} with that `)
    );
})
//scroll and dark mode 
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 100
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
            //active sectiond for animate on scroll

        }
        else {

        }
    });
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100)
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')

};

// accordion skills
const skillsContent = document.getElementsByClassName('skills-content'),
    skillsHeader = document.querySelectorAll('.skills-headerr')

function toogleSkills() {
    let itemClass = this.parentNode.ClassName

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills-content skills-close'
    }

    if (itemClass === 'skills-content skills-close') {
        this.parentNode.className = 'skills-content skills-open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toogleSkills)
})

//dark mode
let darkMode = document.getElementById("darkMode-icon")

darkMode.onclick = function () {
    document.body.classList.toggle("dark-theme")
}



















