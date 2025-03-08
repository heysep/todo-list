const quotes = [
    {
      quote: "어제는 지나버렸고 내일은 알 수 없지만 현재인 오늘은 선물이다. 그래서 현재(present)라고 한단다",
      author: "Kung Fu Panda",
    },
    {
      quote: "역경 속에서 피오난 꽃이야 말로 가장 귀하고 아름다운 꽃이란다.",
      author: "mulan",
    },
    {
      quote:
        "영화 속 해피엔딩과는 거리가 멀어요. 삶은 복잡한 거예요.",
      author: "ZOOTOPIA",
    },
    {
      quote: "위로와 포옹도 치료법에 속해. 다 잘될거야 걱정마",
      author: "BIG HERO",
    },
    {
      quote: "울음은 나를 진정시키고 인생이라는 무게에 대해 생각하게 도와줘",
      author: "INSIDE OUT2",
    },
    {
      quote: "당신과의 모험 고마웠어요 이제 새로운 모험을 찾아 떠나요",
      author: "UP",
    },
    {
      quote: "해보면 되잖아? 하고싶으니까 해본다. 정말로 하고 싶은 것이란 그런 느낌으로 시작하는거 아니야?",
      author: "LOVE LIVE",
    },
    {
      quote: "자신을 믿지 않는 녀석 따위는 노력할 가치도 없어!!",
      author: "NARUTO",
    },
    {
      quote: "할 수 있냐 , 없냐는 중요하지 않아.하고 싶으니까 하는거야.",
      author: "ONE PIECE",
    },
    {
      quote: "재능은 꽃 피우는 것 센스는 갈고 닦는것",
      author: "하이큐",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;