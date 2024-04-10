import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import data from '../../sfpopos-data.js';
import POPOSSpace from '../POPOSSpace';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const queryFromParams = searchParams.get('query');
  const [query] = useState(queryFromParams || ''); 
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const filteredSpaces = data.filter(({ title, address }) => {
      const inTitle = title.toLowerCase().includes(query.toLowerCase())
      const inAddress = address.toLowerCase().includes(query.toLowerCase())
      return inTitle || inAddress
    }).map((obj) => {
        const { id, title, address, images, hours } = obj
        return (
          <POPOSSpace
            id={id}
            key={`${title}-${id}`}
            image={images[0]}
            name={title}
            address={address}
            hours={hours}
          />
        )
      });

    setSpaces(filteredSpaces);
  }, [query]);

  return (
    <div className='POPOSList'>
      { spaces }
    </div>
  );
}

export default SearchResults;