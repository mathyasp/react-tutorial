import './Newsletter.css';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="Newsletter">
      <h1>Sign Up for Our Newsletter</h1>
      <p className="light">Fill out your information below to <br />be signed up for our newsletter</p>
      
      <div className="input-group">
        <label for="input-username">Username</label>
        <input id="input-username" type="text" placeholder="Username" className="wide-input" />

        <label for="input-email">Email</label>
        <input id="input-email" type="text" placeholder="Email" className="wide-input" />

        <fieldset >
          <legend>Add me to your mailing list</legend>
          <label className="light">
            <input id="input-checkbox" type="checkbox"/>
            I agree to receive e-mails from SFPOPOS.
          </label>
        </fieldset>
        
        <button className="wide-input">Sign Me Up</button>
      </div>
    </div>
  );
}


export default Newsletter;