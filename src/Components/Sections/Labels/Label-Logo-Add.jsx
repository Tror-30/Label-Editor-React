import './style-label-logo-add.css';
import { editorLabelCode, deleteLabel, addCodeLabel } from './function-label-logo-add.js';
import Error from '../../Alert-Errors/Error';
//* Секция редактирования и добавления данных
function LabelAddSection() {
    return (
        <div id="section-add-logo-label">
            <div id="row-2">
                <div id="row-2-left">
                    <input type="text" id="input-name-logo" placeholder="Имя логотипа" />
                    <select id="select-rotat-logo">
                        <option value=""></option>
                        <option value="0r">0 градусов</option>
                        <option value="90r">90 градусов</option>
                        <option value="180r">180 градусов</option>
                        <option value="260r">260 градусов</option>
                    </select>
                    <button id="button-save-logo-code">Добавить</button>
                    <input type="file" id='add-logo-img' multiple accept="image/*" />
                    <textarea id="input-code-logo" placeholder="Код логотипа"></textarea>
                </div>
                <div id="row-2-right">
                    <select id="select-label-name" onChange={addCodeLabel}>
                        <option value=""></option>
                    </select>
                    <button id="button-save-label-code" onClick={editorLabelCode}>Редактировать</button>
                    <button id="button-delete-label-code" onClick={deleteLabel}>Удалить</button>
                    <textarea id="input-code-label" placeholder="Код Шаблона"></textarea>
                </div>
            </div>
            <Error />
        </div>
    );
};

export default LabelAddSection;