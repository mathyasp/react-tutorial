import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace( { image, name, address, hours, id } ) {
  return (
    <div>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width="300"
          height="300"
          alt="Hello"
        />
      </Link>
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div>
        <p>{address}</p>
        <p>{hours}</p>  
      </div>

    </div>
  )
}

export default POPOSSpace;