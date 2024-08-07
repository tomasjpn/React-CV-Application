import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <form>
        <section>
          <h2>Allgemeine Informationen</h2>
          <button type='button' className='accordion-button'>
            Allgemeine Informationen
          </button>
          <div className='Name'>
            <img 
              src='https://st2.depositphotos.com/2101611/8308/v/950/depositphotos_83084390-stock-illustration-businessman-icon-can-be-used.jpg' 
              style={{ 
                maxWidth: '100px',
                display: 'block',
                margin: '0 auto',
               }} 
              alt="ProfilBild"
              />
            <input placeholder='Vorname' name='firstName' />
            <input placeholder='Nachname' name='lastName' />
          </div>
          <div className='Kontakt'>
            <input placeholder='Telefon' name='phone' />
            <input placeholder='E-Mail' name='email' />
            <label htmlFor="address">Adresse:</label>
            <input placeholder='Straße, Hausnr.' id="address" name='streetAddress' />
            <input placeholder='Postleitzahl' name='postalCode' />
            <input placeholder='Ort' name='city' />
          </div>
        </section>
        <section>
          <h2>Schulischer Abschluss</h2>
          <button type='button' className='accordion-button'>
            Schulischer Abschluss
          </button>
          <div className='SchoolEd'>
            <button type='button'>Schulischer Abschluss</button>
            <input placeholder='Name der Schule' name='schoolName' />
          </div>
        </section>
        <section>
          <h2>Berufliche Erfahrung</h2>
          <button type='button' className='accordion-button'>
            Berufliche Erfahrung
          </button>
          <div className='WorkEx'>
            <button type='button'>Beruf</button>
            <input placeholder='Unternehmen' name='companyName' />
            <input placeholder='Position/Aufgabenbereich' name='jobTitle' />
            <label htmlFor="workDateFrom">von:</label>
            <input type='date' id="workDateFrom" name='workDateFrom' />
            <label htmlFor="workDateTo">bis:</label>
            <input type='date' id="workDateTo" name='workDateTo' />
          </div>
        </section>
        <button type='submit'>Absenden</button>
      </form>
    </div>
  );
}

export default App;
