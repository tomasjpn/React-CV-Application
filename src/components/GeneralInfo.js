import { useEffect, useState } from "react";

// Component für Allgemeine Informationen
function GeneralInfo({ setGeneralInfo }) {
  // useStates für die Speicherung der Werte aus den Inputfeldern
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");

  // useState für Accordion
  const [accordionOpen, setAccordionOpen] = useState(false);

  // useSate für Profilbild
  const [image, setImage] = useState(
    "https://st2.depositphotos.com/2101611/8308/v/950/depositphotos_83084390-stock-illustration-businessman-icon-can-be-used.jpg"
  );

  // Funktion um Bilddateien hochzuladen
  function handleImageChange(event) {
    const file = event.target.files[0]; // Erste Datei (Bild)

    // Stellt sicher, dass eine Datei ausgewählt wurde
    if (file) {
      const reader = new FileReader(); // FileReader API -> ermöglicht Dateien von der Client-Seite zu lesen

      // onloaded = Event-Handler, der aufgerufen wird, wenn das Lesen der Datei abgeschlossen ist
      reader.onloadend = () => {
        // image-Variable wird mit der Data-URL(reader.result) aktualisiert
        setImage(reader.result);
      };

      // die übergebene Datei wird als eine Data-URL gelesen
      reader.readAsDataURL(file);
    }
  }

  // Funktion zum Umschalten des Akkordeons
  function handleAccordion() {
    setAccordionOpen(!accordionOpen);
  }

  // useEffect führt jedesmal die setGeneralInfo Funktion aus, wenn einer der Werte aus den dependency Array verändert wird
  useEffect(() => {
    setGeneralInfo({
      // Als Properties werden die Variablen aus den States übergeben
      image,
      vorname,
      nachname,
      telefon,
      email,
      street,
      postal,
      city,
    });
    // Wenn einer dieser Variablen verändert wird, wird die Funktion setGeneralInfo aus App.js aufgerufen
  }, [
    image,
    vorname,
    nachname,
    telefon,
    email,
    street,
    postal,
    city,
    setGeneralInfo,
  ]);

  return (
    <>
      <button
        type="button"
        className="accordion-button"
        onClick={handleAccordion}
      >
        Allgemeine Informationen
      </button>
      {/*Accordion wenn der true ist, dann zeigt er den Inhalt an*/}
      {accordionOpen && (
        <div className="Name">
          <img
            src={image}
            style={{
              maxWidth: "100px",
              display: "block",
              margin: "0 auto",
            }}
            alt="ProfilBild"
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <input
            placeholder="Vorname"
            name="firstName"
            value={vorname}
            onChange={(e) => setVorname(e.target.value)}
          />
          <input
            placeholder="Nachname"
            name="lastName"
            value={nachname}
            onChange={(e) => setNachname(e.target.value)}
          />
        </div>
      )}
      {accordionOpen && (
        <div className="Kontakt">
          <input
            placeholder="Telefon"
            name="phone"
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
          />
          <input
            placeholder="E-Mail"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="address">Adresse:</label>
          <input
            placeholder="Straße, Hausnr."
            id="address"
            name="streetAddress"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <input
            placeholder="Postleitzahl"
            name="postalCode"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
          />
          <input
            placeholder="Ort"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      )}
    </>
  );
}

export default GeneralInfo;
