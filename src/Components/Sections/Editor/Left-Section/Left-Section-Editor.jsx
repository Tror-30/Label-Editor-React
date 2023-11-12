import './style-left-section-editor.css';


//* Контент слева
function LeftSectionEditor() {
    return (
        <div id="container-left">
            <div id="logo-left-select">
                <p id="left-select-logo">Выберите логотип</p>
                <div id="logo-select">
                    <select id="logo_selection" name="select-logos">
                    </select>
                </div>
            </div>
            <div id="content-left">
                <div id="settings">
                    <p className="textSettings">Передвинуть</p>
                    <div className="padding-bottom">
                        <p className="text-padding">Отступ снизу</p>
                        <input type="number" id="input-padding-bottom" />
                    </div>
                    <div className="pading-left">
                        <p className="text-padding">Отступ слева</p>
                        <input type="number" id="input-padding-left" />
                    </div>
                    <button id="apply-indents">Применить</button>
                </div>
                <div className="string">
                    <p id="text-string">Добавить строку</p>
                    <input id="editor-text-string" type="text" placeholder="Введите данные" />
                    <button id="add-string">Добавить</button>
                    <button id="delete-string">Удалить</button>
                    <button id="buttonSinbol">Символы</button>
                    <button id="bar">Штрих Код</button>
                    <div id="tableSimbol">
                        <div id="off">
                            <button id="buttonOff">X</button>
                        </div>
                        <p>A - Ǻ ǻ α ά Ά Ä ª ä Å À Á Â å ã â à á Ã</p>
                        <p>B - β ß Ђ</p>
                        <p>C - Ç ¢ ç Č ċ Ċ ĉ ς Ĉ ć Ć č ¢</p>
                        <p>D - Ď ď Đ đ ð ∂</p>
                        <p>E - £ Ē ℮ ē Ė ė Ę ě Ě ę Έ ê ξ Ê È € É ∑ é è ع Є є έ ε</p>
                        <p>G - Ĝ ĝ Ğ ğ Ġ ġ Ģ ģ פ</p>
                        <p>H - Ĥ Ħ ħ Ή Ћ ђ</p>
                        <p>I - ί ι Ï Ί Î ì Ì í Í î ϊ ΐ Ĩ ĩ Ī ī Ĭ ĭ İ į Į</p>
                        <p>J - Ĵ ĵ</p>
                        <p>K - Ќ k ќ ķ Ķ ﻸ</p>
                        <p>L - ℓ Ŀ ŀ £ Ĺ ĺ Ļ ļ λ ₤ Ł ł ľ Ľ</p>
                        <p>N - η ñ ח Ñ ή ŋ Ŋ Ń ń Ņ ņ Ň ň ŉ</p>
                        <p>O - Ό ó ό σ ǿ Ǿ Θ ò Ó Ò Ô ô Ö ö Õ õ ø Ø Ō ō</p>
                        <p>P - þ Þ ρ Ꭾ</p>
                        <p>Q - q Q ᶐ Ǭ ǭ ჹ</p>
                        <p>R - ř Ř ŗ Ŗ ŕ Ŕ</p>
                        <p>S - ى § Ś ś š Š ş Ş ŝ Ŝ ∫ $</p>
                        <p>T - † T t τ ΐ Ţ ţ Ť ť ŧ Ŧ</p>
                        <p>U - Ũ ύ ϋ Ù ú Ú ΰ ù Û û Ü Џ ü Ũ ũ Ū ū Ŭ ŭ ų Ų ű Ű ů Ů</p>
                        <p>W - ẃ Ẃ ẁ Ẁ ẅ ώ ω ŵ Ŵ Ẅ</p>
                    </div>
                </div>
                <div id="numbar-of-tags">
                    <p id="text-tags">Количество бирок</p>
                    <select id="number-tags" type="number">
                        <option value="1">1</option>
                        <option selected="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                </div>
                <div className="move">
                    <div className="px">
                        <p className="text-padding">По пиксельно</p>
                        <input id="inpud-pixel" type="number" placeholder="px" />
                    </div>
                    <button className="button-group" id="button-top">⬆</button>
                    <button className="button-group" id="button-botton">⬇</button>
                    <button className="button-group" id="button-left">⬅</button>
                    <button className="button-group" id="button-right">➞</button>
                    <button className="button-group" id="button-turn-left">↶</button>
                    <button className="button-group" id="button-turn-right">↷</button>
                </div>
                <div className="bold">
                    <p className="text">Жирный шрифт</p>
                    <button id="fatty">Установить</button>
                    <button id="fatty-off">Убрать</button>
                </div>
                <div id="scaling">
                    <p className="text">Размер Шрифта</p>
                    <select name="px" id="selectPx">
                        <option value="0"></option>
                        <option value="16">30,20</option>
                        <option value="18">40,30</option>
                        <option value="20">50,40</option>
                        <option value="22">60,50</option>
                    </select>
                    <button id="plus">Применить</button>
                </div>
                <div id="settings-history">
                    <p id="histori-header">Сохранение шаблона бирки</p>
                    <input id="name-history-label" type="text" placeholder="Введите имя" />
                    <button id="save-string">Сохранить шаблон</button>
                </div>
                <div id="addHistory">
                    <p id="addHistory-text">Список шаблонов бирок</p>
                    <div className="select-box-history">
                        <div className="select-option-history">
                            <input id="soValue" type="text" readonly name="" />
                        </div>
                        <div className="content-history">
                            <div className="search">
                                <input type="text" id="optionSearch" placeholder="Поиск" name="" />
                            </div>
                            <ul className="option-history">
                            </ul>
                        </div>
                    </div>
                    <button id="change-label">Новый шаблон</button>
                    <button id="сlean-the-tag">Очистить бирку</button>
                </div>
                <div id="params">
                    <p id="text-params">Параметры Бирки</p>
                    <select id="select-params">
                        <option value=""></option>
                        <option value="Gost">Гост-&lt&ltGOST&gt&gt</option>
                        <option value="HEAT">Плавка-&lt&ltHEAT&gt&gt</option>
                        <option value="DIAMETER">Диаметр-&lt&ltDIAMETER&gt&gt</option>
                        <option value="STEEL_GRADE">Марка стали-&lt&ltSTEEL_GRADE&gt&gt</option>
                        <option value="COIL_NO">Номер бунта-&lt&ltCOIL_NO&gt&gt</option>
                        <option value="WEIGHT">Вес бунта-&lt&ltWEIGHT&gt&gt</option>
                        <option value="CUSTOMER">Заказчик-&lt&ltCUSTOMER&gt&gt</option>
                        <option value="SHIFT">Смена-&lt&ltSHIFT&gt&gt</option>
                        <option value="KLASS">Класс-&lt&ltKLASS&gt&gt</option>
                        <option value="ProductType">Код продукции-&lt&ltProductType&gt&gt</option>
                        <option value="COIL_WGT_DATE">Время взвешивания-&lt&ltCOIL_WGT_DATE&gt&gt</option>
                        <option value="SPECIFICATION">Спецификация-&lt&ltSPECIFICATION&gt&gt</option>
                        <option value="LOT">Лот-&lt&ltLOT&gt&gt</option>
                        <option value="CUTLENGTH">Длина-&lt&ltCUTLENGTH&gt&gt</option>
                    </select>
                    <button id="button-params">Добавить</button>
                </div>
            </div>
        </div>
    );
};

export default LeftSectionEditor;