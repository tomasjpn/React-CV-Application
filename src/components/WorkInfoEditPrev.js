import React, { useState } from "react";

// Funktion um die Einträge unter in den Formular für Berufserfahrung darzustellten und die Möglichkeit fürs Löschen oder Bearbeiten zu bekommen
function WorkInfoEditPreview({ jobInfo, setJobInfo }) {
  // IDs von den jeweiligen Job zu speichern -> null = aktuell wird kein Eintrag bearbeitet -> Wichtig für die Sichtbarkeit Toggle
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

  // Funktion zur Bearbeitung eines Job Eintrags -> Wird aufgerufen wenn Bearbeiten Button betätitgt wird
  function editEntry(id) {
    const jobToEdit = jobInfo.entries.find((entry) => entry.id === id); // Findet den passenden Eintrag anhand der ID
    if (jobToEdit) {
      setEditedJob(jobToEdit); // Aus der jobInfo Liste wird das Entry mit der passenden ID in setEditedJob => In den Inputfelder sind die alten Sachen, die man bearbeiten kann
      setEditingJobId(id); // Sichtbarkeit der Inputfelder zu ermöglichen -> Bearbeitungsformular für Eintrag mit der entsprechenden ID wird angezeigt
    }
  }

  /*
            ↓
       nachdem editEntry aufgerufen wurde, werden die Inputfelder dargestellt, die in handleInputChange bearbeitet werden
            ↓
*/

  // Funktion zum Aktualisieren eines bearbeiteten Job Eintrags -> Text im Eingabefeld wird hier bearbeitet
  function handleInputChange(e) {
    const { name, value } = e.target;
    setEditedJob((prevJob) => ({
      ...prevJob,
      [name]: value, // aktualisiert den Wert des jeweiligen Feldes [name]
    }));
  }

  // Funktion zum Speichern der Änderungen eines bearbeiteten Job Eintrags
  function confirmChanges(e) {
    e.preventDefault();
    setJobInfo((prevJobInfo) => ({
      entries: prevJobInfo.entries.map((entry) =>
        // Wenn die ID des ursprünglichen Eintrags mit der derzeitigen ID übereinstimmt, wird der alte Eintrag mit dem neuen Eintrag aus editedJob State aktualisisert
        entry.id === editingJobId ? editedJob : entry
      ),
    }));
    setEditingJobId(null); // Versteckt das Eingabefeld nach dem Speichern
  }

  // Funktion zum Abbrechen des Bearbeitens
  function cancelEdit() {
    setEditingJobId(null); // Da Bearbeitungsfeld nur angezeigt wird, wenn eine ID vorhanden ist -> null=unsichtbar
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
            {/* wenn die editingJobId mit dem jobID übereinstimmt, werden die Inputfelder angezeigt*/}
            {editingJobId === job.id ? (
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
                <button type="button" onClick={confirmChanges}>
                  Bestätigen
                </button>{" "}
                <button type="button" onClick={cancelEdit}>
                  Abbrechen
                </button>{" "}
              </div>
            ) : (
              <>
                <button
                  className="deleteBtnEntry"
                  onClick={() => deleteEntry(job.id)}
                >
                  Löschen
                </button>
                <button
                  className="editBtnEntry"
                  onClick={() => editEntry(job.id)}
                >
                  Bearbeiten
                </button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default WorkInfoEditPreview;
