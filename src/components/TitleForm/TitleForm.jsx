import s from './TitleForm.module.css';

const TitleForm = ()  => {
    return(
        <div className={s.thumb}>
        <h1  className={s.title}>Управление рассылками</h1>
        <p className={s.descr}>Здравствуйте, Андрей. Выберите, категории писем, от которых хотите отписаться. <br/> Но пожалуйста, исключите только те категории, которые действительно вас не интересуют. <br/> Мы обещаем слать только полезные письма  😊</p>
        </div>
    )
}

export default  TitleForm