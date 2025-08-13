export default function sections_collage() {
  const html = `<div>
&lt;!-- sections/gallery.liquid --&gt;
&lt;section
  class=&quot;gallery  relative bg-scheme-background text-scheme-text bg-scheme-gradient overflow-hidden&quot;
  data-color-scheme=&quot;&quot;
&gt;
  &lt;div class=&quot;section-content px-section py-section-vertical-spacing&quot;&gt;
    
      &lt;div class=&quot;mx-auto max-w-site&quot;&gt;
        &lt;h2 class=&quot;inline-heading-rte font-heading heading-standard  heading-style break-words text-center &quot;&gt;
          
        &lt;/h2&gt;
      &lt;/div&gt;
    

    &lt;div class=&quot;mx-auto grid max-w-site grid-cols-2 lg:auto-rows-auto lg:grid-cols-12 section-content-top-margin gap-theme&quot;&gt;
      
      
        
          

          &lt;div
            class=&quot;gallery-item relative flex items-center justify-center &quot;
            
          &gt;
            
              &lt;a href=&quot;&quot; class=&quot;group block w-full&quot;&gt;
            

            

            
              &lt;div class=&quot;w-full&quot;&gt;
                
              &lt;/div&gt;
            
              &lt;div class=&quot;w-full&quot;&gt;
                
              &lt;/div&gt;
            

            
              &lt;div class=&quot;flexhidden lg:flex gallery-item__content absolute bottom-0 left-0 right-0 top-0  z-10 items-center justify-center px-5 text-center text-scheme-text  lg:opacity-0 group-hover:lg:opacity-100 group-focus:opacity-100 transition duration-200 ease-in-out&quot;&gt;
                &lt;span class=&quot;push-btn  inline-block break-words text-center&quot;&gt;
                  &lt;span class=&quot;&quot;&gt;
                    
                  &lt;/span&gt;
                &lt;/span&gt;
              &lt;/div&gt;
            

            
              &lt;/a&gt;
            
          &lt;/div&gt;
        
      
    &lt;/div&gt;
  &lt;/div&gt;

  
&lt;/section&gt;




&amp;#123;
  &quot;name&quot;: &quot;t:sections.collage.name&quot;,
  &quot;settings&quot;: [
    &amp;#123;
      &quot;id&quot;: &quot;title&quot;,
      &quot;type&quot;: &quot;inline_richtext&quot;,
      &quot;label&quot;: &quot;t:common.settings.title.label&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;first_large_image_position&quot;,
      &quot;label&quot;: &quot;t:common.settings.first_large_image_position.label&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;top_left&quot;,
          &quot;label&quot;: &quot;t:common.options.top_left.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;top_right&quot;,
          &quot;label&quot;: &quot;t:common.options.top_right.label&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;top_left&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;crop&quot;,
      &quot;label&quot;: &quot;t:common.settings.crop.label&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;&quot;,
          &quot;label&quot;: &quot;t:common.options.no_crop.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;aspect-w-4 aspect-h-3&quot;,
          &quot;label&quot;: &quot;t:common.options.landscape.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;aspect-w-1 aspect-h-1&quot;,
          &quot;label&quot;: &quot;t:common.options.square.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;aspect-w-3 aspect-h-4&quot;,
          &quot;label&quot;: &quot;t:common.options.portrait.label&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;aspect-w-1 aspect-h-1&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.header_buttons&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;button_style&quot;,
      &quot;label&quot;: &quot;t:common.settings.button_style.label&quot;,
      &quot;default&quot;: &quot;push-btn__surface&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;push-btn__surface&quot;,
          &quot;label&quot;: &quot;t:common.options.primary.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;push-btn__surface push-btn__surface--secondary&quot;,
          &quot;label&quot;: &quot;t:common.options.secondary.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;show_buttons_on_mobile&quot;,
      &quot;label&quot;: &quot;t:common.settings.show_buttons_on_mobile.label&quot;,
      &quot;default&quot;: false
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;only_show_button_on_hover&quot;,
      &quot;label&quot;: &quot;t:common.settings.only_show_button_on_hover.label&quot;,
      &quot;default&quot;: true
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
  &quot;blocks&quot;: [
    &amp;#123;
      &quot;type&quot;: &quot;image&quot;,
      &quot;limit&quot;: 6,
      &quot;name&quot;: &quot;t:sections.collage.blocks.image.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;image_picker&quot;,
          &quot;id&quot;: &quot;image&quot;,
          &quot;label&quot;: &quot;t:common.settings.image.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;image_shape&quot;,
          &quot;label&quot;: &quot;t:common.settings.image_shape.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;default&quot;,
              &quot;label&quot;: &quot;t:common.options.default.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_ellipse&quot;,
              &quot;label&quot;: &quot;t:common.options.ellipse.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_pill&quot;,
              &quot;label&quot;: &quot;t:common.options.pill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_archway&quot;,
              &quot;label&quot;: &quot;t:common.options.archway.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;diamond&quot;,
              &quot;label&quot;: &quot;t:common.options.diamond.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_4&quot;,
              &quot;label&quot;: &quot;t:common.options.star_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_5&quot;,
              &quot;label&quot;: &quot;t:common.options.star_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_6&quot;,
              &quot;label&quot;: &quot;t:common.options.star_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_3&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_4&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_5&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_6&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;parallelogram&quot;,
              &quot;label&quot;: &quot;t:common.options.parallelogram.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squircle&quot;,
              &quot;label&quot;: &quot;t:common.options.squircle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clipped_square&quot;,
              &quot;label&quot;: &quot;t:common.options.clipped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;convex_square&quot;,
              &quot;label&quot;: &quot;t:common.options.convex.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;twisted_square&quot;,
              &quot;label&quot;: &quot;t:common.options.twisted.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;trapeze&quot;,
              &quot;label&quot;: &quot;t:common.options.trapeze.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pinched&quot;,
              &quot;label&quot;: &quot;t:common.options.pinched.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pixelated&quot;,
              &quot;label&quot;: &quot;t:common.options.pixelated.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapped&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wave_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.wave_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower&quot;,
              &quot;label&quot;: &quot;t:common.options.flower.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower_bloom&quot;,
              &quot;label&quot;: &quot;t:common.options.flower_bloom.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;concave&quot;,
              &quot;label&quot;: &quot;t:common.options.concave.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flag&quot;,
              &quot;label&quot;: &quot;t:common.options.flag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_oval&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_oval.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cross&quot;,
              &quot;label&quot;: &quot;t:common.options.cross.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quatrefoil&quot;,
              &quot;label&quot;: &quot;t:common.options.quatrefoil.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quadrant&quot;,
              &quot;label&quot;: &quot;t:common.options.quadrant.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wind&quot;,
              &quot;label&quot;: &quot;t:common.options.wind.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;windmill&quot;,
              &quot;label&quot;: &quot;t:common.options.windmill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;mirrored_pyramids&quot;,
              &quot;label&quot;: &quot;t:common.options.mirrored_pyramids.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plus&quot;,
              &quot;label&quot;: &quot;t:common.options.plus.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;crown&quot;,
              &quot;label&quot;: &quot;t:common.options.crown.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;stair&quot;,
              &quot;label&quot;: &quot;t:common.options.stair.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pancake_stack&quot;,
              &quot;label&quot;: &quot;t:common.options.pancake_stack.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;asterisk&quot;,
              &quot;label&quot;: &quot;t:common.options.asterisk.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapping_squares&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapping_squares.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;brush_stroke&quot;,
              &quot;label&quot;: &quot;t:common.options.brush_stroke.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;blob&quot;,
              &quot;label&quot;: &quot;t:common.options.blob.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.variable&quot;
            &amp;#125;
          ],
          &quot;info&quot;: &quot;t:common.settings.image_shape.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rotate_image&quot;,
          &quot;min&quot;: -90,
          &quot;max&quot;: 90,
          &quot;step&quot;: 2,
          &quot;unit&quot;: &quot;deg&quot;,
          &quot;label&quot;: &quot;t:common.settings.rotate_image.label&quot;,
          &quot;default&quot;: 0
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;button_text&quot;,
          &quot;label&quot;: &quot;t:common.settings.button_text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;url&quot;,
          &quot;id&quot;: &quot;url&quot;,
          &quot;label&quot;: &quot;t:common.settings.url.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;product&quot;,
      &quot;limit&quot;: 6,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;product&quot;,
          &quot;id&quot;: &quot;product&quot;,
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;image_shape&quot;,
          &quot;label&quot;: &quot;t:common.settings.image_shape.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;default&quot;,
              &quot;label&quot;: &quot;t:common.options.default.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_ellipse&quot;,
              &quot;label&quot;: &quot;t:common.options.ellipse.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_pill&quot;,
              &quot;label&quot;: &quot;t:common.options.pill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_archway&quot;,
              &quot;label&quot;: &quot;t:common.options.archway.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;diamond&quot;,
              &quot;label&quot;: &quot;t:common.options.diamond.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_4&quot;,
              &quot;label&quot;: &quot;t:common.options.star_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_5&quot;,
              &quot;label&quot;: &quot;t:common.options.star_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_6&quot;,
              &quot;label&quot;: &quot;t:common.options.star_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_3&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_4&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_5&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_6&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;parallelogram&quot;,
              &quot;label&quot;: &quot;t:common.options.parallelogram.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squircle&quot;,
              &quot;label&quot;: &quot;t:common.options.squircle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clipped_square&quot;,
              &quot;label&quot;: &quot;t:common.options.clipped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;convex_square&quot;,
              &quot;label&quot;: &quot;t:common.options.convex.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;twisted_square&quot;,
              &quot;label&quot;: &quot;t:common.options.twisted.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;trapeze&quot;,
              &quot;label&quot;: &quot;t:common.options.trapeze.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pinched&quot;,
              &quot;label&quot;: &quot;t:common.options.pinched.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pixelated&quot;,
              &quot;label&quot;: &quot;t:common.options.pixelated.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapped&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wave_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.wave_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower&quot;,
              &quot;label&quot;: &quot;t:common.options.flower.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower_bloom&quot;,
              &quot;label&quot;: &quot;t:common.options.flower_bloom.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;concave&quot;,
              &quot;label&quot;: &quot;t:common.options.concave.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flag&quot;,
              &quot;label&quot;: &quot;t:common.options.flag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_oval&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_oval.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cross&quot;,
              &quot;label&quot;: &quot;t:common.options.cross.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quatrefoil&quot;,
              &quot;label&quot;: &quot;t:common.options.quatrefoil.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quadrant&quot;,
              &quot;label&quot;: &quot;t:common.options.quadrant.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wind&quot;,
              &quot;label&quot;: &quot;t:common.options.wind.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;windmill&quot;,
              &quot;label&quot;: &quot;t:common.options.windmill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;mirrored_pyramids&quot;,
              &quot;label&quot;: &quot;t:common.options.mirrored_pyramids.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plus&quot;,
              &quot;label&quot;: &quot;t:common.options.plus.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;crown&quot;,
              &quot;label&quot;: &quot;t:common.options.crown.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;stair&quot;,
              &quot;label&quot;: &quot;t:common.options.stair.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pancake_stack&quot;,
              &quot;label&quot;: &quot;t:common.options.pancake_stack.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;asterisk&quot;,
              &quot;label&quot;: &quot;t:common.options.asterisk.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapping_squares&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapping_squares.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;brush_stroke&quot;,
              &quot;label&quot;: &quot;t:common.options.brush_stroke.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;blob&quot;,
              &quot;label&quot;: &quot;t:common.options.blob.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.variable&quot;
            &amp;#125;
          ],
          &quot;info&quot;: &quot;t:common.settings.image_shape.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rotate_image&quot;,
          &quot;min&quot;: -90,
          &quot;max&quot;: 90,
          &quot;step&quot;: 2,
          &quot;unit&quot;: &quot;deg&quot;,
          &quot;label&quot;: &quot;t:common.settings.rotate_image.label&quot;,
          &quot;default&quot;: 0
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;collection&quot;,
      &quot;name&quot;: &quot;t:sections.collage.blocks.collection.name&quot;,
      &quot;limit&quot;: 6,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;collection&quot;,
          &quot;id&quot;: &quot;collection&quot;,
          &quot;label&quot;: &quot;t:common.settings.collection.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;image_shape&quot;,
          &quot;label&quot;: &quot;t:common.settings.image_shape.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;default&quot;,
              &quot;label&quot;: &quot;t:common.options.default.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_ellipse&quot;,
              &quot;label&quot;: &quot;t:common.options.ellipse.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_pill&quot;,
              &quot;label&quot;: &quot;t:common.options.pill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_archway&quot;,
              &quot;label&quot;: &quot;t:common.options.archway.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;diamond&quot;,
              &quot;label&quot;: &quot;t:common.options.diamond.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_4&quot;,
              &quot;label&quot;: &quot;t:common.options.star_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_5&quot;,
              &quot;label&quot;: &quot;t:common.options.star_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_6&quot;,
              &quot;label&quot;: &quot;t:common.options.star_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_3&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_4&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_5&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_6&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;parallelogram&quot;,
              &quot;label&quot;: &quot;t:common.options.parallelogram.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squircle&quot;,
              &quot;label&quot;: &quot;t:common.options.squircle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clipped_square&quot;,
              &quot;label&quot;: &quot;t:common.options.clipped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;convex_square&quot;,
              &quot;label&quot;: &quot;t:common.options.convex.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;twisted_square&quot;,
              &quot;label&quot;: &quot;t:common.options.twisted.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;trapeze&quot;,
              &quot;label&quot;: &quot;t:common.options.trapeze.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pinched&quot;,
              &quot;label&quot;: &quot;t:common.options.pinched.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pixelated&quot;,
              &quot;label&quot;: &quot;t:common.options.pixelated.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapped&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wave_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.wave_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower&quot;,
              &quot;label&quot;: &quot;t:common.options.flower.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower_bloom&quot;,
              &quot;label&quot;: &quot;t:common.options.flower_bloom.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;concave&quot;,
              &quot;label&quot;: &quot;t:common.options.concave.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flag&quot;,
              &quot;label&quot;: &quot;t:common.options.flag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_oval&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_oval.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cross&quot;,
              &quot;label&quot;: &quot;t:common.options.cross.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quatrefoil&quot;,
              &quot;label&quot;: &quot;t:common.options.quatrefoil.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quadrant&quot;,
              &quot;label&quot;: &quot;t:common.options.quadrant.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wind&quot;,
              &quot;label&quot;: &quot;t:common.options.wind.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;windmill&quot;,
              &quot;label&quot;: &quot;t:common.options.windmill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;mirrored_pyramids&quot;,
              &quot;label&quot;: &quot;t:common.options.mirrored_pyramids.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plus&quot;,
              &quot;label&quot;: &quot;t:common.options.plus.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;crown&quot;,
              &quot;label&quot;: &quot;t:common.options.crown.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;stair&quot;,
              &quot;label&quot;: &quot;t:common.options.stair.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pancake_stack&quot;,
              &quot;label&quot;: &quot;t:common.options.pancake_stack.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;asterisk&quot;,
              &quot;label&quot;: &quot;t:common.options.asterisk.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapping_squares&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapping_squares.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;brush_stroke&quot;,
              &quot;label&quot;: &quot;t:common.options.brush_stroke.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;blob&quot;,
              &quot;label&quot;: &quot;t:common.options.blob.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.variable&quot;
            &amp;#125;
          ],
          &quot;info&quot;: &quot;t:common.settings.image_shape.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rotate_image&quot;,
          &quot;min&quot;: -90,
          &quot;max&quot;: 90,
          &quot;step&quot;: 2,
          &quot;unit&quot;: &quot;deg&quot;,
          &quot;label&quot;: &quot;t:common.settings.rotate_image.label&quot;,
          &quot;default&quot;: 0
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;article&quot;,
      &quot;name&quot;: &quot;t:sections.collage.blocks.article.name&quot;,
      &quot;limit&quot;: 6,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;article&quot;,
          &quot;id&quot;: &quot;article&quot;,
          &quot;label&quot;: &quot;t:common.settings.article.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;image_shape&quot;,
          &quot;label&quot;: &quot;t:common.settings.image_shape.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;default&quot;,
              &quot;label&quot;: &quot;t:common.options.default.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_ellipse&quot;,
              &quot;label&quot;: &quot;t:common.options.ellipse.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_pill&quot;,
              &quot;label&quot;: &quot;t:common.options.pill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;default_archway&quot;,
              &quot;label&quot;: &quot;t:common.options.archway.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.fit_to_image&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;diamond&quot;,
              &quot;label&quot;: &quot;t:common.options.diamond.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_4&quot;,
              &quot;label&quot;: &quot;t:common.options.star_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_5&quot;,
              &quot;label&quot;: &quot;t:common.options.star_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_6&quot;,
              &quot;label&quot;: &quot;t:common.options.star_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_3&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_4&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_5&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_6&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;parallelogram&quot;,
              &quot;label&quot;: &quot;t:common.options.parallelogram.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squircle&quot;,
              &quot;label&quot;: &quot;t:common.options.squircle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clipped_square&quot;,
              &quot;label&quot;: &quot;t:common.options.clipped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;convex_square&quot;,
              &quot;label&quot;: &quot;t:common.options.convex.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;twisted_square&quot;,
              &quot;label&quot;: &quot;t:common.options.twisted.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;trapeze&quot;,
              &quot;label&quot;: &quot;t:common.options.trapeze.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pinched&quot;,
              &quot;label&quot;: &quot;t:common.options.pinched.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pixelated&quot;,
              &quot;label&quot;: &quot;t:common.options.pixelated.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapped&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wave_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.wave_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower&quot;,
              &quot;label&quot;: &quot;t:common.options.flower.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower_bloom&quot;,
              &quot;label&quot;: &quot;t:common.options.flower_bloom.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;concave&quot;,
              &quot;label&quot;: &quot;t:common.options.concave.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flag&quot;,
              &quot;label&quot;: &quot;t:common.options.flag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_oval&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_oval.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cross&quot;,
              &quot;label&quot;: &quot;t:common.options.cross.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quatrefoil&quot;,
              &quot;label&quot;: &quot;t:common.options.quatrefoil.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quadrant&quot;,
              &quot;label&quot;: &quot;t:common.options.quadrant.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wind&quot;,
              &quot;label&quot;: &quot;t:common.options.wind.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;windmill&quot;,
              &quot;label&quot;: &quot;t:common.options.windmill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;mirrored_pyramids&quot;,
              &quot;label&quot;: &quot;t:common.options.mirrored_pyramids.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plus&quot;,
              &quot;label&quot;: &quot;t:common.options.plus.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;crown&quot;,
              &quot;label&quot;: &quot;t:common.options.crown.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;stair&quot;,
              &quot;label&quot;: &quot;t:common.options.stair.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pancake_stack&quot;,
              &quot;label&quot;: &quot;t:common.options.pancake_stack.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;asterisk&quot;,
              &quot;label&quot;: &quot;t:common.options.asterisk.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapping_squares&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapping_squares.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;brush_stroke&quot;,
              &quot;label&quot;: &quot;t:common.options.brush_stroke.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;blob&quot;,
              &quot;label&quot;: &quot;t:common.options.blob.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.variable&quot;
            &amp;#125;
          ],
          &quot;info&quot;: &quot;t:common.settings.image_shape.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rotate_image&quot;,
          &quot;min&quot;: -90,
          &quot;max&quot;: 90,
          &quot;step&quot;: 2,
          &quot;unit&quot;: &quot;deg&quot;,
          &quot;label&quot;: &quot;t:common.settings.rotate_image.label&quot;,
          &quot;default&quot;: 0
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;background_pattern&quot;,
      &quot;name&quot;: &quot;t:common.blocks.background_pattern.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;type&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.type.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;diagonal_lines&quot;,
              &quot;label&quot;: &quot;t:common.options.diagonal_lines.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_lines&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;grid&quot;,
              &quot;label&quot;: &quot;t:common.options.grid_lines.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_lines&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;grid_with_diagonal_lines&quot;,
              &quot;label&quot;: &quot;t:common.options.grid_with_diagonal_lines.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_lines&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;crosshatch&quot;,
              &quot;label&quot;: &quot;t:common.options.crosshatch.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_lines&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_lines&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_lines&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;waves_lines&quot;,
              &quot;label&quot;: &quot;t:common.options.waves.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_lines&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dots&quot;,
              &quot;label&quot;: &quot;t:common.options.dots.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_shapes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle&quot;,
              &quot;label&quot;: &quot;t:common.options.triangles.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_shapes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;polka_dot&quot;,
              &quot;label&quot;: &quot;t:common.options.polka_dot.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_shapes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;polka_dot_triangles&quot;,
              &quot;label&quot;: &quot;t:common.options.polka_dot_triangles.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_shapes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plus&quot;,
              &quot;label&quot;: &quot;t:common.options.plus.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_shapes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cross&quot;,
              &quot;label&quot;: &quot;t:common.options.cross.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_shapes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squares&quot;,
              &quot;label&quot;: &quot;t:common.options.squares.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_shapes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vertical_stripes&quot;,
              &quot;label&quot;: &quot;t:common.options.vertical_stripes.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_stripes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;horizontal_stripes&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.horizontal_stripes.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_stripes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;diagonal_stripes&quot;,
              &quot;label&quot;: &quot;t:common.options.diagonal_stripes.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_stripes&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;checkerboard&quot;,
              &quot;label&quot;: &quot;t:common.options.checkerboard.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corner_triangle&quot;,
              &quot;label&quot;: &quot;t:common.options.corner_triangle.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;diamonds&quot;,
              &quot;label&quot;: &quot;t:common.options.diamonds.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scales&quot;,
              &quot;label&quot;: &quot;t:common.options.scales.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alternating_pinwheel&quot;,
              &quot;label&quot;: &quot;t:common.options.alternating_pinwheel.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;windmill&quot;,
              &quot;label&quot;: &quot;t:common.options.windmill.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;origami&quot;,
              &quot;label&quot;: &quot;t:common.options.origami.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;argyle&quot;,
              &quot;label&quot;: &quot;t:common.options.argyle.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chevrons_1&quot;,
              &quot;label&quot;: &quot;t:common.options.chevrons_1.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chevrons_2&quot;,
              &quot;label&quot;: &quot;t:common.options.chevrons_2.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;connected_circles&quot;,
              &quot;label&quot;: &quot;t:common.options.connected_circles.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alternating_triangles&quot;,
              &quot;label&quot;: &quot;t:common.options.alternating_triangles.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;waves_geometric&quot;,
              &quot;label&quot;: &quot;t:common.options.waves.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagons_geometric&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagons.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squiggle&quot;,
              &quot;label&quot;: &quot;t:common.options.squiggle.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_geometric&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_geometric&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squiggles&quot;,
              &quot;label&quot;: &quot;t:common.options.squiggles.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sprinkles&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.sprinkles.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;8bit&quot;,
              &quot;label&quot;: &quot;t:common.options.8bit.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;3d_cube&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.3d_cube.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bubbles&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.bubbles.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;macaroni&quot;,
              &quot;label&quot;: &quot;t:common.options.macaroni.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaves&quot;,
              &quot;label&quot;: &quot;t:common.options.leaves.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bricks&quot;,
              &quot;label&quot;: &quot;t:common.options.bricks.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;herringbone_1&quot;,
              &quot;label&quot;: &quot;t:common.options.herringbone_1.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;herringbone_2&quot;,
              &quot;label&quot;: &quot;t:common.options.herringbone_2.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;interlocking_hexagons&quot;,
              &quot;label&quot;: &quot;t:common.options.interlocking_hexagons.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;blobs&quot;,
              &quot;label&quot;: &quot;t:common.options.blobs.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.background_pattern.settings.type.options.group_miscellaneous&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;color&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.color.label&quot;,
          &quot;default&quot;: &quot;text&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text&quot;,
              &quot;label&quot;: &quot;t:common.options.text.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;accent-1&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_1.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;accent-2&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_2.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;card&quot;,
              &quot;label&quot;: &quot;t:common.options.card.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;background&quot;,
              &quot;label&quot;: &quot;t:common.options.background.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gradient&quot;,
              &quot;label&quot;: &quot;t:common.options.gradient.label&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;size&quot;,
          &quot;min&quot;: 8,
          &quot;max&quot;: 600,
          &quot;unit&quot;: &quot;px&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.size.label&quot;,
          &quot;step&quot;: 8,
          &quot;default&quot;: 24
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;opacity&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.settings.opacity.label&quot;,
          &quot;default&quot;: 100
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_animation&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;enable_parallax&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_pattern.settings.enable_parallax.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.blocks.background_pattern.settings.enable_parallax.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;parallax_speed&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 10,
          &quot;step&quot;: 1,
          &quot;label&quot;: &quot;t:common.settings.parallax_speed.label&quot;,
          &quot;default&quot;: 3
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;background_shape&quot;,
      &quot;name&quot;: &quot;t:common.blocks.background_shape.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;shape&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.shape.label&quot;,
          &quot;default&quot;: &quot;square&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;square&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.shape.options.square.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;circle&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.shape.options.circle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;oval&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.shape.options.oval.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle&quot;,
              &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.shape.options.triangle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_4&quot;,
              &quot;label&quot;: &quot;t:common.options.star_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_5&quot;,
              &quot;label&quot;: &quot;t:common.options.star_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_6&quot;,
              &quot;label&quot;: &quot;t:common.options.star_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_3&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_4&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_5&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_6&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;parallelogram&quot;,
              &quot;label&quot;: &quot;t:common.options.parallelogram.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squircle&quot;,
              &quot;label&quot;: &quot;t:common.options.squircle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clipped_square&quot;,
              &quot;label&quot;: &quot;t:common.options.clipped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;convex_square&quot;,
              &quot;label&quot;: &quot;t:common.options.convex.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;twisted_square&quot;,
              &quot;label&quot;: &quot;t:common.options.twisted.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;trapeze&quot;,
              &quot;label&quot;: &quot;t:common.options.trapeze.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pinched&quot;,
              &quot;label&quot;: &quot;t:common.options.pinched.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pixelated&quot;,
              &quot;label&quot;: &quot;t:common.options.pixelated.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapped&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wave_tear&quot;,
              &quot;label&quot;: &quot;t:common.options.wave_tear.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower&quot;,
              &quot;label&quot;: &quot;t:common.options.flower.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flower_bloom&quot;,
              &quot;label&quot;: &quot;t:common.options.flower_bloom.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;concave&quot;,
              &quot;label&quot;: &quot;t:common.options.concave.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;flag&quot;,
              &quot;label&quot;: &quot;t:common.options.flag.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;abstract_oval&quot;,
              &quot;label&quot;: &quot;t:common.options.abstract_oval.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cross&quot;,
              &quot;label&quot;: &quot;t:common.options.cross.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quatrefoil&quot;,
              &quot;label&quot;: &quot;t:common.options.quatrefoil.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;quadrant&quot;,
              &quot;label&quot;: &quot;t:common.options.quadrant.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wind&quot;,
              &quot;label&quot;: &quot;t:common.options.wind.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;windmill&quot;,
              &quot;label&quot;: &quot;t:common.options.windmill.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;mirrored_pyramids&quot;,
              &quot;label&quot;: &quot;t:common.options.mirrored_pyramids.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plus&quot;,
              &quot;label&quot;: &quot;t:common.options.plus.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;double_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.double_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_1&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triple_pill_2&quot;,
              &quot;label&quot;: &quot;t:common.options.triple_pill_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;crown&quot;,
              &quot;label&quot;: &quot;t:common.options.crown.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;stair&quot;,
              &quot;label&quot;: &quot;t:common.options.stair.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pancake_stack&quot;,
              &quot;label&quot;: &quot;t:common.options.pancake_stack.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;asterisk&quot;,
              &quot;label&quot;: &quot;t:common.options.asterisk.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapping_squares&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapping_squares.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;brush_stroke&quot;,
              &quot;label&quot;: &quot;t:common.options.brush_stroke.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.miscellaneous&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;blob&quot;,
              &quot;label&quot;: &quot;t:common.options.blob.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.variable&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;blob_type&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 10,
          &quot;step&quot;: 1,
          &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.blob_type.label&quot;,
          &quot;default&quot;: 1,
          &quot;info&quot;: &quot;t:common.blocks.background_shape.settings.blob_type.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;size&quot;,
          &quot;min&quot;: 25,
          &quot;max&quot;: 300,
          &quot;step&quot;: 5,
          &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.size.label&quot;,
          &quot;default&quot;: 100
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;opacity&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.settings.opacity.label&quot;,
          &quot;default&quot;: 100
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;blur&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 500,
          &quot;step&quot;: 5,
          &quot;unit&quot;: &quot;px&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.blur.label&quot;,
          &quot;default&quot;: 0
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_position&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;horizontal_position&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.horizontal_position.label&quot;,
          &quot;default&quot;: 50
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;vertical_position&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.vertical_position.label&quot;,
          &quot;default&quot;: 50
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rotate&quot;,
          &quot;min&quot;: -90,
          &quot;max&quot;: 90,
          &quot;step&quot;: 2,
          &quot;unit&quot;: &quot;deg&quot;,
          &quot;label&quot;: &quot;t:common.settings.rotate.label&quot;,
          &quot;default&quot;: 0
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_animation&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;enable_parallax&quot;,
          &quot;label&quot;: &quot;t:common.blocks.background_shape.settings.enable_parallax.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.blocks.background_shape.settings.enable_parallax.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;parallax_speed&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 10,
          &quot;step&quot;: 1,
          &quot;label&quot;: &quot;t:common.settings.parallax_speed.label&quot;,
          &quot;default&quot;: 3
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
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;color&quot;,
          &quot;label&quot;: &quot;t:common.settings.background_color.label&quot;,
          &quot;default&quot;: &quot;accent-1&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text&quot;,
              &quot;label&quot;: &quot;t:common.options.text.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;accent-1&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_1.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;accent-2&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_2.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;card&quot;,
              &quot;label&quot;: &quot;t:common.options.card.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;background&quot;,
              &quot;label&quot;: &quot;t:common.options.background.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gradient&quot;,
              &quot;label&quot;: &quot;t:common.options.gradient.label&quot;
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;name&quot;: &quot;t:common.blocks.sticker.name&quot;,
      &quot;type&quot;: &quot;sticker&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;width&quot;,
          &quot;min&quot;: 100,
          &quot;max&quot;: 300,
          &quot;step&quot;: 10,
          &quot;unit&quot;: &quot;px&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.width.label&quot;,
          &quot;default&quot;: 150
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;half_width_on_mobile&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.half_width_on_mobile.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.text.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.sticker.settings.text.info&quot;,
          &quot;default&quot;: &quot;Sticker&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;shape&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.shape.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;fit_to_text&quot;,
              &quot;label&quot;: &quot;t:common.blocks.sticker.settings.shape.options.fit_to_text.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;circle&quot;,
              &quot;label&quot;: &quot;t:common.options.circle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.basic&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_pentagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_pentagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_hexagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_heptagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_heptagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_octagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_octagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_nonagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_nonagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_decagon&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_decagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.polygons&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_1&quot;,
              &quot;label&quot;: &quot;t:common.options.star_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_2&quot;,
              &quot;label&quot;: &quot;t:common.options.star_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_3&quot;,
              &quot;label&quot;: &quot;t:common.options.star_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_4&quot;,
              &quot;label&quot;: &quot;t:common.options.star_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_5&quot;,
              &quot;label&quot;: &quot;t:common.options.star_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_6&quot;,
              &quot;label&quot;: &quot;t:common.options.star_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.stars&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_3&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_3.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_4&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_4.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_5&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_5.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_circle_6&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_circle_6.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.scalloped_circles&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;parallelogram&quot;,
              &quot;label&quot;: &quot;t:common.options.parallelogram.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;squircle&quot;,
              &quot;label&quot;: &quot;t:common.options.squircle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_1&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_1.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;scalloped_square_2&quot;,
              &quot;label&quot;: &quot;t:common.options.scalloped_square_2.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clipped_square&quot;,
              &quot;label&quot;: &quot;t:common.options.clipped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;convex_square&quot;,
              &quot;label&quot;: &quot;t:common.options.convex.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;twisted_square&quot;,
              &quot;label&quot;: &quot;t:common.options.twisted.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;trapeze&quot;,
              &quot;label&quot;: &quot;t:common.options.trapeze.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pinched&quot;,
              &quot;label&quot;: &quot;t:common.options.pinched.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pixelated&quot;,
              &quot;label&quot;: &quot;t:common.options.pixelated.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;overlapped&quot;,
              &quot;label&quot;: &quot;t:common.options.overlapped.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.square&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ellipse&quot;,
              &quot;label&quot;: &quot;t:common.options.ellipse.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;diamond_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.diamond.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_diamond_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_diamond.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.triangle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;hexagon_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rounded_hexagon_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.rounded_hexagon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;uneven_star_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.uneven_star.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;semicircle&quot;,
              &quot;label&quot;: &quot;t:common.options.semicircle.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;parallelogram_wide&quot;,
              &quot;label&quot;: &quot;t:common.options.parallelogram.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ribbon&quot;,
              &quot;label&quot;: &quot;t:common.options.ribbon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ticket_stub&quot;,
              &quot;label&quot;: &quot;t:common.options.ticket_stub.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;wave_ribbon&quot;,
              &quot;label&quot;: &quot;t:common.options.wave_ribbon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig_zag_ribbon&quot;,
              &quot;label&quot;: &quot;t:common.options.zig_zag_ribbon.label&quot;,
              &quot;group&quot;: &quot;t:common.groups.wide&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;star_1&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;sticker_font_size&quot;,
          &quot;label&quot;: &quot;t:common.settings.sticker_font_size.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;1rem&quot;,
              &quot;label&quot;: &quot;t:common.options.extra_small.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;1.25rem&quot;,
              &quot;label&quot;: &quot;t:common.options.small.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;1.563rem&quot;,
              &quot;label&quot;: &quot;t:common.options.medium.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;1.953rem&quot;,
              &quot;label&quot;: &quot;t:common.options.large.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;2.441rem&quot;,
              &quot;label&quot;: &quot;t:common.options.extra_large.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;1.563rem&quot;,
          &quot;info&quot;: &quot;t:common.settings.sticker_font_size.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_custom_image&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;paragraph&quot;,
          &quot;content&quot;: &quot;t:common.blocks.sticker.settings.paragraph_using_an_image&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image_picker&quot;,
          &quot;id&quot;: &quot;image&quot;,
          &quot;label&quot;: &quot;t:common.settings.image.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_position&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;horizontal_position&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.horizontal_position.label&quot;,
          &quot;default&quot;: 80
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;vertical_position&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.vertical_position.label&quot;,
          &quot;default&quot;: 80
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rotate&quot;,
          &quot;min&quot;: -90,
          &quot;max&quot;: 90,
          &quot;step&quot;: 2,
          &quot;unit&quot;: &quot;deg&quot;,
          &quot;label&quot;: &quot;t:common.settings.rotate.label&quot;,
          &quot;default&quot;: 0
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_layout&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_sticker_on_mobile&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.show_sticker_on_mobile.label&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_sticker_on_desktop&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.show_sticker_on_desktop.label&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_animation&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;rotation_animation&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.rotation_animation.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;none&quot;,
              &quot;label&quot;: &quot;t:common.blocks.sticker.settings.rotation_animation.options.no_rotation.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;constantly_rotate&quot;,
              &quot;label&quot;: &quot;t:common.blocks.sticker.settings.rotation_animation.options.constantly_rotate.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;rotate_when_scrolling&quot;,
              &quot;label&quot;: &quot;t:common.blocks.sticker.settings.rotation_animation.options.rotate_only_when_page_is_scrolling.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;none&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;enable_parallax&quot;,
          &quot;label&quot;: &quot;t:common.blocks.sticker.settings.enable_parallax.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.blocks.sticker.settings.enable_parallax.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;parallax_speed&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 10,
          &quot;step&quot;: 1,
          &quot;label&quot;: &quot;t:common.settings.parallax_speed.label&quot;,
          &quot;default&quot;: 3
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
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;color&quot;,
          &quot;label&quot;: &quot;t:common.settings.background_color.label&quot;,
          &quot;default&quot;: &quot;bg-scheme-accent-1 text-scheme-accent-1-contrast&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-text text-scheme-text-contrast&quot;,
              &quot;label&quot;: &quot;t:common.options.text.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-accent-1 text-scheme-accent-1-contrast&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_1.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-accent-2 text-scheme-accent-2-contrast&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_2.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-card text-scheme-card-text&quot;,
              &quot;label&quot;: &quot;t:common.options.card.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-background text-scheme-text&quot;,
              &quot;label&quot;: &quot;t:common.options.background.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-gradient text-scheme-text&quot;,
              &quot;label&quot;: &quot;t:common.options.gradient.label&quot;
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;name&quot;: &quot;t:common.blocks.shape_divider.name&quot;,
      &quot;type&quot;: &quot;shape_divider&quot;,
      &quot;limit&quot;: 2,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.target_section.label&quot;,
          &quot;id&quot;: &quot;target_section&quot;,
          &quot;default&quot;: &quot;above&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;above&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.target_section.options.section_above.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;below&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.target_section.options.section_below.label&quot;
            &amp;#125;
          ],
          &quot;info&quot;: &quot;t:common.blocks.shape_divider.settings.target_section.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;color_scheme&quot;,
          &quot;id&quot;: &quot;target_section_color_scheme&quot;,
          &quot;default&quot;: &quot;scheme1&quot;,
          &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.target_section_color_scheme.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.shape_divider.settings.target_section_color_scheme.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.label&quot;,
          &quot;id&quot;: &quot;style&quot;,
          &quot;default&quot;: &quot;waves-1-patterned_1200x20&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;waves-1-patterned_1200x20&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.waves_1.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;waves-2-patterned_1200x43&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.waves_2.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;waves-3-patterned_1200x84&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.waves_3.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig-zag-1-patterned_1200x21&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.zig_zag_1.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig-zag-2-patterned_1200x37&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.zig_zag_2.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;zig-zag-3-patterned_1200x65&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.zig_zag_3.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;circles-1-patterned_1200x16&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.circles_1.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;circles-2-patterned_1200x35&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.circles_2.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;circles-3-patterned_1200x67&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.circles_3.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;spikes-1-patterned_1200x132&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.spikes_1.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;spikes-2-patterned_1200x132&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.spikes_2.label&quot;,
              &quot;group&quot;: &quot;t:common.blocks.shape_divider.settings.style.group_patterned&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;tilt-1-shape_1440x101&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.tilt_1.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;tilt-2-shape_1440x180&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.tilt_2.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;tilt-3-shape_1440x293&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.tilt_3.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;waves-1-shape_1440x261&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.waves_1.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;waves-2-shape_1440x330&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.waves_2.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;mountains-1-shape_1440x293&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.mountains_1.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;mountains-2-shape_1440x325&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.mountains_2.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;curve-shape_1440x149&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.curve.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;curve-inverse-shape_1440x149&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.curve_inverse.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;steps-1-shape_1400x105&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.steps_1.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;steps-2-shape_1400x105&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.steps_2.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;arrow-1-shape_1400x33&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.arrow_1.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;arrow-2-shape_1400x73&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.arrow_2.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;offset-ovals-shape_1400x155&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.offset_ovals.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle-shape_1400x145&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.triangle.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;triangle-asymmetrical-shape_1400x145&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.triangle_asymmetrical.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clouds-shape_1400x161&quot;,
              &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.style.options.clouds.label&quot;,
              &quot;group&quot;: &quot;t:common.settings.shape.label&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;flip_horizontal&quot;,
          &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.flip_horizontal.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_animation&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;enable_animation&quot;,
          &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.enable_animation.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.shape_divider.settings.enable_animation.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;animation_direction&quot;,
          &quot;label&quot;: &quot;t:common.blocks.shape_divider.settings.animation_direction.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;&quot;,
              &quot;label&quot;: &quot;t:common.options.right_to_left.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;reverse&quot;,
              &quot;label&quot;: &quot;t:common.options.left_to_right.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;&quot;
        &amp;#125;
      ]
    &amp;#125;
  ],
  &quot;presets&quot;: [
    &amp;#123;
      &quot;name&quot;: &quot;t:sections.collage.name&quot;,
      &quot;blocks&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;image&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image&quot;
        &amp;#125;
      ]
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
