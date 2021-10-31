const quotes = [
  { quote: "삶이 있는 한 희망은 있다.", author: "키케로" },
  { quote: "산다는것 그것은 치열한 전투이다.", author: "로망로랑" },
  { quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라.", author: "호라티우스" },
  { quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.", author: "볼드윈" },
  { quote: "책을 백독하면 저절로 알게 된다.", author: "진수" },
  { quote: "사람은 먹기 위해 사는 것이 아니라 살기 위해 먹는다.", author: "소크라테스" },
  { quote: "많은 일을 하고자 하면 지금 당장 한 가지 일을 시작하라.", author: "로스차일드" },
  { quote: "아는 것이 힘이다.", author: "프란시스 베이컨" },
  { quote: "성공의 비결은 좌절하지 않고 극복하는 데 있다.", author: "발자크" },
  { quote: "추위에 떠는 사람일수록 햇볕의 따뜻함을 안다.", author: "후트먼" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
