document.addEventListener('DOMContentLoaded', () => {
    const backgroundColorPicker = document.getElementById('backgroundColorPicker');
    const textColorPicker = document.getElementById('textColorPicker');
    const buttonColorPicker = document.getElementById('buttonColorPicker');
    const applyThemeButton = document.getElementById('applyTheme');
    const saveThemeButton = document.getElementById('saveTheme');
    const savedThemesContainer = document.getElementById('savedThemesContainer');

    applyThemeButton.addEventListener('click', () => {
        applyTheme({
            backgroundColor: backgroundColorPicker.value,
            textColor: textColorPicker.value,
            buttonColor: buttonColorPicker.value
        });
    });

    saveThemeButton.addEventListener('click', () => {
        const theme = {
            backgroundColor: backgroundColorPicker.value,
            textColor: textColorPicker.value,
            buttonColor: buttonColorPicker.value
        };
        saveTheme(theme);
    });

    function applyTheme(theme) {
        document.body.style.backgroundColor = theme.backgroundColor;
        document.body.style.color = theme.textColor;
        document.querySelectorAll('button').forEach(button => {
            button.style.backgroundColor = theme.buttonColor;
            button.style.color = theme.textColor;
        });
    }

    function saveTheme(theme) {
        const themeDiv = document.createElement('div');
        themeDiv.classList.add('saved-theme');
        themeDiv.style.backgroundColor = theme.backgroundColor;
        themeDiv.style.color = theme.textColor;
        themeDiv.innerText = 'Apply Theme';
        themeDiv.addEventListener('click', () => {
            applyTheme(theme);
        });
        savedThemesContainer.appendChild(themeDiv);
    }
});
