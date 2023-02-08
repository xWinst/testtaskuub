import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MessageForm, Icon, Modal, MessageEditForm } from 'components';
import {
  addMessage,
  updateMessage,
  removeMessage,
  removeAllMessages,
} from 'redux/contactReducer';

const MessageList = () => {
  const messages = useSelector(state => state.messages);
  const [editIdx, setEditIdx] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const createMessage = message => {
    dispatch(addMessage(message));
    setIsModalOpen(false);
  };

  const editMessage = index => {
    return text => {
      dispatch(updateMessage({ index, text }));
      setEditIdx(null);
    };
  };

  const deleteMessage = index => {
    dispatch(removeMessage(index));
  };

  const deleteAll = () => {
    dispatch(removeAllMessages());
  };

  const cancel = () => {
    setEditIdx(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="d-flex">
        <button
          className="btn btn-success"
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Створити повідомлення
        </button>
        <button
          className="btn btn-primary ml-2"
          type="button"
          onClick={deleteAll}
        >
          Видалити всі повідомлення
        </button>
      </div>
      <ul className="h6 mt-2 px-4 py-3 bg-gradient rounded-lg shadow">
        {messages.map(({ number, text }, index) => (
          <li key={text + number} className="d-flex mt-2">
            <div className="d-flex align-items-center w-100 px-2 py-3 shadow ">
              <div className="col-10">
                <p className="h5 text-success">{number}</p>
                {editIdx === index ? (
                  <MessageEditForm
                    onSubmit={editMessage(index)}
                    cancel={cancel}
                    oldText={text}
                  />
                ) : (
                  <p className="ml-5 font-italic">{text}</p>
                )}
              </div>
              {editIdx !== index && (
                <>
                  <Icon
                    cn="mx-3 pointer"
                    icon="edit"
                    w={28}
                    onClick={() => setEditIdx(index)}
                  />
                  <Icon
                    cn="mx-3 pointer"
                    icon="delete"
                    w={28}
                    onClick={() => deleteMessage(index)}
                  />
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MessageForm onSubmit={createMessage} />
        </Modal>
      )}
    </>
  );
};

export default MessageList;
