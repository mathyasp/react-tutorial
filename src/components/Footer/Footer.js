import './Footer.css';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className='Footer'>
      <div>Mathyas Papp copyright {date}</div>
    </div>
  )
}

export default Footer;