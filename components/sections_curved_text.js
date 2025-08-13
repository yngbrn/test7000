export default function sections_curved_text() {
  const html = `<div>


  # textPath &amp;#123;
    transform: translateZ(0);
    backface-visibility: hidden;

  &amp;#125;

  # .text-measure &amp;#123;
    display: inline-flex;
    width: max-content;
  &amp;#125;


&lt;data-island
  role=&quot;banner&quot;
  id=&quot;&quot;
  class=&quot;bg-scheme-background text-scheme-text bg-scheme-gradient&quot;
  data-color-scheme=&quot;&quot;
  x-data=&quot;CurvedText(, , , &#x27;&#x27;, , )&quot;
  src=&quot;/assets/island-curved-text.bundle.js&quot;
  on=&quot;before:visible&quot;
&gt;
  &lt;div
    class=&quot;js-enabled relative w-full overflow-hidden&quot;
    
      @mouseover=&quot;pause&quot; @mouseleave=&quot;play&quot;
    
  &gt;
    
      &lt;a
        href=&quot;&quot;
        class=&quot;absolute left-0 top-0 z-0 block h-full w-full&quot;
      &gt;
        &lt;span class=&quot;visually-hidden&quot;&gt;&lt;/span&gt;
      &lt;/a&gt;
    
    &lt;svg
      width=&quot;100%&quot;
      height=&quot;&quot;
      xmlns=&quot;http://www.w3.org/2000/svg&quot;
    &gt;
      &lt;path
        x-ref=&quot;path&quot;
        id=&quot;textPath&quot;
        x-bind:d=&quot;path&quot;
        stroke-width=&quot;1&quot;
        fill=&quot;transparent&quot;
      /&gt;
      &lt;text class=&quot; fill-current&quot;&gt;
        &lt;textPath id=&quot;pathSVG&quot; class=&quot;top &quot; startOffset=&quot;0&quot; xlink:href=&quot;#textPath&quot; x-ref=&quot;textPath&quot;&gt;&lt;/textPath&gt;
      &lt;/text&gt;
    &lt;/svg&gt;
    &lt;div
      class=&quot;text-measure bg-black text-white   invisible absolute&quot;
      x-ref=&quot;textMeasure&quot;
    &gt;
      
    &lt;/div&gt;
  &lt;/div&gt;

  &lt;noscript&gt;
    
    &lt;svg
      width=&quot;100%&quot;
      height=&quot;&quot;
      xmlns=&quot;http://www.w3.org/2000/svg&quot;
    &gt;
        &lt;path
          x-ref=&quot;path&quot;
          id=&quot;noJSPath&quot;
          d=&quot;M 
            
              
              
                Q ,  
              
              T  
              
            
            &quot;
          stroke-width=&quot;5&quot;
          fill=&quot;transparent&quot;
        /&gt;
      &lt;text class=&quot; fill-current&quot;&gt;
        &lt;textPath startOffset=&quot;0&quot; class=&quot;&quot;  xlink:href=&quot;#noJSPath&quot;&gt;
          
            &lt;tspan alignment-baseline=&quot;middle&quot;&gt;&lt;/tspan&gt;
          
        &lt;/textPath&gt;
      &lt;/text&gt;
    &lt;/svg&gt;
  &lt;/noscript&gt;
&lt;/data-island&gt;


&amp;#123;
  &quot;name&quot;: &quot;t:sections.curved_text.name&quot;,
  &quot;settings&quot;: [
    &amp;#123;
      &quot;type&quot;: &quot;text&quot;,
      &quot;id&quot;: &quot;text&quot;,
      &quot;label&quot;: &quot;t:common.settings.text.label&quot;,
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;url&quot;,
      &quot;id&quot;: &quot;link&quot;,
      &quot;label&quot;: &quot;t:common.settings.link.label&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;Design&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;wave_height&quot;,
      &quot;min&quot;: 200,
      &quot;max&quot;: 400,
      &quot;step&quot;: 10,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Wave height&quot;,
      &quot;default&quot;: 250
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;wave_width&quot;,
      &quot;min&quot;: 200,
      &quot;max&quot;: 800,
      &quot;step&quot;: 50,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Wave width&quot;,
      &quot;default&quot;: 250
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;speed&quot;,
      &quot;min&quot;: 0.5,
      &quot;max&quot;: 2,
      &quot;step&quot;: 0.1,
      &quot;unit&quot;: &quot;x&quot;,
      &quot;label&quot;: &quot;t:common.settings.speed.label&quot;,
      &quot;default&quot;: 1
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.text.label&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;mobile_text_scale&quot;,
      &quot;min&quot;: -2,
      &quot;max&quot;: 7,
      &quot;step&quot;: 1,
      &quot;label&quot;: &quot;t:common.settings.mobile_text_scale.label&quot;,
      &quot;default&quot;: 2
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;desktop_text_scale&quot;,
      &quot;min&quot;: -2,
      &quot;max&quot;: 10,
      &quot;step&quot;: 1,
      &quot;label&quot;: &quot;t:common.settings.desktop_text_scale.label&quot;,
      &quot;default&quot;: 4
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;font&quot;,
      &quot;label&quot;: &quot;t:common.settings.font.label&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;font-heading&quot;,
          &quot;label&quot;: &quot;t:common.options.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;body&quot;,
          &quot;label&quot;: &quot;t:common.options.body.label&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;font-heading&quot;,
      &quot;info&quot;: &quot;Text effects will not be applied to heading font.&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.header_animation&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;enable_animation&quot;,
      &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.enable_animation.label&quot;,
      &quot;default&quot;: true
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;pause_on_hover&quot;,
      &quot;label&quot;: &quot;Pause on hover&quot;,
      &quot;default&quot;: false
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;direction&quot;,
      &quot;label&quot;: &quot;t:common.settings.direction.label&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;rtl&quot;,
          &quot;label&quot;: &quot;t:common.options.right_to_left.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;ltr&quot;,
          &quot;label&quot;: &quot;t:common.options.left_to_right.label&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;rtl&quot;
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
      &quot;name&quot;: &quot;t:sections.curved_text.name&quot;
    &amp;#125;
  ],
  &quot;disabled_on&quot;: &amp;#123;
    &quot;groups&quot;: [
      &quot;header&quot;,
      &quot;footer&quot;,
      &quot;aside&quot;
    ]
  &amp;#125;
&amp;#125;
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
