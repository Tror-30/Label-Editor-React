import './style-Footer.css';
import { resetSelection } from '../function-move-elem';


function Footer() {
    return (
        <div id="footer-block" onClick={resetSelection}>
            <div id="text-1">
                <p id="footer-version">Версия приложения: 0.0.1</p>
            </div>
            <div id="text-2">
                <p id="footer-contacts">Служба поддержки: 1032</p>
            </div>
        </div>
    )
};
export default Footer;