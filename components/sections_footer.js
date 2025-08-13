export default function sections_footer() {
  const html = `
<footer
  class="relative bg-scheme-background px-section  text-scheme-text bg-scheme-gradient"
  data-color-scheme=""
>
  <div class="section-content relative z-10 mx-auto max-w-site py-section-vertical-spacing">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-theme">
      
        
          <div
            class="space-y-5  lg:col-end-last"
            
          >
            
              
                <div class="h1 font-heading">
                  
                    
                    <a
                      href=""
                      class="inline w-full"
                    >
                      <div
                        style="max-width: px;"
                      >
                        <img
                          src=""
                          srcset="
                            
                            
                            
                          "
                          alt=""
                          width=""
                          height=""
                          loading="eager"
                         />
                      </div>
                    </a>
                  
                    <a
                      href=""
                      class="mx-auto block max-w-[12rem] break-words sm:max-w-md lg:max-w-2xl xl:max-w-none"
                    >
                      
                    </a>
                  
                </div>
              
                
                
                  <div class="inline-rte break-words ">
                    
                  </div>
                
                
                  
                
              
                <div>
                  
                    <h2 class="font-heading heading-secondary mb-5">
                      
                    </h2>
                  

                  
                    
                      <p
                        class=" text-scheme-error"
                        id="Newsletter-error--"
                      >
                        
                        
                      </p>
                    
                    
                      <p
                        class=""
                        id="Newsletter-success--"
                      >
                        
                      </p>
                    
                      <div class="items-center justify-center">
                        <input
                          type="hidden"
                          name="contact[tags]"
                          value="newsletter"
                         />
                        <label
                          for="NewsletterForm-"
                          class="sr-only"
                        >
                          
                        </label>
                        <div class=" w-full flex-grow lg:mr-2">
                          <input
                            id="NewsletterForm-"
                            type="email"
                            name="contact[email]"
                            class="input--background input-group-field w-full text-scheme-text placeholder:text-scheme-text border-scheme-errorborder-scheme-text"
                            value=""
                            autocorrect="off"
                            autocapitalize="off"
                            autocomplete="email"
                            
                              autofocus
                              aria-invalid="true"
                              aria-describedby="Newsletter-error--"
                            
                              aria-describedby="Newsletter-success--"
                            
                            placeholder=""
                            required
                           />
                        </div>
                        <button
                          type="submit"
                          class="push-btn push-btn--pop mt-2.5 w-full"
                          name="commit"
                          id="Subscribe-"
                        >
                          <span class="push-btn__surface w-full">
                            
                          </span>
                        </button>
                      </div>
                    
                  
                </div>
              
                <div class="flex flex-wrap justify-start gap-10 lg:justify-endlg:justify-startlg:justify-center">
                  
                    <div class="w-full  flex-1">
                      
                      
                        <h2 class="font-heading mb-4 break-all text-base">
                          
                        </h2>
                      
                      <ul class="list-none space-y-2.5">
                        
                          <li>
                            <a
                              href=""
                              class="secondary-text-link break-words"
                            >
                              
                            </a>
                          </li>
                        
                      </ul>
                    </div>
                  
                  
                    <div class="w-full  flex-1">
                      
                      
                        <h2 class="font-heading mb-4 break-all text-base">
                          
                        </h2>
                      
                      <ul class="list-none space-y-2.5">
                        
                          <li>
                            <a
                              href=""
                              class="secondary-text-link"
                            >
                              
                            </a>
                          </li>
                        
                      </ul>
                    </div>
                  
                  
                    <div class="w-full flex-1">
                      
                      
                        <h2 class="font-heading mb-4 break-all text-base">
                          
                        </h2>
                      
                      <ul class="list-none space-y-2.5">
                        
                          <li>
                            <a
                              href=""
                              class="secondary-text-link"
                            >
                              
                            </a>
                          </li>
                        
                      </ul>
                    </div>
                  
                </div>
            
          </div>
        
      
    </div>

    <div class="section-content-top-margin justify-between text-scheme-text md:flex">
      <div class="lg:w-1/3">
        <p class="text-sm">
          &copy; , .
          <span class="ml-2 inline-block"></span>
        </p>
      </div>

      
        
          <div class="mt-10 lg:mt-0  lg:w-1/3">
            <h2 class="visually-hidden">
              
            </h2>
            <ul class="payment-icons -mx-2 lg:text-center">
              
                <li class="mx-2 inline-block w-8">
                  
                </li>
              
            </ul>
          </div>
        
      

      
        <div class="mb-4 mt-10 flex flex-wrap items-center justify-between lg:mb-0 lg:mt-0 lg:w-1/3 lg:justify-end">
          
        </div>
      
    </div>
  </div>
</footer>


  <div class="absolute inset-0">
    <div class="relative inset-0 h-full w-full overflow-hidden">
      
    </div>
  </div>



&#123;
  "name": "t:sections.footer.name",
  "class": "section-footer mt-auto relative z-shape-divider",
  "settings": [
    &#123;
      "type": "checkbox",
      "id": "show_payment_icons",
      "label": "t:sections.footer.settings.show_payment_icons.label",
      "default": false
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.footer.settings.header_countryregion_selector",
      "info": "To add a country/region, go to your [payment settings.](/admin/settings/payments)"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_country_selector",
      "label": "t:sections.footer.settings.show_country_selector.label",
      "default": true
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.footer.settings.header_language_selector",
      "info": "To add a language, go to your [language settings.](/admin/settings/languages)"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_locale_selector",
      "label": "t:sections.footer.settings.show_locale_selector.label",
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
  ],
  "blocks": [
    &#123;
      "type": "logo",
      "name": "t:common.settings.logo.label",
      "limit": 1,
      "settings": [
        &#123;
          "type": "image_picker",
          "id": "logo",
          "label": "t:common.settings.logo.label",
          "info": "t:common.settings.logo.info"
        &#125;,
        &#123;
          "type": "range",
          "id": "logo_max_width",
          "min": 20,
          "max": 400,
          "step": 10,
          "unit": "px",
          "label": "t:common.settings.logo_max_width.label",
          "default": 100
        &#125;
      ]
    &#125;,
    &#123;
      "type": "tagline_and_social_links",
      "name": "t:sections.footer.blocks.tagline_and_social_links.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "inline_richtext",
          "id": "tagline",
          "label": "t:sections.footer.blocks.tagline_and_social_links.settings.tagline.label",
        &#125;,
        &#123;
          "type": "header",
          "content": "t:sections.footer.blocks.tagline_and_social_links.settings.header_social_media_icons"
        &#125;,
        &#123;
          "type": "paragraph",
          "content": "t:sections.footer.blocks.tagline_and_social_links.settings.paragraph_to_display_your"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_social_icons",
          "label": "t:sections.footer.blocks.tagline_and_social_links.settings.show_social_icons.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "newsletter",
      "name": "t:sections.footer.blocks.newsletter.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "header",
          "content": "t:sections.footer.blocks.newsletter.settings.header_email_signup"
        &#125;,
        &#123;
          "type": "paragraph",
        &#125;,
        &#123;
          "type": "text",
          "id": "newsletter_heading",
          "label": "t:sections.footer.blocks.newsletter.settings.newsletter_heading.label",
          "default": "Sign up to our newsletter"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "menus",
      "name": "t:sections.footer.blocks.menus.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "show_menu_headings",
          "label": "t:sections.footer.blocks.menus.settings.show_menu_headings.label",
          "default": false
        &#125;,
        &#123;
          "type": "link_list",
          "id": "linklist_1",
          "label": "t:sections.footer.blocks.menus.settings.linklist_1.label",
          "default": "footer",
          "info": "t:sections.footer.blocks.menus.settings.linklist_1.info"
        &#125;,
        &#123;
          "type": "link_list",
          "id": "linklist_2",
          "label": "t:sections.footer.blocks.menus.settings.linklist_2.label",
          "info": "t:sections.footer.blocks.menus.settings.linklist_2.info"
        &#125;,
        &#123;
          "type": "link_list",
          "id": "linklist_3",
          "label": "t:sections.footer.blocks.menus.settings.linklist_3.label",
          "info": "t:sections.footer.blocks.menus.settings.linklist_3.info"
        &#125;
      ]
    &#125;,
    &#123;
      "name": "t:common.blocks.shape_divider.name",
      "type": "shape_divider",
      "limit": 2,
      "settings": [
        &#123;
          "type": "select",
          "label": "t:common.blocks.shape_divider.settings.target_section.label",
          "id": "target_section",
          "default": "above",
          "options": [
            &#123;
              "value": "above",
              "label": "t:common.blocks.shape_divider.settings.target_section.options.section_above.label"
            &#125;,
            &#123;
              "value": "below",
              "label": "t:common.blocks.shape_divider.settings.target_section.options.section_below.label"
            &#125;
          ],
          "info": "t:common.blocks.shape_divider.settings.target_section.info"
        &#125;,
        &#123;
          "type": "color_scheme",
          "id": "target_section_color_scheme",
          "default": "scheme1",
          "label": "t:common.blocks.shape_divider.settings.target_section_color_scheme.label",
          "info": "t:common.blocks.shape_divider.settings.target_section_color_scheme.info"
        &#125;,
        &#123;
          "type": "select",
          "label": "t:common.blocks.shape_divider.settings.style.label",
          "id": "style",
          "default": "waves-1-patterned_1200x20",
          "options": [
            &#123;
              "value": "waves-1-patterned_1200x20",
              "label": "t:common.blocks.shape_divider.settings.style.options.waves_1.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "waves-2-patterned_1200x43",
              "label": "t:common.blocks.shape_divider.settings.style.options.waves_2.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "waves-3-patterned_1200x84",
              "label": "t:common.blocks.shape_divider.settings.style.options.waves_3.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "zig-zag-1-patterned_1200x21",
              "label": "t:common.blocks.shape_divider.settings.style.options.zig_zag_1.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "zig-zag-2-patterned_1200x37",
              "label": "t:common.blocks.shape_divider.settings.style.options.zig_zag_2.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "zig-zag-3-patterned_1200x65",
              "label": "t:common.blocks.shape_divider.settings.style.options.zig_zag_3.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "circles-1-patterned_1200x16",
              "label": "t:common.blocks.shape_divider.settings.style.options.circles_1.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "circles-2-patterned_1200x35",
              "label": "t:common.blocks.shape_divider.settings.style.options.circles_2.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "circles-3-patterned_1200x67",
              "label": "t:common.blocks.shape_divider.settings.style.options.circles_3.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "spikes-1-patterned_1200x132",
              "label": "t:common.blocks.shape_divider.settings.style.options.spikes_1.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "spikes-2-patterned_1200x132",
              "label": "t:common.blocks.shape_divider.settings.style.options.spikes_2.label",
              "group": "t:common.blocks.shape_divider.settings.style.group_patterned"
            &#125;,
            &#123;
              "value": "tilt-1-shape_1440x101",
              "label": "t:common.blocks.shape_divider.settings.style.options.tilt_1.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "tilt-2-shape_1440x180",
              "label": "t:common.blocks.shape_divider.settings.style.options.tilt_2.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "tilt-3-shape_1440x293",
              "label": "t:common.blocks.shape_divider.settings.style.options.tilt_3.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "waves-1-shape_1440x261",
              "label": "t:common.blocks.shape_divider.settings.style.options.waves_1.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "waves-2-shape_1440x330",
              "label": "t:common.blocks.shape_divider.settings.style.options.waves_2.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "mountains-1-shape_1440x293",
              "label": "t:common.blocks.shape_divider.settings.style.options.mountains_1.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "mountains-2-shape_1440x325",
              "label": "t:common.blocks.shape_divider.settings.style.options.mountains_2.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "curve-shape_1440x149",
              "label": "t:common.blocks.shape_divider.settings.style.options.curve.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "curve-inverse-shape_1440x149",
              "label": "t:common.blocks.shape_divider.settings.style.options.curve_inverse.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "steps-1-shape_1400x105",
              "label": "t:common.blocks.shape_divider.settings.style.options.steps_1.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "steps-2-shape_1400x105",
              "label": "t:common.blocks.shape_divider.settings.style.options.steps_2.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "arrow-1-shape_1400x33",
              "label": "t:common.blocks.shape_divider.settings.style.options.arrow_1.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "arrow-2-shape_1400x73",
              "label": "t:common.blocks.shape_divider.settings.style.options.arrow_2.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "offset-ovals-shape_1400x155",
              "label": "t:common.blocks.shape_divider.settings.style.options.offset_ovals.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "triangle-shape_1400x145",
              "label": "t:common.blocks.shape_divider.settings.style.options.triangle.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "triangle-asymmetrical-shape_1400x145",
              "label": "t:common.blocks.shape_divider.settings.style.options.triangle_asymmetrical.label",
              "group": "t:common.settings.shape.label"
            &#125;,
            &#123;
              "value": "clouds-shape_1400x161",
              "label": "t:common.blocks.shape_divider.settings.style.options.clouds.label",
              "group": "t:common.settings.shape.label"
            &#125;
          ]
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "flip_horizontal",
          "label": "t:common.blocks.shape_divider.settings.flip_horizontal.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.settings.header_animation"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "enable_animation",
          "label": "t:common.blocks.shape_divider.settings.enable_animation.label",
          "info": "t:common.blocks.shape_divider.settings.enable_animation.info"
        &#125;,
        &#123;
          "type": "select",
          "id": "animation_direction",
          "label": "t:common.blocks.shape_divider.settings.animation_direction.label",
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
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
