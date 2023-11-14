import { logoNameBak, labelName } from "../function-backand-editor";

//* Получение списка бирок с 350-стана
export async function label350() {
    document.getElementById('350-Stan').style.background = 'red';
    document.getElementById('210-Stan').style.background = 'rgb(172, 170, 170)';
    document.getElementById('212-Stan').style.background = 'rgb(172, 170, 170)';
    await labelName();
    document.getElementById('logo_selection').innerHTML = '';
    await logoNameBak();
};
//* Получение списка бирок с 210-стана
export async function label210() {
    document.getElementById('350-Stan').style.background = 'rgb(172, 170, 170)';
    document.getElementById('210-Stan').style.background = 'red';
    document.getElementById('212-Stan').style.background = 'rgb(172, 170, 170)';
    await labelName();
    document.getElementById('logo_selection').innerHTML = '';
    await logoNameBak();
};
//* Получение списка бирок с 212-стана
export async function label212() {
    document.getElementById('350-Stan').style.background = 'rgb(172, 170, 170)';
    document.getElementById('210-Stan').style.background = 'rgb(172, 170, 170)';
    document.getElementById('212-Stan').style.background = 'red';
    await labelName();
    document.getElementById('logo_selection').innerHTML = '';
    await logoNameBak();
};