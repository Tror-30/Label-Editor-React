//TODO: Импорт Функций/**********************************************************************************************************************/
import { getLoginsUser, controlGetAutoPrint } from './Sections/User/function-user-section.js';
import { authorizationBack } from "./Autorization/function-autorization.js";
import { constructorlabelCode } from "./function-constructor-code.js";
import { labelCode, sizeString, defaultLabelNameStan, stanTarget } from "./function-backand-editor.js";
import { themeCookie } from "./Theme/function-theme-control.js";
import { moveUp, moveDown, moveLeft, moveRight, elementBorder } from './function-move-elem.js';
import { closeError, openError } from './Alert-Errors/function-error.js';
//--------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', personCookie, getLoginsUser, postControlAutoPrint, themeCookie, defaultLabelNameStan);
document.addEventListener('optionSearch', )

//! Глобальные Константы и переменные

export const LABEL_WIDTH = 630;         //? Ширина бирки
export const LABEL_HEIGHT = 550;        //? Высота бирки
export let labelNameControl;

//! адрес 1
export const set = {                    //? ID станов
    '350-Stan': 170,
    '210-Stan': 174,
    '212-Stan': 162,
};
// export const set = {                    //? ID станов локал
//     '350-Stan': 77,
//     '210-Stan': 77,
//     '212-Stan': 77,
// };

//! Адрес 2
export const set2 = 197;                    //? Тест
//export const set2 = 137;                  //? Прод
// export const set2 = 30;                  //? Локал

// export const ports = {                   //? Порт файловой системы локал
//     '350-Stan': 7070,
//     '210-Stan': 7071,
//     '212-Stan': 7072,
// };
export const ports = 7099;                  //? Порт файловой системы

//! Порт базы данных
export const portDB = '10.23.197.201:5151';             //? Порт базы данных тест
//export const portDB = '10.23.77.30:5151';             //? Порт базы данных локал
//export const portDB = '10.23.197.201:5252';           //? Порт базы пров прод


//! Переменные
export let ObjectLogo = {
    srcLogo: '',
    codeLogo: '',
    rowDiv: {}
};

export let stanLi;                             //? Id шаблонов
export let divIdCounter = 0;                   //? Для счётчика
export let modifiet = 0;

export let userRole;
export let userStan;
export let userName;
export let jobTitle;

export let liHistory;                                                                              //? Для списка шаблонов
export let selectHistory = document.querySelector('.select-box-history');                          //? Получение селекта шаблонов
export let soValue = document.getElementById('soValue');                                           //? Получение инпута списка шаблонов
export let optionSearch = document.getElementById('optionSearch');                                 //? 
export let ulHistory = document.querySelector('.option-history');                                  //? Обработчик на блоке списка бирки


//--------------------------------------------------------------------------------------------------------------------------------------------

//* Функция сохранения пользователя в Куки
export function personCookie() {
    let cookiePerson = document.cookie;
    if (cookiePerson.includes('userRole') && cookiePerson.includes('userStan') && cookiePerson.includes('userName')) {
        let personRole = document.cookie.match(/userRole=(\w+)/)[1];
        let personStan = document.cookie.match(/userStan=(\w+)/)[1];
        let personName = document.cookie.match(/userName=([а-яА-Я\w\d\s\-.]+)/)[1];
        confirmationAuthorization(personRole, personStan, personName);
    } else {
        return;
    };
};
//* Функция почистить куки
export function deletCookie() {
    document.cookie = 'userRole=' + userRole + ';max-age=0';
    document.cookie = 'userStan=' + userStan + ';max-age=0';
    document.cookie = 'userName=' + userStan + ';max-age=0';
    return;
};
//* Функция проверки на авторизацию
export async function confirmationAuthorization(personRole, personStan, personName) {
    let login = document.getElementById('input-login').value;
    let password = document.getElementById('input-password').value;
    let person;
    if (typeof personRole != 'string') {
        person = await authorizationBack(login, password);
        userRole = person.userRole;
        userStan = person.mill;
        userName = person.userName;
        document.cookie = 'userRole=' + userRole + ';max-age=900';
        document.cookie = 'userStan=' + userStan + ';max-age=900';
        document.cookie = 'userName=' + userName + ';max-age=900';
    };
    if (userRole === undefined) {
        userRole = personRole;
        userStan = personStan;
        userName = personName;
    };
    if (userRole === 'root') {
        document.getElementById('block-authorization').style.display = 'none';
        document.getElementById('user-identification-text').innerText = 'Мастер!';
        let hader = document.getElementById('header');
        hader.innerText = 'Редактор Мастера';
        hader.style.fontSize = '35px';
        document.getElementById('user-indication').style.display = 'block';
        document.getElementById('control-button').style.display = 'block';
        document.getElementById('input-login').value = '';
        document.getElementById('input-password').value = '';
        return;
    } else if (userRole === 'administrator' || userRole === 'operator') {
        let stansPersone = userStanEntrenc();
        let rusStan;
        if (stansPersone === '350-Stan' && userRole === 'operator') {
            rusStan = ' 350-Стана';
            jobTitle = convertRole();
        } else if (stansPersone === '210-Stan' && userRole === 'operator') {
            rusStan = ' 210-Стана';
            jobTitle = convertRole();
        } else if (stansPersone === '212-Stan' && userRole === 'operator') {
            rusStan = ' 212-Стана';
            jobTitle = convertRole();
        } else if (userRole === 'administrator') {
            rusStan = '';
        };
        document.getElementById('block-authorization').style.display = 'none';
        document.getElementById('user-identification-text').innerText = userName + ':' + jobTitle + rusStan;
        document.getElementById('user-indication').style.display = 'block';
        document.getElementById('input-login').value = '';
        document.getElementById('input-password').value = '';
        return;
    } else {
        return;
    };
};
//* Функция Присвоение отступов выделенному элементу
export function assigningElement() {
    let top = document.getElementById('input-padding-bottom').value;
    let left = document.getElementById('input-padding-left').value;
    let elem = elementBorder();
    let height = Number(elem.offsetHeight);
    top = String(LABEL_HEIGHT - (height + (top / 2)));
    left = String(left / 2);
    elem.style.top = top + 'px';
    elem.style.left = left + 'px';
    modifietOn();
};
//* Функция Расчёт отступов выделенного элемента
export function calculationOfIndents(child) {
    let positionTop = Number(child.style.top.split('px').join(""));
    let positionLeft = Number(child.style.left.split('px').join(""));
    let height = Number(child.offsetHeight);
    let top = (LABEL_HEIGHT - (positionTop + height)) * 2;
    let left = positionLeft * 2;
    document.getElementById('input-padding-bottom').value = top;
    document.getElementById('input-padding-left').value = left;
};
//* Функция синхронизации с клавиатурой
document.addEventListener('keydown', function (event) {
    if (event.code === 'ArrowUp') {
        moveUp()
    } else if (event.code === 'ArrowDown') {
        moveDown()
    } else if (event.code === 'ArrowLeft') {
        moveLeft()
    } else if (event.code === 'ArrowRight') {
        moveRight()
    } else {
        return;
    };
});
//* Функция Выделения элементов бирки
export function selectionOfElements(idOfSelectedElement) {
    let child = idOfSelectedElement;
    let rowDivBlock = document.getElementById('label-borders').children;                        //? Получаем МАССИВ дочерних элементов дива
    for (let children of rowDivBlock) {                                                         //? Снимем выделение со всех элементов
        children.style.border = '0px';
    };
    child.style.border = "1px solid black";                                                     //? Присвоение Элементу свойства бордер
    if (child.id.includes("string")) {                                                          //? Сравнение id
        if (child.innerText.includes('<<')) {
            document.getElementById('add-string').innerText = "Добавить";                       //? Изменение Кнопки Редактировать строку на Добавить
            document.getElementById('editor-text-string').value = '';
        } else {
            document.getElementById('add-string').innerText = "Редактировать";                  //? Изменение Кнопки Добавить строку на Редактировать
            document.getElementById('editor-text-string').value = child.innerText;              //? Возвращение строки в инпуд
        };
    } else {
        document.getElementById('add-string').innerText = "Добавить";                           //? Изменение Кнопки Редактировать строку на Добавить
    };
    calculationOfIndents(child);
};
//* Фунция удаление Элемента
export function deleteBlock() {
    let id = elementBorder();
    if (!id) return;
    if (id)
        id.remove();
    document.getElementById('editor-text-string').value = '';
    document.getElementById('input-padding-bottom').value = '';
    document.getElementById('input-padding-left').value = '';
    document.getElementById('add-string').innerText = "Добавить";
    modifietOn()
};
//* Функция добавления параметра
export function addParams() {
    let params = document.getElementById('select-params').value;
    let param;
    if (params === 'Gost') {
        param = '&lt&ltGOST&gt&gt';
    } else if (params === 'HEAT') {
        param = '&lt&ltHEAT&gt&gt';
    } else if (params === 'DIAMETER') {
        param = '&lt&ltDIAMETER&gt&gt';
    } else if (params === 'STEEL_GRADE') {
        param = '&lt&ltSTEEL_GRADE&gt&gt';
    } else if (params === 'COIL_NO') {
        param = '&lt&ltCOIL_NO&gt&gt';
    } else if (params === 'WEIGHT') {
        param = '&lt&ltWEIGHT&gt&gt';
    } else if (params === 'CUSTOMER') {
        param = '&lt&ltCUSTOMER&gt&gt';
    } else if (params === 'SHIFT') {
        param = '&lt&ltSHIFT&gt&gt';
    } else if (params === 'KLASS') {
        param = '&lt&ltKLASS&gt&gt';
    } else if (params === 'ProductType') {
        param = '&lt&ltProductType&gt&gt';
    } else if (params === 'COIL_WGT_DATE') {
        param = '&lt&ltCOIL_WGT_DATE&gt&gt';
    } else if (params === 'SPECIFICATION') {
        param = '&lt&ltSPECIFICATION&gt&gt';
    } else if (params === 'LOT') {
        param = '&lt&ltLOT&gt&gt';
    } else if (params === 'CUTLENGTH') {
        param = '&lt&ltCUTLENGTH&gt&gt';
    } else {
        return;
    };
    document.getElementById('select-params').value = '';
    modifietOn();
    addDiv(param);
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//TODO: Уведомления и ограничения------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export function modifietOn() {
    modifiet = 1;
};
export function modifietOff() {
    modifiet = 0;
};
export function userStanEntrenc() {
    switch (userStan) {
        case 'mill350':
            return ('350-Stan');
        case 'mill210':
            return ('210-Stan');
        case 'mill212':
            return ('212-Stan');
    };
};
export function convertRole() {
    if (userRole === 'operator') {
        return ('Оператор')
    } else if (userRole === 'administrator') {
        return ('Бригадир')
    } else if (userRole === 'root') {
        return ('Мастер')
    };
};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//TODO: Функции отвечающие за логотипы-----------------------------------------------------------------------------------------------------------------------------------------------------------

//* Функция получения из бека имён логотипов и вставки их в селект
export async function addLogoName(nameLogo) {
    document.getElementById('errors').style.display = 'none';                           //? Скрыть блок ошибки           
    let select = document.getElementById('logo_selection');                             //? Получаем Селект Логотипов
    select.append(new Option);
    for (let i = 0; i < nameLogo.length; i++) {                                         //? Присвоим i каждое имя по очереди
        let name = nameLogo[i].name;                                                    //? Берём параметр имени без номера
        let newOption = new Option(name, name);                                         //? Создаём новый Option
        select.append(newOption);                                                       //? Вставляем в селект новый Option
    };
};
//* Функции расчёт вставки логотипа
export async function logoChoice(xName, xPosition, top, left) {
    let logo = document.getElementById('logo_selection').value;     //? Получение имени логотипа
    let result = ObjectLogo;
    if (typeof xName === "string") {
        result.srcLogo = '/images/logo/' + xName + '.png';
    } else {
        result.srcLogo = '/images/logo/' + logo + '.png';
    };
    result.rowDiv = choiseSrcImg(result.srcLogo, xPosition, xName, top, left);
    return result;
};
//* Функция Вставки логотипа
export function choiseSrcImg(srcLogo, xPosition, xName, top, left) {
    let parentDiv = document.createElement('div');
    parentDiv.style.zIndex = '4';
    parentDiv.style.position = 'absolute';
    parentDiv.style.left = '200px';
    parentDiv.style.top = '10px';
    parentDiv.style.display = 'flex';
    if (!xPosition) {
        xPosition = 'rotate(0deg)'
    };
    parentDiv.style.transform = xPosition;
    let imgLogo = document.createElement("img");
    parentDiv.appendChild(imgLogo);
    let valueId = document.getElementById('logo_selection').value;
    let divId;
    if (!valueId) {
        divId = 'logo_' + xName;
    } else {
        divId = 'logo_' + valueId;
    };
    parentDiv.id = divId;
    imgLogo.src = srcLogo;
    imgLogo.onload = () => positionLogolabel(top, left, divId);
    parentDiv.onclick = () => selectionOfElements(parentDiv);
    document.querySelector('#label-borders').appendChild(parentDiv);
    document.getElementById('logo_selection').value = '';
    modifiet = 1;
    return (parentDiv);
};
//* Функция расчёта позиции логотипа из Бирки
export function positionLogolabel(top, left, divId) {
    const logoElem = document.getElementById(divId);
    let height = Number(logoElem.offsetHeight);                                                         //? Получим его высоту
    const newTop = String((LABEL_HEIGHT - (height + (top / 2))) - 2);
    const newLeft = String(left / 2);
    logoElem.style.top = newTop + 'px';
    logoElem.style.left = newLeft + 'px';
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//TODO: Функции отвечающие за Строки----------------------------------------------------------------------------------------------------------------------------------------------------------

//* Функция Ручное добавление строки
export function addDiv(param) {
    let str = document.getElementById('editor-text-string').value;                                  //? Получение строки
    if (!str) {
        str = param;
    };
    let width = '125px';
    let height = '255px';
    let size = '20px';
    let bold = 'normal';
    let posit = '';
    modifietOn();
    addString(str, width, height, size, bold, posit);
};
//* Функция присвоения стилей добавленной строке
export function styleString(id, width, height, size, bold, posit) {
    let div = document.getElementById(id);                                                  //? Получаем созданный див
    div.style.top = height;                                                                 //? Задаём стиль для div блока
    div.style.left = width;                                                                 //? Задаём стиль для div блока
    div.style.fontSize = size;
    div.style.bold = bold;
    div.style.transform = posit;
};
//* Функция Создания DIV блока со строкой
export function addString(str, left, top, size, bold, posit) {
    let buttnName = document.getElementById('add-string').innerText;                                //? Получаем имя кнопки
    if (buttnName === 'Добавить') {                                                                 //? Проверка на состояние кнопки
        ++divIdCounter;                                                                             //? Счётчик на глобальную переменную
        let divText = document.createElement('div');                                                //? Создаём div блок
        divText.id = 'string_' + divIdCounter;                                                      //? Присвоение id
        divText.onclick = function () { selectionOfElements(divText); };                            //? Присвоение Свойства с вызовом функции
        let id = divText.id;                                                                        //? Получение ID элемента
        divText.style.display = 'inline-flex';                                                      //? Присвоение стиля элементу
        divText.style.whiteSpace = 'nowrap';                                                        //? Присвоение стиля элементу
        divText.style.zIndex = '5';                                                                 //? Задаём стиль для div блока
        divText.style.fontFamily = 'Swiss721';                                                      //? Задаём стиль для div блока
        divText.style.transform = "rotate(0deg)";                                                   //? Присвоение поворота строки по умолчанию
        divText.style.position = 'absolute';                                                        //? Задаём стиль для div блока
        if (typeof str === "string") {
            divText.innerHTML = str;                                                                //? Вставляем введённый текст из инпут
        } else {
            divText.innerHTML = '';
        };
        document.getElementById('label-borders').append(divText);                                   //? Вставляем блок div
        document.getElementById('editor-text-string').value = "";                                   //? Очистить стороку из инпута
        if (typeof top === "string") {                                                              //? Проверка на тип пришедших данных
            posit = divText.style.transform;
            styleString(id, left, top, size, bold, posit);                                          //? Вызов функции вставки строки
        } else {
            divText.style.fontSize = sizeString(size);                                              //? Задаём стиль для div блока
            divText.style.fontWeight = bold;                                                        //? Задаём жирность шрифта
            divText.style.transform = posit;                                                        //? Присвоение поворота строки
            let x = Number(divText.offsetHeight);                                                   //? Получаем высоту элемента
            top = String((LABEL_HEIGHT - (x + (top / 2))) - 2);                                     //? Отступ снизу делённый на два
            top = top + 'px';
            left = String(left / 2);
            left = left + 'px';
            styleString(id, left, top);
        };
    } else if (buttnName === 'Редактировать') {
        let div = elementBorder();
        let inputText = document.getElementById('editor-text-string').value;                        //? Получение строки
        if (div.id.includes('string')) {                                                            //? Проверка элемента на соответствие ID
            div.innerHTML = inputText;                                                              //? Присвоение новоги текста элементу
        } else {
            return;
        };
    };
};
//* Функция присвоения шрифта Строке
export function apply() {
    let elem = elementBorder();
    let idName = elem.id;
    let option = document.getElementById('selectPx').value;
    modifietOn();
    if (idName.includes('string')) {
        switch (option) {
            case '16':
                elem.style.fontSize = '16px';
                break;
            case '18':
                elem.style.fontSize = '18px';
                break;
            case '20':
                elem.style.fontSize = '20px';
                break;
            case '22':
                elem.style.fontSize = '22px';
                break;
            case '24':
                elem.style.fontSize = '24px';
                break;
            case '26':
                elem.style.fontSize = '26px';
                break;
            default:
        };
    } else {

    };
};
//* Функция присвоение жирного шрифта
export function fatty() {
    let elem = elementBorder();
    let id = elem.id;
    modifietOn();
    if (id.includes('string')) {
        elem.style.fontWeight = 'bolder';
    } else {
        return;
    };
};
export function fattyOff() {
    let elem = elementBorder();
    let id = elem.id;
    modifietOn();
    if (id.includes('string')) {
        elem.style.fontWeight = 'normal';
    } else {
        return;
    };
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//TODO: Функция отвечающая за Штрихкод----------------------------------------------------------------------------------------------------------------------------------------------------------

//* Функция Вставки штрихкода
export function insertBarCode(left, top) {
    let div = document.createElement('div');                            //? Создаём div блок
    let imgBar = document.createElement("img");                         //? Создаём img блок
    let text = document.createElement('p');                             //? Создаём блок p
    div.style.display = 'flex-bocks';                                   //? Присваиваем стиль div блоку
    div.style.textAlign = 'center';                                     //? Присваиваем стиль div блоку
    div.style.zIndex = '4';                                             //? Присваиваем стиль div блоку
    div.style.position = 'absolute';                                    //? Присваиваем стиль div блоку
    div.style.transform = 'rotate(0deg)';                               //? Поворот штрихкода
    div.id = 'divBar';                                                  //? Присваиваем id div блоку
    div.onclick = function () { selectionOfElements(div) };             //? Присваиваем атрибут онклик с вызовом функции
    imgBar.src = "/images/barcode.png";                                 //? Вставляем svg в блок img
    text.id = 'textBar';                                                //? Присваиваем id блоку p
    text.style.fontSize = '12px';                                       //? Присваиваем стиль блоку p
    text.style.margin = '0px';                                          //? Присваиваем стиль блоку p
    text.style.padding = '0px';                                         //? Присваиваем стиль блоку p
    text.innerText = '00000-0000000-000';                               //? Задаём строковае значение блоку р
    div.appendChild(imgBar);                                            //? Вставляем в div блок img блок
    div.appendChild(text);                                              //? Вставляем в div блок p блок
    imgBar.onload = () => positionBarCode(top, left, div.id);
    document.querySelector('#label-borders').appendChild(div);          //? Вставляем в родительский блок div блок
    modifietOn();
};
export function positionBarCode(top, left, barId) {
    let barElem = document.getElementById(barId);
    if (typeof top === 'number') {
        let height = Number(barElem.offsetHeight);
        top = String((LABEL_HEIGHT - ((top / 2) + height)) - 2);
        barElem.style.top = top + 'px';                                     //? Присваиваем стиль div блоку
        left = String(left / 2);
        barElem.style.left = left + 'px';                                   //? Присваиваем стиль div блоку
    } else {
        barElem.style.top = '440px';                                        //? Присваиваем стиль div блоку
        barElem.style.left = '140px';                                       //? Присваиваем стиль div блоку
    };
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//TODO: Функции Отвечающие за Список Бирок------------------------------------------------------------------------------------------------------------------------------------------------------

//* Функция редактирования бирки из истории
export function buttonEditor() {
    let listNameLabel = document.querySelector('.option-history').children;
    let inputHistory = document.getElementById('name-history-label').value;
    if (inputHistory === '') {
        let sms = 'Введите имя!';
        let styleBlock = 'block';
        let backgroundBlock = 'red';
        openError(sms, styleBlock, backgroundBlock);
        setTimeout(closeError, 4000);
        return;
    }
    for (let i of listNameLabel) {
        if (i.innerText === inputHistory) {
            let sms = 'Шаблон с данным именем уже существует!';
            let styleBlock = 'block';
            let backgroundBlock = 'red';
            openError(sms, styleBlock, backgroundBlock);
            setTimeout(closeError, 4000);
            return;
        };
    };
    savelabelBack(inputHistory);
};
//* Функция выбора имени бирки
export async function inputTextHistory(liHistory) {
    let text = liHistory.innerText;
    stanLi = liHistory.className;
    soValue.value = text;
    labelNameControl = text;
    selectHistory.classList.remove('active');
    await labelCode(text);
};
//* Функция Почистить бирку
export function сleanTheTag() {
    document.getElementById('label-borders').innerHTML = '';                                 //? Очищаем бирку
    document.getElementById('editor-text-string').value = "";                                //? Очистить стороку из инпута
    document.getElementById('add-string').innerText = 'Добавить';
    document.getElementById('input-padding-bottom').value = '';
    document.getElementById('input-padding-left').value = '';
};
//* Функция Сохранить бирку
export async function savelabelBack(inputHistory) {
    let namelabel;
    if (!userRole) {
        let sms = 'Сохранение Запрещено!\nВы не Авторизованный пользователь!';
        let styleBlock = 'block';
        let backgroundBlock = 'red';
        openError(sms, styleBlock, backgroundBlock);
        setTimeout(closeError, 5000);
        return;
    };
    let label = await constructorlabelCode();                                                                   //? Получим код бирки
    if (typeof inputHistory === 'string') {
        namelabel = inputHistory;
    } else {
        namelabel = document.getElementById('soValue').value;                                                   //? Получим имя бирки
    };
    if (userRole === 'operator') {
        if (labelNameControl.includes('$')) {
            if (labelNameControl === namelabel) {
                let sms = 'Шаблон Запрещён к редакции!';
                let styleBlock = 'block';
                let backgroundBlock = 'red';
                openError(sms, styleBlock, backgroundBlock);
                setTimeout(closeError, 4000);
                return;
            };
        };
    };
    namelabel = namelabel + '.ini';
    if (!namelabel) { return };
    let stan = stanTarget();
    try {
        await fetch(`http://10.23.${set[stan]}.${set2}:${ports}/label/Changelabel?labelName=${encodeURI(namelabel)}`,
            {
                method: 'post',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ body: label })
            });
    } catch {
        let sms = 'Ошибка:\nНе удалось сохранить Шаблон!\nОбратитесь в Службу Поддержки по номеру: 1032.';
        let styleBlock = 'block';
        let backgroundBlock = 'red';
        openError(sms, styleBlock, backgroundBlock);
    };
    let status = 'Save';
    let dataTime = new Date();
    let controlSaveLabel = {
        Stan: stan,
        Status: status,
        NameLabel: namelabel,
        Date: dataTime.toISOString(),
        labelCode: label,
    };
    document.getElementById('name-history-label').value = '';
    document.getElementById('soValue').value = '';
    сleanTheTag();
};
//* Функция контроля за последней отправкой на авто печать
export async function postControlAutoPrint(stan, controlDate, controlTime, namelabel) {
    let controlData = await controlGetAutoPrint();
    if (stan === '350-Stan') {
        document.getElementById('role-user-350').innerText = jobTitle;
        document.getElementById('date-user-350').innerText = controlDate;
        document.getElementById('time-user-350').innerText = controlTime;
        document.getElementById('name-user-350').innerText = userName;
        document.getElementById('label-name-user-350').innerText = namelabel;
    } else if (stan === '210-Stan') {
        document.getElementById('role-user-210').innerText = jobTitle;
        document.getElementById('date-user-210').innerText = controlDate;
        document.getElementById('time-user-210').innerText = controlTime;
        document.getElementById('name-user-210').innerText = userName;
        document.getElementById('label-name-user-210').innerText = namelabel;
    } else if (stan === '212-Stan') {
        document.getElementById('role-user-212').innerText = jobTitle;
        document.getElementById('date-user-212').innerText = controlDate;
        document.getElementById('time-user-212').innerText = controlTime;
        document.getElementById('name-user-212').innerText = userName;
        document.getElementById('label-name-user-212').innerText = namelabel;
    };
};

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
