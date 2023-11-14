import './App.css';
import Header from '../Components/Header/header';
import SectionEditor from '../Components/Sections/Editor/Section-Editor';
import Footer from '../Components/Footer/footer';
import ButtonTheme from '../Components/Theme/button-theme';
import Error from '../Components/Alert-Errors/Error';
import AlertPrint from '../Components/Alert-Print/Alert-Print';
import UserSection from '../Components/Sections/User/User-Section';
import LabelAddSection from '../Components/Sections/Labels/Label-Logo-Add'
function App() {
  return (
    <div className="App">
      <Header />
      <SectionEditor />
      <UserSection />
      <LabelAddSection />
      <Footer />
      <ButtonTheme />
    </div>
  );
};

export default App;
