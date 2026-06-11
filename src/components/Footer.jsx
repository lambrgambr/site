import React from 'react';

const Footer = () => {

  return (

    <footer className="w-full bg-neutral-950 border-t border-neutral-800 mt-20 py-10 px-6 text-neutral-400 text-sm">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        

        {/* Колонка 1: О проекте */}

        <div className="space-y-3">

          <div className="flex items-center space-x-2 text-white font-bold tracking-wider text-base">

            <span className="text-orange-500">λ</span> PERFECT MESA

          </div>

          <p className="text-xs text-neutral-500 leading-relaxed">

            Автоматизированная система учета достижений научно-исследовательского комплекса Black Mesa. Дипломный проект.

          </p>

        </div>



        {/* Колонка 2: Обязательные Контакты (Раскомментировано и упаковано) */}

        <div className="space-y-2">

          <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-orange-500/90">Контакты</h4>

          <ul className="space-y-1.5 text-xs">

            <li><span className="text-neutral-500">Email:</span> support@perfect-mesa.vercel.app</li>

            <li><span className="text-neutral-500">Разработчик:</span> Романов Г.</li>

            <li><span className="text-neutral-500">Локация:</span> Сектор С, Тестовые лаборатории</li>

          </ul>

        </div>



        {/* Колонка 3: Быстрая Обратная связь (По ТЗ) */}

        <div className="space-y-3">

          <h4 className="text-white font-semibold text-sm tracking-wide uppercase text-neutral-300">Обратная связь</h4>

          <form className="flex space-x-2">

            <input 

              type="email" 

              placeholder="Ваш email" 

              className="bg-neutral-900 border border-neutral-800 text-white text-xs px-3 py-2 rounded focus:outline-none focus:border-orange-500 w-full transition-colors"

            />

            <button 

              type="submit" 

              className="bg-orange-600 hover:bg-orange-500 text-white text-xs font-medium px-4 py-2 rounded transition-colors"

            >

              Отправить

            </button>

          </form>

        </div>



      </div>



      {/* Нижняя плашка */}

      <div className="max-w-6xl mx-auto border-t border-neutral-900 mt-8 pt-4 text-center text-xs text-neutral-600 flex justify-between items-center">

        <div>© 2026 Perfect Mesa. All rights reserved.</div>

        <div className="text-[10px] tracking-widest text-neutral-700">BM-81-80-TECH</div>

      </div>

    </footer>

  );

};



export default Footer;