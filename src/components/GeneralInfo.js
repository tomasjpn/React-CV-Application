import { useState } from "react";

// Component für Allgemeine Informationen
function GeneralInfo() {
  // useStates für die Speicherung der Werten aus den Inputfeldern
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <h2>Allgemeine Informationen</h2>
      <button type="button" className="accordion-button">
        Allgemeine Informationen
      </button>
      <div className="Name">
        <img
          src="https://st2.depositphotos.com/2101611/8308/v/950/depositphotos_83084390-stock-illustration-businessman-icon-can-be-used.jpg"
          style={{
            maxWidth: "100px",
            display: "block",
            margin: "0 auto",
          }}
          alt="ProfilBild"
        />
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
    </>
  );
}

export default GeneralInfo;
