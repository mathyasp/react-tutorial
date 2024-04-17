import { Link } from 'react-router-dom';
import './POPOSSpace.css';

function POPOSSpace( { image, name, address, hours, id, alt } ) {
  return (
    <div className='POPOSSpace'>
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          width='300'
          height='300'
          alt={alt}
        />
      </Link>
      <h1>
        <Link className='POPOSSpace-title' to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <div className='POPOSSpace-info'>
        <div>{address}</div>
        <div>{hours}</div>  
      </div>

    </div>
  )
}

export default POPOSSpace;