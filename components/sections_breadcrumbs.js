export default function sections_breadcrumbs() {
  const html = `

  
  
  <span class="inline-block" role="presentation"></span>

  <section
    class="relative overflow-hidden bg-scheme-background text-scheme-text"
    data-color-scheme=""
  >
    <div class="section-content px-section py-4">
      <nav role="navigation" aria-label="breadcrumbs" class="breadcrumbs">
        <ol class="flex items-center   gap-2">
          <li class="">
            <a href="/"></a>
            
          </li>
          
            
              <li class="">
                <a
                  href=""
                  class=""
                  aria-current="page"
                >
                  
                </a>
              </li>
            
              
                <li class="">
                  
                  
                </li>
              
              <li class="">
                <a
                  href=""
                  class=""
                  aria-current="page"
                >
                  
                </a>
              </li>
            
              
                <li class="">
                  
                  
                </li>
                <li>
                  /
                  <a
                    href=""
                    class=""
                    aria-current="page"
                  >
                    
                  </a>
                </li>
              
                <li class="">
                  <a
                    href=""
                    class=""
                    aria-current="page"
                  >
                    
                  </a>
                </li>
              
            
              
                <li class="">
                  
                  
                </li>
                <li class="">
                  /tagged/
                  <a
                    href=""
                    class=""
                    aria-current="page"
                  >
                    
                  </a>
                </li>
              
                <li class="">
                  <a
                    href=""
                    class=""
                    aria-current="page"
                  >
                    
                  </a>
                </li>
              
            
              <li class="">
                
                
              </li>
              <li class="">
                <a
                  href=""
                  class=""
                  aria-current="page"
                >
                  
                </a>
              </li>
            
              <li class="">
                <a
                  href=""
                  class=""
                  aria-current="page"
                >
                  
                </a>
              </li>
          
        </ol>
      </nav>
    </div>
  </section>


&#123;
  "name": "t:sections.breadcrumbs.name",
  "settings": [
    &#123;
      "type": "paragraph",
      "content": "t:sections.breadcrumbs.paragraph"
    &#125;,
    &#123;
      "type": "select",
      "label": "Separator",
      "id": "separator",
      "default": "/",
      "options": [
        &#123;
          "label": "/",
          "value": "/"
        &#125;,
        &#123;
          "label": "·",
          "value": "&middot;"
        &#125;,
        &#123;
          "label": "•",
          "value": "&bullet;"
        &#125;,
        &#123;
          "label": "→",
          "value": "&rarr;"
        &#125;,
        &#123;
          "label": "<",
          "value": "&lt;"
        &#125;,
        &#123;
          "label": ">",
          "value": "&gt;"
        &#125;,
        &#123;
          "label": "|",
          "value": "|"
        &#125;,
        &#123;
          "label": "–",
          "value": "&ndash;"
        &#125;,
        &#123;
          "label": "—",
          "value": "&mdash;"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "select",
      "id": "text_alignment",
      "label": "t:common.settings.text_alignment.label",
      "options": [
        &#123;
          "value": "justify-start",
          "label": "t:common.options.left.label"
        &#125;,
        &#123;
          "value": "justify-center",
          "label": "t:common.options.center.label"
        &#125;,
        &#123;
          "value": "justify-end",
          "label": "t:common.options.right.label"
        &#125;
      ],
      "default": "justify-center"
    &#125;,
    &#123;
      "type": "select",
      "id": "font_size",
      "label": "t:common.settings.font_size.label",
      "options": [
        &#123;
          "value": "text-base",
          "label": "t:common.options.base.label"
        &#125;,
        &#123;
          "value": "text-sm",
          "label": "t:common.options.small.label"
        &#125;
      ],
      "default": "text-base"
    &#125;,
    &#123;
      "type": "select",
      "id": "active_text_color",
      "label": "t:sections.breadcrumbs.settings.active_text_color.label",
      "default": "text",
      "options": [
        &#123;
          "value": "text",
          "label": "t:common.options.text.label"
        &#125;,
        &#123;
          "value": "accent_1",
          "label": "t:common.options.accent_1.label"
        &#125;,
        &#123;
          "value": "accent_2",
          "label": "t:common.options.accent_2.label"
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
    &#125;
  ],
  "presets": [
    &#123;
      "name": "t:sections.breadcrumbs.name"
    &#125;
  ],
  "disabled_on": &#123;
    "templates": [
      "index",
      "cart",
      "list-collections",
      "404"
    ]
  &#125;
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
