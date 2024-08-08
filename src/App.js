import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Preview from "./components/Preview";
import SchoolInfo from "./components/SchoolInfo";
import WorkInfo from "./components/WorkInfo";

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

  return (
    <div className="App">
      <h1>CV Application</h1>
      <form>
        <section>
          <GeneralInfo setGeneralInfo={setGeneralInfo} />
        </section>
        <section>
          <SchoolInfo setSchoolInfo={setSchoolInfo} />
        </section>
        <section>
          <WorkInfo addJobEntry={addJobEntry} />
        </section>
        <button type="submit">Absenden</button>
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
