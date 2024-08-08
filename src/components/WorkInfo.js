import { useEffect, useState } from "react";
import { jobList } from "../utils/jobsListe";

function WorkInfo({ setJobInfo }) {
  // useStates für die Speicherung der Werte aus den Inputfeldern
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitles] = useState("");
  const [workDateFrom, setWorkDateFrom] = useState("");
  const [workDateTo, setWorkDateTo] = useState("");
  const [jobTitleList, setJobTitlesList] = useState([...jobList]);
  const [newJobCategory, setNewJobCategory] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  // useState für Accordion
  const [accordionOpen, setAccordionOpen] = useState(false);

  // Toggle für das InputFeld bei neuer Kategorie
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  // Funktion zum Umschalten des Akkordeons
  function handleAccordionChange() {
    return setAccordionOpen(!accordionOpen);
  }

  // Funktion zum Hinzufügen einer neuen Kategorie
  function handleNewCategory(e) {
    e.preventDefault();
    // Wenn eine eine Eingabe gemacht wurde && diese neue Kategorie noch nicht vorhanden ist
    if (newJobCategory && !jobTitleList.includes(newJobCategory)) {
      setJobTitlesList([...jobTitleList, newJobCategory]); // Die alten Kategorien + die Neue
      setJobTitles(newJobCategory); // der JobTitle wird mit der neuen Kategorie aktualisiert
      setNewJobCategory(""); // InputFeld wird zurückgesetzt
      setShowNewCategoryInput(false); // Versteckt das InputFeld
    }
  }

  // Funktion um den neue Kategorie auszuwählen
  function handleJobChange(e) {
    const selectedValue = e.target.value; // speichert den Input Value in die Variable: selectedValue
    // Wenn der value === addNew
    if (selectedValue === "addNew") {
      // das InputFeld für die neue Kategorie wird angezeigt
      setShowNewCategoryInput(!showNewCategoryInput);
    } else {
      setJobTitles(selectedValue); // Ansonsten selectedValue wird an den useState jobTitles weiter gegeben
      setShowNewCategoryInput(false); // InputFeld wird wieder versteckt
    }
  }

  // useEffect führt jedesmal die setGeneralInfo Funktion aus, wenn einer der Werte aus den dependency Array verändert wird
  useEffect(() => {
    // Als Properties werden die Variablen aus den States übergeben
    setJobInfo({
      companyName,
      jobTitle,
      workDateFrom,
      workDateTo,
      jobDesc,
    }); // Wenn einer dieser Variablen verändert wird, wird die Funktion setJobInfo aus App.js aufgerufen
  }, [companyName, jobTitle, workDateFrom, workDateTo, jobDesc, setJobInfo]);

  return (
    <>
      <button
        type="button"
        className="accordion-button"
        onClick={handleAccordionChange}
      >
        Berufserfahrung
      </button>
      {/*Accordion wenn der true ist, dann zeigt er den Inhalt an*/}
      {accordionOpen && (
        <div className="WorkEx">
          <label htmlFor="job">Beruf: </label>
          <select id="job" value={jobTitle} onChange={handleJobChange}>
            <option value="">Bitte wählen...</option>
            {/*durch die categories Liste iterrieren und sie dann darstellen */}
            {jobTitleList.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option value="addNew">Mehr hinzufügen...</option>
          </select>
          {showNewCategoryInput && (
            <div>
              <input
                type="text"
                placeholder="Neue Job Kategorie eingeben"
                value={newJobCategory}
                onChange={(e) => setNewJobCategory(e.target.value)}
              />
              <button type="button" onClick={handleNewCategory}>
                Bestätigen
              </button>
            </div>
          )}
          <input
            placeholder="Unternehmen"
            name="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <label htmlFor="workDateFrom">von:</label>
          <input
            type="date"
            id="workDateFrom"
            name="workDateFrom"
            value={workDateFrom}
            onChange={(e) => setWorkDateFrom(e.target.value)}
          />
          <label htmlFor="workDateTo">bis:</label>
          <input
            type="date"
            id="workDateTo"
            name="workDateTo"
            value={workDateTo}
            onChange={(e) => setWorkDateTo(e.target.value)}
          />
          <input
            type="text"
            value={jobDesc}
            placeholder="Beschreibung"
            onChange={(e) => setJobDesc(e.target.value)}
          ></input>
        </div>
      )}
    </>
  );
}

export default WorkInfo;
