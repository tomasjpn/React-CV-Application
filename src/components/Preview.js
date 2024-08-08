// Vorschau des CV
function Preview({ generalInfo }) {
  return (
    <div className="CVPreview">
      <h2>CV Vorschau</h2>
      <p>Vorname: {generalInfo.vorname}</p>
      <p>Nachname: {generalInfo.nachname}</p>
      <p>Telefon: {generalInfo.telefon}</p>
      <p>E-Mail {generalInfo.email}</p>
      <p>
        Adresse: {generalInfo.street} {generalInfo.postal} {generalInfo.city}
      </p>
    </div>
  );
}

export default Preview;
