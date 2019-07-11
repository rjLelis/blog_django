export function removeClass(element, className) {
    element.classList.remove(className);
}

export function addClass(element, className) {
    element.classList.add(className);
}

export function createEmailHint() {
    const div_email = document.getElementById('div_id_email');
    const hint_email = document.createElement('small');

    hint_email.classList.add('form-text', 'text-muted', 'hide');
    hint_email.setAttribute('id', 'hint_id_email');

    div_email.appendChild(hint_email);
}