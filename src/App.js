import "./App.css";
import GeneralInfo from "./components/GeneralInfo";

function App() {
  return (
    <div className="App">
      <h1>CV Application</h1>
      <form>
        <section>
          <GeneralInfo />
        </section>
        <section>
          <h2>Schulischer Abschluss</h2>
          <button type="button" className="accordion-button">
            Schulischer Abschluss
          </button>
          <div className="SchoolEd">
            <button type="button">Schulischer Abschluss</button>
            <input placeholder="Name der Schule" name="schoolName" />
          </div>
        </section>
        <section>
          <h2>Berufliche Erfahrung</h2>
          <button type="button" className="accordion-button">
            Berufliche Erfahrung
          </button>
          <div className="WorkEx">
            <button type="button">Beruf</button>
            <input placeholder="Unternehmen" name="companyName" />
            <input placeholder="Position/Aufgabenbereich" name="jobTitle" />
            <label htmlFor="workDateFrom">von:</label>
            <input type="date" id="workDateFrom" name="workDateFrom" />
            <label htmlFor="workDateTo">bis:</label>
            <input type="date" id="workDateTo" name="workDateTo" />
          </div>
        </section>
        <button type="submit">Absenden</button>
      </form>
    </div>
  );
}

export default App;
