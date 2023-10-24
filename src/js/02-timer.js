// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import { Report } from 'notiflix/build/notiflix-report-aio';

const date = document.querySelector('input#datetime-picker');
const btn = document.querySelector('[data-start]');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');
let timerId = null;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0])
        if (selectedDates[0].getTime() <= Date.now()) {
            Report.failure('Please choose a date in the future')
            
        }
        else {
            Report.success('lets go');
            btn.disabled = false;
        }
    },
};

const fp = flatpickr(date, options)

btn.disabled = true;

btn.addEventListener('click', startTimer)

let timer = {
    start(){
        timerId = setInterval(() => {
            btn.disabled = true;
            date.disabled = true;
            const choosenDate = fp.latestSelectedDateObj;
            let timeOdds = choosenDate - Date.now();
            setNewTime(convertMs(timeOdds));
            console.log(convertMs(timeOdds));
            

       if (timeOdds <= 1000) {
           clearInterval(timerId)
           this.stop();
        }
        }, 1000
        )
    
        
    },
stop(){
    
    btn.disabled = false;
    date.disabled = false;
    return
    }
}

function startTimer() {
    timer.start()
}

function setNewTime({ days, hours, minutes, seconds }) {
    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    minute.textContent = addLeadingZero(minutes);
    second.textContent = addLeadingZero(seconds)
}
 

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
