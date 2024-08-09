import React from "react";

// Funktion um die Einträge unter in den Formular für Berufserfahrung darzustellten und die Möglichkeit fürs Löschen oder Bearbeiten zu bekommen
function WorkInfoEditPreview({ jobInfo, setJobInfo }) {
  //Funktion für das Löschen des Job Eintrags
  function deleteEntry(id) {
    setJobInfo((prevJobInfo) => ({
      // jobInfo ist ein Objekt: { entries: [...] }  -> würde ich prevJobInfo.entries.filter(...) benutzen, dann würde das State durch einen Array gesetzt werden. Das State nimmt aber Objekte an.
      entries: prevJobInfo.entries.filter((entry) => entry.id !== id),
    }));
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
            <button
              className="deleteBtnEntry"
              onClick={() => deleteEntry(job.id)}
            >
              Löschen
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default WorkInfoEditPreview;
