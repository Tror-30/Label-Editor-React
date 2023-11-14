

//TODO: Функция переключения темы и цвета бирок
const theme = {
    //* Функция смены темы на Тёмную
    themeOn: function () {
        let valueSelect = document.getElementById('select-label-backgraund').value;
        let buttonTheme = document.getElementById('hidcheck');
        if (buttonTheme.checked) {
            document.body.style.backgroundColor = '#293133';
            document.getElementById('label-borders').style.backgroundImage = `url("../SVG/label-color/label-${valueSelect}-2.svg")`;
            document.cookie = 'theme=dark';
        } else {
            document.body.style.backgroundColor = '#176fd7';
            document.getElementById('label-borders').style.backgroundImage = `url("../SVG/label-color/label-${valueSelect}.svg")`;
            document.cookie = 'theme=light';
        };
    },
    //* Функция установки темы из куки при загрузке страницы
    themeCookie: function () {
        if (!document.cookie) { return };
        let theme = document.cookie.match(/theme=(\w+)/)[1];
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#293133';
            document.getElementById('label-borders').style.backgroundImage = `url("../SVG/label-color/label-white-2.svg")`;
            document.getElementById('hidcheck').checked = true;
        } else if (theme === 'light') {
            document.body.style.backgroundColor = '#176fd7';
            document.getElementById('label-borders').style.backgroundImage = `url("../SVG/label-color/label-white.svg")`;
            document.getElementById('hidcheck').checked = false;
        } else {
            return;
        };
    },
    //* Функция выбора цвета бирки
};

export const themeOn = theme.themeOn;
export const themeCookie = theme.themeCookie;