import React, { useState } from "react";

// Funktion um die Einträge unter in den Formular für Berufserfahrung darzustellten und die Möglichkeit fürs Löschen oder Bearbeiten zu bekommen
function WorkInfoEditPreview({ jobInfo, setJobInfo }) {
  //useState um die Sichtbarkeit des inputFields für das Bearbeiten zu togglen
  const [showJobEditInput, setJobWorkEditInput] = useState(false);

  // IDs von den jeweiligen Job zu speichern
  const [editingJobId, setEditingJobId] = useState(null);

  //useState um die neuen Werte zu speichern
  const [editedJob, setEditedJob] = useState({
    jobTitle: "",
    companyName: "",
    workDateFrom: "",
    workDateTo: "",
    jobDesc: "",
  });

  //Funktion für das Löschen des Job Eintrags
  function deleteEntry(id) {
    setJobInfo((prevJobInfo) => ({
      // jobInfo ist ein Objekt: { entries: [...] }  -> würde ich prevJobInfo.entries.filter(...) benutzen, dann würde das State durch einen Array gesetzt werden. Das State nimmt aber Objekte an.
      entries: prevJobInfo.entries.filter((entry) => entry.id !== id),
    }));
  }

  //Funktion für den InputField Sichtbarkeit toggle
  function toggleInputEditEntry(id) {
    setJobWorkEditInput(!showJobEditInput);
    editEntry(id);
    return;
  }

  function editEntry(id) {
    const jobToEdit = jobInfo.entries.find((entry) => entry.id === id);
    if (jobToEdit) {
      setEditedJob(jobToEdit);
      setEditingJobId(id);
      setJobWorkEditInput(true); // Zeigt das Eingabefeld, wenn bearbeiten betätigt
    }
  }

  // Funktion zum Aktualisieren eines bearbeiteten Job Eintrags
  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditedJob((prevJob) => ({
      ...prevJob,
      [name]: value, // aktualisiert den Wert des jeweiligen Feldes [name]
    }));
  }

  // Funktion zum Speichern der Änderungen eines bearbeiteten Job Eintrags
  function saveEdit() {
    setJobInfo((prevJobInfo) => ({
      entries: prevJobInfo.entries.map((entry) =>
        entry.id === editingJobId ? editedJob : entry
      ),
    }));
    setJobWorkEditInput(false); // Versteckt das Eingabefeld nach dem Speichern
  }

  return (
    <div className="JobEntryEdit">
      {jobInfo.entries.length === 0 ? (
        <p>Keine Berufserfahrung angegeben.</p>
      ) : (
        jobInfo.entries.map((job) => (
          <div key={job.id} className="job-entry">
            <p>Beruf: {job.jobTitle}</p>
            <p>Unternehmen: {job.companyName}</p>
            <p>
              Zeitraum: {job.workDateFrom} bis {job.workDateTo}
            </p>
            <p>Beschreibung: {job.jobDesc}</p>

            {showJobEditInput && editingJobId === job.id && (
              <div>
                <input
                  name="jobTitle"
                  value={editedJob.jobTitle}
                  placeholder="Beruf"
                  onChange={handleInputChange}
                />
                <input
                  name="companyName"
                  value={editedJob.companyName}
                  placeholder="Unternehmen"
                  onChange={handleInputChange}
                />
                <input
                  name="workDateFrom"
                  value={editedJob.workDateFrom}
                  placeholder="Zeitraum von"
                  onChange={handleInputChange}
                />
                <input
                  name="workDateTo"
                  value={editedJob.workDateTo}
                  placeholder="Zeitraum bis"
                  onChange={handleInputChange}
                />
                <input
                  name="jobDesc"
                  value={editedJob.jobDesc}
                  placeholder="Beschreibung"
                  onChange={handleInputChange}
                />
                <button onClick={saveEdit}>Speichern</button>
              </div>
            )}
            <button
              className="deleteBtnEntry"
              onClick={() => deleteEntry(job.id)}
            >
              Löschen
            </button>
            <button
              className="editBtnEntry"
              onClick={() => toggleInputEditEntry(job.id)}
            >
              Bearbeiten
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default WorkInfoEditPreview;
