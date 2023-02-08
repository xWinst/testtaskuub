import photo from 'images/photo.jpg';

const About = () => {
  return (
    <div className="row">
      <div className="col-4 sidebar text-white">
        <img src={photo} alt="my foto" />
        <div className="mt-3">
          <h3>Контакти</h3>
          <div className="row row-cols-1 h6 ml-3  text-white-50 ">
            <a href="tel:+380666029589">+38 066 602 9589</a>
            <a href="mailto:olegchuchin78@gmail.com">olegchuchin78@gmail.com</a>
            <a href="https://github.com/xWinst">GitHub</a>
            <a href="http://www.linkedin.com/in/oleg-chuchin">Linkedin</a>
            <a href="https://t.me/xWinst">Telegram</a>
          </div>
        </div>
        <div className="mt-3">
          <h3>Технічні навички</h3>
          <ul className="row row-cols-1 h6 ml-3 text-white-50 skills">
            <li>
              <span>HTML5/CSS3/SASS</span>
            </li>
            <li>
              <span>JavaScript</span>
            </li>
            <li>
              <span>React.js</span>
            </li>
            <li>
              <span>React Native</span>
            </li>
            <li>
              <span>MongoDB, mySQL</span>
            </li>
            <li>
              <span>Responsive/Adaptive design</span>
            </li>
            <li>
              <span>GIT</span>
            </li>
            <li>
              <span>Webpack</span>
            </li>
            <li>
              <span>Parcel</span>
            </li>
            <li>
              <span>TypeScript [ basics ]</span>
            </li>
            <li>
              <span>Vue [ studying ]</span>
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h3>Особисті навички</h3>
          <ul className="row row-cols-1 h6 ml-3 skills">
            <li>
              <span>Teamwork</span>
            </li>
            <li>
              <span>Communication</span>
            </li>
            <li>
              <span>Decision-making</span>
            </li>
            <li>
              <span>Problem Solving</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-8 bg-gradient">
        <h2 className="text-center py-4">Чучин Олег Олександрович</h2>
        <p className="h5">
          Я Full Stack Developer. Маю знання у HTML, CSS (SCSS), JavaScript,
          React, Node.js, React Native, MongoDB, інші можна побачити в моєму
          резюме. Мій рівень англійської – Intermediate. Мої комунікабельні
          здібності, відповідальність, гнучке мислення, схильність до
          самоорганізації та здатність виконувати рутинну роботу допомагають
          мені виконувати завдання. Я маю досвід, пов’язаний із розробкою як
          індивідуальних, так і командних проектів у ролі Front End та Back End
          Developer. Посилання на проекти наведені нижче.
        </p>
        <div className="mt-4">
          <h3>Проекти:</h3>
          <div className="p-3 mt-2 shadow-sm rounded">
            <a
              href="https://slimmom.onrender.com/"
              className="h4 mt-3 text-primary"
              style={{ textDecoration: 'underline' }}
            >
              SlimMoms
            </a>
            <p className="h6">
              Додаток для ведення щоденника спожитих продуктів для підрахунку
              спожитих ккал за день. Є можливість перегляду статистики.
            </p>
          </div>
          <div className="p-3 mt-2 shadow-sm rounded">
            <a
              href="https://kapustka.vercel.app/"
              className="h4  mt-3 text-primary"
              style={{ textDecoration: 'underline' }}
            >
              Kapusta
            </a>
            <p className="h6">
              Додаток для обліку витрат та доходів з можливістю перегляду
              статистики.
            </p>
          </div>
          <div className="p-3 mt-2 shadow-sm rounded">
            <a
              href="https://xwinst.github.io/Filmoteka"
              className="h4 mt-3 text-primary"
              style={{ textDecoration: 'underline' }}
            >
              Filmoteka
            </a>
            <p className="h6">
              Проект про пошук фільмів та можливістю додавання улюблених фільмів
              в особисту бібліотеку клієнта.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
