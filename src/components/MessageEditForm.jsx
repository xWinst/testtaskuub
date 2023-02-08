import { useState } from 'react';
import { Icon } from 'components';

const MessageEditForm = ({ onSubmit, cancel, oldText }) => {
  const [text, setText] = useState(oldText);

  const submitData = event => {
    event.preventDefault();
    onSubmit(text);
    setText(oldText);
  };

  const saveData = event => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={submitData} className="d-flex align-items-center">
      <textarea
        className="p-3 w-75 h-90"
        value={text}
        onChange={saveData}
        required
      />
      <button className="btn-icon ml-5" type="submit">
        <Icon icon="ok" w={36} />
      </button>
      <Icon cn="ml-4 pointer" icon="cancel" w={36} onClick={cancel} />
    </form>
  );
};

export default MessageEditForm;
