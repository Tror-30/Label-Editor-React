import './style-right-section-editor.css';
import { tagColor } from './function-right-section-editor.js';
import { resetSelection } from '../../../function-move-elem.js';
import { alertAutoHandPrint, alertHandPrint } from '../../../function-backand-editor.js';

//* Контент справа
function RightSectionEditor() {
    return (
        <div id="container-right">
            <select id="select-label-backgraund" onChange={tagColor}>
                <option value="white">Белый</option>
                <option value="blue">Синий</option>
                <option value="deepskyblue">Тёмно-голубой</option>
                <option value="red">Красная</option>
                <option value="coral">Коралл</option>
                <option value="saddlebrown">Светло-коричневый</option>
                <option value="hotpink">Ярко-Розовый</option>
                <option value="violet">Фиолетовый</option>
                <option value="orang">Оранжевый</option>
                <option value="yellow">Жёлтый</option>
                <option value="limegreen">Салатовый</option>
                <option value="dimgray">Тусклый-серый</option>
            </select>
            <div id="label-content" onClick={resetSelection}>
                <div id="label-borders">
                </div>
            </div>
            <div id="text-printer">
                <p id="text-printer-1">Отправить шаблон на ручную печать</p>
                <p id="text-printer-2">Отправить шаблон на авто печать</p>
            </div>
            <div id="button-printer">
                <button id="sending" onClick={alertAutoHandPrint}>Авто</button>
                <button id="chyase-label" onClick={alertHandPrint}>Ручная</button>
            </div>
        </div>
    );
};

export default RightSectionEditor;