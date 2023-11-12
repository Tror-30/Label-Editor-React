import './App.css';
import Header from '../Components/Header/header';
import SectionEditor from '../Components/Sections/Editor/Section-Editor';
import Footer from '../Components/Footer/footer';
import ButtonTheme from '../Components/Theme/button-theme';


function App() {
  return (
    <div className="App">
      <Header />
      <SectionEditor />
      <Footer />
      <ButtonTheme />
    </div>
  );
};

export default App;
