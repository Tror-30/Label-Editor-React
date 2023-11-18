import './App.css';
import Header from '../Components/Header/header';
import SectionEditor from '../Components/Sections/Editor/Section-Editor';
import Footer from '../Components/Footer/footer';
import ButtonTheme from '../Components/Theme/button-theme';
import UserSection from '../Components/Sections/User/User-Section';
import LabelAddSection from '../Components/Sections/Labels/Label-Logo-Add';
import { useState } from 'react';


export const sectionData = {
  "sectionEditor": { id: "SectionEditor", text: "Редактор Шаблонов" },
  "userSection": "UserSection",
  "labelAddSection": "LabelAddSection",
}

export const sectionIds = {
  "sectionEditor": "SectionEditor",
  "userSection": "UserSection",
  "labelAddSection": "LabelAddSection",
}

const sectionComponent = {
  "SectionEditor": <div>{sectionIds.sectionEditor}</div>,
  "UserSection": <div>{sectionIds.userSection}</div>,
  "LabelAddSection": <div>{sectionIds.labelAddSection}</div>,
}

const Button = ({ isHighlighted, onClick, text }) => {
  return <div style={{ background: isHighlighted ? "blue" : "grey" }} onClick={onClick}>{text}</div>
}

function CustomControlSection({ openedSectionId, onSectionButtonClick }) {

  const buttonsText = {
    [sectionIds.sectionEditor]: "Редактор Шаблонов",
    [sectionIds.userSection]: "Редактор Пользователей",
    [sectionIds.labelAddSection]: "Редактор Данных",
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
      {Object.keys(sectionIds).map(sectionId => {
        return <Button isHighlighted={openedSectionId === sectionId}
          onClick={() => onSectionButtonClick(sectionId)}
          text={buttonsText[sectionId]} />
      })}

      {/* <Button isHighlighted={openedSectionId === sectionIds.sectionEditor}
        onClick={() => onSectionButtonClick(sectionIds.sectionEditor)}
        text="Редактор Шаблонов" />
      <Button isHighlighted={openedSectionId === sectionIds.userSection}
        onClick={() => onSectionButtonClick(sectionIds.userSection)}
        text="Редактор Пользователей" />
      <Button isHighlighted={openedSectionId === sectionIds.labelAddSection}
        onClick={() => onSectionButtonClick(sectionIds.labelAddSection)}
        text="Редактор Данных" /> */}
    </div>
  );
};



function App() {

  const [openedSectionId, setOpenedSectionId] = useState(sectionIds.sectionEditor)

  return (
    <div className="App">
      <Header />
      <CustomControlSection openedSectionId={openedSectionId} onSectionButtonClick={(sectionId) => setOpenedSectionId(sectionId)} />
      {sectionComponent[openedSectionId]}
      <Footer />
      <ButtonTheme />
    </div>
  );
};

export default App;
