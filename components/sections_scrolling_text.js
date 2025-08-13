export default function sections_scrolling_text() {
  const html = `<section
  class="bg-scheme-background text-scheme-text bg-scheme-gradient"
  data-color-scheme=""
>
  
</section>


&#123;
  "name": "t:sections.scrolling_text.name",
  "settings": [
    &#123;
      "type": "paragraph",
      "content": "t:common.settings.paragraph_if_a_user"
    &#125;,
    &#123;
      "type": "text",
      "id": "text",
      "label": "t:common.settings.text.label",
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "repeat_text",
      "default": true,
      "label": "t:common.settings.repeat_text.label",
      "info": "t:common.settings.repeat_text.info"
    &#125;,
    &#123;
      "type": "select",
      "id": "shape_between_text",
      "label": "t:common.settings.shape_between_text.label",
      "options": [
        &#123;
          "value": "none",
          "label": "t:common.options.none.label"
        &#125;,
        &#123;
          "value": "circle",
          "label": "t:common.options.circle.label"
        &#125;,
        &#123;
          "value": "diamond",
          "label": "t:common.options.diamond.label"
        &#125;,
        &#123;
          "value": "triangle",
          "label": "t:common.options.triangle.label"
        &#125;,
        &#123;
          "value": "star",
          "label": "t:common.options.star.label"
        &#125;,
        &#123;
          "value": "10_point_star",
          "label": "t:common.options.10_point_star.label"
        &#125;,
        &#123;
          "value": "flower",
          "label": "t:common.options.flower.label"
        &#125;
      ],
      "default": "10_point_star"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "animate_shape_between_text",
      "default": true,
      "label": "t:common.settings.animate_shape_between_text.label"
    &#125;,
    &#123;
      "type": "url",
      "id": "link",
      "label": "t:common.settings.link.label"
    &#125;,
    &#123;
      "type": "select",
      "id": "font",
      "label": "t:common.settings.font.label",
      "options": [
        &#123;
          "value": "font-heading heading-secondary",
          "label": "t:common.options.heading.label"
        &#125;,
        &#123;
          "value": "body",
          "label": "t:common.options.body.label"
        &#125;
      ],
      "default": "font-heading heading-secondary"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "apply_effects",
      "label": "t:common.settings.apply_effects.label",
      "default": false,
      "info": "t:common.settings.apply_effects.info"
    &#125;,
    &#123;
      "type": "range",
      "id": "mobile_text_scale",
      "min": -2,
      "max": 7,
      "step": 1,
      "label": "t:common.settings.mobile_text_scale.label",
      "default": 2
    &#125;,
    &#123;
      "type": "range",
      "id": "desktop_text_scale",
      "min": -2,
      "max": 11,
      "step": 1,
      "label": "t:common.settings.desktop_text_scale.label",
      "default": 4
    &#125;,
    &#123;
      "type": "range",
      "id": "speed",
      "min": 10,
      "max": 400,
      "step": 10,
      "label": "t:common.settings.speed.label",
      "default": 120
    &#125;,
    &#123;
      "type": "select",
      "id": "direction",
      "label": "t:common.settings.direction.label",
      "options": [
        &#123;
          "value": "",
          "label": "t:common.options.right_to_left.label"
        &#125;,
        &#123;
          "value": "reverse",
          "label": "t:common.options.left_to_right.label"
        &#125;
      ],
      "default": ""
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
  "presets": [
    &#123;
      "name": "t:sections.scrolling_text.name"
    &#125;
  ],
  "disabled_on": &#123;
    "groups": [
      "header",
      "footer",
      "aside"
    ]
  &#125;
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
