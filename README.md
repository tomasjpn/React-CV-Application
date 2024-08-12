Solution for TheOdinProject: CV Application: https://www.theodinproject.com/lessons/node-path-react-new-cv-application

## Live-preview: https://66b9f4ce2c58d173f623cb36--sweet-syrniki-4dc655.netlify.app/

---

# Projekt-Dokumentation: React-CV-Application

## Inhaltsverzeichnis

1. [Projektübersicht](#projektübersicht)
2. [Sprachen/Tools](#technologien)
3. [Projektstruktur](#projektstruktur)
4. [Methoden](#methoden)
   - [Component Lifecycle](#component-lifecycle)
   - [State Management](#state-management)
   - [Formularverarbeitung](#formularverarbeitung)
   - [Accordion-Funktionalität](#accordion-funktionalität)
   - [Bild- und Datei-Uploads](#bild-und-datei-uploads)
5. [Verwendung](#verwendung)

## Projektübersicht

Die React-CV-Application ist eine Anwendung zur Verwaltung und Erstellung von Lebensläufen (CVs). Die Anwendung ermöglicht es den Benutzern, verschiedene Abschnitte wie allgemeine Informationen, Bildung und Berufserfahrung hinzuzufügen und zu bearbeiten. Die Hauptziele der Anwendung sind die einfache Erstellung und Verwaltung von CVs in einer benutzerfreundlichen Oberfläche.

## Sprachen/Tools

- **React**: Für die Erstellung der Benutzeroberfläche und das Komponentenmanagement.
- **CSS**: Für das Styling der Anwendung.
- **JavaScript**: Für die Logik und Interaktivität der Komponenten.
- **uuid**: Für die Generierung einzigartiger IDs für Job-Einträge.
- **html2canvas** und **jsPDF**: Für das Erstellen und Herunterladen von PDFs.

## Projektstruktur

Hier ist eine detaillierte Projektstruktur für die `React-CV-Application`, basierend auf den typischen Dateiorganisationen in einem React-Projekt:

## Projektstruktur

Die Projektstruktur für die `React-CV-Application` ist wie folgt organisiert:

### `src/`

- **`components/`**: Enthält die verschiedenen React-Komponenten, die die Benutzeroberfläche der Anwendung bilden.

  - **`GeneralInfo.js`**: Komponente für die allgemeinen Informationen des Benutzers, einschließlich Profilbild und Kontaktinformationen.
  - **`SchoolInfo.js`**: Komponente für die Bildungsinformationen des Benutzers, einschließlich der Verwaltung von Bildungsabschlüssen.
  - **`WorkInfo.js`**: Komponente für die berufliche Erfahrung des Benutzers, einschließlich der Verwaltung von Job-Einträgen.
  - **`WorkInfoEditPrev.js`**: Komponente für die Vorschau und Bearbeitung der Berufserfahrungs-Einträge.

- **`utils/`**: Beinhaltet Hilfsfunktionen und Daten, die in verschiedenen Teilen der Anwendung verwendet werden.

  - **`jobsListe.js`**: Datei, die die Liste der verfügbaren Job-Kategorien für die Berufserfahrung enthält.

- **`App.js`**: Die Hauptkomponente der Anwendung, die andere Komponenten integriert und die Hauptlogik des CV-Managements verwaltet.

- **`index.js`**: Der Einstiegspunkt der React-Anwendung, der das Haupt-React-Element in das DOM rendert.

- **`styles/`**: (Optional) Verzeichnis für CSS-Dateien, falls die CSS-Stile in separaten Dateien organisiert sind.
  - **`preview.css`**: CSS-Datei für die Stile der Vorschauansicht der CV-Anwendung.

### `public/`

- **`index.html`**: Die HTML-Datei, in die die React-Anwendung gerendert wird. Diese Datei enthält das Root-Element für die React-Komponenten.

### `package.json`

- **`package.json`**: Die Konfigurationsdatei für das Projekt, die Abhängigkeiten, Skripte und Metadaten der Anwendung definiert.

### `README.md`

- **`README.md`**: Dokumentationsdatei für das Projekt, die allgemeine Informationen, Anleitungen zur Installation und Verwendung enthält.

### `.gitignore`

- **`.gitignore`**: Datei, die festlegt, welche Dateien und Verzeichnisse von der Versionierung durch Git ausgeschlossen werden sollen.

### `node_modules/`

- **`node_modules/`**: Verzeichnis, das alle installierten Node.js-Pakete enthält, die für das Projekt benötigt werden. Dieses Verzeichnis wird bei der Installation von Abhängigkeiten durch npm erstellt.

### `package-lock.json`

- **`package-lock.json`**: Datei, die die genauen Versionen der installierten Abhängigkeiten speichert und sicherstellt, dass die Installation auf verschiedenen Maschinen konsistent ist.

### `public/`

- **`favicon.ico`**: Das Favicon für die Anwendung, das im Browser-Tab angezeigt wird.
- **`manifest.json`**: Manifest-Datei, die Metadaten für Progressive Web Apps enthält.
- **`robots.txt`**: Datei zur Steuerung der Indizierung der Website durch Suchmaschinen-Bots.

## Methoden

### Component Lifecycle

- **`useEffect`**: Wird verwendet, um Side Effects in den Komponenten zu verwalten, wie z.B. das Aktualisieren der CV-Daten, wenn sich die Eingabefelder ändern.

### State Management

- **`useState`**: Verwaltet den Zustand der Eingabefelder und anderer interaktiver Elemente in den Komponenten. Beispiel:
  ```javascript
  const [companyName, setCompanyName] = useState("");
  ```

### Formularverarbeitung

- **`handleInputChange`**: Eine Methode, die die Eingaben in den Formularfeldern verarbeitet und den Zustand aktualisiert.
  ```javascript
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  ```

### Accordion-Funktionalität

- **`handleAccordionChange`**: Eine Methode, um die Akkordeon-Abschnitte ein- oder auszublenden.
  ```javascript
  function handleAccordionChange() {
    setAccordionOpen(!accordionOpen);
  }
  ```

### Bild- und Datei-Uploads

- **`handleImageChange`**: Eine Methode, um ein Profilbild hochzuladen und anzuzeigen.
  ```javascript
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  ```

## Verwendung

1. **Allgemeine Informationen**: Ermöglicht Benutzern, persönliche Informationen wie Name, Kontaktinformationen und ein Profilbild einzugeben.
2. **Bildung**: Ermöglicht Benutzern, Bildungsabschlüsse und Institutionen hinzuzufügen.
3. **Berufserfahrung**: Ermöglicht Benutzern, ihre berufliche Erfahrung einschließlich der Positionen, Unternehmen und Zeiträume zu verwalten.
