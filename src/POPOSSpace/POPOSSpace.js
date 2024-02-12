import './POPOSSpace.css';

function POPOSSpace(props) {
  const { image, name, address, hours } = props
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
      <h1>{name}</h1>
      <div>
        <p>{address}</p>
        <p>{hours}</p>  
      </div>

    </div>
  )
}

export default POPOSSpace;