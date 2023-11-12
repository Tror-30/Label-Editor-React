import './style-control-section.css';
import { openLabelEditorSection, openUserSection, openLogoEditorSection } from './function-control-section';


//* Блок управления Секциями
function ControlSection() {
    return (
        <div id="control-button">
            <div class="button-control-section" id="button-section-editor" onClick={openLabelEditorSection}>Редактор Шаблонов</div>
            <div class="button-control-section" id="button-section-user-editor" onClick={openUserSection}>Редактор Пользователей</div>
            <div class="button-control-section" id="button-section-logo-editor" onClick={openLogoEditorSection}>Редактор Данных</div>
        </div>
    );
};

export default ControlSection;