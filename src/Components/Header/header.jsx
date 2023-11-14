import './style-Header.css';
import ControlSection from '../Control-Section-Bloclk/Control-Section';
import { label350, label210, label212 } from './function-header.js';

function Header() {
    return (
        <div id="header">
            <h1 id="row-text">Редактор Бирки</h1>
            <div id="Stans">
                <div className="stan" id="350-Stan" onClick={label350}>
                    <p>Стан-350</p>
                </div>
                <div className="stan" id="210-Stan" onClick={label210}>
                    <p>Стан-210</p>
                </div>
                <div className="stan" id="212-Stan" onClick={label212}>
                    <p>Стан-212</p>
                </div>
            </div>
            <ControlSection />
        </div>
    )
};

export default Header;