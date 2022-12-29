const quotes = [
  {
    quote: "늦었다고 생각할때가 진짜 너무 늦었다",
    author: "박명수",
  },
  {
    quote:
      "지금 공부 안 하면 더울 때 더운 데서 일하고 추울 때 추운 데서 일한다.",
    author: "박명수",
  },
  {
    quote: "“내 너 그럴 줄 알았다” 알았으면 제발 미리 말 해줘라",
    author: "박명수",
  },
  {
    quote: "어려운 길은 길이 아니다",
    author: "박명수",
  },
  {
    quote: "즐길 수 없으면 피하라",
    author: "박명수",
  },
  {
    quote: "성공은 1% 재능과 99%의 빽",
    author: "박명수",
  },
  {
    quote: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다 ",
    author: "박명수",
  },
  {
    quote: "가는 말이 고우면 얕본다 ",
    author: "박명수",
  },
  {
    quote: "고생 끝에 골병 난다 ",
    author: "박명수",
  },
  {
    quote: "참을 인 세 번이면 호구  ",
    author: "박명수",
  },
];

const todayquote = quotes[Math.floor(Math.random() * quotes.length)];

const quote = document.querySelector(".quote");
const authur = document.querySelector(".quote-author");

quote.innerText = todayquote.quote;
authur.innerText = todayquote.author;

// const quote = document.querySelector(".quote");
// const authour = document.querySelector(".quote-author");

// const todayquote = quotes[Math.floor(Math.random() * quotes.length)];

// quote.innerText = todayquote.quote;
// authour.innerText = todayquote.author;
