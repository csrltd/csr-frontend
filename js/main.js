//Popup starts here
const popup = document.querySelector('.popup')
const closePopup = document.querySelector('.close-popup')
var closedPopup = 0
popup.style.display='none'
const documentHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

closePopup.addEventListener('click', () => {
    popup.style.display='none'
    closedPopup = true
    console.log(closedPopup)
})
document.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY
    if (scrollHeight > documentHeight/2 && closedPopup == false) {
        if (popup.style.display="none") {
            popup.style.display='flex'
        }else {
            popup.style.display='none'
        }
    }
    
})
console.log("Document Height:", documentHeight);
console.log(popup)
//Popup ends here

const Godwin = document.querySelector('.Godwin')
const victor = document.querySelector('.victor')
const jp = document.querySelector('.jp')
const Alphonse = document.querySelector('.Alphonse')
const Patient = document.querySelector('.Patient')
const Tinah = document.querySelector('.Tinah')
const charles = document.querySelector('.charles')


//bios
const GodwinBio = document.querySelector('.GodwinBio')
const victorbio = document.querySelector('.victorbio')
const jpBio = document.querySelector('.jpBio')
const AlphonseBio = document.querySelector('.AlphonseBio')
const PatientBio = document.querySelector('.PatientBio')
const TinahBio = document.querySelector('.TinahBio')
const charlesBio = document.querySelector('.charlesBio')


//event listeners
Godwin.addEventListener('click',()=>{
        GodwinBio.style.visibility = 'visible'
})

victor.addEventListener('click',()=>{
    victorbio.style.visibility = 'visible'
})

jp.addEventListener('click', () => {
    jpBio.style.visibility = 'visible'
})

Alphonse.addEventListener('click', () => {
    AlphonseBio.style.visibility = 'visible'
})

Patient.addEventListener('click', () => {
    PatientBio.style.visibility = 'visible'
})

Tinah.addEventListener('click', () => {
    TinahBio.style.visibility = 'visible'
})
charles.addEventListener('click', () => {
    charlesBio.style.visibility = 'visible'
})


const overlays = document.querySelectorAll('.overlay');
const closeButtons = document.querySelectorAll('.close-btn');

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', (event) => {
    event.target.closest('.overlay').style.visibility = 'hidden';
  });
});
