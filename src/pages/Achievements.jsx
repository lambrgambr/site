import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SidePanel from '../components/SidePanel';
import AchievementCard from '../components/AchievementCard';
import './Achievements.css';

const Achievements = () => {
  const location = useLocation();
  
  // Для якорных ссылок
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const easyAchievements = [
    {
      id: 'microwave',
      icon: 'img/img/microwave.jpg',
      title: 'Изысканная конвекция',
      description: 'Взорвите запеканку в микроволновке.',
      guideLink: '/guides#microwave-guide'
    },
    {
      id: 'co2',
      icon: 'img/img/co2icon.jpg',
      title: 'Извлечение CO2',
      description: 'Проведите операцию по извлечению углекислого газа из автоматов с напитками 20 раз.',
      guideLink: '/guides#co2-guide'
    },
    {
      id: 'paper',
      icon: 'img/img/paper.jpg',
      title: 'Бурная деятельность',
      description: 'Подайте рулон туалетной бумаги нуждающемуся учёному.',
      guideLink: '/guides#paper-guide'
    },
    {
      id: 'spectrometer',
      icon: 'img/img/spectrometer.jpg',
      title: 'Совершенно нежелательные последствия',
      description: 'Встаньте под луч спектрометра антимассы до начала эксперимента.',
      guideLink: '/guides#spectrometer-guide'
    },
    {
      id: 'lenb',
      icon: 'img/img/lenb.jpg',
      title: 'Ленивый резонанс',
      description: 'Откажитесь помещать образец в спектрометр антимассы.',
      guideLink: '/guides#lenb-guide'
    },
    {
      id: 'spichki',
      icon: 'img/img/spichki.jpg',
      title: 'Воспалительное действие',
      description: 'Убейте хедкраба с помощью огня.',
      guideLink: '/guides#spichki-guide'
    },
    {
      id: 'gandon',
      icon: 'img/img/gandon.jpg',
      title: 'Предохраняйтесь',
      description: 'Падите от жала хедкраба.',
      guideLink: '/guides#gandon-guide'
    },
    {
      id: 'steyk',
      icon: 'img/img/steyk.jpg',
      title: 'Хорошо прожаренный',
      description: 'Удерживайте взведённую гранату в руках.',
      guideLink: '/guides#steyk-guide'
    },
    {
      id: 'turel',
      icon: 'img/img/turel.jpg',
      title: 'Цифровая магия',
      description: 'Убейте 10 врагов с помощью перепрограммированной турели.',
      guideLink: '/guides#turel-guide'
    },
    {
      id: 'traek',
      icon: 'img/img/traek.jpg',
      title: 'Рассчитанная траектория',
      description: 'Убейте 10 подпрыгнувших хедкрабов из дробовика.',
      guideLink: '/guides#traek-guide'
    },
    {
      id: 'love',
      icon: 'img/img/love.jpg',
      title: 'Теория великого совокупления',
      description: 'Помогите барнаклу и хедкрабу обрести истинную любовь.',
      guideLink: '/guides#love-guide'
    },
    {
      id: 'detonator',
      icon: 'img/img/detonator.jpg',
      title: 'Удалённая детонация',
      description: 'Убейте барнакла с помощью взрывпакета.',
      guideLink: '/guides#detonator-guide'
    },
    {
      id: 'headshots',
      icon: 'img/img/headshots.jpg',
      title: 'Выброс серого вещества',
      description: 'Убейте 20 врагов выстрелом в голову из магнума.',
      guideLink: '/guides#headshots-guide'
    },
    {
      id: 'mines-easy',
      icon: 'img/img/mines.jpg',
      title: 'На шаг впереди',
      description: 'Убейте 10 врагов с помощью лазерных мин.',
      guideLink: '/guides#mines-guide'
    },
    {
      id: 'assassin-kill',
      icon: 'img/img/assassin-kill.jpg',
      title: 'Посмертный маршрут',
      description: 'Убейте ассасина из магнума.',
      guideLink: '/guides#assassin-kill-guide'
    },
    {
      id: 'snark-suicide',
      icon: 'img/img/snark-suicide.jpg',
      title: 'Всемирное тяготение',
      description: 'Умрите от своих же снарков.',
      guideLink: '/guides#snark-suicide-guide'
    },
    {
      id: 'snark-kills',
      icon: 'img/img/snark-kills.jpg',
      title: 'Сопротивление бесполезно',
      description: 'Убейте 10 врагов с помощью снарков.',
      guideLink: '/guides#snark-kills-guide'
    },
    {
      id: 'overload',
      icon: 'img/img/overload.jpg',
      title: 'Квантовая ёмкость',
      description: 'Наплюйте на предупреждения и всё равно перегрузите её.',
      guideLink: '/guides#overload-guide'
    },
    {
      id: 'ichthyosaur',
      icon: 'img/img/ichthyosaur.jpg',
      title: 'Ядерная рыбалка',
      description: 'Убейте ихтиозавра при помощи тау- или глюонной пушки.',
      guideLink: '/guides#ichthyosaur-guide'
    },
    {
      id: 'hivehand',
      icon: 'img/img/hivehand.jpg',
      title: 'Центростремительное тяготение',
      description: 'Убейте 20 врагов из пчеломёта.',
      guideLink: '/guides#hivehand-guide'
    },
    {
      id: 'gluon-burst',
      icon: 'img/img/gluon-burst.jpg',
      title: 'Преждевременное извержение',
      description: 'Выпустите весь заряд из глюонной пушки одним долгим выстрелом.',
      guideLink: '/guides#gluon-burst-guide'
    },
    {
      id: 'coolant-drown',
      icon: 'img/img/coolant-drown.jpg',
      title: 'Перенасыщенная головоломка',
      description: 'Утоните в охладительной жидкости в главе «Ядро Лямбды».',
      guideLink: '/guides#coolant-drown-guide'
    },
    {
      id: 'xen-doubt',
      icon: 'img/img/xen-doubt.jpg',
      title: 'Где Зен?',
      description: 'Передумайте прыгать в Лямбда-портал.',
      guideLink: '/guides#xen-doubt-guide'
    },
    {
      id: 'doormat',
      icon: 'img/img/doormat.jpg',
      title: 'Правила игры',
      description: 'Используйте коврик для ног.',
      guideLink: '/guides#doormat-guide'
    },
    {
      id: 'gonarch-glide',
      icon: 'img/img/gonarch-glide.jpg',
      title: 'Гонадный глайдер',
      description: 'Улетите в никуда от удара Гонарха.',
      guideLink: '/guides#gonarch-glide-guide'
    },
    {
      id: 'controller-kill',
      icon: 'img/img/controller-kill.jpg',
      title: 'Анти-материя первична к сознанию',
      description: 'Убейте Контроллера, не убив ни одного из подчинённых ему Вортигонтов.',
      guideLink: '/guides#controller-kill-guide'
    },
    {
      id: 'pacifist',
      icon: 'img/img/pacifist.jpg',
      title: 'Доктор пацифистских наук',
      description: 'Не убивайте Вортигонтов в Зене.',
      guideLink: '/guides#pacifist-guide'
    },
    {
      id: 'snacks',
      icon: 'img/img/snacks.jpg',
      title: 'Другое содержимое',
      description: 'Найдите капсулу с закусками.',
      guideLink: '/guides#snacks-guide'
    },
    {
      id: 'crystals',
      icon: 'img/img/crystals.jpg',
      title: 'Образец ГГ',
      description: 'Одновременно уничтожьте все три целительных кристалла в главе «Нихилант».',
      guideLink: '/guides#crystals-guide'
    },
    {
      id: 'nihilanthspeed',
      icon: 'img/img/nihilanthspeed.jpg',
      title: 'Быстрее, я опаздываю',
      description: 'Победите Нихиланта менее чем за 4 минуты.',
      guideLink: '/guides#nihilanthspeed-guide'
    },
    {
      id: 'agree',
      icon: 'img/img/agree.jpg',
      title: 'Безграничный потенциал',
      description: 'Согласитесь.',
      guideLink: '/guides#agree-guide'
    },
    {
      id: 'refuse',
      icon: 'img/img/refuse.jpg',
      title: 'Довольно печальный конец',
      description: 'Откажитесь.',
      guideLink: '/guides#refuse-guide'
    }
  ];

  const mediumAchievements = [
    {
      id: 'team',
      icon: 'img/img/team.jpg',
      title: 'Наши мозги и ваша сила',
      description: 'Приведите всех возможных учёных и охранников к лифту офисного комплекса.',
      guideLink: '/guides#team-guide'
    },
    {
      id: 'laptop-tampering',
      icon: 'img/img/masterlom.jpg',
      title: 'Мастер-ломастер',
      description: 'Нажмите на кнопку тревоги и вмешайтесь в работу ноутбука в главе «Аномальные материалы».',
      guideLink: '/guides#laptop-tampering-guide'
    },
    {
      id: 'alternate-path',
      icon: 'img/img/alternate-path.jpg',
      title: 'Открытая инфраструктура',
      description: 'Пройдите через офисы альтернативным путём.',
      guideLink: '/guides#alternate-path-guide'
    },
    {
      id: 'grenade-kill',
      icon: 'img/img/grenade-kill.jpg',
      title: 'Кинетическое отталкивание',
      description: 'Убейте пехотинца его собственной гранатой.',
      guideLink: '/guides#grenade-kill-guide'
    },
    {
      id: 'multi-kill',
      icon: 'img/img/multi-kill.jpg',
      title: 'Мега Герц',
      description: 'Убейте 5 врагов взрывом одной гранаты.',
      guideLink: '/guides#multi-kill-guide'
    },
    {
      id: 'unethical',
      icon: 'img/img/unethical.jpg',
      title: 'Вопросы этики',
      description: 'Проведите все сомнительные эксперименты.',
      guideLink: '/guides#unethical-guide'
    },
    {
      id: 'stealth',
      icon: 'img/img/stealth.jpg',
      title: 'Стелс-технология',
      description: 'Сбегите из ангара в главе «Поверхностное натяжение», не подняв стрельбы.',
      guideLink: '/guides#stealth-guide'
    },
    {
      id: 'proto-kills',
      icon: 'img/img/proto-kills.jpg',
      title: 'Любитель пострелять',
      description: 'Убейте всех Простейших в Зене.',
      guideLink: '/guides#proto-kills-guide'
    },
    {
      id: 'secret-jump',
      icon: 'img/img/secret-jump.jpg',
      title: 'Орбитальная траектория',
      description: 'Совершите секретный прыжок на второй остров в Зене, пропустив значительную часть первого.',
      guideLink: '/guides#secret-jump-guide'
    },
    {
      id: 'gas-plan',
      icon: 'img/img/gas-plan.jpg',
      title: 'План',
      description: 'Используйте ядовитый газ для убийства Гонарха.',
      guideLink: '/guides#gas-plan-guide'
    },
    {
      id: 'dead-scientists',
      icon: 'img/img/dead-scientists.jpg',
      title: 'Давность смерти',
      description: 'Найдите тела всех пропавших учёных в логове Гонарха.',
      guideLink: '/guides#dead-scientists-guide'
    },
    {
      id: 'ethical-choice',
      icon: 'img/img/ethical-choice.jpg',
      title: 'Без сомнения этично',
      description: 'Откажитесь использовать ядовитый газ и дайте Гонарху выжить.',
      guideLink: '/guides#ethical-choice-guide'
    },
    {
      id: 'crowbar-finish',
      icon: 'img/img/crowbar-finish.jpg',
      title: 'То, что доктор прописал',
      description: 'Нанесите финальный удар Гонарху монтировкой.',
      guideLink: '/guides#crowbar-finish-guide'
    },
    {
      id: 'no-damage',
      icon: 'img/img/no-damage.jpg',
      title: 'Десятиборец Чёрной Мезы',
      description: 'Сбегите из логова Гаргантюа, не получив урона.',
      guideLink: '/guides#no-damage-guide'
    },
    {
      id: 'mines-medium',
      icon: 'img/img/mines.jpg',
      title: 'Лазерная иммунизация',
      description: 'Пройдите главу «Нарушитель», не получив урона от лазеров.',
      guideLink: '/guides#mines-medium-guide'
    }
  ];

  const hardAchievements = [
    {
      id: 'hat-xen',
      icon: 'img/img/hat-xen.jpg',
      title: 'Редкий образец',
      description: 'Отправьте таинственную шляпу в Зен.',
      guideLink: '/guides#hat-xen-guide'
    },
    {
      id: 'hat-the-end',
      icon: 'img/img/hat-the-end.jpg',
      title: 'Редчайший образец',
      description: 'Донесите таинственную шляпу до конца игры.',
      guideLink: '/guides#hat-the-end-guide'
    },
    {
      id: 'pizza-the-end',
      icon: 'img/img/pizza-the-end.jpg',
      title: 'Осадки в виде пепперони',
      description: 'Получите «другую» секретную концовку.',
      guideLink: '/guides#pizza-the-end-guide'
    }
  ];

  return (
    <div className="page-container">
      <SidePanel side="left" />
      
      <main className="content main-content">
        <h1>Достижения Black Mesa</h1>
        <p>Полный список всех 50 достижений игры, отсортированных по сложности.</p>
        
        {/* === КАТЕГОРИЯ: ЛЕГКИЕ === */}
        <section id="easy" className="achievement-section">
          <div className="category-banner easy">
            <img src="img/img/easy-icon.png" className="difficulty-icon" alt="Легкий уровень" style={{ marginRight: '12px' }} />
            ЛЕГКИЕ (32 достижения)
          </div>
          
          {easyAchievements.map((ach) => (
            <AchievementCard key={ach.id} {...ach} />
          ))}
          
          <div className="achievement-stats">
            <p>Всего легких достижений: <strong>{easyAchievements.length}</strong></p>
            <p>Примерное время выполнения всех: <strong>5-10 часов</strong></p>
          </div>
        </section>

        {/* === КАТЕГОРИЯ: СРЕДНИЕ === */}
        <section id="medium" className="achievement-section">
          <div className="category-banner medium">
            <img src="img/img/medium-icon.png" className="difficulty-icon" alt="Средний уровень" style={{ marginRight: '12px' }} />
            СРЕДНИЕ (15 достижений)
          </div>
          
          {mediumAchievements.map((ach) => (
            <AchievementCard key={ach.id} {...ach} />
          ))}
          
          <div className="achievement-stats">
            <p>Всего средних достижений: <strong>{mediumAchievements.length}</strong></p>
            <p>Примерное время выполнения всех: <strong>15-20 часов</strong></p>
          </div>
        </section>

        {/* === КАТЕГОРИЯ: СЛОЖНЫЕ === */}
        <section id="hard" className="achievement-section">
          <div className="category-banner hard">
            <img src="img/img/hard-icon.png" className="difficulty-icon" alt="Сложный уровень" style={{ marginRight: '12px' }} />
            СЛОЖНЫЕ (3 достижения)
          </div>
          
          {hardAchievements.map((ach) => (
            <AchievementCard key={ach.id} {...ach} />
          ))}
          
          <div className="achievement-stats">
            <p>Всего сложных достижений: <strong>{hardAchievements.length}</strong></p>
            <p>Примерное время выполнения всех: <strong>30+ часов</strong></p>
          </div>
        </section>
        
        <div className="total-stats">
          <h3>Итого по игре:</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Всего достижений:</span>
              <span className="stat-value">50</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Легких:</span>
              <span className="stat-value">32</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Средних:</span>
              <span className="stat-value">15</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Сложных:</span>
              <span className="stat-value">3</span>
            </div>
          </div>
        </div>
      </main>
      
      <SidePanel side="right" />
    </div>
  );
};

export default Achievements;