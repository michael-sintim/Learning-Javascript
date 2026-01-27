'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')

const closemodal = function(){
    console.log('Button clicked');
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const OpenMoodal =  function(){
            console.log("Button clicked")
            modal.classList.remove('hidden')
            overlay.classList.remove('hidden')

}

for  (let i = 0; i < btnOpenModal.length; i++){
    console.log(btnOpenModal[i].addEventListener('click', OpenMoodal))

}


btnCloseModal.addEventListener('click', closemodal)
overlay.addEventListener('click', closemodal)


document.addEventListener('keydown', (e) => {
console.log(e.key)

if (e.key==='Escape' && !modal.classList.contains('hidden'))
{
        closemodal();
    }
})