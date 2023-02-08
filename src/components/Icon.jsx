import icons from 'images/icons.svg';

const Icon = ({ icon, cn, onClick, w, h = w }) => {
  return (
    <svg className={cn} onClick={onClick} width={w} height={h}>
      <use href={`${icons}#${icon}`} />
    </svg>
  );
};

export default Icon;
