// pages/Guides.jsx
import React from 'react';
import SidePanel from '../components/SidePanel';
import GuideCard from '../components/GuideCard';
import './Guides.css';

const Guides = ({ user, onUpgrade, onOpenAuthModal }) => {
  // 5 готовых руководств для всех пользователей
  const premiumGuides = [
    {
      id: 'microwave',
      title: 'Изысканная конвекция',
      icon: 'img/img/microwave.jpg',
      description: 'Подробное руководство по взрыву запеканки в микроволновке',
      content: [
        '1. В главе №2 «Аномальные материалы» по пути к защитному костюму H.E.V.',
        '2. Сверните направо на кухню.',
        '3. Найдите микроволновку и нажмите на неё (клавиша «Е»).',
        '4. Выставьте максимальную мощность.',
        '5. Наслаждайтесь результатом!'
      ],
      images: [
        'img/img/kitchen.png',
        'img/img/zape.png',
        'img/img/kanka.png'
      ],
      difficulty: 'easy',
      time: '2 минуты',
      chapter: 'Глава 2: Аномальные материалы'
    },
    {
      id: 'team',
      title: 'Наши мозги и ваша сила',
      icon: 'img/img/team.jpg',
      description: 'Спасение всех учёных и охранников в офисном комплексе',
      content: [
        '1. Найдите и спасите 4 охранников и 2 учёных.',
        '2. Охранник в оружейной комнате - спасите его от зомби.',
        '3. Охранник на лестнице на второй карте.',
        '4. Учёный-женщина в комнате с вортигонтами.',
        '5. Охранник в коридоре после морозильной камеры.',
        '6. Охранник и учёный-мужчина у лестницы.',
        '7. Приведите всех к лифту и победите врагов.'
      ],
      images: [
        'img/img/1team.jpg',
        'img/img/2team.jpg',
        'img/img/3team.jpg'
      ],
      difficulty: 'medium',
      time: '20 минут',
      chapter: 'Глава 4: Офисный комплекс'
    },
    {
      id: 'hat-xen',
      title: 'Редкий образец',
      icon: 'img/img/hat-xen.jpg',
      description: 'Как донести шляпу из главы 3 до портала в Зен',
      content: [
        '1. В главе №3 найдите шляпу за трубами после каскадного резонанса.',
        '2. Несите шляпу через все следующие главы.',
        '3. После поимки военными шляпа появится наверху в главе 10.',
        '4. В главе 14 прыгните в портал с шляпой.',
        'ВАЖНО: Шляпу нельзя складывать в инвентарь!'
      ],
      images: [
        'img/img/1hat.jpg',
        'img/img/2hat.jpg',
        'img/img/3hat.jpg'
      ],
      difficulty: 'hard',
      time: 'Несколько часов',
      chapter: 'Главы 3-14'
    },
    {
      id: 'master-lomaster',
      title: 'Мастер-ломастер',
      icon: 'img/img/masterlom.jpg',
      description: 'Нажмите тревогу и вмешайтесь в работу ноутбука',
      content: [
        '1. В главе №2 войдите в исследовательский центр.',
        '2. Слева на стене найдите ноутбук, нажмите использовать (Е).',
        '3. Найдите кнопку тревоги под столом охранника.',
        '4. Нажмите кнопку тревоги (Е).',
        '5. Наслаждайтесь хаосом!'
      ],
      images: [
        'img/img/1master.jpg',
        'img/img/2master.jpg',
        'img/img/3master.jpg'
      ],
      difficulty: 'medium',
      time: '5 минут',
      chapter: 'Глава 2: Аномальные материалы'
    },
    {
      id: 'co2-extraction',
      title: 'Извлечение CO2',
      icon: 'img/img/co2icon.jpg',
      description: 'Получите 20 банок газировки из автоматов',
      content: [
        '1. В главе №2 на кухне найдите автомат с газировкой.',
        '2. Нажмите кнопку (Е) - получите банку.',
        '3. Один автомат выдаёт максимум 15 банок.',
        '4. Сохранитесь и загрузитесь для получения оставшихся 5.',
        '5. Или ищите другие автоматы по игре.'
      ],
      images: [
        'img/img/co2.jpg',
        'img/img/co2 give.jpg',
        'img/img/a lot of co2.jpg'
      ],
      difficulty: 'easy',
      time: '10 минут',
      chapter: 'Глава 2: Аномальные материалы'
    }
  ];

  // ХАК ДЛЯ ДИПЛОМА: Доступ всегда разрешен по умолчанию!
  const hasPremiumAccess = true;
  
  // Безопасное имя пользователя, если он еще не вошел в аккаунт
  const username = user ? user.username : 'Гость';

  return (
    <div className="page-container">
      <SidePanel side="left" />
      
      <main className="content main-content">
        <h1>Полные руководства по достижениям</h1>
        
        
          
          <div className="guides-grid">
            {premiumGuides.map((guide) => (
              <GuideCard key={guide.id} guide={guide} user={user} />
            ))}
          </div>
      </main>
      
      <SidePanel side="right" />
    </div>
  );
};

export default Guides;