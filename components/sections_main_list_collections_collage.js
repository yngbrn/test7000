export default function sections_main_list_collections_collage() {
  const html = `

  <section
    class="relative bg-scheme-background py-section-vertical-spacing text-scheme-text bg-scheme-gradient overflow-hidden"
    data-color-scheme=""
  >
    <div class="mx-auto grid max-w-site px-section lg:grid-flow-row-dense lg:auto-rows-auto lg:grid-cols-12 section-content-top-margin gap-theme">
      
        

        <div
          class="gallery-item relative flex items-center justify-center "
          
            
          
        >
          <a href="" class="group block w-full">
            

            
              <div class="w-full">
                
              </div>
            
              <div class="w-full">
                
              </div>
            

            
              <div class="flexhidden lg:flex gallery-item__content absolute bottom-0 left-0 right-0 top-0  z-10 items-center justify-center px-5 text-center text-scheme-text  lg:opacity-0 group-hover:lg:opacity-100 transition duration-200 ease-in-out">
                <span class="push-btn  inline-block break-words text-center">
                  <span class="">
                    
                  </span>
                </span>
              </div>
            
          </a>
        </div>
      
    </div>

    
      
        <div class="mx-auto max-w-site px-section pt-section-vertical-spacing">
          
        </div>
      
    

    
  </section>






&#123;
  "name": "t:sections.collection_list__collage.name",
  "settings": [
    &#123;
      "type": "select",
      "id": "crop",
      "label": "t:common.settings.crop.label",
      "options": [
        &#123;
          "value": "",
          "label": "t:common.options.no_crop.label"
        &#125;,
        &#123;
          "value": "aspect-w-4 aspect-h-3",
          "label": "t:common.options.landscape.label"
        &#125;,
        &#123;
          "value": "aspect-w-1 aspect-h-1",
          "label": "t:common.options.square.label"
        &#125;,
        &#123;
          "value": "aspect-w-3 aspect-h-4",
          "label": "t:common.options.portrait.label"
        &#125;
      ],
      "default": "aspect-w-1 aspect-h-1"
    &#125;,
    &#123;
      "type": "select",
      "id": "image_shape",
      "label": "t:common.settings.image_shape.label",
      "options": [
        &#123;
          "value": "default",
          "label": "t:common.options.default.label",
          "group": "t:common.groups.fit_to_image"
        &#125;,
        &#123;
          "value": "default_ellipse",
          "label": "t:common.options.ellipse.label",
          "group": "t:common.groups.fit_to_image"
        &#125;,
        &#123;
          "value": "default_pill",
          "label": "t:common.options.pill.label",
          "group": "t:common.groups.fit_to_image"
        &#125;,
        &#123;
          "value": "default_archway",
          "label": "t:common.options.archway.label",
          "group": "t:common.groups.fit_to_image"
        &#125;,
        &#123;
          "value": "diamond",
          "label": "t:common.options.diamond.label",
          "group": "t:common.groups.basic"
        &#125;,
        &#123;
          "value": "triangle_1",
          "label": "t:common.options.triangle_1.label",
          "group": "t:common.groups.basic"
        &#125;,
        &#123;
          "value": "triangle_2",
          "label": "t:common.options.triangle_2.label",
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
          "value": "abstract_star_1",
          "label": "t:common.options.abstract_star_1.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "abstract_star_2",
          "label": "t:common.options.abstract_star_2.label",
          "group": "t:common.groups.stars"
        &#125;,
        &#123;
          "value": "abstract_star_3",
          "label": "t:common.options.abstract_star_3.label",
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
          "value": "zig_zag",
          "label": "t:common.options.zig_zag.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "zig_zag_tear",
          "label": "t:common.options.zig_zag_tear.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "wave_tear",
          "label": "t:common.options.wave_tear.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "flower",
          "label": "t:common.options.flower.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "flower_bloom",
          "label": "t:common.options.flower_bloom.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "concave",
          "label": "t:common.options.concave.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "flag",
          "label": "t:common.options.flag.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "abstract_oval",
          "label": "t:common.options.abstract_oval.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "cross",
          "label": "t:common.options.cross.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "quatrefoil",
          "label": "t:common.options.quatrefoil.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "quadrant",
          "label": "t:common.options.quadrant.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "wind",
          "label": "t:common.options.wind.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "windmill",
          "label": "t:common.options.windmill.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "heart",
          "label": "t:common.options.heart.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "mirrored_pyramids",
          "label": "t:common.options.mirrored_pyramids.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "plus",
          "label": "t:common.options.plus.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "double_pill_1",
          "label": "t:common.options.double_pill_1.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "double_pill_2",
          "label": "t:common.options.double_pill_2.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "triple_pill_1",
          "label": "t:common.options.triple_pill_1.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "triple_pill_2",
          "label": "t:common.options.triple_pill_2.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "crown",
          "label": "t:common.options.crown.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "stair",
          "label": "t:common.options.stair.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "pancake_stack",
          "label": "t:common.options.pancake_stack.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "asterisk",
          "label": "t:common.options.asterisk.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "overlapping_squares",
          "label": "t:common.options.overlapping_squares.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "brush_stroke",
          "label": "t:common.options.brush_stroke.label",
          "group": "t:common.groups.miscellaneous"
        &#125;,
        &#123;
          "value": "blob",
          "label": "t:common.options.blob.label",
          "group": "t:common.groups.variable"
        &#125;
      ],
      "info": "t:common.settings.image_shape.info"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_buttons"
    &#125;,
    &#123;
      "type": "select",
      "id": "button_style",
      "label": "t:common.settings.button_style.label",
      "default": "push-btn__surface",
      "options": [
        &#123;
          "value": "push-btn__surface",
          "label": "t:common.options.primary.label"
        &#125;,
        &#123;
          "value": "push-btn__surface push-btn__surface--secondary",
          "label": "t:common.options.secondary.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_buttons_on_mobile",
      "label": "t:common.settings.show_buttons_on_mobile.label",
      "default": false
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "only_show_button_on_hover",
      "label": "t:common.settings.only_show_button_on_hover.label",
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
      "type": "collection",
      "name": "t:sections.collection_list__collage.blocks.collection.name",
      "settings": [
        &#123;
          "type": "collection",
          "id": "collection",
          "label": "t:common.settings.collection.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "image_shape",
          "label": "t:common.settings.image_shape.label",
          "options": [
            &#123;
              "value": "same_as_section",
              "label": "t:common.options.same_as_section.label"
            &#125;,
            &#123;
              "value": "default",
              "label": "t:common.options.default.label",
              "group": "t:common.groups.fit_to_image"
            &#125;,
            &#123;
              "value": "default_ellipse",
              "label": "t:common.options.ellipse.label",
              "group": "t:common.groups.fit_to_image"
            &#125;,
            &#123;
              "value": "default_pill",
              "label": "t:common.options.pill.label",
              "group": "t:common.groups.fit_to_image"
            &#125;,
            &#123;
              "value": "default_archway",
              "label": "t:common.options.archway.label",
              "group": "t:common.groups.fit_to_image"
            &#125;,
            &#123;
              "value": "diamond",
              "label": "t:common.options.diamond.label",
              "group": "t:common.groups.basic"
            &#125;,
            &#123;
              "value": "triangle_1",
              "label": "t:common.options.triangle_1.label",
              "group": "t:common.groups.basic"
            &#125;,
            &#123;
              "value": "triangle_2",
              "label": "t:common.options.triangle_2.label",
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
              "value": "abstract_star_1",
              "label": "t:common.options.abstract_star_1.label",
              "group": "t:common.groups.stars"
            &#125;,
            &#123;
              "value": "abstract_star_2",
              "label": "t:common.options.abstract_star_2.label",
              "group": "t:common.groups.stars"
            &#125;,
            &#123;
              "value": "abstract_star_3",
              "label": "t:common.options.abstract_star_3.label",
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
              "value": "zig_zag",
              "label": "t:common.options.zig_zag.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "zig_zag_tear",
              "label": "t:common.options.zig_zag_tear.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "wave_tear",
              "label": "t:common.options.wave_tear.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "flower",
              "label": "t:common.options.flower.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "flower_bloom",
              "label": "t:common.options.flower_bloom.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "concave",
              "label": "t:common.options.concave.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "flag",
              "label": "t:common.options.flag.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "abstract_oval",
              "label": "t:common.options.abstract_oval.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "cross",
              "label": "t:common.options.cross.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "quatrefoil",
              "label": "t:common.options.quatrefoil.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "quadrant",
              "label": "t:common.options.quadrant.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "wind",
              "label": "t:common.options.wind.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "windmill",
              "label": "t:common.options.windmill.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "mirrored_pyramids",
              "label": "t:common.options.mirrored_pyramids.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "plus",
              "label": "t:common.options.plus.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "double_pill_1",
              "label": "t:common.options.double_pill_1.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "double_pill_2",
              "label": "t:common.options.double_pill_2.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "triple_pill_1",
              "label": "t:common.options.triple_pill_1.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "triple_pill_2",
              "label": "t:common.options.triple_pill_2.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "crown",
              "label": "t:common.options.crown.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "stair",
              "label": "t:common.options.stair.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "pancake_stack",
              "label": "t:common.options.pancake_stack.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "asterisk",
              "label": "t:common.options.asterisk.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "overlapping_squares",
              "label": "t:common.options.overlapping_squares.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "brush_stroke",
              "label": "t:common.options.brush_stroke.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "blob",
              "label": "t:common.options.blob.label",
              "group": "t:common.groups.variable"
            &#125;
          ],
          "info": "t:common.settings.image_shape.info"
        &#125;,
        &#123;
          "type": "range",
          "id": "rotate_image",
          "min": -90,
          "max": 90,
          "step": 2,
          "unit": "deg",
          "label": "t:common.settings.rotate_image.label",
          "default": 0
        &#125;
      ]
    &#125;,
    &#123;
      "type": "background_pattern",
      "name": "t:common.blocks.background_pattern.name",
      "settings": [
        &#123;
          "type": "select",
          "id": "type",
          "label": "t:common.blocks.background_pattern.settings.type.label",
          "options": [
            &#123;
              "value": "diagonal_lines",
              "label": "t:common.options.diagonal_lines.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_lines"
            &#125;,
            &#123;
              "value": "grid",
              "label": "t:common.options.grid_lines.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_lines"
            &#125;,
            &#123;
              "value": "grid_with_diagonal_lines",
              "label": "t:common.options.grid_with_diagonal_lines.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_lines"
            &#125;,
            &#123;
              "value": "crosshatch",
              "label": "t:common.options.crosshatch.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_lines"
            &#125;,
            &#123;
              "value": "zig_zag_lines",
              "label": "t:common.options.zig_zag.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_lines"
            &#125;,
            &#123;
              "value": "waves_lines",
              "label": "t:common.options.waves.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_lines"
            &#125;,
            &#123;
              "value": "dots",
              "label": "t:common.options.dots.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_shapes"
            &#125;,
            &#123;
              "value": "triangle",
              "label": "t:common.options.triangles.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_shapes"
            &#125;,
            &#123;
              "value": "polka_dot",
              "label": "t:common.options.polka_dot.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_shapes"
            &#125;,
            &#123;
              "value": "polka_dot_triangles",
              "label": "t:common.options.polka_dot_triangles.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_shapes"
            &#125;,
            &#123;
              "value": "plus",
              "label": "t:common.options.plus.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_shapes"
            &#125;,
            &#123;
              "value": "cross",
              "label": "t:common.options.cross.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_shapes"
            &#125;,
            &#123;
              "value": "squares",
              "label": "t:common.options.squares.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_shapes"
            &#125;,
            &#123;
              "value": "vertical_stripes",
              "label": "t:common.options.vertical_stripes.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_stripes"
            &#125;,
            &#123;
              "value": "horizontal_stripes",
              "label": "t:common.blocks.background_pattern.settings.type.options.horizontal_stripes.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_stripes"
            &#125;,
            &#123;
              "value": "diagonal_stripes",
              "label": "t:common.options.diagonal_stripes.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_stripes"
            &#125;,
            &#123;
              "value": "checkerboard",
              "label": "t:common.options.checkerboard.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "corner_triangle",
              "label": "t:common.options.corner_triangle.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "diamonds",
              "label": "t:common.options.diamonds.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "scales",
              "label": "t:common.options.scales.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "alternating_pinwheel",
              "label": "t:common.options.alternating_pinwheel.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "windmill",
              "label": "t:common.options.windmill.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "origami",
              "label": "t:common.options.origami.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "argyle",
              "label": "t:common.options.argyle.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "chevrons_1",
              "label": "t:common.options.chevrons_1.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "chevrons_2",
              "label": "t:common.options.chevrons_2.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "connected_circles",
              "label": "t:common.options.connected_circles.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "alternating_triangles",
              "label": "t:common.options.alternating_triangles.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "waves_geometric",
              "label": "t:common.options.waves.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "hexagons_geometric",
              "label": "t:common.options.hexagons.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "squiggle",
              "label": "t:common.options.squiggle.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "zig_zag_geometric",
              "label": "t:common.options.zig_zag.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_geometric"
            &#125;,
            &#123;
              "value": "squiggles",
              "label": "t:common.options.squiggles.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "sprinkles",
              "label": "t:common.blocks.background_pattern.settings.type.options.sprinkles.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "8bit",
              "label": "t:common.options.8bit.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "3d_cube",
              "label": "t:common.blocks.background_pattern.settings.type.options.3d_cube.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "bubbles",
              "label": "t:common.blocks.background_pattern.settings.type.options.bubbles.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "macaroni",
              "label": "t:common.options.macaroni.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "leaves",
              "label": "t:common.options.leaves.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "bricks",
              "label": "t:common.options.bricks.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "herringbone_1",
              "label": "t:common.options.herringbone_1.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "herringbone_2",
              "label": "t:common.options.herringbone_2.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "interlocking_hexagons",
              "label": "t:common.options.interlocking_hexagons.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;,
            &#123;
              "value": "blobs",
              "label": "t:common.options.blobs.label",
              "group": "t:common.blocks.background_pattern.settings.type.options.group_miscellaneous"
            &#125;
          ]
        &#125;,
        &#123;
          "type": "select",
          "id": "color",
          "label": "t:common.blocks.background_pattern.settings.color.label",
          "default": "text",
          "options": [
            &#123;
              "value": "text",
              "label": "t:common.options.text.label"
            &#125;,
            &#123;
              "value": "accent-1",
              "label": "t:common.options.accent_1.label"
            &#125;,
            &#123;
              "value": "accent-2",
              "label": "t:common.options.accent_2.label"
            &#125;,
            &#123;
              "value": "card",
              "label": "t:common.options.card.label"
            &#125;,
            &#123;
              "value": "background",
              "label": "t:common.options.background.label"
            &#125;,
            &#123;
              "value": "gradient",
              "label": "t:common.options.gradient.label"
            &#125;
          ]
        &#125;,
        &#123;
          "type": "range",
          "id": "size",
          "min": 8,
          "max": 600,
          "unit": "px",
          "label": "t:common.blocks.background_pattern.settings.size.label",
          "step": 8,
          "default": 24
        &#125;,
        &#123;
          "type": "range",
          "id": "opacity",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "t:common.settings.opacity.label",
          "default": 100
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.settings.header_animation"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "enable_parallax",
          "label": "t:common.blocks.background_pattern.settings.enable_parallax.label",
          "default": false,
          "info": "t:common.blocks.background_pattern.settings.enable_parallax.info"
        &#125;,
        &#123;
          "type": "range",
          "id": "parallax_speed",
          "min": 1,
          "max": 10,
          "step": 1,
          "label": "t:common.settings.parallax_speed.label",
          "default": 3
        &#125;
      ]
    &#125;,
    &#123;
      "type": "background_shape",
      "name": "t:common.blocks.background_shape.name",
      "settings": [
        &#123;
          "type": "select",
          "id": "shape",
          "label": "t:common.blocks.background_shape.settings.shape.label",
          "default": "square",
          "options": [
            &#123;
              "value": "square",
              "label": "t:common.blocks.background_shape.settings.shape.options.square.label",
              "group": "t:common.groups.basic"
            &#125;,
            &#123;
              "value": "circle",
              "label": "t:common.blocks.background_shape.settings.shape.options.circle.label",
              "group": "t:common.groups.basic"
            &#125;,
            &#123;
              "value": "oval",
              "label": "t:common.blocks.background_shape.settings.shape.options.oval.label",
              "group": "t:common.groups.basic"
            &#125;,
            &#123;
              "value": "triangle",
              "label": "t:common.blocks.background_shape.settings.shape.options.triangle.label",
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
              "value": "abstract_star_1",
              "label": "t:common.options.abstract_star_1.label",
              "group": "t:common.groups.stars"
            &#125;,
            &#123;
              "value": "abstract_star_2",
              "label": "t:common.options.abstract_star_2.label",
              "group": "t:common.groups.stars"
            &#125;,
            &#123;
              "value": "abstract_star_3",
              "label": "t:common.options.abstract_star_3.label",
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
              "value": "zig_zag",
              "label": "t:common.options.zig_zag.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "zig_zag_tear",
              "label": "t:common.options.zig_zag_tear.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "wave_tear",
              "label": "t:common.options.wave_tear.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "flower",
              "label": "t:common.options.flower.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "flower_bloom",
              "label": "t:common.options.flower_bloom.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "concave",
              "label": "t:common.options.concave.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "flag",
              "label": "t:common.options.flag.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "abstract_oval",
              "label": "t:common.options.abstract_oval.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "cross",
              "label": "t:common.options.cross.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "quatrefoil",
              "label": "t:common.options.quatrefoil.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "quadrant",
              "label": "t:common.options.quadrant.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "wind",
              "label": "t:common.options.wind.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "windmill",
              "label": "t:common.options.windmill.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "mirrored_pyramids",
              "label": "t:common.options.mirrored_pyramids.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "plus",
              "label": "t:common.options.plus.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "double_pill_1",
              "label": "t:common.options.double_pill_1.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "double_pill_2",
              "label": "t:common.options.double_pill_2.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "triple_pill_1",
              "label": "t:common.options.triple_pill_1.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "triple_pill_2",
              "label": "t:common.options.triple_pill_2.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "crown",
              "label": "t:common.options.crown.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "stair",
              "label": "t:common.options.stair.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "pancake_stack",
              "label": "t:common.options.pancake_stack.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "asterisk",
              "label": "t:common.options.asterisk.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "overlapping_squares",
              "label": "t:common.options.overlapping_squares.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "brush_stroke",
              "label": "t:common.options.brush_stroke.label",
              "group": "t:common.groups.miscellaneous"
            &#125;,
            &#123;
              "value": "blob",
              "label": "t:common.options.blob.label",
              "group": "t:common.groups.variable"
            &#125;
          ]
        &#125;,
        &#123;
          "type": "range",
          "id": "blob_type",
          "min": 1,
          "max": 10,
          "step": 1,
          "label": "t:common.blocks.background_shape.settings.blob_type.label",
          "default": 1,
          "info": "t:common.blocks.background_shape.settings.blob_type.info"
        &#125;,
        &#123;
          "type": "range",
          "id": "size",
          "min": 25,
          "max": 300,
          "step": 5,
          "label": "t:common.blocks.background_shape.settings.size.label",
          "default": 100
        &#125;,
        &#123;
          "type": "range",
          "id": "opacity",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "t:common.settings.opacity.label",
          "default": 100
        &#125;,
        &#123;
          "type": "range",
          "id": "blur",
          "min": 0,
          "max": 500,
          "step": 5,
          "unit": "px",
          "label": "t:common.blocks.background_shape.settings.blur.label",
          "default": 0
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
          "label": "t:common.blocks.background_shape.settings.horizontal_position.label",
          "default": 50
        &#125;,
        &#123;
          "type": "range",
          "id": "vertical_position",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "t:common.blocks.background_shape.settings.vertical_position.label",
          "default": 50
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
          "content": "t:common.settings.header_animation"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "enable_parallax",
          "label": "t:common.blocks.background_shape.settings.enable_parallax.label",
          "default": false,
          "info": "t:common.blocks.background_shape.settings.enable_parallax.info"
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
          "default": "accent-1",
          "options": [
            &#123;
              "value": "text",
              "label": "t:common.options.text.label"
            &#125;,
            &#123;
              "value": "accent-1",
              "label": "t:common.options.accent_1.label"
            &#125;,
            &#123;
              "value": "accent-2",
              "label": "t:common.options.accent_2.label"
            &#125;,
            &#123;
              "value": "card",
              "label": "t:common.options.card.label"
            &#125;,
            &#123;
              "value": "background",
              "label": "t:common.options.background.label"
            &#125;,
            &#123;
              "value": "gradient",
              "label": "t:common.options.gradient.label"
            &#125;
          ]
        &#125;
      ]
    &#125;,
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
    &#125;
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
