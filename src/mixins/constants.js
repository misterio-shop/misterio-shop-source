export const appConstants = {
  data: function () {
    return {
      PRODUCT_CLASSIFICATION: [{
        value: 'sexToy',
        label: 'Секс-игрушки',
        icon: '/static/icon/shop/big/penis.svg',
        children: [
          {value: 'vibrator', label: 'вибраторы'},
          {value: 'pulsator', label: 'пульсаторы'},
          {value: 'dildo', label: 'фаллоимитаторы'},
          {value: 'clitorisStimulator', label: 'стимуляторы клитора'},
          {value: 'vaginalBall', label: 'вагинальные шарики'},
          {value: 'analToy', label: 'анальные игрушки'},
          {value: 'strap', label: 'страпоны'},
          {value: 'ring', label: 'кольца и насадки'},
          {value: 'masturbator', label: 'мастурбаторы'},
          {value: 'pump', label: 'помпы'},
          {value: 'prostate', label: 'массажеры простаты'}
        ]
      }, {
        value: 'bdsm',
        label: 'BDSM, фетиш',
        icon: '/static/icon/shop/big/cuffs.svg',
        children: [
          {value: 'fixation', label: 'фиксация и бондаж'},
          {value: 'mask', label: 'маски'},
          {value: 'collar', label: 'ошейники'},
          {value: 'gag', label: 'кляпы'},
          {value: 'sets', label: 'наборы'},
          {value: 'bdsmClothes', label: 'BDSM-одежда'},
          {value: 'nipple', label: 'зажимы для сосков'},
          {value: 'medical', label: 'медицинский фетиш'},
          {value: 'percussion', label: 'ударные девайсы'}
        ]
      }, {
        value: 'cosmetic',
        label: 'Интим-косметика',
        icon: '/static/icon/shop/big/cream.svg',
        children: [
          {value: 'lubricant', label: 'спреи, крема, лубриканты'},
          {value: 'oil', label: 'массажные масла'},
          {value: 'perfume', label: 'духи с феромонами'}
        ]
      }, {
        value: 'eroticLingerie',
        label: 'Эротическое белье',
        icon: '/static/icon/shop/big/underwear.svg',
        children: [
          {value: 'womenEroticLingerie', label: 'женское'},
          {value: 'menEroticLingerie', label: 'мужское'}
        ]
      }, {
        value: 'condom',
        label: 'Презервативы',
        icon: '/static/icon/shop/big/condom.svg'
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
      DELIVERY_METHODS: {
        cdek: {
          value: 'cdek',
          label: 'СДЭК'
        },
        courier: {
          value: 'courier',
          label: 'Курьер'
        },
        pickpoint: {
          value: 'pickpoint',
          label: 'PickPoint'
        },
        postrf: {
          value: 'postrf',
          label: 'Почта России'
        }
      },
      PAYMENT_METHODS: {
        cash: {
          val: 'cash',
          label: 'Наличные'
        },
        bank_card: {
          val: 'bank_card',
          label: 'Банковская карта'
        }
      }
    }
  }
}
