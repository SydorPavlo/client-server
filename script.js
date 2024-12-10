const button = document.querySelector('button');

button.onclick = handleClick;

// get time on client 
function handleClick() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const time = `${hours}:${minutes}:${seconds}`;
  alert(time);
} 

// get time on server
async function handleClick() {
  const response = await fetch('/time');
  const time = await response.text();
  alert(time);
}