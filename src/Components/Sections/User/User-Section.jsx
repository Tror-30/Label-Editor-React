import './style-user-section.css';
import { getDataUser, editorDataUser, addNewUser, clearDataUser, deleteUser } from './function-user-section';
import { postControlAutoPrint } from '../../function-row';
import Error from '../../Alert-Errors/Error';
//* Секция редактирования и контроля пользователей
function UserSection() {
    return (
        <div id="section-UserLay-editor">
            <div id="row-1">
                <div id="row-1-left">
                    <div id="user-list">
                        <div className="person-date">
                            <p id="text-login">Логин:</p>
                            <input className="input-text-user" id="input-login-user" />
                        </div>
                        <div className="person-date">
                            <p id="text-password">Пароль:</p>
                            <input type="text" className="input-text-user" id="input-password-user" />
                        </div>
                        <div className="person-date">
                            <p id="text-role">Должность:</p>
                            <select className="select-text-user" id="select-role-user">
                                <option value=""></option>
                                <option value="operator">Оператор</option>
                                <option value="administrator">Бригадир</option>
                                <option value="root">Заместитель-Мастера</option>
                            </select>
                        </div>
                        <div className="person-date">
                            <p id="text-stan-user">Стан:</p>
                            <select className="select-text-user" id="select-stan-user">
                                <option value=""></option>
                                <option value="mill350">Стан-350</option>
                                <option value="mill210">Стан-210</option>
                                <option value="mill212">Стан-212</option>
                                <option value="all">Все</option>
                            </select>
                        </div>
                        <div className="person-date">
                            <p id="text-name-user">ФИО:</p>
                            <input type="text" className="input-text-user" id="input-name-user" />
                        </div>
                        <button id="new-add-user" onClick={addNewUser}>Новый</button>
                        <button id="save-data-user" onClick={editorDataUser}>Сохранить</button>
                        <button id="delet-data-user" onClick={deleteUser}>Удалить</button>
                        <button id="clear-data-user" onClick={clearDataUser}>Очистить</button>
                    </div>
                    <div id="block-management-user">
                        <div id="header-management-user">
                            <p id="header-select-user">Список Пользователей</p>
                            <select name="select-login-user" id="select-login" onChange={getDataUser}>
                            </select>
                        </div>
                        <div id="section-management-user-date">
                            <p id="header-list-get-auto-print">История отправлений на Авто. Печать</p>
                            <div id="history-get-auto-print">

                            </div>
                        </div>
                    </div>
                </div>
                <div id="row-1-right">
                    <div id="header-ro-1-right">
                        Контроль отправки на Авто. Печать
                    </div>
                    <button id="new-data-user-control" onClick={postControlAutoPrint}>Обновить Данные</button>
                    <div id="block-row-1-right">
                        <div className="block-control-print-stan">
                            <div id="control-print-350-stan">
                                <p className="header-name-stan">Стан-350</p>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Должность:</p>
                                    <div id="role-user-350">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Шаблон:</p>
                                    <div id="label-name-user-350">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Дата:</p>
                                    <div id="date-user-350">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Время:</p>
                                    <div id="time-user-350">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">ФИО:</p>
                                    <div id="name-user-350">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-control-print-stan">
                            <div id="control-print-210-stan">
                                <p className="header-name-stan">Стан-210</p>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Должность:</p>
                                    <div id="role-user-210">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Шаблон:</p>
                                    <div id="label-name-user-210">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Дата:</p>
                                    <div id="date-user-210">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Время:</p>
                                    <div id="time-user-210">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">ФИО:</p>
                                    <div id="name-user-210">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block-control-print-stan">
                            <div id="control-print-212-stan">
                                <p className="header-name-stan">Стан-212</p>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Должность:</p>
                                    <div id="role-user-212">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Шаблон:</p>
                                    <div id="label-name-user-212">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Дата:</p>
                                    <div id="date-user-212">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">Время:</p>
                                    <div id="time-user-212">

                                    </div>
                                </div>
                                <div className="block-date-control-user">
                                    <p className="header-name-stan">ФИО:</p>
                                    <div id="name-user-212">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Error />
        </div>
    );
};

export default UserSection;