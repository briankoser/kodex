module.exports = function boardGameListShortCode (data) {
    return `
<div class="c-check-field">
    <input type='checkbox' name='${data.for}' id='${data.for}' class='c-check-field__input' value='true' />
    <input type='hidden' name='${data.for}' value='false' />
    <label for='${data.for}' class='c-check-field__decor' aria-hidden='true' role='presentation'></label>
    <label for='${data.for}' class='c-check-field__label'>${data.label}</label>
</div>`;
}