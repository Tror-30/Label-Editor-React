import './style-right-section-editor.css';


//* Контент справа
function RightSectionEditor() {
    return (
        <div id="container-right">
            <select id="select-label-backgraund">
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
            <div id="label-content">
                <div id="label-borders">
                </div>
            </div>
            <div id="text-printer">
                <p id="text-printer-1">Отправить шаблон на ручную печать</p>
                <p id="text-printer-2">Отправить шаблон на авто печать</p>
            </div>
            <div id="button-printer">
                <button id="sending">Авто</button>
                <button id="chyase-label">Ручная</button>
            </div>
        </div>
    );
};

export default RightSectionEditor;