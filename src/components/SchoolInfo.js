import { useEffect, useState } from "react";

// Component für Schulinformationen Informationen
function SchoolInfo({ setSchoolInfo }) {
  // useState für die Speicherung der Werte aus den Inputfeld
  const [schoolname, setSchoolName] = useState("");
  const [schooldegree, setSchoolDegree] = useState("");

  // useState für Accordion
  const [accordionOpen, setAccordionOpen] = useState(false);
  // Funktion zum Umschalten des Akkordeons
  function handleAccordionChange() {
    return setAccordionOpen(!accordionOpen);
  }

  // useEffect führt jedesmal die setGeneralInfo Funktion aus, wenn einer der Werte aus den dependency Array verändert wird
  useEffect(() => {
    setSchoolInfo({ schoolname, schooldegree });
  }, [schoolname, schooldegree, setSchoolInfo]);

  return (
    <>
      <h2>Bildungsabschluss</h2>
      <button
        type="button"
        className="accordion-button"
        onClick={handleAccordionChange}
      >
        Bildungsabschluss
      </button>
      {accordionOpen && (
        <div className="SchoolEd">
          <input
            placeholder="Name der Bildungsinstitution"
            name="schoolName"
            value={schoolname}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <div>
            <label htmlFor="degree">Abschluss:</label>
            <select
              id="degree"
              value={schooldegree}
              onChange={(e) => setSchoolDegree(e.target.value)}
            >
              <option value="">Bitte wählen...</option>
              <option value="Hauptschule">Hauptschule</option>
              <option value="Realschule">Realschule</option>
              <option value="Gymnasium">Gymnasium</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}

export default SchoolInfo;
