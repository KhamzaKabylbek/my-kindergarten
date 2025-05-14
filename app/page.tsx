
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Custom colors from the specification
const colors = {
  skyBlue: '#A5D8FF',
  mint: '#C8F7DC',
  lightPeach: '#FFE5D0',
  lavender: '#E8D6F3',
  honeyOrange: '#FFB55A',
  midnightIndigo: '#2E3856',
};

// Main App Component
export default function KindergartenLanding() {
  return (
    <div className="font-sans text-midnightIndigo" style={{ color: colors.midnightIndigo }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
              className="mr-2"
            >
              🧸
            </motion.div>
            <h1 className="text-xl font-bold">Детский сад "Солнышко"</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#why-us" className="hover:text-opacity-70">Преимущества</a>
            <a href="#daily-program" className="hover:text-opacity-70">Программа дня</a>
            <a href="#gallery" className="hover:text-opacity-70">Галерея</a>
            <a href="#testimonials" className="hover:text-opacity-70">Отзывы</a>
            <a href="#pricing" className="hover:text-opacity-70">Тарифы</a>
          </nav>
          <button className="md:hidden text-2xl">≡</button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative py-16 md:py-24"
        style={{ backgroundColor: colors.skyBlue }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Lexend', sans-serif" }}
            >
              Забота о будущем вашего ребенка
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl mb-8"
            >
              Мы создаем теплую атмосферу для развития, игр и обучения, где каждый ребенок чувствует себя как дома.
            </motion.p>
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.honeyOrange }}
            >
              Записаться на экскурсию
            </motion.button>
          </div>
          
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Счастливые дети в детском саду" 
                className="w-full h-auto"
              />
            </motion.div>
            
            <div className="mt-6 p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-md">
              <h3 className="text-lg font-semibold mb-4">Запишитесь сейчас</h3>
              <div className="flex flex-col space-y-3">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-300"
                />
                <button 
                  className="px-4 py-2 rounded-lg text-white font-medium"
                  style={{ backgroundColor: colors.honeyOrange }}
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 left-10 w-20 h-20 rounded-full opacity-30" style={{ backgroundColor: colors.mint }}></div>
        <div className="absolute top-20 right-10 w-16 h-16 rounded-full opacity-20" style={{ backgroundColor: colors.lavender }}></div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Почему родители выбирают нас
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                icon: "🏡", 
                title: "Безопасная среда", 
                desc: "Видеонаблюдение, пропускная система и подготовленные игровые зоны",
                color: colors.skyBlue
              },
              { 
                icon: "🧠", 
                title: "Развивающие занятия", 
                desc: "Программа, разработанная опытными педагогами для всестороннего развития",
                color: colors.mint
              },
              { 
                icon: "👨‍👩‍👧‍👦", 
                title: "Малые группы", 
                desc: "Не более 12 детей в группе для индивидуального подхода к каждому ребенку",
                color: colors.lightPeach
              },
              { 
                icon: "🥗", 
                title: "Здоровое питание", 
                desc: "5-разовое питание с учетом диетических предпочтений и ограничений",
                color: colors.lavender
              },
              { 
                icon: "🌳", 
                title: "Прогулки на свежем воздухе", 
                desc: "Ежедневные прогулки на собственной закрытой территории",
                color: colors.mint
              },
              { 
                icon: "👩‍🏫", 
                title: "Квалифицированные педагоги", 
                desc: "Команда с профильным образованием и опытом работы от 5 лет",
                color: colors.skyBlue
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                style={{ backgroundColor: `${item.color}20` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{item.icon}</div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Program */}
      <section 
        id="daily-program" 
        className="py-16 md:py-24"
        style={{ backgroundColor: `${colors.lightPeach}50` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Программа дня
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              { time: "07:30 - 08:30", activity: "Приход детей, свободная игра", color: colors.skyBlue },
              { time: "08:30 - 09:00", activity: "Утренняя зарядка", color: colors.skyBlue },
              { time: "09:00 - 09:30", activity: "Завтрак", color: colors.skyBlue },
              { time: "09:30 - 11:00", activity: "Развивающие занятия", color: colors.mint },
              { time: "11:00 - 12:30", activity: "Прогулка на свежем воздухе", color: colors.mint },
              { time: "12:30 - 13:00", activity: "Обед", color: colors.lightPeach },
              { time: "13:00 - 15:00", activity: "Дневной сон", color: colors.lightPeach },
              { time: "15:00 - 15:30", activity: "Полдник", color: colors.lavender },
              { time: "15:30 - 16:30", activity: "Творческие занятия", color: colors.lavender },
              { time: "16:30 - 17:00", activity: "Ужин", color: colors.lavender },
              { time: "17:00 - 19:00", activity: "Свободная игра, уход домой", color: colors.lavender }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex mb-4 p-4 rounded-lg shadow-sm"
                style={{ backgroundColor: `${item.color}30` }}
              >
                <div className="w-1/3 pr-4 font-mono font-medium text-right">
                  {item.time}
                </div>
                <div className="w-2/3">
                  {item.activity}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Наша галерея
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <img 
                  src={`/api/placeholder/${400}/${300}?text=Фото ${index + 1}`} 
                  alt={`Фотография детского сада ${index + 1}`}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button 
              className="px-6 py-2 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: colors.honeyOrange }}
            >
              Виртуальный 360° тур
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        className="py-16 md:py-24"
        style={{ backgroundColor: `${colors.lavender}30` }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Отзывы родителей
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "Анна Иванова", 
                child: "Мама Миши, 4 года", 
                text: "Мы очень довольны детским садом. Сын с радостью идет каждое утро, а вечером не хочет уходить домой. Педагоги внимательные и заботливые."
              },
              { 
                name: "Сергей Петров", 
                child: "Папа Кати, 3 года", 
                text: "Особенно ценим индивидуальный подход к нашей дочери. За полгода она стала намного общительнее и самостоятельнее."
              },
              { 
                name: "Ольга Смирнова", 
                child: "Мама Андрея, 5 лет", 
                text: "Прекрасная развивающая программа. Сын научился читать, считать и даже немного говорить по-английски. Рекомендую всем знакомым."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    👤
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm opacity-75">{item.child}</p>
                  </div>
                </div>
                <p className="italic">"{item.text}"</p>
                
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 mx-auto max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <div className="text-5xl mb-2">🎬</div>
                  <p>Видео-отзывы родителей</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: "'Lexend', sans-serif" }}>
            Наши тарифы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: "Полдня", 
                price: "25000 ₽/мес", 
                time: "С 8:00 до 13:00",
                features: ["3-разовое питание", "Развивающие занятия", "Прогулки"],
                color: colors.skyBlue,
                popular: false
              },
              { 
                name: "Полный день", 
                price: "35000 ₽/мес", 
                time: "С 7:30 до 19:00",
                features: ["5-разовое питание", "Полная программа занятий", "Дневной сон", "2 прогулки в день"],
                color: colors.mint,
                popular: true
              },
              { 
                name: "Выходного дня", 
                price: "12000 ₽/мес", 
                time: "Суббота с 9:00 до 16:00",
                features: ["3-разовое питание", "Творческие занятия", "Прогулка"],
                color: colors.lightPeach,
                popular: false
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl shadow-md relative ${item.popular ? 'ring-2 ring-honeyOrange' : ''}`}
                style={{ backgroundColor: `${item.color}20` }}
              >
                {item.popular && (
                  <div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-medium"
                    style={{ backgroundColor: colors.honeyOrange }}
                  >
                    Популярный
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-center mb-2">{item.name}</h3>
                <p className="text-center mb-1">{item.time}</p>
                <p className="text-2xl font-bold text-center my-4">{item.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-2 rounded-lg font-medium ${item.popular ? 'text-white' : 'text-midnightIndigo border'}`}
                  style={{ 
                    backgroundColor: item.popular ? colors.honeyOrange : 'transparent',
                    borderColor: item.popular ? 'transparent' : colors.midnightIndigo
                  }}
                >
                  Выбрать тариф
                </button>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 p-6 rounded-xl bg-white shadow-md max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Узнайте о наличии грантовых мест</h3>
            <p className="mb-4">У нас есть ограниченное количество мест по государственной программе субсидирования. Оставьте заявку, и мы расскажем о возможности получения гранта.</p>
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Ваше имя" 
                className="px-4 py-2 rounded-lg border flex-1 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <input 
                type="tel" 
                placeholder="Телефон" 
                className="px-4 py-2 rounded-lg border flex-1 focus:outline-none focus:ring-2 focus:ring-sky-300"
              />
              <button 
                className="px-6 py-2 rounded-lg text-white font-medium"
                style={{ backgroundColor: colors.honeyOrange }}
              >
                Узнать подробнее
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16" style={{ backgroundColor: colors.midnightIndigo, color: 'white' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Детский сад "Солнышко"</h3>
              <p className="mb-2">Мы заботимся о самом важном - о ваших детях!</p>
              <p>Лицензия: №12345 от 01.01.2022</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="mb-2">📍 г. Астана, ул. Примерная, 123</p>
              <p className="mb-2">📞 +7 (123) 456-78-90</p>
              <p>✉️ info@solnyshko.kz</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Мы в соцсетях</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span role="img" aria-label="Instagram">📸</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span role="img" aria-label="Facebook">👤</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span role="img" aria-label="Telegram">✈️</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <span role="img" aria-label="WhatsApp">📱</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-white/20 text-center text-sm opacity-70">
            <p>© 2025 Детский сад "Солнышко". Все права защищены.</p>
          </div>
        </div>
      </footer>
      
      {/* Sticky CTA for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg border-t z-40">
        <button 
          className="w-full py-3 rounded-lg text-white font-semibold text-lg"
          style={{ backgroundColor: colors.honeyOrange }}
        >
          Записаться на экскурсию
        </button>
      </div>
    </div>
  );
}
