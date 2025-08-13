export default function sections_call_to_action() {
  const html = `
  

  
    <data-island
      x-data="
        CallToActionSticker(&#123;
          animateIn: ,
          hideWhenScrollingUp: ,
        &#125;)
      "
      src="/assets/island-call-to-action-sticker.bundle.js"
      on="idle"
    >
  
  <div
    
      x-cloak
      :class="show ? '' : 'translate-y-full'"
    
    class="fixed z-30 origin-top-left p-5 transition-transform duration-500 ease-in-out lg:p-10 hidden lg:block"
    id="sticker-"
    data-color-scheme=""
  >
    
      <a
        href=""
        class="block transition-transform duration-200 ease-in-out hover:scale-110"
      >
    

    <div class="sticker__rotate-container">
      
        
        <div class="sticker sticker__image rotate-anim">
          <picture>
            
              
            
              <source
                srcset="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                media="(max-width: 768px)"
              >
              
            
          </picture>
        </div>
      
        
          <div class="sticker sticker__fit-to-text  whitespace-nowrap">
            
          </div>
        
          <div class="sticker__container rotate-anim relative">
            <div
              class="absolute inset-0 "
              style="clip-path: url(#clip-)"
            >
              <div
                id="sticker-text-"
                class="sticker__text absolute inset-0 flex items-center justify-center text-center "
              >
                <div></div>
              </div>
            </div>
            <svg
              class="sticker__width-container relative max-w-none "
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <use class="sticker__svg fill-transparent" href="#outline-" />
            </svg>

            
              
                <div class="sticker__svg sticker__drop-shadow">
                  <div
                    class="aspect-h-1 aspect-w-1 absolute h-full w-full bg-scheme-gradient"
                    style="clip-path: url(#clip-)"
                  ></div>
                </div>
                <svg
                  class="sticker__svg sticker__drop-shadow"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  
                  <use class="sticker__drop-shadow-border-only"  href="#outline-" />
                  
                </svg>
              
                <svg
                  class="sticker__svg sticker__drop-shadow"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <use class="sticker__drop-shadow-path"  href="#outline-" />
                </svg>
              
            
          </div>
        
      
    </div>

    
      </a>
    
  </div>
  
    </data-island>
  


  
    #sticker- &#123;
      --sticker-width: ;
    &#125;

    @media (min-width: 990px) &#123;
      #sticker- &#123;
        --sticker-width: ;
      &#125;
    &#125;
  
    #sticker- &#123;
      --sticker-width: ;
    &#125;
  

  #sticker- &#123;
    : 0;
    bottom: 0;
  &#125;

  #sticker- .sticker__rotate-container &#123;
    transform: rotate(deg);
  &#125;

  #sticker- .sticker__width-container &#123;
    width: calc(var(--sticker-width) * 1px);
  &#125;

  #sticker-text- &#123;
    padding: calc(2rem * var(--sticker-width) / 300);
  &#125;

  #sticker-text-,
  #sticker- .sticker__fit-to-text  &#123;
    --adjusted-sticker-font-size: calc( * 1.5);
    font-size: calc(var(--adjusted-sticker-font-size) * var(--sticker-width) / 300);
    line-height: 1;
  &#125;

  
    @media (prefers-reduced-motion: no-preference) &#123;
      #sticker- .rotate-anim &#123;
        animation-iteration-count:infinite;
        animation-timing-function:linear;
        animation-name:rotate;
        animation-duration:5s;
      &#125;
    &#125;
  



&#123;
  "name": "t:sections.call_to_action_sticker.name",
  "class": "contents",
  "settings": [
    &#123;
      "type": "checkbox",
      "id": "home_page_only",
      "label": "t:common.settings.home_page_only.label",
      "default": true
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "animate_in",
      "label": "t:sections.call_to_action_sticker.settings.animate_in.label",
      "default": true
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "hide_when_scrolling_up",
      "label": "t:sections.call_to_action_sticker.settings.hide_when_scrolling_up.label",
      "default": false
    &#125;,
    &#123;
      "type": "text",
      "id": "text",
      "label": "t:sections.call_to_action_sticker.settings.text.label",
      "default": "Shop now"
    &#125;,
    &#123;
      "type": "url",
      "id": "url",
      "label": "t:common.settings.url.label"
    &#125;,
    &#123;
      "type": "select",
      "id": "shape",
      "label": "t:sections.call_to_action_sticker.settings.shape.label",
      "options": [
        &#123;
          "value": "circle",
          "label": "t:common.options.circle.label",
          "group": "t:common.groups.basic"
        &#125;,
        &#123;
          "value": "pentagon",
          "label": "t:common.options.pentagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "hexagon",
          "label": "t:common.options.hexagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "heptagon",
          "label": "t:common.options.heptagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "octagon",
          "label": "t:common.options.octagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "nonagon",
          "label": "t:common.options.nonagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "decagon",
          "label": "t:common.options.decagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "rounded_pentagon",
          "label": "t:common.options.rounded_pentagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "rounded_hexagon",
          "label": "t:common.options.rounded_hexagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "rounded_heptagon",
          "label": "t:common.options.rounded_heptagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "rounded_octagon",
          "label": "t:common.options.rounded_octagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "rounded_nonagon",
          "label": "t:common.options.rounded_nonagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "rounded_decagon",
          "label": "t:common.options.rounded_decagon.label",
          "group": "t:common.groups.polygons"
        &#125;,
        &#123;
          "value": "star_1",
          "label": "t:common.options.star_1.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "star_2",
          "label": "t:common.options.star_2.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "star_3",
          "label": "t:common.options.star_3.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "star_4",
          "label": "t:common.options.star_4.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "star_5",
          "label": "t:common.options.star_5.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "star_6",
          "label": "t:common.options.star_6.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "scalloped_circle_1",
          "label": "t:common.options.scalloped_circle_1.label",
          "group": "t:common.groups.scalloped_circles"
        &#125;,
        &#123;
          "value": "scalloped_circle_2",
          "label": "t:common.options.scalloped_circle_2.label",
          "group": "t:common.groups.scalloped_circles"
        &#125;,
        &#123;
          "value": "scalloped_circle_3",
          "label": "t:common.options.scalloped_circle_3.label",
          "group": "t:common.groups.scalloped_circles"
        &#125;,
        &#123;
          "value": "scalloped_circle_4",
          "label": "t:common.options.scalloped_circle_4.label",
          "group": "t:common.groups.scalloped_circles"
        &#125;,
        &#123;
          "value": "scalloped_circle_5",
          "label": "t:common.options.scalloped_circle_5.label",
          "group": "t:common.groups.scalloped_circles"
        &#125;,
        &#123;
          "value": "scalloped_circle_6",
          "label": "t:common.options.scalloped_circle_6.label",
          "group": "t:common.groups.scalloped_circles"
        &#125;,
        &#123;
          "value": "parallelogram",
          "label": "t:common.options.parallelogram.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "squircle",
          "label": "t:common.options.squircle.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "scalloped_square_1",
          "label": "t:common.options.scalloped_square_1.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "scalloped_square_2",
          "label": "t:common.options.scalloped_square_2.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "leaf",
          "label": "t:common.options.leaf.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "clipped_square",
          "label": "t:common.options.clipped.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "convex_square",
          "label": "t:common.options.convex.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "twisted_square",
          "label": "t:common.options.twisted.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "trapeze",
          "label": "t:common.options.trapeze.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "pinched",
          "label": "t:common.options.pinched.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "pixelated",
          "label": "t:common.options.pixelated.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "overlapped",
          "label": "t:common.options.overlapped.label",
          "group": "t:common.groups.square"
        &#125;,
        &#123;
          "value": "ellipse",
          "label": "t:common.options.ellipse.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "diamond_wide",
          "label": "t:common.options.diamond.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "rounded_diamond_wide",
          "label": "t:common.options.rounded_diamond.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "triangle_wide",
          "label": "t:common.options.triangle.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "hexagon_wide",
          "label": "t:common.options.hexagon.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "rounded_hexagon_wide",
          "label": "t:common.options.rounded_hexagon.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "uneven_star_wide",
          "label": "t:common.options.uneven_star.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "star_wide",
          "label": "t:common.options.star.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "semicircle",
          "label": "t:common.options.semicircle.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "eye",
          "label": "t:common.options.eye.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "parallelogram_wide",
          "label": "t:common.options.parallelogram.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "ribbon",
          "label": "t:common.options.ribbon.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "ticket_stub",
          "label": "t:common.options.ticket_stub.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "wave_ribbon",
          "label": "t:common.options.wave_ribbon.label",
          "group": "t:common.groups.wide"
        &#125;,
        &#123;
          "value": "zig_zag_ribbon",
          "label": "t:common.options.zig_zag_ribbon.label",
          "group": "t:common.groups.wide"
        &#125;
      ],
      "default": "star_1"
    &#125;,
    &#123;
      "type": "range",
      "id": "width",
      "min": 100,
      "max": 200,
      "step": 10,
      "unit": "px",
      "label": "t:sections.call_to_action_sticker.settings.width.label",
      "default": 150
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "half_width_on_mobile",
      "label": "t:common.blocks.sticker.settings.half_width_on_mobile.label",
      "default": false
    &#125;,
    &#123;
      "type": "select",
      "id": "sticker_position",
      "label": "t:sections.call_to_action_sticker.settings.sticker_position.label",
      "options": [
        &#123;
          "value": "left",
          "label": "t:common.options.left.label"
        &#125;,
        &#123;
          "value": "right",
          "label": "t:common.options.right.label"
        &#125;
      ],
      "default": "right"
    &#125;,
    &#123;
      "type": "select",
      "id": "sticker_font_size",
      "label": "t:common.settings.sticker_font_size.label",
      "options": [
        &#123;
          "value": "1rem",
          "label": "t:common.options.extra_small.label"
        &#125;,
        &#123;
          "value": "1.25rem",
          "label": "t:common.options.small.label"
        &#125;,
        &#123;
          "value": "1.563rem",
          "label": "t:common.options.medium.label"
        &#125;,
        &#123;
          "value": "1.953rem",
          "label": "t:common.options.large.label"
        &#125;,
        &#123;
          "value": "2.441rem",
          "label": "t:common.options.extra_large.label"
        &#125;
      ],
      "default": "1.563rem",
      "info": "t:common.settings.sticker_font_size.info"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_custom_image"
    &#125;,
    &#123;
      "type": "paragraph",
      "content": "t:sections.call_to_action_sticker.settings.paragraph_use_a_custom"
    &#125;,
    &#123;
      "type": "image_picker",
      "id": "image",
      "label": "t:common.settings.image.label"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_position"
    &#125;,
    &#123;
      "type": "range",
      "id": "rotate",
      "min": -90,
      "max": 90,
      "step": 2,
      "unit": "deg",
      "label": "t:common.settings.rotate.label",
      "default": 0
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "animate_rotation",
      "label": "t:sections.call_to_action_sticker.settings.animate_rotation.label",
      "default": false
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.call_to_action_sticker.settings.header_mobile"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_sticker_on_mobile",
      "label": "t:sections.call_to_action_sticker.settings.show_sticker_on_mobile.label",
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
      "type": "select",
      "id": "color",
      "label": "t:common.settings.background_color.label",
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
          "value": "bg-scheme-background text-scheme-text",
          "label": "t:common.options.background.label"
        &#125;,
        &#123;
          "value": "bg-scheme-gradient text-scheme-text",
          "label": "t:common.options.gradient.label"
        &#125;
      ]
    &#125;
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
