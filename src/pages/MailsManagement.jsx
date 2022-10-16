import Form from '../components/Form/Form';
import TitleForm from '../components/TitleForm/TitleForm';

const initState = [
    {name: 'Общие уведомления',
    options: [
        {subName: '', 
        subOptions: [
            {
                name: 'Приветственная серия',
                active: true, 
                descr: '4 полезных и емких письма в течение месяца'
            }
        ],
        },

        {subName: '', 
        subOptions: [
            {
                name: 'Образовательные вебинары',
                active: false, 
                descr: 'Бесплатные вебинары проходят 1 раз в 2 недели. Вы будете получать 2 письма с напоминанием о предстоящем вебинаре'
            }
        ]
        },

        {subName: '', 
        subOptions: [
            {
                name: 'Личные сообщения',
                active: true,
                // privateMessagesPeriod: ['Мгновенно', '1 раз в день', 'Отключить'],
                selectedPrivateMessagesPeriod: 'instantly'

            }
        ],
        },
    ]},

    {name: 'Уведомление по Сайтам',
    options: [
        {subName:  '',
        subOptions: [
            {
            name: 'Новости',
            active: false}
        ],
        },

        {subName: 'Поисковые агенты',
        subOptions: [
        {name: 'Бизнес',  
        active: true,
        subcategories: ['Seo', 'Продвижение', 'Аналитика'],
        descr: 'Поисковый агент присылает 1 письмо в неделю и только при условии, что найдены новые площадки'
        },

        {name: '123', 
        active: false,
        subcategories: ['Seo', 'Продвижение']
        },

        {name: 'SEO',
        active: false,
        subcategories: ['Seo', 'Продвижение', 'Аналитика']
        },

        {name: 'Бурж ссылки',
        active: true,
        subcategories: ['Биржи ссылок: Не обнаружен']
        },

    ]},

    {subName: 'Рекламные  компании',
        subOptions: [
            {name: 'Строительство домов в Москве', 
            active: true,
            // privateMessagesPeriod: ['Мгновенно', '1 раз в день', 'Отключить'],
            selectedPrivateMessagesPeriod: 'instantly'},
    
            {name: 'Строительство домов в Москве', 
            active: false,
            // privateMessagesPeriod: ['Мгновенно', '1 раз в день', 'Отключить'],
            selectedPrivateMessagesPeriod: 'instantly'}
        ]}
    ]},

    

    {name: 'Уведомления по Телеграму',
    options: [
        {subName: '', 
        subOptions: [
            {
                name: 'Новости',
                active: false, 
            }
        ]
        },
    ]}
]

const MailsManagement =  () => {

    return (
        <>
        <TitleForm/>
        <Form data={initState}/>
        </>
    )
}

export default MailsManagement