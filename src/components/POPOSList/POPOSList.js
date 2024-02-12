import './POPOSList.css';
import POPOSSpace from '../POPOSSpace';
import data from '../../sfpopos-data.json';

function POPOSList() {
  const spaces = data.map(( { title, address, images, hours }, i) => {
    return (
      <POPOSSpace
        id={i}
        key={title}
        image={images[0]}
        name={title}
        address={address}
        hours={hours}
      />
    )
  });

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}

export default POPOSList;