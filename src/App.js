import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Preview from "./components/Preview";
import SchoolInfo from "./components/SchoolInfo";
import WorkInfo from "./components/WorkInfo";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

function App() {
  // useState für GeneralInfo
  const [generalInfo, setGeneralInfo] = useState({
    image: "",
    vorname: "",
    nachname: "",
    telefon: "",
    email: "",
    street: "",
    postal: "",
    city: "",
  });

  const [schoolInfo, setSchoolInfo] = useState({
    schoolname: "",
    schooldegree: "",
  });

  // State für JobInfos -> Initialisiert als leeres entries: Array
  const [jobInfo, setJobInfo] = useState({
    entries: [],
  });

  function addJobEntry(newJob) {
    setJobInfo((prev) => ({
      entries: [...prev.entries, newJob],
    }));
  }

  //Funktion um das CV als PDF herunterzuladen zu können
  function handleDownload() {
    const previewElement = document.querySelector(".CVPreview"); // Speichert das HTML Element mit der Klasse CVPreview

    if (!previewElement) {
      console.error("Element mit der Klasse CVPreview wurde nicht gefunden.");
      return;
    }

    // html2Canvas("HTML Element das in Bild umgewandelt werden muss", Bildscalierung)
    html2canvas(previewElement, { scale: 2 }).then((canvas) => {
      // Promise -> Wenn das Bild fertig ist, .then
      const imgData = canvas.toDataURL("image/png"); // Canvas Element konvertiert in -> URL String
      const pdf = new jsPDF("p", "mm", "a4"); // erstellt neue PDF -> p = Portrait/Hochformat; mm = Millimeter; a4 = A4 Format
      const imgProps = pdf.getImageProperties(imgData); // Bild-Eigenschaften werden extrahieren wie: Höhe Breite usw. -> für die Skalierung der PDF
      const pdfWidth = pdf.internal.pageSize.getWidth(); // Holt sich die Breite der PDF in Millimetern
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width; // Höhe des Bildes wird berechnet um proportional zur Breite skalieren

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight); // fügt die imgData zur der PDF -> imgData = URL; PNG = Bildformat; 0,0 = X,Y Kooridnaten, wo das Bild anfangen sollte, in dem Fall die obere linke Ecke; pdfWidth,pdfHeight = oben berechnet
      pdf.save("Lebenslauf.pdf"); // Speichert die PDF als Lebenslauf.pdf
    });
  }

  return (
    <div className="App">
      <h1>CV Application</h1>
      <form
        className="submitCV"
        onSubmit={(e) => {
          e.preventDefault();
          handleDownload();
        }}
      >
        <section>
          <GeneralInfo setGeneralInfo={setGeneralInfo} />
        </section>
        <section>
          <SchoolInfo setSchoolInfo={setSchoolInfo} />
        </section>
        <section>
          <WorkInfo
            addJobEntry={addJobEntry}
            jobInfo={jobInfo}
            setJobInfo={setJobInfo}
          />
        </section>
        <button style={{ marginTop: "10px" }} type="submit">
          Absenden
        </button>
      </form>
      <Preview
        generalInfo={generalInfo}
        schoolInfo={schoolInfo}
        jobInfo={jobInfo}
      />
    </div>
  );
}

export default App;
