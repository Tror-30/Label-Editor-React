import LeftSectionEditor from './Left-Section/Left-Section-Editor';
import RightSectionEditor from './Right-Section/Right-Section-Editor';
import './style-editor.css';

function SectionEditor() {
    return (
        <div id="section">
            <div id="section-left">
                <h2 id="header-left">Позиционирование данных</h2>
                <LeftSectionEditor />
            </div>
            <div id="section-right">
                <h2 id="haeder-right">Бирка</h2>
                <RightSectionEditor />
            </div>
        </div>
    );
};

export default SectionEditor;