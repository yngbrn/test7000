export default function sections_custom_liquid() {
  const html = `<section
  class="relative overflow-hidden bg-scheme-background text-scheme-text bg-scheme-gradient "
  data-color-scheme=""
>
  <div class="section-content px-section max-w-site mx-auto py-section-vertical-spacing ">
    
      <h2 class="inline-heading-rte font-heading heading-standard  heading-style break-words text-center ">
        
      </h2>
    

    <div
      
        class="mt-10"
      
    >
      
    </div>
  </div>

  
</section>




&#123;
  "name": "t:sections.custom_liquid.name",
  "settings": [
    &#123;
      "type": "inline_richtext",
      "id": "title",
      "label": "t:sections.custom_liquid.settings.title.label",
      "default": "Custom liquid"
    &#125;,
    &#123;
      "id": "custom_liquid",
      "type": "liquid",
      "label": "t:sections.custom_liquid.settings.custom_liquid.label",
      "info": "t:sections.custom_liquid.settings.custom_liquid.info"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "full_width",
      "label": "t:sections.custom_liquid.settings.full_width.label"
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
    &#125;
  ],
  "presets": [
    &#123;
      "name": "t:sections.custom_liquid.name"
    &#125;
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
