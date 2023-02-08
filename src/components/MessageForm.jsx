import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Icon, Select } from 'components';

const MessageForm = ({ onSubmit }) => {
  const contacts = useSelector(state => state.contacts);
  const [message, setMessage] = useState({ number: '', text: '' });
  const [filteredList, setFilteredList] = useState([]);

  const submitData = event => {
    event.preventDefault();
    onSubmit(message);
    setMessage({ number: '', text: '' });
  };

  const saveData = event => {
    const { name, value } = event.target;
    setMessage(state => ({ ...state, [name]: value }));
    if (name === 'number') {
      if (value) {
        setFilteredList(
          contacts.filter(({ number }) => number.toString().includes(value))
        );
      } else setFilteredList([]);
    }
  };

  const selectNumber = number => {
    setMessage(state => ({ ...state, number }));
    setFilteredList([]);
  };

  const clearList = () => {
    setFilteredList([]);
  };

  return (
    <form
      className=" h6 p-4 pt-5 bg-info rounded-lg shadow "
      onSubmit={submitData}
    >
      <label className="col-12">
        <span
          className="position-absolute"
          style={{ transform: 'translateY(-120%)' }}
        >
          Номер телефону
        </span>
        <Icon icon="phone" w={15} cn="icon" />
        <input
          className="pl-4"
          type="tel"
          value={message.number}
          onChange={saveData}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
          autoComplete="off"
          required
        />
        {filteredList.length > 0 && (
          <Select list={filteredList} select={selectNumber} close={clearList} />
        )}
      </label>
      <label className="col-12 mt-5">
        <span
          className="position-absolute"
          style={{ transform: 'translateY(-120%)' }}
        >
          Тескт повідомлення
        </span>
        <textarea
          className="p-3 w-100  h-90"
          value={message.text}
          onChange={saveData}
          name="text"
          required
        />
      </label>
      <button className="btn btn-primary" type="submit">
        Відправити повідомлення
      </button>
    </form>
  );
};

export default MessageForm;
