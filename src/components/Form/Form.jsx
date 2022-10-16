import s from './Form.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import MediaQuery from 'react-responsive';
import Notiflix from 'notiflix';

const initState = {
    welcomeSeries: true,
    educationalWebinars: false,
    privateMessages: true,
    privateMessagesPeriod: 'instantly',
    newsEmail: false,
    business: true,
    oneTwoThree: false,
    seo: false,
    bourgeLinks: true,
    buildHousesMoscow1: true,
    buildHousesMoscow2: false,
    newsTelegram: false,
    buildHousesMoscow1Period: 'instantly',
    buildHousesMoscow2Period: 'instantly',
  };

const Form = ({data}) => {

      const [isModalOpen, setIsModalOpen] = useState(false);
      const [isModalReset, setIsModalReset] = useState(false);
      const [state, setState] = useState(initState);

      const updateStatus = label => {
        setState(prev => ({ ...prev, [label]: !prev[label] }));
      };

      const onChangePeriod = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
      };

      const onSubmitForm = e => {
        e.preventDefault();
        console.log(state);
        window.scrollTo(0, 0)
        Notiflix.Report.success('🥳', 'Данные сохранены! Рассылки будут приходить так, как вам удобно :)', 'Ок');
      };

      const handleOpenModal = (e) =>{
        e.preventDefault();
        setIsModalOpen(true)
      } 

      const handleResolveModalClick = () => {
        setIsModalOpen(false);
      };

      const closeModal = () => {
        setIsModalOpen(false)
        setIsModalReset(false)
      };

      const deleteTopic = (e) => {
        console.log(e.target.parentNode.innerText);
        console.log(data);
    }

    const handleReset = () => {
        setIsModalReset(true)
    }

    const resolveModalReset = () => {
        setState(initState);
        closeModal();
        window.scrollTo(0, 0);
        Notiflix.Report.info('😎', 'Данные сброшены. Можете попробовать еще раз :)', 'Ок');
      };

return(
     <form className={s.form} onSubmit={onSubmitForm}>
        <div className={s.thumbF}>
        <h1  className={s.titleF}>Управление рассылками</h1>
        <p className={s.descrF}>Здравствуйте, Андрей. Выберите, категории писем, от которых хотите отписаться. <br/> Но пожалуйста, исключите только те категории, которые действительно вас не интересуют. <br/> Мы обещаем слать только полезные письма  😊</p>
        </div>
        {data.map((el,idx)=>(
            <div className={s.thumb} key={idx}>
                <h2 className={s.title}>{el.name}</h2>
                {el.options.map((sub, i)=>(
                    <div className={s.sub} key={i}>
                        {sub.subName !== '' && <h3 className={s.subName}>{sub.subName}</h3>}
                        {sub.subOptions.map((subOpt, ind)=>(
                            <div className={s.box} key={ind}>
                              <div  className={s.topicBox}>
                                <span className={s.spanInfo}>
                                   <h4 className={s.name}>{subOpt.name}</h4>
                                   {subOpt.name === 'Личные сообщения' && 
                                   <svg className={s.infoSvg}>
                                        <use href={sprite + '#icon-info' }/>
                                    </svg>}
                                    {subOpt.name === 'Личные сообщения' && 
                                    <div className={s.infoModal}>
                                        <p className={s.infoText}>
                                            Письма об обновлениях и улучшениях платформы
                                        </p>
                                    </div>}
                                    </span>
                                   <div className={s.wrapper}>
                                        <div className={s.topics}>
                                            {subOpt.subcategories && subOpt.subcategories.map((topic)=>(
                                                <div className={s.topicThumb} key={topic}>
                                                    <p className={s.topicName}>{topic} </p>
                                                        <button type="button" onClick={deleteTopic} className={s.xBtn}>
                                                            <svg className={s.closeSvg}>
                                                                <use href={sprite + '#icon-cross'}/>
                                                            </svg>
                                                        </button>
                                                </div>
                                            ))}
                                        </div>
                                        <MediaQuery maxWidth={768}>
                                        {subOpt.subcategories && <button type="button" onClick={handleOpenModal} className={s.moreBtn}>?</button>} 
                                        </MediaQuery>
                                        <MediaQuery minWidth={769}>
                                        {subOpt.subcategories && <button type="button" onClick={handleOpenModal} className={s.moreBtn}>Детали</button>} 
                                        </MediaQuery>
                                            
                                            {isModalOpen &&  
                                                <Modal 
                                                    title={'Lorem ipsum dolor, sit amet consectetur adipisicing elit!'}
                                                    closeModal={closeModal}
                                                    handleResolveModalClick={handleResolveModalClick}>
                                                </Modal>}
                                   </div>
                              </div>
                              <input
                                    className={s.switch}
                                    type="checkbox"
                                    name={subOpt.label}
                                    checked={state[subOpt.label]}
                                    onChange={() => updateStatus(subOpt.label)}
                                />
                               { subOpt.selectedPrivateMessagesPeriod && 
                                <div className={s.select}>
                                    <select
                                        className={s.selectPeriod}
                                        name={subOpt.label + 'Period'}
                                        value={state[subOpt.label + 'Period']}
                                        onChange={onChangePeriod}
                                    >
                                        <option value="instantly">Мгновенно</option>
                                        <option value="day">1 раз в день</option>
                                        <option value="disable">Отключить</option>
                                    </select>
                                </div>}
                                {subOpt.descr && <p className={s.descr}>{subOpt.descr}</p>}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        ))}
        <div className={s.btnWrap}>
            <button className={s.btnReset} onClick={handleReset} type="button">По умолчанию</button>
            {isModalReset &&  
                <Modal 
                    title={'Вы уверены?'}
                    closeModal={closeModal}
                    handleResolveModalClick={resolveModalReset}>
                </Modal>}
            <button className={s.btnSave}  type="submit">Сохранить изменения</button>
        </div>
    </form>
)
}

export default Form