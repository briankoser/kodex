module.exports = function (name, title) {
    return `
<svg class="icon icon-${name}" width="0.75em" height="0.75em">
  ${title == undefined ? "" : `<title>${title}</title>`}
  <use href="/img/orion/orion-svg-sprite.svg#${name}-1"></use>
</svg>`;
}