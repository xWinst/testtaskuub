import { useNavigate } from 'react-router-dom';
import image from 'images/404PageNotFound.svg';

const PageNotFound = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mt-2">404 Page Not Found</h2>
      <img src={image} alt="Page Not Found" style={{ maxWidth: 800 }} />
      <p className="h3">Упс! Сторінка, яку ви шукаєте, не існує :(</p>
      <button className="btn btn-primary mt-4" type="button" onClick={onClick}>
        На головну
      </button>
    </div>
  );
};

export default PageNotFound;
