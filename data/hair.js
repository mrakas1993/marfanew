const hair = {
  id: 'hair',
  name: 'Волосы',
  comment: {
    title: 'Оказываемая услуга',
    description: [
      { title: 'S', text: ' – Длина волос до мочки уха' },
      { title: 'M', text: ' – Длина волос до лопаток' },
      { title: 'L', text: ' – Длина волос до пояса' },
    ],
    exception: '*Цены оговариваются индивидуально, если толщина косы у основания головы свыше 4 см или длина волос ниже пояса',
  },
  service: [
    {
      masterName: 'Мастер',
      price: [
        {
          name: 'Причёски & укладки',
          item: [
            { name: 'Сушка + мытьё', price: 10.75, unit: false },
            { name: 'Выпрямление утюжком', price: 10.75, unit: false },
            { name: 'Брашинг / экспресс локоны', price: [17.82, 24.35, 30.19], unit: false },
            { name: 'Локоны', price: [20.79, 26.14, 38.02], unit: false },
            { name: 'Причёска', price: 59.40, unit: false },
          ]
        },
        {
          name: 'Стрижки',
          item: [
            { name: 'Прямой срез', price: 17.87, unit: false },
            { name: 'Чёлка', price: 11.72, unit: false },
            { name: 'Каре', price: 25.43, unit: false },
            { name: 'Стрижка', price: [17.23, 23.27, 28.03], unit: false },
            { name: 'Модельная', price: 20.79, unit: false },
            { name: 'Детская', price: 16.15, unit: false },
          ]
        },
        {
          name: 'Кератин и ботокс',
          item: [
            { name: 'Кератиновое выпрямление', price: [95.00, 212.65, 260.17], unit: false },
            { name: 'Ботокс', price: [90.00, 212.65, 260.17], unit: false },
          ]
        },
        {
          name: 'Уход K18',
          item: [
            { name: 'К18 проф. спрей–мист для волос', price: 23.17, unit: false },
            { name: 'К18 проф. маска для волос', price: 23.17, unit: false },
          ]
        },
        {
          name: 'Холодное восстановление, реконструкция, пилиг',
          item: [
            { name: 'Пилинг', price: 34.45, unit: false },
            { name: 'Очищение + уход', price: [47.52, 71.28, 95.04], unit: false },
            { name: 'Холодное восстановление 1-4 степень', price: [83.16, 112.86, 136.62], unit: false },
            { name: 'Холодное восстановление 5 степень', price: [154.44, 178.20, 207.90], unit: false },
          ]
        },
        {
          name: 'Окрашивание Londa / Matrix',
          item: [
            { name: 'Окрашивание корней', price: 112.86, unit: false },
            { name: 'Окрашивание корней + тонирование (блонд)', price: 160.38, unit: false },
            { name: 'Однотонное', price: [129.6, 177.12, 224.64], unit: false },
            { name: 'Тонировка волос', price: [88.56, 113.4, 149.04], unit: false },
            { name: 'Мелирование + тонирование', price: [128.52, 177.12, 224.64], unit: false },
            { name: 'Выход из чёрного', price: [196.56, 248.4, 284.04], unit: false },
            { name: 'Растяжка цвет', price: ['–', 151.2, 198.72], unit: false },
            { name: 'Омбре, балаяж и др.', price: ['–', 221.4, 300.24], unit: false },
            { name: 'Консультация', price: 0, unit: false },
          ]
        },
        {
          name: `Окрашивание L'Oreal professional`,
          item: [
            { name: 'Окрашивание корней', price: 150.88, unit: false },
            { name: 'Окрашивание корней + тонирование (блонд)', price: 230.47, unit: false },
            { name: 'Однотонное', price: [203.04, 286.2, 369.36], unit: false },
            { name: 'Тонировка волос', price: [138.24, 162, 211.68], unit: false },
            { name: 'Мелирование + тонирование', price: [138.24, 209.52, 280.8], unit: false },
            { name: 'Выход из чёрного', price: [246.24, 309.96, 367.2], unit: false },
            { name: 'Растяжка цвет', price: ['–', 210.6, 274.32], unit: false },
            { name: 'Омбре, балаяж и др.', price: ['–', 341.28, 432], unit: false },
            { name: 'Консультация', price: 0, unit: false },
          ]
        },
        {
          name: 'Окрашивание краской клиента',
          item: [
            { name: 'Окрашивание корней', price: 55.84, unit: false },
            { name: 'Окрашивание всей длины', price: 70.09, unit: false },
          ]
        },
      ]
    },
    {
      masterName: 'Старший мастер',
      price: [
        {
          name: 'Причёски & укладки',
          item: [
            { name: 'Сушка + мытьё', price: 11.85, unit: false },
            { name: 'Выпрямление утюжком', price: 11.85, unit: false },
            { name: 'Брашинг / экспресс локоны', price: [19.60, 26.79, 33.19], unit: false },
            { name: 'Локоны', price: [22.89, 28.75, 41.85], unit: false },
            { name: 'Причёска', price: 65.35, unit: false },
          ]
        },
        {
          name: 'Стрижки',
          item: [
            { name: 'Прямой срез', price: 19.65, unit: false },
            { name: 'Чёлка', price: 12.89, unit: false },
            { name: 'Каре', price: 27.99, unit: false },
            { name: 'Стрижка', price: [18.95, 25.59, 30.85], unit: false },
            { name: 'Модельная', price: 22.89, unit: false },
            { name: 'Детская', price: 17.80, unit: false },
          ]
        },
        {
          name: 'Кератин и ботокс',
          item: [
            { name: 'Кератиновое выпрямление', price: [104.50, 233.95, 286.19], unit: false },
            { name: 'Ботокс', price: [104.50, 233.95, 286.19], unit: false },
          ]
        },
        {
          name: 'Уход K18',
          item: [
            { name: 'К18 проф. спрей–мист для волос', price: 25.49, unit: false },
            { name: 'К18 проф. маска для волос', price: 25.49, unit: false },
          ]
        },
        {
          name: 'Холодное восстановление, реконструкция, пилиг',
          item: [
            { name: 'Пилинг', price: 37.89, unit: false },
            { name: 'Очищение + уход', price: [52.29, 78.45, 104.55], unit: false },
            { name: 'Холодное восстановление 1-4 степень', price: [91.49, 124.15, 150.29], unit: false },
            { name: 'Холодное восстановление 5 степень', price: [169.89, 196.10, 228.69], unit: false },
          ]
        },
        {
          name: 'Окрашивание Londa / Matrix',
          item: [
            { name: 'Окрашивание корней', price: 124.15, unit: false },
            { name: 'Окрашивание корней + тонирование (блонд)', price: 176.45, unit: false },
            { name: 'Однотонное', price: [142.60, 194.83, 247.10], unit: false },
            { name: 'Тонировка волос', price: [97.40, 124.74, 163.94], unit: false },
            { name: 'Мелирование + тонирование', price: [141.37, 194.83, 247.10], unit: false },
            { name: 'Выход из чёрного', price: [216.22, 273.24, 312.44], unit: false },
            { name: 'Растяжка цвет', price: ['–', 166.32, 218.10], unit: false },
            { name: 'Омбре, балаяж и др.', price: ['–', 243.54, 330.26], unit: false },
            { name: 'Консультация', price: 0, unit: false },
          ]
        },
        {
          name: `Окрашивание L'Oreal professional`,
          item: [
            { name: 'Окрашивание корней', price: 165.99, unit: false },
            { name: 'Окрашивание корней + тонирование (блонд)', price: 253.55, unit: false },
            { name: 'Однотонное', price: [223.34, 314.82, 406.30], unit: false },
            { name: 'Тонировка волос', price: [152.06, 178.20, 232.85], unit: false },
            { name: 'Мелирование + тонирование', price: [152.06, 230.47, 308.88], unit: false },
            { name: 'Выход из чёрного', price: [270.86, 340.97, 403.92], unit: false },
            { name: 'Растяжка цвет', price: ['–', 231.66, 301.75], unit: false },
            { name: 'Омбре, балаяж и др.', price: ['–', 375.40, 475.20], unit: false },
            { name: 'Консультация', price: 0, unit: false },
          ]
        },
        {
          name: 'Окрашивание краской клиента',
          item: [
            { name: 'Окрашивание корней', price: 61.45, unit: false },
            { name: 'Окрашивание всей длины', price: 77.09, unit: false },
          ]
        },
      ]
    }
  ]
};
