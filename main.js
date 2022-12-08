/*Ajuste botão menu*/
$(document).ready(function () {
    $(".btn-mobile").click(function () {
        $(".menu-mobile").slideToggle("slow")
    })
})

/* Modal-1 */
const modal = document.querySelector('.modal-container')

function openModal() {
    modal.classList.add('active')
}

function closeModal() {
    modal.classList.remove('active')
}

/* Modal-2 */
const modal2 = document.querySelector('.modal-container2')

function openModal2() {
    modal2.classList.add('active')
}

function closeModal2() {
    modal2.classList.remove('active')
}

/* Modal-3 */
const modal3 = document.querySelector('.modal-container3')

function openModal3() {
    modal3.classList.add('active')
}

function closeModal3() {
    modal3.classList.remove('active')
}

/* Identificalçao página scrool */
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .menu ul li');

window.addEventListener('scroll', () => {
    let current = '';


    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active');
        if (li.classList.contains(current)) {
            li.classList.add('active')
        }
    })
})



let inputNome = document.querySelector('#inputNome')
let inputEmail = document.querySelector('#inputEmail')
let textMensagem = document.querySelector('#textMensagem')

function cadastrar() {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
    {
        nome: inputNome.value,
        email: inputEmail.value,
        mensagem: textMensagem.value
    }    
    )

    localStorage.setItem('listaUser', JSON.stringify(listaUser))
}