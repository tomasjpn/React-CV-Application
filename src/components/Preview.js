// Vorschau des CV
function Preview({ generalInfo, schoolInfo, jobInfo }) {
  console.log(generalInfo.image);
  return (
    <div className="CVPreview">
      <h2>CV Vorschau</h2>
      <section>
        <img
          src={generalInfo.image}
          alt="Profilbild"
          style={{ maxWidth: "100px", display: "block", margin: "0 auto" }}
        />
        <p>Vorname: {generalInfo.vorname}</p>
        <p>Nachname: {generalInfo.nachname}</p>
        <p>Telefon: {generalInfo.telefon}</p>
        <p>E-Mail {generalInfo.email}</p>
        <p>
          Adresse: {generalInfo.street} {generalInfo.postal} {generalInfo.city}
        </p>
      </section>
      <section>
        <h3>Bildungsabschluss</h3>
        <p>Name der Bildungsinstitution: {schoolInfo.schoolname}</p>
        <p>Abschluss: {schoolInfo.schooldegree}</p>
      </section>
      <section>
        <h3>Berufserfahrung</h3>
        {/*Überprüft, ob Einträge vorhanden sind*/}
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
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default Preview;
