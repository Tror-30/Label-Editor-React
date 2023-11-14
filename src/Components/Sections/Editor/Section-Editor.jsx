import LeftSectionEditor from './Left-Section/Left-Section-Editor';
import RightSectionEditor from './Right-Section/Right-Section-Editor';
import './style-editor.css';
import { resetSelection } from '../../function-move-elem';
import Error from '../../Alert-Errors/Error';
import AlertPrint from '../../Alert-Print/Alert-Print';




function SectionEditor() {
    

    return (
        <div id="section">
            <div id="section-left">
                <h2 id="header-left" onClick={resetSelection}>Позиционирование данных</h2>
                <LeftSectionEditor />
            </div>
            <div id="section-right">
                <h2 id="haeder-right" onClick={resetSelection}>Бирка</h2>
                <RightSectionEditor />
            </div>
            <AlertPrint />
            <Error />
        </div>
    );
};

export default SectionEditor;