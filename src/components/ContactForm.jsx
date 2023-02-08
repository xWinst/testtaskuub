import { useState } from 'react';
import { Icon } from 'components';

const ContactForm = ({
  onSubmit,
  submitButton,
  initialState = { name: '', number: '' },
}) => {
  const [contact, setContact] = useState(initialState);

  const submitData = event => {
    event.preventDefault();
    onSubmit(contact);
    setContact(initialState);
  };

  const saveData = event => {
    const { name, value } = event.target;
    setContact(state => ({ ...state, [name]: value }));
  };

  return (
    <form
      className="w-100 h6 pt-4 px-2 pb-2 bg-gradient2 rounded-lg shadow "
      onSubmit={submitData}
    >
      <label className="col-4 ">
        <span
          className="position-absolute"
          style={{ transform: 'translateY(-120%)' }}
        >
          Ім'я
        </span>
        <Icon icon="user" w={15} cn="icon" />
        <input
          className="pl-4"
          type="text"
          value={contact.name}
          onChange={saveData}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Якоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
          required
        />
      </label>
      <label className="col-4 ">
        <span
          className="position-absolute"
          style={{ transform: 'translateY(-120%)' }}
        >
          Телефон
        </span>
        <Icon icon="phone" w={15} cn="icon" />
        <input
          className="pl-4"
          type="tel"
          value={contact.number}
          onChange={saveData}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
          required
        />
      </label>
      {submitButton}
    </form>
  );
};

export default ContactForm;
