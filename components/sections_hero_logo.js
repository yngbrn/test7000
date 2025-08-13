export default function sections_hero_logo() {
  const html = `<div>


  
    # &amp;#123;
      --overlay-offset: px;
    &amp;#125;

    @media (min-width: 990px) &amp;#123;
      # &amp;#123;
        --overlay-offset: px;
      &amp;#125;
    &amp;#125;
  



  &lt;section
    id=&quot;&quot;
    class=&quot;relative bg-scheme-background text-scheme-text bg-scheme-gradient &quot;
    data-color-scheme=&quot;&quot;
    role=&quot;complementary&quot;
  &gt;
    &lt;div
      
        class=&quot;relative z-20&quot;
        style=&quot;height: var(--overlay-offset);&quot;
      
    &gt;
      &lt;div class=&quot;section-content px-section py-half-section-vertical-spacing  absolute top-0 left-0 right-0 pointer-events-none z-20&quot;&gt;
        &lt;div class=&quot;mx-auto max-w-site&quot;&gt;
          
            
            &lt;div
              class=&quot;&quot;
              style=&quot;max-width: %&quot;
            &gt;
              
              
            &lt;/div&gt;
          
            &lt;div class=&quot;font-heading   break-word&quot;&gt;
              
            &lt;/div&gt;
          
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/section&gt;





&amp;#123;
  &quot;name&quot;: &quot;t:sections.hero_logo.name&quot;,
  &quot;settings&quot;: [
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;home_page_only&quot;,
      &quot;label&quot;: &quot;t:common.settings.home_page_only.label&quot;,
      &quot;default&quot;: true
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:sections.hero_logo.settings.header_plain_text&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;mobile_text_scale&quot;,
      &quot;min&quot;: -2,
      &quot;max&quot;: 7,
      &quot;step&quot;: 1,
      &quot;label&quot;: &quot;t:common.settings.mobile_text_scale.label&quot;,
      &quot;default&quot;: 6
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;desktop_text_scale&quot;,
      &quot;min&quot;: -2,
      &quot;max&quot;: 10,
      &quot;step&quot;: 1,
      &quot;label&quot;: &quot;t:common.settings.desktop_text_scale.label&quot;,
      &quot;default&quot;: 8
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.logo.label&quot;
    &amp;#125;,
    &amp;#123;
      &quot;id&quot;: &quot;logo&quot;,
      &quot;type&quot;: &quot;image_picker&quot;,
      &quot;label&quot;: &quot;t:common.settings.logo_image.label&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.header_layout&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;alignment&quot;,
      &quot;label&quot;: &quot;t:sections.hero_logo.settings.alignment.label&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;left&quot;,
          &quot;label&quot;: &quot;t:common.options.left.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;center&quot;,
          &quot;label&quot;: &quot;t:common.options.center.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;right&quot;,
          &quot;label&quot;: &quot;t:common.options.right.label&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;left&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;logo_max_width&quot;,
      &quot;min&quot;: 10,
      &quot;max&quot;: 100,
      &quot;step&quot;: 5,
      &quot;unit&quot;: &quot;%&quot;,
      &quot;label&quot;: &quot;t:sections.scrolling_logos.settings.max_width.label&quot;,
      &quot;default&quot;: 100
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;disable_vertical_spacing&quot;,
      &quot;label&quot;: &quot;t:sections.hero_logo.settings.disable_vertical_spacing.label&quot;,
      &quot;default&quot;: false
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:sections.hero_logo.settings.header_overlay&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;enable_overlay&quot;,
      &quot;label&quot;: &quot;t:sections.hero_logo.settings.enable_overlay.label&quot;,
      &quot;default&quot;: false
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;overlay_offset&quot;,
      &quot;min&quot;: 0,
      &quot;max&quot;: 500,
      &quot;step&quot;: 5,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;t:sections.hero_logo.settings.overlay_offset.label&quot;,
      &quot;default&quot;: 100
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.header_color&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color_scheme&quot;,
      &quot;id&quot;: &quot;color_scheme&quot;,
      &quot;default&quot;: &quot;scheme1&quot;,
      &quot;label&quot;: &quot;t:common.settings.color_scheme.label&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;use_gradient_background&quot;,
      &quot;label&quot;: &quot;t:common.settings.use_gradient_background.label&quot;
    &amp;#125;
  ],
  &quot;presets&quot;: [
    &amp;#123;
      &quot;name&quot;: &quot;t:sections.hero_logo.name&quot;
    &amp;#125;
  ],
  &quot;enabled_on&quot;: &amp;#123;
    &quot;groups&quot;: [
      &quot;header&quot;,
      &quot;footer&quot;
    ]
  &amp;#125;
&amp;#125;
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
