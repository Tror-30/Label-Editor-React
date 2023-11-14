import './style-autorization.css';
import { exitAutorization, authorizationBack } from './function-autorization.js';

//* Блок Авторизации
function Autorization() {
    return (
        <>
            <div id="block-authorization">
                <input class="input-text-authorization" id="input-login" type="text" placeholder="Введите Логин" />
                <input class="input-text-authorization" id="input-password" type="password" placeholder="Введите Пароль" />
                <button id="button-confirmation-authorization" onClick={authorizationBack}>Войти</button>
            </div>        
            <div id="user-indication">
                <div id="user-identification-text"></div>
                <button id="exit-user" onClick={exitAutorization}>Выйти</button>
            </div>                
        </>
    )
};
export default Autorization;