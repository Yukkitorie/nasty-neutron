// MainPage.jsx
import React, { useRef } from "react";
import GuideSection from "../components/GuideSection.jsx";
import { Image } from "astro:assets";
import welcome from "../assets/welcomeimage1.svg";
import founder from "../assets/foundertony.svg";
import tonyblum from "../assets/tonyblummain.svg";
import blumexchange from "../assets/blumexchange2.svg";
import stonfiexchange from "../assets/stonfiexchange.svg";
import "../styles/tonylongread.css";

const MainPage = () => {
  // Создаем рефы для секций
  const whyTonyRef = useRef(null);
  const founderRef = useRef(null);
  const roadmapRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const liquidityRef = useRef(null);
  const stakingRef = useRef(null);
  const buyTonyRef = useRef(null);

  // Функция для прокрутки к нужному элементу
  const handleScrollTo = (targetId) => {
    // Можно использовать document.getElementById, но если у вас есть рефы, лучше по ним.
    let element;
    switch (targetId) {
      case "why-tony":
        element = whyTonyRef.current;
        break;
      case "founder":
        element = founderRef.current;
        break;
      case "roadmap":
        element = roadmapRef.current;
        break;
      case "tokenomics":
        element = tokenomicsRef.current;
        break;
      case "liquidity":
        element = liquidityRef.current;
        break;
      case "staking":
        element = stakingRef.current;
        break;
      case "buy-tony":
        element = buyTonyRef.current;
        break;
      default:
        element = document.getElementById(targetId);
    }

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(
        null,
        "",
        window.location.pathname + "#" + targetId
      );
    }
  };

  return (
    <>
      <GuideSection onScrollTo={handleScrollTo} />

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="main-title">Добро пожаловать в Tony Stark Invest</h1>
        <div className="intro-text">
          <p>
            Здесь начнется ваш путь в мир криптовалют. Мемекоин $TONY станет
            вашим проводником, который поможет окунуться в этот удивительный мир
            блокчейна TON.
          </p>
          <p>
            Цель $TONY стать инвестиционным крипто-инструментом, ведь с каждым
            годом криптовалюта становится популярней. Цифровые финансовые активы
            (ЦФА) — это не далекое будущее, а настоящее.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">Преимущества $TONY</h2>
        <div className="welcome-image">
          <Image
            src={welcome}
            alt="A bird sitting on a nest of eggs."
            className="responsive-image"
          />
        </div>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <p>
              $TONY создан как фан токен персонажа Тони Старка киновселенной
              Марвел, но имеет инвестиционную начинку.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <p>
              С ростом капитализации проекта инвесторы смогут не только
              приумножить вложенную сумму, но будут также получать ежемесячную
              прибыль, как % на остаток по счету вашей дебетовой банковской
              карты.
            </p>
          </div>
        </div>
      </div>

      {/* Секции контента */}
      <div
        ref={whyTonyRef}
        id="why-tony"
        className="content-section roadmap-block"
      >
        <h2 className="section-title">
          Почему проводником должен стать $TONY?
        </h2>
        <div className="welcome-image">
          <Image src={tonyblum} alt="Why Tony" className="responsive-image" />
        </div>
        <div className="info-block warning">
          <h3 className="info-title">О рисках мемкоинов</h3>
          <p className="paragraph">
            В telegram каждую минуту появляется десятки мемкоинов, сделать это
            может любой пользователь в несколько кликов. В 99.99% случаев эти
            монеты создаются без определенной идеи, просто ради веселья и
            обогащения создателей.
          </p>
          <p className="paragraph">
            Самое частое явление в мемекоинах — это rug pull (выдергивание
            коврика в переводе с английского).
          </p>
          <p className="paragraph">
            Как это происходит? Создатель монеты на старте выкупает 50-80%
            эмиссии, т.е. в его руках находится большая часть монет. Создаются
            чаты, начинаются массовые рекламные вбросы в крипто-сообществах
            telegram о появлении новой уникальной монеты. Создается повышенный
            спрос, поэтому начинается стремительный рост стоимости монеты. Когда
            создатель понимает, что заработал достаточно, он продает все
            доступные монеты одной заявкой, обрушивая стоимость актива до 0.
          </p>
          <p className="paragraph highlightdanger">
            "Ударить по стакану" означает продать крупную позицию одной сделкой.
            Часто это вызывает волну распродаж, т.к. другие игроки боятся
            больших потерь и продают вслед (Panic selling).
          </p>
        </div>
      </div>

      <div ref={founderRef} id="founder" className="content-section">
        <h2 className="section-title">О создателе проекта</h2>
        <div className="welcome-image">
          <Image
            src={founder}
            alt="Founder Image"
            className="responsive-image"
          />
        </div>
        <div className="info-block">
          <p className="paragraph">
            Создатель (Founder CEO) $TONY – инвестор и аналитик с 8-летним
            стажем, блогер{" "}
            <a
              href="https://www.tbank.ru/invest/social/profile/TonyStark/?author=profile"
              className="text-link"
              target="_blank"
              rel="noreferrer"
            >
              TonyStark
            </a>{" "}
            соц.сети Пульс от Т-банка. В 2024 году стал изучать криптовалюту и
            блокчейн $TON, участвовал в большинстве успешных проектов в
            telegram, таких как Notcoin и X-Empire. Также является амбассадором
            BLUM — гибридной крипто-биржи внутри telegram.
          </p>
          <p class="paragraph">
            Именно в{" "}
            <a
              href="https://t.me/blum/app?startapp=memepadjetton_TONY_m2wwO-ref_O61N5Lno0J"
              class="text-link"
              target="_blank"
            >
              BLUM
            </a>{" "}
            был создан мемекоин $TONY, для создания прочного инвест-сообщества{" "}
            <a
              href="https://t.me/stark_invest"
              class="text-link"
              target="_blank"
            >
              t.me/stark_invest
            </a>
            , где каждый участник помимо новых знаний в мире криптовалют, может
            познакомиться с интересными людьми, инвесторами как в криптовалюте,
            так и традиционных инвестициях.
          </p>

          <div class="community-info">
            <p class="paragraph">
              В чате токена{" "}
              <a
                href="https://t.me/tonymemecoin"
                class="text-link"
                target="_blank"
              >
                t.me/tonymemecoin
              </a>{" "}
              идут обсуждения новостей, приветливое общение участников и обмен
              опытом.{" "}
            </p>
            <ul class="rules-list">
              <div class="list-descr">Главные правила чата:</div>
              <li>
                <span class="point">•</span> Будьте вежливы – уважайте
                собеседников и их мнение.
              </li>
              <li>
                <span class="point">•</span> Используйте только нормативную
                лексику – избегайте нецензурных выражений.
              </li>
              <li>
                <span class="point">•</span> Критикуйте конструктивно –
                указывайте на ошибки, но без оскорблений.
              </li>
              <li>
                <span class="point">•</span> Ведите адекватные дискуссии –
                спорьте аргументированно, без перехода на личности.
              </li>
              <li>
                <span class="point">•</span> Сохраняйте позитивную атмосферу –
                поддерживайте дружелюбную обстановку в чате.
              </li>
            </ul>
          </div>

          <p class="paragraph highlight">
            Публичность Founder CEO и большой опыт в инвестициях дает гарантию
            стабильности $TONY, исключает rug pull и гарантирует движение к
            обозначенным целям в road map проекта.
          </p>
        </div>
      </div>

      <div
        ref={roadmapRef}
        id="roadmap"
        className="content-section roadmap-block"
      >
        <h2 className="section-title">Road Map</h2>
        <div className="info-block">
          <div className="roadmap-description">
            <p className="paragraph">
              На главной странице сайта{" "}
              <a
                href="https://tonycoin.io"
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                tonycoin.io
              </a>{" "}
              опубликована дорожная карта проекта $TONY. В дорожной карте
              обозначены этапы развития проекта и цели, которые мы хотим
              достичь. Пока в дорожной карте 6 этапов, в основном там указано
              количество холдеров (держателей) монеты $TONY, количество
              подписчиков на канале и общая капитализация проекта. Также указано
              создание mini app приложения и запуск стейкинга при достижении
              капитализации 50 млн$.
            </p>
            <p class="paragraph">
              Перед командой стоит задача формирования крепкого сообщества{" "}
              <a
                href="https://t.me/stark_invest"
                class="text-link"
                target="_blank"
              >
                t.me/stark_invest
              </a>
              . Сообщество — это залог успеха любого токена, поддержка и вера
              являются основным драйвером роста проекта. Когда монету не
              продают, а только покупают, это ведёт к удорожанию актива. Как
              только кто-то сдается и выходит, на графике наблюдаются красные
              свечи.
            </p>
            <p class="paragraph highlight">
              Цена растет не просто так, все зависит от распределения монет в
              проекте — токеномики, а также пула ликвидности.
            </p>
          </div>
        </div>
      </div>

      {/* Остальные секции, например tokenomics, liquidity, staking, buy-tony, обернув их в <div> с соответствующими ref и id */}
      <div
        ref={tokenomicsRef}
        id="tokenomics"
        className="content-section"
      ></div>

      <div
        ref={liquidityRef}
        id="liquidity"
        className="content-section roadmap-block"
      >
        {/* Контент секции "Ликвидность" */}
      </div>

      <div ref={stakingRef} id="staking" className="content-section">
        {/* Контент секции "Стейкинг" */}
      </div>

      <div ref={buyTonyRef} id="buy-tony" className="content-section">
        {/* Контент секции "Полное руководство по покупке $TONY" */}
      </div>

      {/* Заключение */}
      <section className="conclusion-section">
        <h2 className="section-title">Станьте частью сообщества!</h2>
        <div className="conclusion">{/* Остальной контент заключения */}</div>
      </section>
    </>
  );
};

export default MainPage;
