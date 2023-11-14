import { stanTarget, handPrint, autoHandPrint } from '../function-backand-editor.js';
import { userStanEntrenc, userRole, modifiet } from '../function-row';
import { closeError } from '../Alert-Errors/function-error.js';

export async function confirmAlert() {
    let error = document.getElementById('errors');
    let errorText = document.getElementById('text-error');
    let stan = stanTarget();
    document.getElementById('alert-print').style.display = 'none';
    let stanUser = userStanEntrenc();
    if (!userRole) {
        errorText.innerText = 'Печать Запрещена!\nВы не Авторизованный пользователь!';
        errorText.style.display = 'block';
        error.style.display = 'block';
    } else if (userRole === 'administrator' || userRole === 'root') {
        await handPrint();
        errorText.innerText = 'Отправленно!';
        errorText.style.display = 'block';
        error.style.backgroundColor = '#00FF00';
        error.style.display = 'block';
    } else if (userRole === 'operator') {
        if (stanUser === stan) {
            if (modifiet === 0) {
                await handPrint();
                errorText.innerText = 'Отправленно!';
                errorText.style.display = 'block';
                error.style.backgroundColor = '#00FF00';
                error.style.display = 'block';
            } else {
                errorText.innerText = 'Печать Запрещена!\nВы изменили Шаблон!';
                errorText.style.display = 'block';
                error.style.display = 'block';
            };
        } else {
            errorText.innerText = 'Печать Запрещена!\nВы выбрали не тот Стан!';
            errorText.style.display = 'block';
            error.style.display = 'block';
        };
    };
    setTimeout(closeError, 4000);
    return;
};
export function cancelAlert() {
    document.getElementById('alert-print').style.display = 'none';
    return;
};
export async function confirmAlertAuto() {
    let error = document.getElementById('errors');
    let errorText = document.getElementById('text-error');
    document.getElementById('alert-printAuto').style.display = 'none';
    let stan = stanTarget();
    let stanUser = userStanEntrenc();
    if (!userRole) {
        errorText.innerText = 'Печать Запрещена!\nВы не Авторизованный пользователь!';
        errorText.style.display = 'block';
        error.style.display = 'block';
    } else if (userRole === 'administrator' || userRole === 'root') {
        await autoHandPrint();
        error.style.backgroundColor = '#00FF00';
        errorText.innerText = 'Отправленно!';
        errorText.style.display = 'block';
        error.style.display = 'block';
    } else if (userRole === 'operator') {
        if (stanUser === stan) {
            if (modifiet === 0) {
                await autoHandPrint();
                error.style.backgroundColor = '#00FF00';
                errorText.innerText = 'Отправленно!';
                errorText.style.display = 'block';
                error.style.display = 'block';
            } else {
                errorText.innerText = 'Печать Запрещена!\nВы изменили Шаблон!';
                errorText.style.display = 'block';
                error.style.display = 'block';
            };
        } else {
            errorText.innerText = 'Печать Запрещена!\nВы выбрали не тот Стан!';
            errorText.style.display = 'block';
            error.style.display = 'block';
        };
    };
    setTimeout(closeError, 4000);
    return;
};
export function cancelAlertAuto() {
    document.getElementById('alert-printAuto').style.display = 'none';
    return;
};