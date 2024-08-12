// Vorschau des CV
function Preview({ generalInfo, schoolInfo, jobInfo }) {
  console.log(generalInfo.image);
  return (
    <div class="divBody">
      <div className="CVPreview">
        <div className="leftSide">
          <div className="generalInfo">
            <img src={generalInfo.image} alt="Profilbild" className="image" />
            <div className="contactInfo">
              <div className="kontakt">Kontakt</div>
              <p>
                Telefon:
                <br />
                {generalInfo.telefon}
              </p>
              <p>E-Mail: {generalInfo.email}</p>
              <p>
                Adresse:
                <br /> {generalInfo.street} {generalInfo.postal}{" "}
                {generalInfo.city}
              </p>
            </div>
          </div>
        </div>
        <div class="rightSide">
          <section>
            <div className="nameField">
              <p className="vorname">{generalInfo.vorname}</p>
              <p className="nachname">{generalInfo.nachname}</p>
            </div>
          </section>
          <section>
            <div className="schoolInfo">
              <h3>Bildungsabschluss</h3>
              <p>Name der Bildungsinstitution: {schoolInfo.schoolname}</p>
              <p>Abschluss: {schoolInfo.schooldegree}</p>
            </div>
          </section>
          <section>
            <div className="workExp">
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Preview;
