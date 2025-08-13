export default function sections_free_shipping_bar() {
  const html = `


  
    <span data-content x-html-if-set="contentHTML"></span>
  

  
    
      <div
        class="py-1 text-center text-sm text-current lg:py-2"
      >
        <p class="px-5 lg:px-0"></p>
      </div>
    
      
    
  

  <data-island
    role="banner"
    class="border-section-border relative border-b-section text-center"
    data-color-scheme=""
    id=""
    x-data="FreeShippingBar"
    
      style="--progress: %;"
      :style="styleString"
    
  >
    <div class="bg-scheme-background text-scheme-text bg-scheme-gradient">
      
    </div>
    
      <div
        class="absolute inset-0  transition-[clip-path_150ms_cubic-bezier(0.4,_0,_1,_1)]"
        style="clip-path: inset(0% calc(100% - var(--progress)) 0% 0%);"
        aria-hidden="true"
      >
        
      </div>
    
  </data-island>



  <style>
    # &#123;
      --section-border-thickness: px;
    &#125;
  </style>



&#123;
  "name": "t:sections.free_shipping_bar.name",
  "settings": [
    &#123;
      "type": "paragraph",
      "content": "t:sections.free_shipping_bar.settings.paragraph_configure_the_threshold"
    &#125;,
    &#123;
      "type": "select",
      "id": "display",
      "label": "t:sections.announcement_bar.settings.display.label",
      "options": [
        &#123;
          "value": "scrolling_text",
          "label": "t:sections.announcement_bar.settings.display.options.scrolling_text.label"
        &#125;,
        &#123;
          "value": "static",
          "label": "t:sections.announcement_bar.settings.display.options.static.label"
        &#125;
      ],
      "default": "static"
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
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_bottom_border",
      "default": true,
      "label": "t:sections.free_shipping_bar.settings.show_bottom_border.label"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.free_shipping_bar.settings.header_progress_bar"
    &#125;,
    &#123;
      "type": "select",
      "id": "progress_bar_color",
      "label": "t:sections.free_shipping_bar.settings.progress_bar_color.label",
      "default": "bg-scheme-accent-1 text-scheme-accent-1-contrast",
      "options": [
        &#123;
          "value": "bg-scheme-text text-scheme-text-contrast",
          "label": "t:common.options.text.label"
        &#125;,
        &#123;
          "value": "bg-scheme-accent-1 text-scheme-accent-1-contrast",
          "label": "t:common.options.accent_1.label"
        &#125;,
        &#123;
          "value": "bg-scheme-accent-2 text-scheme-accent-2-contrast",
          "label": "t:common.options.accent_2.label"
        &#125;,
        &#123;
          "value": "bg-scheme-card text-scheme-card-text",
          "label": "t:common.options.card.label"
        &#125;,
        &#123;
          "value": "bg-scheme-gradient text-scheme-text",
          "label": "t:common.options.gradient.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_progress_bar",
      "default": true,
      "label": "t:sections.free_shipping_bar.settings.show_progress_bar.label"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.announcement_bar.settings.header_scrolling_text"
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
    &#125;
  ],
  "presets": [
    &#123;
      "name": "t:sections.free_shipping_bar.name"
    &#125;
  ],
  "enabled_on": &#123;
    "groups": [
      "header"
    ]
  &#125;
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
