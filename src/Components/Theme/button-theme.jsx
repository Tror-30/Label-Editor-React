import './style-button-theme.css';
import { themeOn } from './function-theme-control';

//* Смена темы
function ButtonTheme() {
    return (
        <div id="q-container">
            <div className="main">
                <input type="checkbox" id="hidcheck" hidden onChange={themeOn} />
                <label className="capsule" htmlFor="hidcheck" id="capsule-id">
                    <div className="circle"></div>
                    <div className="text-signs">
                        <span id="on"></span>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default ButtonTheme;