const urlapi = 	'https://api.adviceslip.com/advice'
const title = document.querySelector('.card--title')
const advice = document.querySelector('.card--advice')
const btn = document.querySelector('button')
const image = document.querySelector('#separator')


const getAdvice = async () => {
    const data = await fetch(urlapi)
    const resp = await data.json()
    title.textContent = `Advice #${resp.slip.id}`
    advice.textContent = `"${resp.slip.advice}"`  
}

btn.addEventListener('click', () => {
    getAdvice()
})

window.addEventListener('DOMContentLoaded', () => {
    getAdvice()
})

