import { Icon } from 'components';

const ContactView = ({ name, number, onEdit, onDelete }) => {
  return (
    <div className="d-flex w-100 px-2 py-3 shadow">
      <p className="col-4">{name}</p>
      <p className="col-4">{number}</p>
      <Icon cn="mx-3 pointer" icon="edit" w={20} onClick={onEdit} />
      <Icon cn="mx-2 pointer" icon="delete" w={20} onClick={onDelete} />
    </div>
  );
};

export default ContactView;
