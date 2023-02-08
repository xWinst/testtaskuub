import { useEffect } from 'react';

const Select = ({ list, select, close }) => {
  useEffect(() => {
    const onClick = event => {
      if (event.target.name !== 'list') close();
    };

    const onKeyDown = event => {
      if (event.code === 'Tab' || event.code === 'Escape') close();
    };

    window.addEventListener('click', onClick);
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('click', onClick);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [close]);

  return (
    <ul name="list" className="w-50 select">
      {list.map(({ name, number }) => (
        <li key={name} className="d-flex" onClick={() => select(number)}>
          <p className="col-6">{number}</p>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Select;
