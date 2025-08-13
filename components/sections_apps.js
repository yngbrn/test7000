export default function sections_apps() {
  const html = `<section
  class="relative overflow-hidden bg-scheme-background text-scheme-text bg-scheme-gradient "
  data-color-scheme=""
>
  <div class="section-content py-section-vertical-spacing px-section">
    <div class="mx-auto max-w-site  card">
      <div class="card__surface p-5 lg:p-10">
        
          
        
      </div>
    </div>
  </div>
</section>


&#123;
  "name": "t:sections.apps.name",
  "settings": [
    &#123;
      "type": "checkbox",
      "id": "apply_vertical_spacing",
      "label": "t:sections.apps.settings.apply_vertical_spacing.label",
      "default": true
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "apply_horizontal_spacing",
      "label": "t:sections.apps.settings.apply_horizontal_spacing.label",
      "default": true
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "display_on_card",
      "label": "t:common.settings.display_on_card.label",
      "default": false
    &#125;,
    &#123;
      "type": "select",
      "id": "content_width_desktop",
      "label": "t:sections.apps.settings.content_width_desktop.label",
      "default": "lg:w-full",
      "options": [
        &#123;
          "value": "lg:w-1/3",
          "label": "t:common.options.one_third.label"
        &#125;,
        &#123;
          "value": "lg:w-1/2",
          "label": "t:common.options.one_half.label"
        &#125;,
        &#123;
          "value": "lg:w-2/3",
          "label": "t:common.options.two_thirds.label"
        &#125;,
        &#123;
          "value": "lg:w-full",
          "label": "t:common.options.full_width.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_color"
    &#125;,
    &#123;
      "type": "color_scheme",
      "id": "color_scheme",
      "default": "scheme1",
      "label": "t:common.settings.color_scheme.label"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "use_gradient_background",
      "label": "t:common.settings.use_gradient_background.label"
    &#125;
  ],
  "blocks": [
    &#123;
      "type": "@app"
    &#125;
  ],
  "presets": [
    &#123;
      "name": "t:sections.apps.presets.name"
    &#125;
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
