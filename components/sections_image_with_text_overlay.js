export default function sections_image_with_text_overlay() {
  const html = `

<section
  class="overflow-hidden bg-scheme-background text-scheme-text full-bleed-section  bg-scheme-gradient"
  data-color-scheme=""
>
  

  <div class="section-content  py-section-vertical-spacing">
    
  </div>
</section>




&#123;
  "name": "t:sections.image_with_text_overlay.name",
  "class": "banner-section",
  "settings": [
    &#123;
      "id": "image",
      "type": "image_picker",
      "label": "t:common.settings.image.label"
    &#125;,
    &#123;
      "id": "image_mobile",
      "type": "image_picker",
      "label": "t:common.settings.image_mobile.label",
      "info": "t:common.settings.image_mobile.info"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_layout"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "display_on_card",
      "label": "t:common.settings.display_on_card.label",
      "default": false
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "display_content_below_image_on_mobile",
      "label": "t:common.settings.display_content_below_image_on_mobile.label",
      "default": true
    &#125;,
    &#123;
      "type": "select",
      "id": "style",
      "label": "t:common.settings.style.label",
      "default": "full",
      "options": [
        &#123;
          "value": "inset",
          "label": "t:common.options.inset.label"
        &#125;,
        &#123;
          "value": "full",
          "label": "t:common.options.full_width.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "select",
      "id": "height",
      "label": "t:sections.image_with_text_overlay.settings.height.label",
      "options": [
        &#123;
          "value": "natural",
          "label": "t:common.options.natural.label"
        &#125;,
        &#123;
          "value": "pt-screen-height",
          "label": "t:common.options.screen_height.label"
        &#125;,
        &#123;
          "value": "pt-three-quarters-screen-height",
          "label": "t:common.options.three_quarters_screen_height.label"
        &#125;,
        &#123;
          "value": "pt-two-thirds-screen-height",
          "label": "t:common.options.two_thirds_screen_height.label"
        &#125;,
        &#123;
          "value": "pt-half-screen-height",
          "label": "t:common.options.half_screen_height.label"
        &#125;,
        &#123;
          "value": "pt-600",
          "label": "t:common.options.600px.label"
        &#125;,
        &#123;
          "value": "pt-700",
          "label": "t:common.options.700px.label"
        &#125;,
        &#123;
          "value": "pt-800",
          "label": "t:common.options.800px.label"
        &#125;
      ],
      "default": "natural"
    &#125;,
    &#123;
      "type": "select",
      "id": "place_content",
      "label": "t:common.settings.place_content.label",
      "options": [
        &#123;
          "value": "place-content-start-start",
          "label": "t:common.options.top_left.label"
        &#125;,
        &#123;
          "value": "place-content-start-center",
          "label": "t:common.options.top_center.label"
        &#125;,
        &#123;
          "value": "place-content-start-end",
          "label": "t:common.options.top_right.label"
        &#125;,
        &#123;
          "value": "place-content-center-start",
          "label": "t:common.options.middle_left.label"
        &#125;,
        &#123;
          "value": "place-content-center-center",
          "label": "t:common.options.middle_center.label"
        &#125;,
        &#123;
          "value": "place-content-center-end",
          "label": "t:common.options.middle_right.label"
        &#125;,
        &#123;
          "value": "place-content-end-start",
          "label": "t:common.options.bottom_left.label"
        &#125;,
        &#123;
          "value": "place-content-end-center",
          "label": "t:common.options.bottom_center.label"
        &#125;,
        &#123;
          "value": "place-content-end-end",
          "label": "t:common.options.bottom_right.label"
        &#125;
      ],
      "default": "place-content-center-center"
    &#125;,
    &#123;
      "type": "select",
      "id": "text_align",
      "label": "t:common.settings.text_align.label",
      "options": [
        &#123;
          "value": "text-left",
          "label": "t:common.options.left.label"
        &#125;,
        &#123;
          "value": "text-center",
          "label": "t:common.options.center.label"
        &#125;,
        &#123;
          "value": "text-right",
          "label": "t:common.options.right.label"
        &#125;
      ],
      "default": "text-center"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_content"
    &#125;,
    &#123;
      "type": "inline_richtext",
      "id": "title",
      "label": "t:sections.image_with_text_overlay.settings.title.label",
      "default": "Image with text overlay"
    &#125;,
    &#123;
      "type": "select",
      "id": "heading_size",
      "label": "t:common.settings.heading_size.label",
      "options": [
        &#123;
          "value": "heading-standard",
          "label": "t:common.options.standard.label"
        &#125;,
        &#123;
          "value": "heading-feature",
          "label": "t:common.options.feature.label"
        &#125;
      ],
      "default": "heading-standard"
    &#125;,
    &#123;
      "type": "inline_richtext",
      "id": "richtext",
      "label": "t:common.settings.richtext.label"
    &#125;,
    &#123;
      "type": "url",
      "id": "cta_url",
      "label": "t:common.settings.cta_url.label"
    &#125;,
    &#123;
      "type": "text",
      "id": "cta_text",
      "label": "t:common.settings.cta_text.label",
      "default": "Shop Now"
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
      "name": "t:common.blocks.sticker.name",
      "type": "sticker",
      "settings": [
        &#123;
          "type": "range",
          "id": "width",
          "min": 100,
          "max": 300,
          "step": 10,
          "unit": "px",
          "label": "t:common.blocks.sticker.settings.width.label",
          "default": 150
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "half_width_on_mobile",
          "label": "t:common.blocks.sticker.settings.half_width_on_mobile.label",
          "default": false
        &#125;,
        &#123;
          "type": "text",
          "id": "text",
          "label": "t:common.blocks.sticker.settings.text.label",
          "info": "t:common.blocks.sticker.settings.text.info",
          "default": "Sticker"
        &#125;,
        &#123;
          "type": "select",
          "id": "shape",
          "label": "t:common.blocks.sticker.settings.shape.label",
          "options": [
            &#123;
              "value": "fit_to_text",
              "label": "t:common.blocks.sticker.settings.shape.options.fit_to_text.label"
            &#125;,
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
          "content": "t:common.blocks.sticker.settings.paragraph_using_an_image"
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
          "id": "horizontal_position",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "t:common.blocks.sticker.settings.horizontal_position.label",
          "default": 80
        &#125;,
        &#123;
          "type": "range",
          "id": "vertical_position",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "t:common.blocks.sticker.settings.vertical_position.label",
          "default": 80
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
          "type": "header",
          "content": "t:common.settings.header_layout"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_sticker_on_mobile",
          "label": "t:common.blocks.sticker.settings.show_sticker_on_mobile.label",
          "default": true
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_sticker_on_desktop",
          "label": "t:common.blocks.sticker.settings.show_sticker_on_desktop.label",
          "default": true
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.settings.header_animation"
        &#125;,
        &#123;
          "type": "select",
          "id": "rotation_animation",
          "label": "t:common.blocks.sticker.settings.rotation_animation.label",
          "options": [
            &#123;
              "value": "none",
              "label": "t:common.blocks.sticker.settings.rotation_animation.options.no_rotation.label"
            &#125;,
            &#123;
              "value": "constantly_rotate",
              "label": "t:common.blocks.sticker.settings.rotation_animation.options.constantly_rotate.label"
            &#125;,
            &#123;
              "value": "rotate_when_scrolling",
              "label": "t:common.blocks.sticker.settings.rotation_animation.options.rotate_only_when_page_is_scrolling.label"
            &#125;
          ],
          "default": "none"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "enable_parallax",
          "label": "t:common.blocks.sticker.settings.enable_parallax.label",
          "default": false,
          "info": "t:common.blocks.sticker.settings.enable_parallax.info"
        &#125;,
        &#123;
          "type": "range",
          "id": "parallax_speed",
          "min": 1,
          "max": 10,
          "step": 1,
          "label": "t:common.settings.parallax_speed.label",
          "default": 3
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
  ],
  "presets": [
    &#123;
      "name": "t:sections.image_with_text_overlay.name"
    &#125;
  ],
  "disabled_on": &#123;
    "groups": [
      "header",
      "footer",
      "aside"
    ]
  &#125;
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
