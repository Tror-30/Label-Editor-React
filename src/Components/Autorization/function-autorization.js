import { portDB } from "../function-row.js";
import { closeError, openError } from "../Alert-Errors/function-error.js";
import { deletCookie, userRole, userStan } from "../function-row.js";

export async function authorizationBack(login, password) {
    let person;
    try {
        person = await fetch(`http://${portDB}/api/spc/common/labels/user-authenticate`, {
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'accept': 'application/json; charset=utf-8',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userLogin": login,
                "userPassword": password
            })
        });
        if (person.status == 204) {
            return;
        } else if (person.status == 403) {
            let sms = 'Не верный логин или пароль';
            let styleBlock = 'block';
            let backgroundBlock = 'reb';
            openError(sms, styleBlock, backgroundBlock);
        } else if (person.status == 200) {
            person = await person.json();
            return (person);
        };
    } catch {
        let sms = 'Нет связи! Обратитесь в службу поддержки по номеру: 1032';
        let styleBlock = 'block';
        let backgroundBlock = 'reb';
        openError(sms, styleBlock, backgroundBlock);
    };
    setTimeout(closeError, 4000);
    return;
};
export function exitAutorization() {
    document.getElementById('block-authorization').style.display = 'block';
    let hader = document.getElementById('header');
    hader.innerText = 'Редактор Бирки';
    hader.style.fontSize = '45px';
    document.getElementById('control-button').style.display = 'none';
    document.getElementById("section-UserLay-editor").style.display = 'none';
    document.getElementById("section-add-logo-label").style.display = 'none';
    document.getElementById("section-editor").style.display = 'block';
    deletCookie();
    userRole = '';
    userStan = '';
    document.getElementById('user-identification-text').innerText = '';
    document.getElementById('user-indication').style.display = 'none';
};