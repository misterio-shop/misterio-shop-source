export const appConstants = {
  data: function () {
    return {
      RUB: '&nbsp;&#8381',
      PRODUCT_CLASSIFICATION: [{
        value: 'sexToy',
        label: 'Секс-игрушки',
        icon: '/static/icon/shop/big/penis.svg',
        children: [
          {value: 'analToy', label: 'анальные игрушки'},
          {value: 'vaginalBall', label: 'вагинальные шарики'},
          {value: 'vibrator', label: 'вибраторы'},
          {value: 'pulsator', label: 'пульсаторы'},
          {value: 'masturbator', label: 'мастурбаторы'},
          {value: 'dildo', label: 'фаллоимитаторы'},
          {value: 'strap', label: 'страпоны'},
          {value: 'prostate', label: 'массажеры простаты'},
          {value: 'clitorisStimulator', label: 'стимуляторы клитора'},
          {value: 'ring', label: 'кольца и насадки'},
          {value: 'pump', label: 'помпы'},
          {value: 'sexDoll', label: 'секс-куклы'},
          {value: 'sexMachine', label: 'секс-машины'}
        ]
      }, {
        value: 'bdsm',
        label: 'BDSM, фетиш',
        icon: '/static/icon/shop/big/cuffs.svg',
        children: [
          {value: 'bdsmClothes', label: 'BDSM-одежда'},
          {value: 'sets', label: 'наборы и комплекты'},
          {value: 'medical', label: 'медицинский фетиш'},
          {value: 'nipple', label: 'зажимы для сосков'},
          {value: 'gag', label: 'кляпы'},
          {value: 'mask', label: 'маски'},
          {value: 'collar', label: 'ошейники'},
          {value: 'percussion', label: 'ударные девайсы'},
          {value: 'fixation', label: 'фиксация и бондаж'}
        ]
      }, {
        value: 'cosmetic',
        label: 'Интим-косметика',
        icon: '/static/icon/shop/big/cream.svg',
        children: [
          {value: 'bathSoul', label: 'косметика для ванны и душа'},
          {value: 'bodyArt', label: 'средства для массажа и боди-арт'},
          {value: 'perfume', label: 'духи с феромонами'},
          {value: 'stimulationCream', label: 'кремы для стимуляции'},
          {value: 'correctionCream', label: 'кремы для коррекции размеров'},
          {value: 'intimateHygiene', label: 'средства для интимной гигиены'},
          {value: 'analGel', label: 'смазки для анального секса'},
          {value: 'vaginalGel', label: 'смазки для вагинального секса'},
          {value: 'edible', label: 'съедобные гели и смазки'},
          {value: 'toyCare', label: 'уход за секс игрушками'}
        ]
      }, {
        value: 'eroticLingerie',
        label: 'Эротическое белье',
        icon: '/static/icon/shop/big/underwear.svg',
        children: [
          {value: 'womenEroticLingerie', label: 'женская одежда'},
          {value: 'womenUnderwear', label: 'женское нижнее белье'},
          {value: 'menEroticLingerie', label: 'мужская одежда и белье'},
          {value: 'roleSuit', label: 'женские ролевые костюмы'},
          {value: 'tights', label: 'чулки и колготки'},
          {value: 'accessories', label: 'аксессуары'}
        ]
      }, {
        value: 'condom',
        label: 'Презервативы',
        icon: '/static/icon/shop/big/condom.svg'
      }, {
        value: 'gifts',
        label: 'Подарки и игры',
        icon: '/static/icon/shop/big/gift_game.svg'
      }, {
        value: 'baa',
        label: 'БАДы',
        icon: '/static/icon/shop/big/pills.svg',
        children: [
          {value: 'womenBaa', label: 'для женщин'},
          {value: 'menBaa', label: 'для мужчин'},
          {value: 'unisexBaa', label: 'унисекс'}
        ]
      }
      ],
      PAYMENT_METHODS: {
        cash: {value: 'cash', label: 'Наличные'},
        bank_card: {value: 'bank_card', label: 'Банковская карта'}
      },
      PAYMENT_TYPES: {
        receipt: {value: 'receipt', label: 'При получении'},
        online: {value: 'online', label: 'На сайте'}
      },
      DELIVERY_METHODS: {
        cdek: {value: 'cdek', label: 'СДЭК'},
        postrf: {value: 'postrf', label: 'Почта России'},
        courier: {value: 'courier', label: 'Курьер'},
        pickpoint: {value: 'pickpoint', label: 'PickPoint'}
      },
      PAYMENT_STATUSES: {
        none: {value: 'none', label: 'Не оплачено'},
        pending: {value: 'pending', label: 'Платеж создан (ожидает вашего подтверждения)'},
        waiting_for_capture: {value: 'waiting_for_capture', label: 'Оплачено (ожидает подтверждения магазином)'},
        succeeded: {value: 'succeeded', label: 'Оплачено'},
        canceled: {value: 'canceled', label: 'Отменено'}
      },
      ORDER_STATUSES: {
        created: {value: 'created', label: 'Оформлено'},
        pending: {value: 'pending', label: 'Ожидает отправки'},
        sent: {value: 'sent', label: 'Отправлено'},
        delivered: {value: 'delivered', label: 'Доставлено'},
        refused: {value: 'refused', label: 'Отклонено'}
      },
      REVIEW_STATUSES: {
        created: {value: 'created', label: 'Новые'},
        published: {value: 'published', label: 'Опубликовано'},
        archived: {value: 'archived', label: 'Архив'}
      },
      NEWS_TYPES: {
        article: {value: 'article', label: 'Статьи'},
        sale: {value: 'sale', label: 'Акции'}
      },
      DISCOUNT_TYPES: {
        online: {
          value: 3,
          type: 'online',
          dim: 'percent'
        }
      },
      NSK_DISTRICTS: {
        1: 'Дзержинский район',
        2: 'Железнодорожный район',
        3: 'Заельцовский район',
        4: 'Калининский район',
        5: 'Кировский район',
        6: 'Ленинский район',
        7: 'Октябрьский район',
        8: 'Первомайский район',
        9: 'Советский район',
        10: 'Центральный район',
        11: 'г. Бердск',
        12: 'г. Пашино',
        13: 'г. Обь',
        14: 'Кольцово',
        15: 'Краснообск',
        16: 'Мочище',
        17: 'Посёлок Новый',
        18: 'Посёлок Садовый',
        19: 'Родники',
        20: 'Станция Мочище',
        21: 'Снегири'
      },
      RUS_REGIONS: {
        1: 'Республика Адыгея (Адыгея)',
        2: 'Республика Башкортостан',
        3: 'Республика Бурятия',
        4: 'Республика Алтай',
        5: 'Республика Дагестан',
        6: 'Республика Ингушетия',
        7: 'Кабардино-Балкарская Республика',
        8: 'Республика Калмыкия',
        9: 'Карачаево-Черкесская Республика',
        10: 'Республика Карелия',
        11: 'Республика Коми',
        12: 'Республика Марий Эл',
        13: 'Республика Мордовия',
        14: 'Республика Саха (Якутия)',
        15: 'Республика Северная Осетия - Алания',
        16: 'Республика Татарстан (Татарстан)',
        17: 'Республика Тыва',
        18: 'Удмуртская Республика',
        19: 'Республика Хакасия',
        20: 'Чеченская Республика',
        21: 'Чувашская Республика - Чувашия',
        22: 'Алтайский край',
        23: 'Краснодарский край',
        24: 'Красноярский край',
        25: 'Приморский край',
        26: 'Ставропольский край',
        27: 'Хабаровский край',
        28: 'Амурская область',
        29: 'Архангельская область',
        30: 'Астраханская область',
        31: 'Белгородская область',
        32: 'Брянская область',
        33: 'Владимирская область',
        34: 'Волгоградская область',
        35: 'Вологодская область',
        36: 'Воронежская область',
        37: 'Ивановская область',
        38: 'Иркутская область',
        39: 'Калининградская область',
        40: 'Калужская область',
        41: 'Камчатский край',
        42: 'Кемеровская область',
        43: 'Кировская область',
        44: 'Костромская область',
        45: 'Курганская область',
        46: 'Курская область',
        47: 'Ленинградская область',
        48: 'Липецкая область',
        49: 'Магаданская область',
        50: 'Московская область',
        51: 'Мурманская область',
        52: 'Нижегородская область',
        53: 'Новгородская область',
        54: 'Новосибирская область',
        55: 'Омская область',
        56: 'Оренбургская область',
        57: 'Орловская область',
        58: 'Пензенская область',
        59: 'Пермский край',
        60: 'Псковская область',
        61: 'Ростовская область',
        62: 'Рязанская область',
        63: 'Самарская область',
        64: 'Саратовская область',
        65: 'Сахалинская область',
        66: 'Свердловская область',
        67: 'Смоленская область',
        68: 'Тамбовская область',
        69: 'Тверская область',
        70: 'Томская область',
        71: 'Тульская область',
        72: 'Тюменская область',
        73: 'Ульяновская область',
        74: 'Челябинская область',
        75: 'Забайкальский край',
        76: 'Ярославская область',
        77: 'г. Москва',
        78: 'Санкт-Петербург',
        79: 'Еврейская автономная область',
        83: 'Ненецкий автономный округ',
        86: 'Ханты-Мансийский автономный округ - Югра',
        87: 'Чукотский автономный округ',
        89: 'Ямало-Ненецкий автономный округ',
        91: 'Республика Крым',
        92: 'Севастополь',
        99: 'Иные территории, включая город и космодром Байконур'
      }
    }
  }
}
