import React from "react";
import bookingImage from '../../../src/images/booking-img.jpg';

function Booking() {
  return (
    <section className="booking">
      <h1 className="booking__title">
        ОСТАВЬТЕ ЗАЯВКУ ПРЯМО СЕЙЧАС, И НАШИ ФЛОРИСТЫ ПОДБЕРУТ ДЛЯ ВАС <span className="booking__title_span">ИДЕАЛЬНЫЙ БУКЕТ!</span>
      </h1>
      <form className="booking__form">
        <img className="booking__image" src={bookingImage} alt="Девушки с букетами"></img>
        <fieldset className="booking__inputs-block">
          <label className="booking__label">
            <p className="booking__placeholder">Ваше имя</p>
            <input className="booking__input booking__input-name"
              type="text"
              placeholder="Елена"
              required
              minLength="2"
              maxLength="30"
            />
            <span className="booking__input-error"></span>
          </label>

          <label className="booking__label">
            <p className="booking__placeholder">Ваш E-mail</p>
            <input className="booking__input booking__input-email"
              type="email"
              placeholder="email@yandex.ru"
              required
              minLength="6"
            />
            <span className="booking__input-error"></span>
          </label>

          <label className="booking__label">
            <p className="booking__placeholder">Комментарий</p>
            <input className="booking__input booking__input-comment" type="text" placeholder="" />
          </label>
          <button className="booking__submit-button book" type="button" name="submit-button"><span>отправить</span></button>
        </fieldset>
      </form>
    </section>
  )
}

export default Booking;