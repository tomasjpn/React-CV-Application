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

  const [jobInfo, setJobInfo] = useState({
    companyName: "",
    jobTitle: "",
    workDateFrom: "",
    workDateto: "",
    jobDesc: "",
  });

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
          <WorkInfo setJobInfo={setJobInfo} />
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
