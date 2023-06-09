import './style.css'

// this is to display clock on the page
const currentTimeDisplay = document.querySelector('.clock')

function showTime(): void {
  const currentTime = new Date()

  const [year, months, day, hour, minute, second] = [
    currentTime.getFullYear(),
    currentTime.getMonth() + 1,
    currentTime.getDay(),
    currentTime.getHours(),
    currentTime.getMinutes(),
    currentTime.getSeconds(),
  ].map((value) => (value < 10 ? value.toString().padStart(2, '0') : value))

  if (currentTimeDisplay != null) {
    currentTimeDisplay.textContent = `${year}/${months}/${day} ${hour}:${minute}:${second}`
  }
}

showTime()

setInterval(() => {
  showTime()
}, 1000)
