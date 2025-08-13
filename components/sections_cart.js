export default function sections_cart() {
  const html = `<section
  class="relative overflow-hidden bg-scheme-background text-scheme-text bg-scheme-gradient overflow-hidden"
  data-color-scheme=""
>
  <div class="section-content mx-auto max-w-5xl px-section py-section-vertical-spacing">
    <div class="text-scheme-text card">
      <div class="card__surface p-5 lg:p-10">
        <h1 class="font-heading heading-feature  heading-style text-center ">
          
        </h1>
        <div class="mt-5 lg:mt-10">
          
          
        </div>
      </div>
    </div>
  </div>
</section>


&#123;
  "settings": [
    &#123;
      "type": "checkbox",
      "id": "display_on_card",
      "label": "t:common.settings.display_on_card.label",
      "default": true
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
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
