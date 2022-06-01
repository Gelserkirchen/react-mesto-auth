import React from 'react'
import errorPic from '../images/__error.svg';
import successPic from '../images/__ok.svg';

function InfoTooltip({ tooltipData, onClose }) {
    const title = tooltipData.isError ? 'Что то пошло не так, попробуйте еще раз' : 'Вы успешно зарегистрированы';
    return (
        <section className={`popup popup_type_register ${tooltipData.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container ">
                <button className="popup__close-button" type="button" onClick={onClose}></button>
                <img src={tooltipData.isError ? errorPic : successPic} alt="картинка-статус регистрации"></img>
                <h3 className="popup__title">{title}</h3>
            </div>
        </section>
    );
}

export default InfoTooltip;


