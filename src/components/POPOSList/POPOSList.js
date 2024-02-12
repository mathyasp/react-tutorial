import './POPOSList.css';
import POPOSSpace from '../POPOSSpace';
import data from '../../sfpopos-data.js';
import { useState } from 'react';

function POPOSList() {
  const [ query, setQuery ] = useState('');
  const spaces = data.filter(({ features, title, address }) => {
	// true if query is in title
	const inTitle = title.toLowerCase().includes(query.toLowerCase())
	// true if query is in address
	const inAddress = address.toLowerCase().includes(query.toLowerCase())
	// return true if either is true
	return inTitle || inAddress
}).map((obj) => {
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
    <div className="POPOSList">
      <form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
      { spaces }
    </div>
  )
}

export default POPOSList;