module.exports = function (data) {
    return `
<div class="swatch ${data.color === 'black' ? 'black' : ''}" 
    style="background-color:var(--color-${data.color}); color:var(--color-${data.brightness === 'light' ? 'black' : 'white'});">
    ${data.text}
</div>`;
}