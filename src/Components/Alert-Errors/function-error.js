

export function closeError() {
    let error = document.getElementById('errors');
    error.style.backgroundColor = 'red';
    let errorText = document.getElementById('text-error');
    errorText.innerText = '';
    errorText.style.display = 'none';
    error.style.display = 'none';
    return;
};
export function openError( sms, styleBlock, bagraundBlock ) {
    let error = document.getElementById('errors');
    let errorText = document.getElementById('text-error');
    errorText.innerText = sms;
    errorText.style.display = styleBlock;
    error.style.display = styleBlock;
    error.style.backgroundColor = bagraundBlock;
};