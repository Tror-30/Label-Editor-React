import './style-Header.css';
import { ControlSection } from '../Control-Section/Control-Section';

function Header() {
    return (
        <div id="header">
            <h1 id="row-text">Редактор Бирки</h1>
            <div id="Stans">
                <div className="stan" id="350-Stan">
                    <p>Стан-350</p>
                </div>
                <div className="stan" id="210-Stan">
                    <p>Стан-210</p>
                </div>
                <div className="stan" id="212-Stan">
                    <p>Стан-212</p>
                </div>
            </div>
            <ControlSection />
        </div>
    )
};

export default Header;