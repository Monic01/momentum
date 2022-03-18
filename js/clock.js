const clock = document.querySelector("#clock");

function clockTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}
clockTime();
setInterval(clockTime, 1000);

function monthDates() {
  const date = new Date();
  const month = date.getMonth();
  const dates = date.getDate();
  const days = date.getDay();
  const monthDate = document.querySelector("#dates");
  const day = ["일", "월", "화", "수", "목", "금", "토"];

  monthDate.innerText = `${month}월 ${dates}일 ${day[days]}요일`;
}
monthDates();
