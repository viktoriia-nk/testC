const data = [
    {
      name: 'Общие уведомления',
      options: [
        {
          subName: '',
          subOptions: [
            {
              name: 'Приветственная серия',
              label: 'welcomeSeries',
              active: true,
              descr: '4 полезных и емких письма в течение месяца',
            },
          ],
        },
        {
          subName: '',
          subOptions: [
            {
              name: 'Образовательные вебинары',
              label: 'educationalWebinars',
              active: false,
              descr:
                'Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать 2 письма с напоминанием о предстоящем вебинаре',
            },
          ],
        },
        {
          subName: '',
          subOptions: [
            {
              name: 'Личные сообщения',
              label: 'privateMessages',
              active: true,
              period: ['Мгновенно', '1 раз в день', 'Отключить'],
              selectedPrivateMessagesPeriod: 'instantly',
            },
          ],
        },
      ],
    },
    {
      name: 'Уведомление по Сайтам',
      options: [
        {
          subName: '',
          subOptions: [
            {
              name: 'Новости',
              label: 'newsEmail',
              active: false,
            },
          ],
        },
        {
          subName: 'Поисковые агенты',
          subOptions: [
            {
              name: 'Бизнес',
              label: 'business',
              active: true,
              subcategories: ['Seo', 'Продвижение', 'Аналитика'],
              descr:
                'Поисковый агент присылает 1 письмо в неделю и только при условии, что найдены новые площадки',
            },
            {
              name: '123',
              label: 'oneTwoThree',
              active: false,
              subcategories: ['Seo', 'Продвижение'],
            },
            {
              name: 'SEO',
              label: 'seo',
              active: false,
              subcategories: ['Seo', 'Продвижение', 'Аналитика'],
            },
            {
              name: 'Бурж ссылки',
              label: 'bourgeLinks',
              active: true,
              subcategories: ['Биржи ссылок: Не обнаружен'],
            },
          ],
        },
        {
          subName: 'Рекламные  компании',
          subOptions: [
            {
              name: 'Строительство домов в Москве',
              label: 'buildHousesMoscow1',
              active: true,
              period: ['Мгновенно', '1 раз в день', 'Отключить'],
              selectedPrivateMessagesPeriod: 'instantly',
            },
            {
              name: 'Строительство домов в Москве',
              label: 'buildHousesMoscow2',
              active: false,
              period: ['Мгновенно', '1 раз в день', 'Отключить'],
              selectedPrivateMessagesPeriod: 'instantly',
            },
          ],
        },
      ],
    },
    {
      name: 'Уведомления по Телеграму',
      options: [
        {
          subName: '',
          subOptions: [
            {
              name: 'Новости',
              label: 'newsTelegram',
              active: false,
            },
          ],
        },
      ],
    },
  ];

  export default data