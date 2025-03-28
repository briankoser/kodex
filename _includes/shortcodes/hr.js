module.exports = function (data, metadata, tokens) {
    return `
<div class="hr-container">
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 520 40" class="hr-image">
        <circle cx="20"  cy="20" r="20" style="fill:${tokens.colorBrian}" />
        <circle cx="100" cy="20" r="20" style="fill:${tokens.colorMelissa}" />
        <circle cx="180" cy="20" r="20" style="fill:${tokens.colorLydia}" />
        <circle cx="260" cy="20" r="20" style="fill:${tokens.colorAmber}" />
        <circle cx="340" cy="20" r="20" style="fill:${tokens.colorPenelope}" />
        <circle cx="420" cy="20" r="20" style="fill:${tokens.colorSusanna}" />
        <circle cx="500" cy="20" r="20" style="fill:${tokens.colorVerity}" />
    </svg>
    <hr class="visuallyhidden">
</div>`;
};