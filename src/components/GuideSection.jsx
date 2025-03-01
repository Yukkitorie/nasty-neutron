import React from "react";
import "../styles/tonylongread.css";

const GuideSection = () => {
  const guideCardsData = [
    {
      number: "01",
      title: "Проводник $TONY",
      text: "Узнайте, почему $TONY - ваш надежный проводник в мире криптовалют",
      link: "#why-tony",
    },
    {
      number: "02",
      title: "Founder CEO TonyStark",
      text: "Познакомьтесь с создателем и его видением проекта",
      link: "#founder",
    },
    {
      number: "03",
      title: "Road map",
      text: "Изучите план развития проекта и его ключевые этапы",
      link: "#roadmap",
    },
    {
      number: "04",
      title: "Токеномика",
      text: "Изучите распределение токенов",
      link: "#tokenomics",
    },
    {
      number: "05",
      title: "Ликвидность",
      text: "Узнайте о механизмах обеспечения ликвидности и защите инвесторов",
      link: "#liquidity",
    },
    {
      number: "06",
      title: "Стейкинг $TONY",
      text: "Узнайте, как получать пассивный доход, удерживая монеты $TONY",
      link: "#staking",
    },
    {
      number: "07",
      title: "Как купить $TONY",
      text: "Узнайте, как приобрести $TONY и стать частью сообщества",
      link: "#buy-tony",
    },
  ];

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();

    const targetElement = document.querySelector(hash);
    if (!targetElement) {
      console.warn(`Элемент с id ${hash} не найден.`);
      return;
    }

    const header = document.querySelector("header"); // Получаем хедер
    const headerOffset = header ? header.offsetHeight : 80; // Высота хедера (или 80, если не найден)

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    console.log("Позиция элемента:", offsetPosition);
    console.log("Высота хедера:", headerOffset);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    const newUrl = window.location.pathname + hash;
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", newUrl);
    }
  };

  return (
    <div className="guide-section">
      <h2 className="section-title">Путеводитель по TON и $TONY</h2>
      <div className="guide-cards">
        {guideCardsData.map((card, index) => (
          <div
            key={index}
            className="guide-card"
            onClick={(e) => handleAnchorClick(e, card.link)}
          >
            <div className="guide-number">{card.number}</div>
            <div className="guide-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideSection;
