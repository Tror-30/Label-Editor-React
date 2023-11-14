import './style-alert-print.css';
import { confirmAlertAuto, cancelAlertAuto } from './function-alert-print.js';

function AlertPrint() {
    return (
        <div id="alert-print">
            <p id="text-alert-print"></p>
            <button id="ok-print" onClick={confirmAlertAuto}>Отправить</button>
            <button id="no-print" onClick={cancelAlertAuto}>Отменить</button>
        </div>
    )
};

export default AlertPrint;