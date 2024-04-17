import './POPOSList.css';
import POPOSSpace from '../POPOSSpace';
import data from '../../sfpopos-data.js';


function POPOSList() {
  const spaces = data.map((obj) => {
    const { id, title, address, images, hours, features } = obj
		return (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        image={images[0]}
        name={title}
        address={address}
        hours={hours}
        features={features}
      />
    )
  });

  return (
    <div className='POPOSList'>
      { spaces }
    </div>
  )
}

export default POPOSList;