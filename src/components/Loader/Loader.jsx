import icons from 'images/icons.svg';
import s from './Loader.module.scss';

const Loader = ({ className = s.img }) => {
  return (
    <div className={s.container}>
      <svg className={className}>
        <use href={`${icons}#load`} />
      </svg>
    </div>
  );
};

export default Loader;
