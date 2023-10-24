import { Notify } from 'notiflix/build/notiflix-notify-aio';
const notifyOptions = { position: 'center-center', timeout: 10000 };

const form = document.querySelector('.form')


form.addEventListener('submit', onFormSubmit)

function onFormSubmit(evt) {
  evt.preventDefault()
  const { delay, step, amount } = evt.currentTarget.elements

  let delayValue = Number(delay.value);
  let stepValue = Number(step.value);
  let amountValue = Number(amount.value);

  console.log( delayValue, stepValue, amountValue)

  for (let i = 1; i <= amountValue; i++) {

    
    delayValue += stepValue
    
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, notifyOptions);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, notifyOptions);
    });
  }
}

function createPromise(position, delay) {
  return new Promise(function (resolve, reject) {
    const shouldResolve = Math.random() > 0.3;
    const timerId = setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        return resolve({ position, delay })

   
      } else {
        // Reject
        return reject({ position, delay })
      }
    }, delay)
    

  })
}
  

