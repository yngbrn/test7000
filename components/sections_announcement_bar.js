export default function sections_announcement_bar() {
  const html = `


  <section
    class="relative bg-scheme-background text-scheme-text hover:bg-scheme-accent-1 hover:text-scheme-accent-1-contrast border-section-border border-b-section text-center bg-scheme-gradient"
    data-color-scheme=""
    id="AnnouncementBar"
  >
    
      
        <a
          class="block w-full px-5 py-1 text-sm text-current lg:px-0 lg:py-2"
          href=""
        >
          
        </a>
      
        <div
          class="py-1 text-center text-sm text-current lg:py-2"
          role="complementary"
        >
          <p class="px-5 lg:px-0"></p>
        </div>
      
    
      
    
  </section>



&#123;
  "name": "t:sections.announcement_bar.name",
  "settings": [
    &#123;
      "type": "checkbox",
      "id": "home_page_only",
      "label": "t:common.settings.home_page_only.label",
      "default": true
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
      "default": "scrolling_text"
    &#125;,
    &#123;
      "type": "text",
      "id": "text",
      "label": "t:sections.announcement_bar.settings.text.label",
      "default": "Announce something here"
    &#125;,
    &#123;
      "type": "url",
      "id": "link",
      "label": "t:common.settings.link.label"
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
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
