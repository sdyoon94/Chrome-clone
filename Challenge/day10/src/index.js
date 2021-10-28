const clockTitle = document.querySelector(".js-clock");
setInterval(timeCheck, 100);
function timeCheck() {
  const now = new Date();
  const christmasEve = new Date(now.getFullYear(), 11, 24);
  const oneDay = 24 * 60 * 60 * 1000;
  let dif = christmasEve - now;
  if (dif <= -2 * oneDay) dif += 365 * oneDay;
  else if (christmasEve - now <= -oneDay) clockTitle.innerText = "Today is Christmas!!";
  else if (christmasEve - now <= 0) clockTitle.innerText = "Today is Christmas Eve!!";
  else {
    dif = Math.floor(dif / 1000);
    const sec = (dif % 60).toString().padStart(2, "0");
    dif = Math.floor(dif / 60);
    const min = (dif % 60).toString().padStart(2, "0");
    dif = Math.floor(dif / 60);
    const hour = (dif % 24).toString().padStart(2, "0");
    const day = Math.floor(dif / 24);
    clockTitle.innerText = `${day}d ${hour}h ${min}m ${sec}s`;
  }
}
