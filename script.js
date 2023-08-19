const show__ham = () => {
    document.querySelector('.nav__1').classList.toggle('nav__1__on')
    document.querySelector('.ham').classList.toggle('hidden')
    document.querySelector('.ham__X').classList.toggle('show')
};

const call = (htmlFileAddress, embedElementID) => {
    fetch(htmlFileAddress)
        .then(res => res.text())
        .then(data => document.getElementById(embedElementID).innerHTML = data)
}

const detectElement = (id) => window.innerHeight - document.getElementById(id).getBoundingClientRect().y

window.addEventListener('scroll', () => {
    if (detectElement('main-1') > 100) {
        document.getElementById('main-1').classList.add('animFadeIn')
    }
    detectElement('art__box') > 100 && document.getElementById('art__box').classList.add('animFadeIn')
    detectElement('main-2') > 100 && document.getElementById('main-2').classList.add('animFadeIn')
    detectElement('main-3') > 100 && document.getElementById('main-3').classList.add('animFadeIn')
    detectElement('main-4') > 100 && document.getElementById('main-4').classList.add('animFadeIn')
    detectElement('main-5') > 100 && document.getElementById('main-5').classList.add('animFadeIn')
})