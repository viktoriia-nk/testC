import Select from 'react-select'
import s from './Form.module.css';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import sprite from '../../assets/icons/sprite.svg';

const Form = ({data}) => {

    const options = [
        { value: 'instantly', label: 'Мгновенно' },
        { value: 'day', label: '1 раз в день' },
        { value: 'off', label: 'Отключить' }
      ]

      const [isModalOpen, setIsModalOpen] = useState(false);

      const handleOpenModal = (e) =>{
        e.preventDefault();
        setIsModalOpen(true)
      } 

      const handleResolveModalClick = () => {
        setIsModalOpen(false);
      };

      const closeModal = () => setIsModalOpen(false);

      const deleteTopic = (e) => {
        console.log(e.target.parentNode.innerText);
        console.log(data);
    }

    // const handleChange = () => {

    // }

    const handleReset = () => {
        setIsModalOpen(true)
    }

return(
     <form className={s.form}>
        {data.map((el,idx)=>(
            <div className={s.thumb} key={idx}>
                <h2 className={s.title}>{el.name}</h2>
                {el.options.map((sub, i)=>(
                    <div className={s.sub} key={i}>
                        {sub.subName !== '' && <h3 className={s.subName}>{sub.subName}</h3>}
                        {sub.subOptions.map((subOpt, ind)=>(
                            <div className={s.box} key={ind}>
                              <div  className={s.topicBox}>
                                   <h4 className={s.name}>{subOpt.name}</h4>
                                
                                   <div className={s.wrapper}>
                                        <div className={s.topics}>
                                            {subOpt.subcategories && subOpt.subcategories.map((topic)=>(
                                                <div className={s.topicThumb} key={topic}>
                                                    <p className={s.topicName}>{topic}
                                                    <button type="button" onClick={deleteTopic} className={s.xBtn}>
                                                        <svg className={s.closeSvg}>
                                                            <use width='15' height='15' href={sprite + '#icon-cross'}></use>
                                                        </svg>
                                                    </button>
                                                    </p>
                                                    
                                                </div>
                                            ))}
                                        </div>
                                        {subOpt.subcategories && <button type="button" onClick={handleOpenModal} className={s.moreBtn}>Детали</button>}
                                        {isModalOpen &&  
                                            <Modal 
                                                title={'Lorem ipsum dolor, sit amet consectetur adipisicing elit!'}
                                                closeModal={closeModal}
                                                handleResolveModalClick={handleResolveModalClick}>
                                            </Modal>}
                                   </div>
                              </div>
                               {subOpt.active === true && <input className={s.switch} type="checkbox" defaultChecked />}
                               {subOpt.active !== true && <input className={s.switch} type="checkbox" />}
                               { subOpt.selectedPrivateMessagesPeriod && 
                                <div className={s.select}>
                                    <Select options={options} className={s.selectPeriod} name="period" id="period" defaultValue={{ label: 'Мгновенно', value: 'instantly' }}>
                                    </Select>
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
            {isModalOpen &&  
                <Modal 
                    title={'Вы уверены?'}
                    closeModal={closeModal}
                    handleResolveModalClick={handleResolveModalClick}>
                </Modal>}
            <button className={s.btnSave}  type="submit">Сохранить изменения</button>
        </div>
    </form>
)
}

export default Form