module.exports = function (name) {
    return `
<svg class="icon icon-${name}" width="0.75em" height="0.75em">
  <use href="/img/orion/orion-svg-sprite.svg#${name}-1"></use>
</svg>`;
}