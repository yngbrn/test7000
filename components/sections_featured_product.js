export default function sections_featured_product() {
  const html = `


  

  

  

  
  <section
    class="bg-scheme-background text-scheme-text bg-scheme-gradient"
    data-color-scheme=""
  >
    <div class="section-content relative z-10 mx-auto max-w-site py-section-vertical-spacing lg:px-section">
      
        <h2 class="inline-heading-rte font-heading heading-standard heading-style break-words px-section text-center lg:px-0 ">
          
        </h2>
      

      <div class="section-content-top-margin">
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 ">
          <div class="product-media col-span-full  px-section lg:px-0">
            <div>
              
            </div>
          </div>
          <div class="product-content col-span-full  px-section lg:flex lg:items-center lg:px-0">
            <div class="product-block-container w-full max-w-full xl:grid xl:grid-cols-12">
              <div class="relative xl:col-span-10 xl:col-start-2">
                <div class=" product-block-title">
                  <h2 class="font-heading heading-feature break-words">
                    
                  </h2>
                </div>
                
                <div class=" product-block-price">
                  <span
                    class="text-scheme-text "
                  >
                    
                      
                    
                      
                    
                  </span>
                </div>
                <div class="">
                  <button
                    class="add-to-cart-btn  push-btn mb-1 w-full"
                  >
                    <span class="push-btn__surface w-full">
                      
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>

  


&#123;
  "settings": [
    &#123;
      "type": "inline_richtext",
      "id": "title",
      "label": "t:common.settings.title.label"
    &#125;,
    &#123;
      "type": "product",
      "id": "product",
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_media"
    &#125;,
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
      "default": ""
    &#125;,
    &#123;
      "type": "select",
      "id": "image_shape",
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
    &#125;,
    &#123;
      "type": "select",
      "id": "media_mobile_width",
      "label": "t:common.settings.media_mobile_width.label",
      "default": "w-full",
      "options": [
        &#123;
          "value": "w-full",
          "label": "t:common.options.full_width.label"
        &#125;,
        &#123;
          "value": "w-4/5",
          "label": "t:common.options.four_fifths.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "select",
      "id": "desktop_media_width",
      "label": "t:common.settings.desktop_media_width.label",
      "options": [
        &#123;
          "value": "lg:col-span-6_lg:col-span-6",
          "label": "t:common.options.one_half.label"
        &#125;,
        &#123;
          "value": "lg:col-span-7_lg:col-span-5",
          "label": "t:common.options.three_fifths.label"
        &#125;,
        &#123;
          "value": "lg:col-span-8_lg:col-span-4",
          "label": "t:common.options.two_thirds.label"
        &#125;
      ],
      "default": "lg:col-span-6_lg:col-span-6"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "enable_video_looping",
      "label": "t:common.settings.enable_video_looping.label",
      "default": true
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_thumbnails"
    &#125;,
    &#123;
      "type": "select",
      "id": "thumbnails_position",
      "label": "t:common.settings.thumbnails_position.label",
      "default": "left",
      "options": [
        &#123;
          "value": "left",
          "label": "t:common.options.left_of_featured_image.label"
        &#125;,
        &#123;
          "value": "under",
          "label": "t:common.options.underneath_featured_image.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "select",
      "id": "thumbnail_crop",
      "label": "t:common.settings.thumbnail_crop.label",
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
      "id": "thumbnail_shape",
      "label": "t:common.settings.thumbnail_shape.label",
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
      "info": "t:common.settings.thumbnail_shape.info"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "hide_media_shadow",
      "label": "t:common.settings.hide_media_shadow.label"
    &#125;,
    &#123;
      "type": "select",
      "id": "thumbnail_size",
      "label": "t:common.settings.thumbnail_size.label",
      "default": "standard",
      "options": [
        &#123;
          "value": "standard",
          "label": "t:common.options.standard.label"
        &#125;,
        &#123;
          "value": "large",
          "label": "t:common.options.large.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_thumbnails_on_mobile",
      "label": "t:common.settings.show_thumbnails_on_mobile.label",
      "default": false
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
      "type": "@app"
    &#125;,
    &#123;
      "type": "title",
      "name": "t:common.blocks.title.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "select",
          "id": "text_align",
          "label": "t:common.settings.text_align.label",
          "default": "text-left",
          "options": [
            &#123;
              "value": "text-left",
              "label": "t:common.options.left.label"
            &#125;,
            &#123;
              "value": "text-center",
              "label": "t:common.options.center.label"
            &#125;
          ]
        &#125;
      ]
    &#125;,
    &#123;
      "type": "price",
      "name": "t:common.blocks.price.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_on_sale_sticker",
          "label": "t:common.blocks.price.settings.show_on_sale_sticker.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "text_align",
          "label": "t:common.settings.text_align.label",
          "default": "text-left",
          "options": [
            &#123;
              "value": "text-left",
              "label": "t:common.options.left.label"
            &#125;,
            &#123;
              "value": "text-center",
              "label": "t:common.options.center.label"
            &#125;
          ]
        &#125;
      ]
    &#125;,
    &#123;
      "type": "quantity_selector",
      "name": "t:common.blocks.quantity_selector.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_label",
          "label": "t:common.blocks.quantity_selector.settings.show_label.label",
          "default": false
        &#125;
      ]
    &#125;,
    &#123;
      "type": "variant_picker",
      "name": "t:common.blocks.variant_picker.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "select",
          "id": "option_style",
          "label": "t:common.blocks.variant_picker.settings.option_style.label",
          "options": [
            &#123;
              "value": "drop_down",
              "label": "t:common.blocks.variant_picker.settings.option_style.options.drop_down.label"
            &#125;,
            &#123;
              "value": "buttons",
              "label": "t:common.blocks.variant_picker.settings.option_style.options.button.label"
            &#125;
          ],
          "default": "drop_down"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "full_width_buttons",
          "label": "t:common.blocks.variant_picker.settings.full_width_buttons.label",
          "default": false
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "hide_option_labels",
          "label": "t:common.blocks.variant_picker.settings.hide_option_labels.label",
          "default": true
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.blocks.variant_picker.settings.header_color_swatches"
        &#125;,
        &#123;
          "type": "paragraph",
          "content": "t:common.blocks.variant_picker.settings.paragraph_learn_how_to"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "enable_color_swatches",
          "label": "t:common.blocks.variant_picker.settings.enable_color_swatches.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "buy_buttons",
      "name": "t:common.blocks.buy_buttons.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "enable_payment_button",
          "label": "t:common.blocks.buy_buttons.settings.enable_payment_button.label",
          "info": "t:common.blocks.buy_buttons.settings.enable_payment_button.info",
          "default": true
        &#125;,
        &#123;
          "type": "header",
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_price",
          "label": "t:common.blocks.buy_buttons.settings.show_price.label",
          "default": false
        &#125;,
        &#123;
          "visible_if": "",
          "type": "checkbox",
          "id": "show_compare_at_price",
          "label": "t:common.blocks.buy_buttons.settings.show_compare_at_price.label",
          "default": false
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.blocks.buy_buttons.settings.header_pickup_availability"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_pickup_availability",
          "label": "t:common.blocks.buy_buttons.settings.show_pickup_availability.label",
          "default": true
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.blocks.buy_buttons.settings.show_gift_card_recipient.header"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_gift_card_recipient",
          "default": false,
          "label": "t:common.blocks.buy_buttons.settings.show_gift_card_recipient.label",
          "info": "t:common.blocks.buy_buttons.settings.show_gift_card_recipient.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "vendor",
      "name": "t:common.blocks.vendor.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "select",
          "id": "text_align",
          "label": "t:common.settings.text_align.label",
          "default": "text-left",
          "options": [
            &#123;
              "value": "text-left",
              "label": "t:common.options.left.label"
            &#125;,
            &#123;
              "value": "text-center",
              "label": "t:common.options.center.label"
            &#125;
          ]
        &#125;
      ]
    &#125;,
    &#123;
      "type": "star_rating",
      "name": "t:common.blocks.star_rating.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "description",
      "name": "t:common.blocks.description.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "truncate_description",
          "label": "t:common.blocks.description.settings.truncate_description.label",
          "default": false
        &#125;,
        &#123;
          "type": "select",
          "id": "text_align",
          "label": "t:common.settings.text_align.label",
          "default": "text-left",
          "options": [
            &#123;
              "value": "text-left",
              "label": "t:common.options.left.label"
            &#125;,
            &#123;
              "value": "text-center",
              "label": "t:common.options.center.label"
            &#125;
          ]
        &#125;
      ]
    &#125;,
    &#123;
      "type": "rich_text",
      "name": "t:common.blocks.rich_text.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "richtext",
          "id": "rich_text",
          "default": "<p>Rich text block</p>",
          "label": "t:common.blocks.rich_text.settings.rich_text.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "text_align",
          "label": "t:common.settings.text_align.label",
          "default": "text-left",
          "options": [
            &#123;
              "value": "text-left",
              "label": "t:common.options.left.label"
            &#125;,
            &#123;
              "value": "text-center",
              "label": "t:common.options.center.label"
            &#125;
          ]
        &#125;
      ]
    &#125;,
    &#123;
      "type": "text",
      "name": "t:common.blocks.text.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "text",
          "id": "text",
          "default": "Text block",
          "label": "t:common.blocks.text.settings.text.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon",
          "label": "t:common.settings.icon.label",
          "options": [
            &#123;
              "value": "none",
              "label": "t:common.options.none.label"
            &#125;,
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "none"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "icon_row",
      "name": "t:common.blocks.icon_row.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "uppercase_text",
          "label": "t:settings_schema.typography.settings.heading_uppercase.label",
          "default": false
        &#125;,
        &#123;
          "type": "select",
          "id": "icon_alignment",
          "label": "t:common.blocks.icon_row.settings.alignment.label",
          "options": [
            &#123;
              "value": "justify-start",
              "label": "t:common.options.start.label"
            &#125;,
            &#123;
              "value": "justify-center",
              "label": "t:common.options.center.label"
            &#125;,
            &#123;
              "value": "justify-between",
              "label": "t:common.options.spread.label"
            &#125;
          ],
          "default": "justify-start"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.settings.header_icon_style"
        &#125;,
        &#123;
          "type": "range",
          "id": "icon_thickness",
          "min": 1,
          "max": 2,
          "step": 0.1,
          "label": "t:common.settings.thickness.label",
          "default": 1.5
        &#125;,
        &#123;
          "type": "select",
          "id": "background_color",
          "label": "t:common.settings.background_color.label",
          "default": "bg-transparent text-scheme-text",
          "options": [
            &#123;
              "value": "bg-transparent text-scheme-text",
              "label": "Transparent"
            &#125;,
            &#123;
              "value": "bg-scheme-accent-1 text-scheme-accent-1-contrast",
              "label": "Accent 1"
            &#125;,
            &#123;
              "value": "bg-scheme-accent-2 text-scheme-accent-2-contrast",
              "label": "Accent 2"
            &#125;,
            &#123;
              "value": "bg-scheme-card text-scheme-card-text",
              "label": "Card"
            &#125;,
            &#123;
              "value": "bg-scheme-text text-scheme-background",
              "label": "Text"
            &#125;
          ]
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_border",
          "label": "t:common.settings.show_border.label",
          "default": true
        &#125;,
        &#123;
          "type": "select",
          "id": "icon_size",
          "label": "t:common.settings.width.label",
          "options": [
            &#123;
              "value": "h-10 w-10",
              "label": "t:common.options.small.label"
            &#125;,
            &#123;
              "value": "h-12 w-12",
              "label": "t:common.options.medium.label"
            &#125;,
            &#123;
              "value": "h-16 w-16",
              "label": "t:common.options.large.label"
            &#125;
          ],
          "default": "h-10 w-10"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_1.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon_1",
          "label": "t:common.blocks.icon_row.settings.icon_1.label",
          "options": [
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "globe"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_1",
          "label": "t:common.blocks.icon_row.settings.text_1.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_2.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon_2",
          "label": "t:common.blocks.icon_row.settings.icon_2.label",
          "options": [
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "truck"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_2",
          "label": "t:common.blocks.icon_row.settings.text_2.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_3.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon_3",
          "label": "t:common.blocks.icon_row.settings.icon_3.label",
          "options": [
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "washing"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_3",
          "label": "t:common.blocks.icon_row.settings.text_3.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_4.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon_4",
          "label": "t:common.blocks.icon_row.settings.icon_4.label",
          "options": [
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "heart"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_4",
          "label": "t:common.blocks.icon_row.settings.text_4.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_5.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon_5",
          "label": "t:common.blocks.icon_row.settings.icon_5.label",
          "options": [
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "ruler"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_5",
          "label": "t:common.blocks.icon_row.settings.text_5.label",
          "default": "Row item"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "image_row",
      "name": "t:common.blocks.image_row.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "range",
          "id": "max_width",
          "min": 20,
          "max": 200,
          "step": 5,
          "unit": "px",
          "label": "t:sections.testimonials.settings.max_width.label",
          "default": 30
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_1.label"
        &#125;,
        &#123;
          "type": "image_picker",
          "id": "image_1",
          "label": "t:common.blocks.image_row.settings.image_1.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_1",
          "label": "t:common.blocks.image_row.settings.text_1.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_2.label"
        &#125;,
        &#123;
          "type": "image_picker",
          "id": "image_2",
          "label": "t:common.blocks.image_row.settings.image_2.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_2",
          "label": "t:common.blocks.image_row.settings.text_2.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_3.label"
        &#125;,
        &#123;
          "type": "image_picker",
          "id": "image_3",
          "label": "t:common.blocks.image_row.settings.image_3.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_3",
          "label": "t:common.blocks.image_row.settings.text_3.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_4.label"
        &#125;,
        &#123;
          "type": "image_picker",
          "id": "image_4",
          "label": "t:common.blocks.image_row.settings.image_4.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_4",
          "label": "t:common.blocks.image_row.settings.text_4.label",
          "default": "Row item"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_5.label"
        &#125;,
        &#123;
          "type": "image_picker",
          "id": "image_5",
          "label": "t:common.blocks.image_row.settings.image_5.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "text_5",
          "label": "t:common.blocks.image_row.settings.text_5.label",
          "default": "Row item"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "inventory_status",
      "name": "t:common.blocks.inventory.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "paragraph",
          "content": "t:common.blocks.inventory.paragraph_only_shown"
        &#125;,
        &#123;
          "type": "range",
          "id": "low_inventory_threshold",
          "min": 0,
          "max": 100,
          "step": 1,
          "label": "t:common.blocks.inventory.settings.low_inventory_threshold.label",
          "default": 5
        &#125;,
        &#123;
          "id": "show_inventory_quantity",
          "type": "checkbox",
          "label": "t:common.blocks.inventory.settings.show_inventory_quantity.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "popup",
      "name": "t:common.blocks.popup.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon",
          "label": "t:common.blocks.popup.settings.icon.label",
          "options": [
            &#123;
              "value": "none",
              "label": "t:common.options.none.label"
            &#125;,
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "ruler"
        &#125;,
        &#123;
          "type": "text",
          "id": "text",
          "default": "Pop-up link text",
          "label": "t:common.blocks.popup.settings.text.label"
        &#125;,
        &#123;
          "id": "page",
          "type": "page",
          "label": "t:common.blocks.popup.settings.page.label",
          "info": "t:common.blocks.popup.settings.page.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "liquid",
      "name": "t:common.blocks.liquid.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "liquid",
          "id": "liquid",
          "label": "t:common.blocks.liquid.settings.liquid.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "collapsible_tab",
      "name": "t:common.blocks.collapsible_tab.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "select",
          "id": "icon",
          "label": "t:common.settings.icon.label",
          "options": [
            &#123;
              "value": "none",
              "label": "t:common.options.none.label"
            &#125;,
            &#123;
              "value": "box",
              "label": "t:common.options.box.label"
            &#125;,
            &#123;
              "value": "chat_bubble",
              "label": "t:common.options.chat_bubble.label"
            &#125;,
            &#123;
              "value": "check_mark",
              "label": "t:common.options.check_mark.label"
            &#125;,
            &#123;
              "value": "coat_hanger",
              "label": "t:common.options.coat_hanger.label"
            &#125;,
            &#123;
              "value": "clock",
              "label": "t:common.options.clock.label"
            &#125;,
            &#123;
              "value": "dryer",
              "label": "t:common.options.dryer.label"
            &#125;,
            &#123;
              "value": "eye",
              "label": "t:common.options.eye.label"
            &#125;,
            &#123;
              "value": "globe",
              "label": "t:common.options.globe.label"
            &#125;,
            &#123;
              "value": "heart",
              "label": "t:common.options.heart.label"
            &#125;,
            &#123;
              "value": "iron",
              "label": "t:common.options.iron.label"
            &#125;,
            &#123;
              "value": "leaf",
              "label": "t:common.options.leaf.label"
            &#125;,
            &#123;
              "value": "leather",
              "label": "t:common.options.leather.label"
            &#125;,
            &#123;
              "value": "like",
              "label": "t:common.options.like.label"
            &#125;,
            &#123;
              "value": "lock",
              "label": "t:common.options.lock.label"
            &#125;,
            &#123;
              "value": "map_pin",
              "label": "t:common.options.map_pin.label"
            &#125;,
            &#123;
              "value": "pants",
              "label": "t:common.options.pants.label"
            &#125;,
            &#123;
              "value": "people",
              "label": "t:common.options.people.label"
            &#125;,
            &#123;
              "value": "person",
              "label": "t:common.options.person.label"
            &#125;,
            &#123;
              "value": "plane",
              "label": "t:common.options.plane.label"
            &#125;,
            &#123;
              "value": "price_tag",
              "label": "t:common.options.price_tag.label"
            &#125;,
            &#123;
              "value": "question_mark",
              "label": "t:common.options.question_mark.label"
            &#125;,
            &#123;
              "value": "recycle",
              "label": "t:common.options.recycle.label"
            &#125;,
            &#123;
              "value": "return",
              "label": "t:common.options.return.label"
            &#125;,
            &#123;
              "value": "ruler",
              "label": "t:common.options.ruler.label"
            &#125;,
            &#123;
              "value": "shirt",
              "label": "t:common.options.shirt.label"
            &#125;,
            &#123;
              "value": "shoe",
              "label": "t:common.options.shoe.label"
            &#125;,
            &#123;
              "value": "star",
              "label": "t:common.options.star.label"
            &#125;,
            &#123;
              "value": "truck",
              "label": "t:common.options.truck.label"
            &#125;,
            &#123;
              "value": "washing",
              "label": "t:common.options.washing.label"
            &#125;,
            &#123;
              "value": "gluten_free",
              "label": "t:common.options.gluten_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "soy_free",
              "label": "t:common.options.soy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "sugar_free",
              "label": "t:common.options.sugar_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "nut_free",
              "label": "t:common.options.nut_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "corn_free",
              "label": "t:common.options.corn_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "dairy_free",
              "label": "t:common.options.dairy_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_additives",
              "label": "t:common.options.no_additives.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "no_artificial_colors",
              "label": "t:common.options.no_artificial_colors.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "non_gmo",
              "label": "t:common.options.non_gmo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "vegan",
              "label": "t:common.options.vegan.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "halal",
              "label": "t:common.options.halal.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "organic",
              "label": "t:common.options.organic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "kosher",
              "label": "t:common.options.kosher.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "keto",
              "label": "t:common.options.keto.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paleo",
              "label": "t:common.options.paleo.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "cruelty_free",
              "label": "t:common.options.cruelty_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "paraben_free",
              "label": "t:common.options.paraben_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "alcohol_free",
              "label": "t:common.options.alcohol_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "palm_oil_free",
              "label": "t:common.options.palm_oil_free.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "anti_bacterial",
              "label": "t:common.options.anti_bacterial.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "probiotic",
              "label": "t:common.options.probiotic.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "antioxidants",
              "label": "t:common.options.antioxidants.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_salt",
              "label": "t:common.options.low_salt.label",
              "group": "Food and health"
            &#125;,
            &#123;
              "value": "low_carb",
              "label": "t:common.options.low_carb.label",
              "group": "Food and health"
            &#125;
          ],
          "default": "none"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading",
          "default": "Collapsible tab",
          "info": "t:common.blocks.collapsible_tab.settings.heading.info",
          "label": "t:common.blocks.collapsible_tab.settings.heading.label"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "uppercase_text",
          "label": "t:settings_schema.typography.settings.heading_uppercase.label",
          "default": false
        &#125;,
        &#123;
          "type": "richtext",
          "id": "content",
          "label": "t:common.blocks.collapsible_tab.settings.content.label"
        &#125;,
        &#123;
          "type": "page",
          "id": "page",
          "label": "t:common.blocks.collapsible_tab.settings.page.label"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "share_buttons",
      "name": "t:common.blocks.share_buttons.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "nutritional_information",
      "name": "t:common.blocks.nutritional_information.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading",
          "default": "Nutritional information",
          "label": "t:common.blocks.nutritional_information.settings.heading.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "right_label",
          "default": "Per 100g",
          "label": "t:common.blocks.nutritional_information.settings.right_label.label"
        &#125;,
        &#123;
          "type": "richtext",
          "id": "information",
          "label": "t:common.blocks.nutritional_information.settings.information.label",
          "info": "t:common.blocks.nutritional_information.settings.information.info",
          "default": "<p>Protein, 13g<br/>Total Carbohydrate, 36g<br/>- Dietary Fiber, 11g<br/>- Sugars, 6g<br/>Total Fat, 1g</p>"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "horizontal_bar_chart",
      "name": "t:common.blocks.horizontal_bar_chart.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "uppercase_text",
          "label": "t:settings_schema.typography.settings.heading_uppercase.label",
          "default": false
        &#125;,
        &#123;
          "type": "text",
          "id": "label",
          "label": "t:common.blocks.horizontal_bar_chart.settings.label.label",
          "default": "t:common.settings.label.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "value",
          "min": 1,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "t:common.blocks.horizontal_bar_chart.settings.value.label",
          "default": 50
        &#125;,
        &#123;
          "type": "text",
          "id": "value_alt",
          "label": "t:common.blocks.horizontal_bar_chart.settings.value_alt.label",
          "info": "t:common.blocks.horizontal_bar_chart.settings.value_alt.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "comparative_scale",
      "name": "t:common.blocks.comparative_scale.name",
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "uppercase_text",
          "label": "t:settings_schema.typography.settings.heading_uppercase.label",
          "default": false
        &#125;,
        &#123;
          "type": "text",
          "id": "left_label",
          "label": "t:common.blocks.comparative_scale.settings.left_label.label",
          "default": "Label 1"
        &#125;,
        &#123;
          "type": "text",
          "id": "right_label",
          "label": "t:common.blocks.comparative_scale.settings.right_label.label",
          "default": "Label 2"
        &#125;,
        &#123;
          "type": "range",
          "id": "marker_position",
          "min": 1,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "t:common.blocks.comparative_scale.settings.marker_position.label",
          "default": 50
        &#125;,
        &#123;
          "type": "text",
          "id": "marker_position_alt",
          "label": "t:common.blocks.comparative_scale.settings.marker_position_alt.label",
          "info": "t:common.blocks.comparative_scale.settings.marker_position_alt.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "complementary",
      "name": "t:common.blocks.complementary_products.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "paragraph",
          "content": "t:common.blocks.complementary_products.settings.paragraph_to_select_complementary"
        &#125;,
        &#123;
          "type": "text",
          "id": "block_heading",
          "default": "Pairs well with",
          "label": "t:common.blocks.complementary_products.settings.block_heading.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "product_list_limit",
          "min": 1,
          "max": 10,
          "step": 1,
          "default": 10,
          "label": "t:common.blocks.complementary_products.settings.product_list_limit.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "product_tile_style",
          "label": "t:common.settings.product_tile_style.label",
          "options": [
            &#123;
              "value": "mini",
              "label": "t:common.options.mini.label"
            &#125;,
            &#123;
              "value": "standard",
              "label": "t:common.options.standard.label"
            &#125;
          ],
          "default": "mini"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "enable_quick_buy",
          "label": "t:common.settings.enable_quick_buy.label",
          "info": "t:common.settings.enable_quick_buy_mini_only.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "tags",
      "name": "t:common.blocks.tags.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "select",
          "id": "title_size",
          "label": "t:common.settings.title_size.label",
          "options": [
            &#123;
              "value": "text-sm",
              "label": "t:common.options.small.label"
            &#125;,
            &#123;
              "value": "text-base",
              "label": "t:common.options.base.label"
            &#125;
          ],
          "default": "text-sm"
        &#125;,
        &#123;
          "type": "textarea",
          "id": "include_tags_list",
          "label": "t:common.blocks.tags.settings.include_tags.label",
          "info": "t:common.blocks.tags.settings.include_tags.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "allow_tag_links",
          "label": "t:common.blocks.tags.settings.allow_tag_links.label",
          "default": true
        &#125;,
        &#123;
          "type": "collection",
          "id": "tag_collection",
          "label": "t:common.settings.collection.label",
          "info": "t:common.blocks.tags.settings.collection_tags.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.settings.tag_style.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "background_color",
          "label": "t:common.settings.background_color.label",
          "default": "bg-transparent text-scheme-text",
          "options": [
            &#123;
              "value": "bg-transparent text-scheme-text",
              "label": "t:common.options.transparent.label"
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
              "value": "bg-scheme-text text-scheme-background",
              "label": "t:common.options.text.label"
            &#125;
          ]
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "show_border",
          "label": "t:common.settings.show_border.label",
          "default": true
        &#125;
      ]
    &#125;,
    &#123;
      "type": "features_list",
      "name": "t:sections.features_list.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "uppercase_text",
          "label": "t:settings_schema.typography.settings.heading_uppercase.label",
          "default": false
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_1.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_1",
          "default": "t:common.blocks.features_list.settings.title.default",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_2.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_2",
          "default": "t:common.blocks.features_list.settings.title.default",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_3.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_3",
          "default": "t:common.blocks.features_list.settings.title.default",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_4.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_4",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_5.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_5",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_6.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_6",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:settings_schema.borders.name"
        &#125;,
        &#123;
          "type": "paragraph",
          "content": "t:sections.features_list.paragraph"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "border_between_rows",
          "label": "t:sections.features_list.settings.border_between_rows.label",
          "default": true
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "border_top_bottom",
          "label": "t:sections.features_list.settings.border_top_bottom.label",
          "default": false
        &#125;
      ]
    &#125;,
    &#123;
      "type": "dot_rating",
      "name": "t:common.blocks.dot_rating.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "uppercase_text",
          "label": "t:settings_schema.typography.settings.heading_uppercase.label",
          "default": false
        &#125;,
        &#123;
          "type": "select",
          "id": "dot_color",
          "label": "t:common.blocks.dot_rating.settings.dot_color.label",
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
          "content": "t:common.options.item_1.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_1",
          "default": "t:common.blocks.dot_rating.settings.title.default",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "rating_1",
          "min": 0,
          "max": 5,
          "step": 1,
          "default": 0,
          "label": "t:common.blocks.dot_rating.settings.rating.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "dynamic_rating_1",
          "label": "t:common.blocks.dot_rating.settings.dynamic_rating.label",
          "info": "t:common.blocks.dot_rating.settings.dynamic_rating.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_2.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_2",
          "default": "t:common.blocks.dot_rating.settings.title.default",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "rating_2",
          "min": 0,
          "max": 5,
          "step": 1,
          "default": 0,
          "label": "t:common.blocks.dot_rating.settings.rating.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "dynamic_rating_2",
          "label": "t:common.blocks.dot_rating.settings.dynamic_rating.label",
          "info": "t:common.blocks.dot_rating.settings.dynamic_rating.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_3.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_3",
          "default": "t:common.blocks.dot_rating.settings.title.default",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "rating_3",
          "min": 0,
          "max": 5,
          "step": 1,
          "default": 0,
          "label": "t:common.blocks.dot_rating.settings.rating.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "dynamic_rating_3",
          "label": "t:common.blocks.dot_rating.settings.dynamic_rating.label",
          "info": "t:common.blocks.dot_rating.settings.dynamic_rating.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_4.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_4",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "rating_4",
          "min": 0,
          "max": 5,
          "step": 1,
          "default": 0,
          "label": "t:common.blocks.dot_rating.settings.rating.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "dynamic_rating_4",
          "label": "t:common.blocks.dot_rating.settings.dynamic_rating.label",
          "info": "t:common.blocks.dot_rating.settings.dynamic_rating.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_5.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_5",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "rating_5",
          "min": 0,
          "max": 5,
          "step": 1,
          "default": 0,
          "label": "t:common.blocks.dot_rating.settings.rating.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "dynamic_rating_5",
          "label": "t:common.blocks.dot_rating.settings.dynamic_rating.label",
          "info": "t:common.blocks.dot_rating.settings.dynamic_rating.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_6.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "title_6",
          "label": "t:common.settings.text.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "rating_6",
          "min": 0,
          "max": 5,
          "step": 1,
          "default": 5,
          "label": "t:common.blocks.dot_rating.settings.rating.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "dynamic_rating_6",
          "label": "t:common.blocks.dot_rating.settings.dynamic_rating.label",
          "info": "t:common.blocks.dot_rating.settings.dynamic_rating.info"
        &#125;
      ]
    &#125;,
    &#123;
      "type": "tabs",
      "name": "t:common.blocks.tabs.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "uppercase_heading",
          "label": "t:common.blocks.tabs.settings.uppercase_heading.label"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_1.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_1",
          "default": "t:common.blocks.tabs.settings.heading.default",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "richtext",
          "id": "content_1",
          "label": "t:common.settings.header_content",
          "default": "t:common.blocks.tabs.settings.content.default"
        &#125;,
        &#123;
          "type": "page",
          "id": "page_content_1",
          "label": "t:common.blocks.tabs.settings.page.label",
          "info": "t:common.blocks.tabs.settings.page.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_2.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_2",
          "default": "t:common.blocks.tabs.settings.heading.default",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "richtext",
          "id": "content_2",
          "label": "t:common.settings.header_content",
          "default": "t:common.blocks.tabs.settings.content.default"
        &#125;,
        &#123;
          "type": "page",
          "id": "page_content_2",
          "label": "t:common.blocks.tabs.settings.page.label",
          "info": "t:common.blocks.tabs.settings.page.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_3.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_3",
          "default": "t:common.blocks.tabs.settings.heading.default",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "richtext",
          "id": "content_3",
          "label": "t:common.settings.header_content",
          "default": "t:common.blocks.tabs.settings.content.default"
        &#125;,
        &#123;
          "type": "page",
          "id": "page_content_3",
          "label": "t:common.blocks.tabs.settings.page.label",
          "info": "t:common.blocks.tabs.settings.page.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.blocks.tabs.settings.active_tab.label"
        &#125;,
        &#123;
          "type": "select",
          "id": "tab_style",
          "label": "t:common.settings.style.label",
          "default": "underline",
          "options": [
            &#123;
              "value": "underline",
              "label": "t:common.options.underline.label"
            &#125;,
            &#123;
              "value": "border",
              "label": "t:common.settings.border"
            &#125;
          ]
        &#125;,
        &#123;
          "type": "select",
          "id": "tab_color",
          "label": "t:common.settings.header_color",
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
            &#125;
          ]
        &#125;
      ]
    &#125;,
    &#123;
      "type": "information_list",
      "name": "t:common.blocks.information_list.name",
      "limit": 1,
      "settings": [
        &#123;
          "type": "checkbox",
          "id": "display_on_card",
          "label": "t:common.settings.display_on_card.label",
          "default": false,
          "info": "t:common.settings.display_on_card.info"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_1.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_1",
          "default": "t:common.settings.label.label",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "inline_richtext",
          "id": "content_1",
          "label": "t:common.settings.header_content",
          "default": "t:common.blocks.information_list.settings.content.default"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_2.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_2",
          "default": "t:common.settings.label.label",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "inline_richtext",
          "id": "content_2",
          "label": "t:common.settings.header_content",
          "default": "t:common.blocks.information_list.settings.content.default"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_3.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_3",
          "default": "t:common.settings.label.label",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "inline_richtext",
          "id": "content_3",
          "label": "t:common.settings.header_content",
          "default": "t:common.blocks.information_list.settings.content.default"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_4.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_4",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "inline_richtext",
          "id": "content_4",
          "label": "t:common.settings.header_content"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.options.item_5.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "heading_5",
          "label": "t:common.settings.heading.label"
        &#125;,
        &#123;
          "type": "inline_richtext",
          "id": "content_5",
          "label": "t:common.settings.header_content"
        &#125;,
        &#123;
          "type": "header",
          "content": "t:common.settings.style.label"
        &#125;,
        &#123;
          "type": "range",
          "id": "col_width",
          "min": 5,
          "max": 25,
          "step": 1,
          "label": "t:common.blocks.information_list.settings.col_width.label",
          "default": 20,
          "unit": "ch"
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "heading_style",
          "label": "t:common.settings.bold_heading.label",
          "default": false
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "append_colon",
          "label": "t:common.blocks.information_list.settings.append_colon.label",
          "default": false
        &#125;
      ]
    &#125;,
    &#123;
      "type": "spacer",
      "name": "t:common.blocks.spacer.name",
      "settings": [
        &#123;
          "type": "range",
          "id": "height",
          "min": 0.5,
          "max": 10,
          "step": 0.5,
          "unit": "x",
          "label": "t:common.settings.height.label",
          "default": 4
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
      "blocks": [
        &#123;
          "type": "title"
        &#125;,
        &#123;
          "type": "price"
        &#125;,
        &#123;
          "type": "variant_picker"
        &#125;,
        &#123;
          "type": "buy_buttons"
        &#125;
      ]
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
