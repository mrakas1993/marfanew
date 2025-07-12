const nails = {
  id: 'nails',
  name: 'ногти',
  service: [
    {
      masterName: 'Мастер',
      price: [
        {
          name: 'Снятие покрытия ручки',
          item: [
            { name: 'Лак', price: 5.49, unit: false },
            { name: 'Гель-лак', price: 7.10, unit: false },
            { name: 'Акрил / гель', price: 9.40, unit: false },
            { name: 'Без дальнейшего покрытия', price: 15.39, unit: false }
          ]
        },
        {
          name: 'Маникюр',
          item: [
            { name: 'Только форма', price: 6.80, unit: false },
            { name: 'Европейский', price: 7.15, unit: false },
            { name: 'Классический', price: 12.65, unit: false },
            { name: 'Комбинированный / аппаратный', price: 12.65, unit: false },
            { name: 'Без дальнейшего покрытия гель-лак', price: 21.45, unit: false },
            { name: 'Японский', price: 35.20, unit: false },
            { name: 'Детский', price: 24.10, unit: false },
          ]
        },
        {
          name: 'Покрытие на ручках',
          item: [
            { name: 'Лак', price: 9.50, unit: false },
            { name: 'Гель-лак', price: 22.85, unit: false },
            { name: 'Лечебное', price: 10.60, unit: false },
            { name: 'Укрепление гель / акрил', price: 22.85, unit: false },
            { name: 'Укрепление перед покрытием гелем', price: 10.55, unit: false },
            { name: 'Укрепление перед покрытием пудрой', price: 6.99, unit: false },
            { name: 'Ремонт', price: 1.60, unit: true, counter: 10 }
          ]
        },
        {
          name: 'Покрытие материалами Luxio',
          item: [
            { name: 'Полное покрытие', price: 37.35, unit: false },
            { name: 'Укрепление', price: 12.65, unit: false },
            { name: 'Использование только цветника (гель-лака)', price: 30.95, unit: false }
          ]
        },
        {
          name: 'Педикюр',
          item: [
            // { name: 'Классический', price: 32.29, unit: false },
            { name: 'Гигиенический', price: 26.35, unit: false },
            { name: 'Комбинированный', price: 32.99, unit: false },
            { name: 'Аппаратный', price: 32.99, unit: false },
            { name: 'Только пальчики', price: 25.90, unit: false },
            { name: 'Обработка стоп', price: 20.85, unit: false },
            { name: 'Детский', price: 20.85, unit: false },
            { name: 'Наращивание ногтя большого пальца', price: 9.35, unit: true, counter: 2 }
          ]
        },
        {
          name: 'Покрытиe и снятие на ножках',
          item: [
            { name: 'Покрытие лак', price: 10.95, unit: false },
            { name: 'Покрытие гель-лак', price: 24.15, unit: false },
            { name: 'Снятие лак', price: 5.49, unit: false },
            { name: 'Снятие гель-лак', price: 9.50, unit: false },
            { name: 'Дизайн', price: 2.15, unit: true, counter: 10 },
          ]
        },
        {
          name: 'Наращивание',
          item: [
            { name: 'Гель / акрил + покрытие гель-лак (до 4 длины)', price: 65.89, unit: false },
            { name: 'Гель / акрил + покрытие гель-лак (от 4 длины)', price: 72.49, unit: false },
            { name: 'Коррекция с покрытием гель-лак + снятие', price: 58.25, unit: false },
            { name: 'Наращивание ногтя на руке', price: 4.15, unit: true, counter: 10 }
          ]
        },
        {
          name: 'Дизайн',
          item: [
            { name: 'Простой', price: 2.15, unit: true, counter: 10 },
            { name: 'Сложный', price: 5.20, unit: true, counter: 10 },
            { name: 'Художественная роспись', price: 7.89, unit: true, counter: 10 },
            { name: 'French / лунный', price: 1.05, unit: true, counter: 10 },
            { name: 'Кошачий', price: 5.00, unit: false },
            { name: 'Омбре', price: 2.19, unit: true, counter: 10 },
            { name: 'Втирка / фольга / блестки', price: 1.09, unit: true, counter: 10 },
            { name: 'Стразы (1 шт.)', price: 0.39, unit: true, counter: 100 },
            { name: 'Царь ноготь', price: 7.15, unit: true, counter: 10 },
          ]
        },
        {
          name: 'SPA',
          item: [
            { name: 'Увлажняющие перчатки', price: 4.39, unit: false },
            { name: 'Массаж', price: 5.39, unit: false },
            { name: 'Парафинотерапия', price: 10.39, unit: false },
            { name: 'Уход ног (скраб-маска)', price: 10.45, unit: false }
          ]
        }
      ]
    },
    {
      masterName: 'Старший мастер',
      price: [
        {
          name: 'Снятие покрытия ручки',
          item: [
            { name: 'Лак', price: 6.05, unit: false },
            { name: 'Гель-лак', price: 8.79, unit: false },
            { name: 'Акрил / гель', price: 11.25, unit: false },
            { name: 'Без дальнейшего покрытия', price: 18.15, unit: false }
          ]
        },
        {
          name: 'Маникюр',
          item: [
            { name: 'Только форма', price: 7.65, unit: false },
            { name: 'Европейский', price: 9.10, unit: false },
            { name: 'Классический', price: 15.39, unit: false },
            { name: 'Комбинированный / аппаратный', price: 15.39, unit: false },
            { name: 'Без дальнейшего покрытия гель-лак', price: 26.94, unit: false },
            { name: 'Японский', price: 35.20, unit: false },
            { name: 'Детский', price: 28.59, unit: false },
          ]
        },
        {
          name: 'Покрытие на ручках',
          item: [
            { name: 'Лак', price: 10.85, unit: false },
            { name: 'Гель-лак', price: 27.79, unit: false },
            { name: 'Лечебное', price: 10.99, unit: false },
            { name: 'Укрепление гель / акрил', price: 27.79, unit: false },
            { name: 'Укрепление перед покрытием гелем', price: 12.10, unit: false },
            { name: 'Укрепление перед покрытием пудрой', price: 9.10, unit: false },
            { name: 'Ремонт', price: 1.76, unit: true, counter: 10 }
          ]
        },
        {
          name: 'Покрытие материалами Luxio',
          item: [
            { name: 'Полное покрытие', price: 41.75, unit: false },
            { name: 'Укрепление', price: 14.59, unit: false },
            { name: 'Использование только цветника (гель-лака)', price: 35.70, unit: false }
          ]
        },
        {
          name: 'Педикюр',
          item: [
            // { name: 'Классический', price: 34.95, unit: false },
            { name: 'Гигиенический', price: 31.19, unit: false },
            { name: 'Комбинированный', price: 38.49, unit: false },
            { name: 'Аппаратный', price: 38.49, unit: false },
            { name: 'Только пальчики', price: 30.20, unit: false },
            { name: 'Обработка стоп', price: 26.95, unit: false },
            { name: 'Детский', price: 24.19, unit: false },
            { name: 'Наращивание ногтя большого пальца', price: 9.35, unit: true, counter: 2 }
          ]
        },
        {
          name: 'Покрытиe и снятие на ножках',
          item: [
            { name: 'Покрытие лак', price: 12.05, unit: false },
            { name: 'Покрытие гель-лак', price: 27.79, unit: false },
            { name: 'Снятие лак', price: 5.79, unit: false },
            { name: 'Снятие гель-лак', price: 11.95, unit: false },
            { name: 'Дизайн', price: 3.25, unit: true, counter: 10 },
          ]
        },
        {
          name: 'Наращивание',
          item: [
            { name: 'Гель / акрил + покрытие гель-лак (до 4 длины)', price: 79.75, unit: false },
            { name: 'Гель / акрил + покрытие гель-лак (от 4 длины)', price: 84.69, unit: false },
            { name: 'Коррекция с покрытием гель-лак + снятие', price: 72.55, unit: false },
            { name: 'Наращивание ногтя на руке', price: 4.79, unit: true, counter: 10 }
          ]
        },
        {
          name: 'Дизайн',
          item: [
            { name: 'Простой', price: 2.40, unit: true, counter: 10 },
            { name: 'Сложный', price: 5.45, unit: true, counter: 10 },
            { name: 'Художественная роспись', price: 8.75, unit: true, counter: 10 },
            { name: 'French / лунный', price: 1.19, unit: true, counter: 10 },
            { name: 'Кошачий', price: 5.99, unit: false },
            { name: 'Омбре', price: 3.25, unit: true, counter: 10 },
            { name: 'Втирка / фольга / блестки', price: 1.09, unit: true, counter: 10 },
            { name: 'Стразы (1 шт.)', price: 0.49, unit: true, counter: 100 },
            { name: 'Царь ноготь', price: 7.15, unit: true, counter: 10 },
          ]
        },
        {
          name: 'SPA',
          item: [
            { name: 'Увлажняющие перчатки', price: 4.39, unit: false },
            { name: 'Массаж', price: 5.39, unit: false },
            { name: 'Парафинотерапия', price: 10.39, unit: false },
            { name: 'Уход ног (скраб-маска)', price: 11.55, unit: false }
          ]
        }
      ]
    }
  ]
};
