import { useEffect, useState } from "react";

// Component für Schulinformationen Informationen
function SchoolInfo({ setSchoolInfo }) {
  // useState für die Speicherung der Werte aus den Inputfeld
  const [schoolname, setSchoolName] = useState("");
  const [schooldegree, setSchoolDegree] = useState("");
  const [newCategory, setNewCategory] = useState("");

  // Kategorie Liste
  const [categories, setCategories] = useState([
    "Hauptschule",
    "Realschule",
    "Gymnasium",
  ]);

  // Toggle für das InputFeld bei neuer Kategorie
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  // useState für Accordion
  const [accordionOpen, setAccordionOpen] = useState(false);
  // Funktion zum Umschalten des Akkordeons
  function handleAccordionChange() {
    return setAccordionOpen(!accordionOpen);
  }

  // Funktion zum Hinzufügen einer neuen Kategorie
  function handleNewCategory(e) {
    e.preventDefault();
    // Wenn eine eine Eingabe gemacht wurde && diese neue Kategorie noch nicht vorhanden ist
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]); // Die alten Kategorien + die Neue
      setSchoolDegree(newCategory); // das Schooldegree wird mit der neuen Kategorie aktualisiert
      setNewCategory(""); // InputFeld wird zurückgesetzt
      setShowNewCategoryInput(false); // Versteckt as InputFeld
    }
  }

  // Funktion um den neue Kategorie auszuwählen
  function handleDegreeChange(e) {
    const selectedValue = e.target.value; // speichert den Input Value in die Variable: selectedValue
    // Wenn der value === addNew
    if (selectedValue === "addNew") {
      // das InputFeld für die neue Kategorie wird angezeigt
      setShowNewCategoryInput(!showNewCategoryInput);
    } else {
      setSchoolDegree(selectedValue); // Ansonsten selectedValue wird an den useState schooldegree weiter gegeben
      setShowNewCategoryInput(false); // InputFeld wird wieder versteckt
    }
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
              onChange={handleDegreeChange}
            >
              <option value="">Bitte wählen...</option>
              {/*durch die categories Liste iterrieren und sie dann darstellen */}
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
              <option value="addNew">Mehr hinzufügen...</option>
            </select>
          </div>
          {/*InputFeld zum Hinzufügen der neuen Kategorie*/}
          {showNewCategoryInput && (
            <form onSubmit={handleNewCategory} style={{ marginTop: "10px" }}>
              <input
                type="text"
                placeholder="Neuen Abschluss eingeben"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button type="submit">Bestätigen</button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

export default SchoolInfo;
