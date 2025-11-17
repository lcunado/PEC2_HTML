module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-scss'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [
      [
        { properties: ['content'] },
        { properties: ['position', 'inset', 'top', 'right', 'bottom', 'left', 'z-index'] },
        { properties: ['display', 'visibility'] },
        { properties: ['flex', 'flex-grow', 'flex-shrink', 'flex-basis', 'flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'gap'] },
        { properties: ['grid', 'grid-template', 'grid-template-columns', 'grid-template-rows', 'grid-area', 'place-items'] },
        { properties: ['width', 'min-width', 'max-width', 'height', 'min-height', 'max-height'] },
        { properties: ['margin', 'padding'] },
        { properties: ['border', 'border-radius', 'outline'] },
        { properties: ['background', 'box-shadow'] },
        { properties: ['color', 'font', 'font-size', 'line-height', 'text-align', 'text-transform', 'text-wrap'] },
        { properties: ['opacity', 'transform'] }
      ],
      { unspecified: 'bottomAlphabetical' }
    ],
    'color-function-notation': 'modern',
    'selector-class-pattern': '^[a-z]([a-z0-9-]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/dollar-variable-pattern': '^[_a-z0-9-]+$',
  }
}