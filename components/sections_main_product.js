export default function sections_main_product() {
  const html = `<div>




&amp;#123;
  &quot;settings&quot;: [
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.header_media&quot;
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
      &quot;default&quot;: &quot;&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;image_shape&quot;,
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
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;desktop_media_width&quot;,
      &quot;label&quot;: &quot;t:common.settings.desktop_media_width.label&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;lg:col-span-6_lg:col-span-6&quot;,
          &quot;label&quot;: &quot;t:common.options.one_half.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;lg:col-span-7_lg:col-span-5&quot;,
          &quot;label&quot;: &quot;t:common.options.three_fifths.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;lg:col-span-8_lg:col-span-4&quot;,
          &quot;label&quot;: &quot;t:common.options.two_thirds.label&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;lg:col-span-6_lg:col-span-6&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;show_slideshow_arrows_on_desktop&quot;,
      &quot;default&quot;: false
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;enable_image_zoom&quot;,
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;enable_video_looping&quot;,
      &quot;label&quot;: &quot;t:common.settings.enable_video_looping.label&quot;,
      &quot;default&quot;: true
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;autoplay_videos_on_desktop&quot;,
      &quot;default&quot;: true
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;media_mobile_width&quot;,
      &quot;label&quot;: &quot;t:common.settings.media_mobile_width.label&quot;,
      &quot;default&quot;: &quot;w-full&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;w-full&quot;,
          &quot;label&quot;: &quot;t:common.options.full_width.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;w-4/5&quot;,
          &quot;label&quot;: &quot;t:common.options.four_fifths.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.header_thumbnails&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;thumbnails_position&quot;,
      &quot;label&quot;: &quot;t:common.settings.thumbnails_position.label&quot;,
      &quot;default&quot;: &quot;left&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;left&quot;,
          &quot;label&quot;: &quot;t:common.options.left_of_featured_image.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;under&quot;,
          &quot;label&quot;: &quot;t:common.options.underneath_featured_image.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;thumbnail_crop&quot;,
      &quot;label&quot;: &quot;t:common.settings.thumbnail_crop.label&quot;,
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
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;thumbnail_shape&quot;,
      &quot;label&quot;: &quot;t:common.settings.thumbnail_shape.label&quot;,
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
      &quot;info&quot;: &quot;t:common.settings.thumbnail_shape.info&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;thumbnail_size&quot;,
      &quot;label&quot;: &quot;t:common.settings.thumbnail_size.label&quot;,
      &quot;default&quot;: &quot;standard&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;standard&quot;,
          &quot;label&quot;: &quot;t:common.options.standard.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;large&quot;,
          &quot;label&quot;: &quot;t:common.options.large.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;show_thumbnails_on_mobile&quot;,
      &quot;label&quot;: &quot;t:common.settings.show_thumbnails_on_mobile.label&quot;,
      &quot;default&quot;: false
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;hide_media_shadow&quot;,
      &quot;label&quot;: &quot;t:common.settings.hide_media_shadow.label&quot;
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
      &quot;type&quot;: &quot;@app&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;title&quot;,
      &quot;name&quot;: &quot;t:common.blocks.title.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;text_align&quot;,
          &quot;label&quot;: &quot;t:common.settings.text_align.label&quot;,
          &quot;default&quot;: &quot;text-left&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text-left&quot;,
              &quot;label&quot;: &quot;t:common.options.left.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;text-center&quot;,
              &quot;label&quot;: &quot;t:common.options.center.label&quot;
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;price&quot;,
      &quot;name&quot;: &quot;t:common.blocks.price.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_on_sale_sticker&quot;,
          &quot;label&quot;: &quot;t:common.blocks.price.settings.show_on_sale_sticker.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;text_align&quot;,
          &quot;label&quot;: &quot;t:common.settings.text_align.label&quot;,
          &quot;default&quot;: &quot;text-left&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text-left&quot;,
              &quot;label&quot;: &quot;t:common.options.left.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;text-center&quot;,
              &quot;label&quot;: &quot;t:common.options.center.label&quot;
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;quantity_selector&quot;,
      &quot;name&quot;: &quot;t:common.blocks.quantity_selector.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_label&quot;,
          &quot;label&quot;: &quot;t:common.blocks.quantity_selector.settings.show_label.label&quot;,
          &quot;default&quot;: false
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;variant_picker&quot;,
      &quot;name&quot;: &quot;t:common.blocks.variant_picker.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;option_style&quot;,
          &quot;label&quot;: &quot;t:common.blocks.variant_picker.settings.option_style.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;drop_down&quot;,
              &quot;label&quot;: &quot;t:common.blocks.variant_picker.settings.option_style.options.drop_down.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;buttons&quot;,
              &quot;label&quot;: &quot;t:common.blocks.variant_picker.settings.option_style.options.button.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;drop_down&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;full_width_buttons&quot;,
          &quot;label&quot;: &quot;t:common.blocks.variant_picker.settings.full_width_buttons.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;hide_option_labels&quot;,
          &quot;label&quot;: &quot;t:common.blocks.variant_picker.settings.hide_option_labels.label&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.blocks.variant_picker.settings.header_color_swatches&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;paragraph&quot;,
          &quot;content&quot;: &quot;t:common.blocks.variant_picker.settings.paragraph_learn_how_to&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;enable_color_swatches&quot;,
          &quot;label&quot;: &quot;t:common.blocks.variant_picker.settings.enable_color_swatches.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;buy_buttons&quot;,
      &quot;name&quot;: &quot;t:common.blocks.buy_buttons.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;enable_payment_button&quot;,
          &quot;label&quot;: &quot;t:common.blocks.buy_buttons.settings.enable_payment_button.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.buy_buttons.settings.enable_payment_button.info&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_price&quot;,
          &quot;label&quot;: &quot;t:common.blocks.buy_buttons.settings.show_price.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;visible_if&quot;: &quot;&quot;,
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_compare_at_price&quot;,
          &quot;label&quot;: &quot;t:common.blocks.buy_buttons.settings.show_compare_at_price.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.blocks.buy_buttons.settings.header_pickup_availability&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_pickup_availability&quot;,
          &quot;label&quot;: &quot;t:common.blocks.buy_buttons.settings.show_pickup_availability.label&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.blocks.buy_buttons.settings.show_gift_card_recipient.header&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_gift_card_recipient&quot;,
          &quot;default&quot;: false,
          &quot;label&quot;: &quot;t:common.blocks.buy_buttons.settings.show_gift_card_recipient.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.buy_buttons.settings.show_gift_card_recipient.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;vendor&quot;,
      &quot;name&quot;: &quot;t:common.blocks.vendor.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;text_align&quot;,
          &quot;label&quot;: &quot;t:common.settings.text_align.label&quot;,
          &quot;default&quot;: &quot;text-left&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text-left&quot;,
              &quot;label&quot;: &quot;t:common.options.left.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;text-center&quot;,
              &quot;label&quot;: &quot;t:common.options.center.label&quot;
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;star_rating&quot;,
      &quot;name&quot;: &quot;t:common.blocks.star_rating.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;description&quot;,
      &quot;name&quot;: &quot;t:common.blocks.description.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;truncate_description&quot;,
          &quot;label&quot;: &quot;t:common.blocks.description.settings.truncate_description.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;text_align&quot;,
          &quot;label&quot;: &quot;t:common.settings.text_align.label&quot;,
          &quot;default&quot;: &quot;text-left&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text-left&quot;,
              &quot;label&quot;: &quot;t:common.options.left.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;text-center&quot;,
              &quot;label&quot;: &quot;t:common.options.center.label&quot;
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;rich_text&quot;,
      &quot;name&quot;: &quot;t:common.blocks.rich_text.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;richtext&quot;,
          &quot;id&quot;: &quot;rich_text&quot;,
          &quot;default&quot;: &quot;&lt;p&gt;Rich text block&lt;/p&gt;&quot;,
          &quot;label&quot;: &quot;t:common.blocks.rich_text.settings.rich_text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;text_align&quot;,
          &quot;label&quot;: &quot;t:common.settings.text_align.label&quot;,
          &quot;default&quot;: &quot;text-left&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text-left&quot;,
              &quot;label&quot;: &quot;t:common.options.left.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;text-center&quot;,
              &quot;label&quot;: &quot;t:common.options.center.label&quot;
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;text&quot;,
      &quot;name&quot;: &quot;t:common.blocks.text.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text&quot;,
          &quot;default&quot;: &quot;Text block&quot;,
          &quot;label&quot;: &quot;t:common.blocks.text.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon&quot;,
          &quot;label&quot;: &quot;t:common.settings.icon.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;none&quot;,
              &quot;label&quot;: &quot;t:common.options.none.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;none&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;icon_row&quot;,
      &quot;name&quot;: &quot;t:common.blocks.icon_row.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;uppercase_text&quot;,
          &quot;label&quot;: &quot;t:settings_schema.typography.settings.heading_uppercase.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon_alignment&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.alignment.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;justify-start&quot;,
              &quot;label&quot;: &quot;t:common.options.start.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;justify-center&quot;,
              &quot;label&quot;: &quot;t:common.options.center.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;justify-between&quot;,
              &quot;label&quot;: &quot;t:common.options.spread.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;justify-start&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.header_icon_style&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;icon_thickness&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 2,
          &quot;step&quot;: 0.1,
          &quot;label&quot;: &quot;t:common.settings.thickness.label&quot;,
          &quot;default&quot;: 1.5
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;background_color&quot;,
          &quot;label&quot;: &quot;t:common.settings.background_color.label&quot;,
          &quot;default&quot;: &quot;bg-transparent text-scheme-text&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;bg-transparent text-scheme-text&quot;,
              &quot;label&quot;: &quot;Transparent&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-accent-1 text-scheme-accent-1-contrast&quot;,
              &quot;label&quot;: &quot;Accent 1&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-accent-2 text-scheme-accent-2-contrast&quot;,
              &quot;label&quot;: &quot;Accent 2&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-card text-scheme-card-text&quot;,
              &quot;label&quot;: &quot;Card&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;bg-scheme-text text-scheme-background&quot;,
              &quot;label&quot;: &quot;Text&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_border&quot;,
          &quot;label&quot;: &quot;t:common.settings.show_border.label&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon_size&quot;,
          &quot;label&quot;: &quot;t:common.settings.width.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;h-10 w-10&quot;,
              &quot;label&quot;: &quot;t:common.options.small.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;h-12 w-12&quot;,
              &quot;label&quot;: &quot;t:common.options.medium.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;h-16 w-16&quot;,
              &quot;label&quot;: &quot;t:common.options.large.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;h-10 w-10&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon_1&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.icon_1.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;globe&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_1&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.text_1.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon_2&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.icon_2.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;truck&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_2&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.text_2.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_3.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon_3&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.icon_3.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;washing&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_3&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.text_3.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_4.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon_4&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.icon_4.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;heart&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_4&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.text_4.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_5.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon_5&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.icon_5.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;ruler&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_5&quot;,
          &quot;label&quot;: &quot;t:common.blocks.icon_row.settings.text_5.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;image_row&quot;,
      &quot;name&quot;: &quot;t:common.blocks.image_row.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;max_width&quot;,
          &quot;min&quot;: 20,
          &quot;max&quot;: 200,
          &quot;step&quot;: 5,
          &quot;unit&quot;: &quot;px&quot;,
          &quot;label&quot;: &quot;t:sections.testimonials.settings.max_width.label&quot;,
          &quot;default&quot;: 30
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image_picker&quot;,
          &quot;id&quot;: &quot;image_1&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.image_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_1&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.text_1.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image_picker&quot;,
          &quot;id&quot;: &quot;image_2&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.image_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_2&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.text_2.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_3.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image_picker&quot;,
          &quot;id&quot;: &quot;image_3&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.image_3.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_3&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.text_3.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_4.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image_picker&quot;,
          &quot;id&quot;: &quot;image_4&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.image_4.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_4&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.text_4.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_5.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;image_picker&quot;,
          &quot;id&quot;: &quot;image_5&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.image_5.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text_5&quot;,
          &quot;label&quot;: &quot;t:common.blocks.image_row.settings.text_5.label&quot;,
          &quot;default&quot;: &quot;Row item&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;inventory_status&quot;,
      &quot;name&quot;: &quot;t:common.blocks.inventory.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;paragraph&quot;,
          &quot;content&quot;: &quot;t:common.blocks.inventory.paragraph_only_shown&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;low_inventory_threshold&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;label&quot;: &quot;t:common.blocks.inventory.settings.low_inventory_threshold.label&quot;,
          &quot;default&quot;: 5
        &amp;#125;,
        &amp;#123;
          &quot;id&quot;: &quot;show_inventory_quantity&quot;,
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;label&quot;: &quot;t:common.blocks.inventory.settings.show_inventory_quantity.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;popup&quot;,
      &quot;name&quot;: &quot;t:common.blocks.popup.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon&quot;,
          &quot;label&quot;: &quot;t:common.blocks.popup.settings.icon.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;none&quot;,
              &quot;label&quot;: &quot;t:common.options.none.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;ruler&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;text&quot;,
          &quot;default&quot;: &quot;Pop-up link text&quot;,
          &quot;label&quot;: &quot;t:common.blocks.popup.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;id&quot;: &quot;page&quot;,
          &quot;type&quot;: &quot;page&quot;,
          &quot;label&quot;: &quot;t:common.blocks.popup.settings.page.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.popup.settings.page.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;liquid&quot;,
      &quot;name&quot;: &quot;t:common.blocks.liquid.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;liquid&quot;,
          &quot;id&quot;: &quot;liquid&quot;,
          &quot;label&quot;: &quot;t:common.blocks.liquid.settings.liquid.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;collapsible_tab&quot;,
      &quot;name&quot;: &quot;t:common.blocks.collapsible_tab.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;icon&quot;,
          &quot;label&quot;: &quot;t:common.settings.icon.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;none&quot;,
              &quot;label&quot;: &quot;t:common.options.none.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;box&quot;,
              &quot;label&quot;: &quot;t:common.options.box.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;chat_bubble&quot;,
              &quot;label&quot;: &quot;t:common.options.chat_bubble.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;check_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.check_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;coat_hanger&quot;,
              &quot;label&quot;: &quot;t:common.options.coat_hanger.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;clock&quot;,
              &quot;label&quot;: &quot;t:common.options.clock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dryer&quot;,
              &quot;label&quot;: &quot;t:common.options.dryer.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;eye&quot;,
              &quot;label&quot;: &quot;t:common.options.eye.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;globe&quot;,
              &quot;label&quot;: &quot;t:common.options.globe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;heart&quot;,
              &quot;label&quot;: &quot;t:common.options.heart.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;iron&quot;,
              &quot;label&quot;: &quot;t:common.options.iron.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leaf&quot;,
              &quot;label&quot;: &quot;t:common.options.leaf.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;leather&quot;,
              &quot;label&quot;: &quot;t:common.options.leather.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;like&quot;,
              &quot;label&quot;: &quot;t:common.options.like.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;lock&quot;,
              &quot;label&quot;: &quot;t:common.options.lock.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;map_pin&quot;,
              &quot;label&quot;: &quot;t:common.options.map_pin.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;pants&quot;,
              &quot;label&quot;: &quot;t:common.options.pants.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;people&quot;,
              &quot;label&quot;: &quot;t:common.options.people.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;person&quot;,
              &quot;label&quot;: &quot;t:common.options.person.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;plane&quot;,
              &quot;label&quot;: &quot;t:common.options.plane.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;price_tag&quot;,
              &quot;label&quot;: &quot;t:common.options.price_tag.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;question_mark&quot;,
              &quot;label&quot;: &quot;t:common.options.question_mark.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;recycle&quot;,
              &quot;label&quot;: &quot;t:common.options.recycle.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;return&quot;,
              &quot;label&quot;: &quot;t:common.options.return.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;ruler&quot;,
              &quot;label&quot;: &quot;t:common.options.ruler.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shirt&quot;,
              &quot;label&quot;: &quot;t:common.options.shirt.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;shoe&quot;,
              &quot;label&quot;: &quot;t:common.options.shoe.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;star&quot;,
              &quot;label&quot;: &quot;t:common.options.star.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;truck&quot;,
              &quot;label&quot;: &quot;t:common.options.truck.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;washing&quot;,
              &quot;label&quot;: &quot;t:common.options.washing.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;gluten_free&quot;,
              &quot;label&quot;: &quot;t:common.options.gluten_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;soy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.soy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;sugar_free&quot;,
              &quot;label&quot;: &quot;t:common.options.sugar_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;nut_free&quot;,
              &quot;label&quot;: &quot;t:common.options.nut_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;corn_free&quot;,
              &quot;label&quot;: &quot;t:common.options.corn_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;dairy_free&quot;,
              &quot;label&quot;: &quot;t:common.options.dairy_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_additives&quot;,
              &quot;label&quot;: &quot;t:common.options.no_additives.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;no_artificial_colors&quot;,
              &quot;label&quot;: &quot;t:common.options.no_artificial_colors.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;non_gmo&quot;,
              &quot;label&quot;: &quot;t:common.options.non_gmo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;vegan&quot;,
              &quot;label&quot;: &quot;t:common.options.vegan.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;halal&quot;,
              &quot;label&quot;: &quot;t:common.options.halal.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;organic&quot;,
              &quot;label&quot;: &quot;t:common.options.organic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;kosher&quot;,
              &quot;label&quot;: &quot;t:common.options.kosher.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;keto&quot;,
              &quot;label&quot;: &quot;t:common.options.keto.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paleo&quot;,
              &quot;label&quot;: &quot;t:common.options.paleo.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;cruelty_free&quot;,
              &quot;label&quot;: &quot;t:common.options.cruelty_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;paraben_free&quot;,
              &quot;label&quot;: &quot;t:common.options.paraben_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;alcohol_free&quot;,
              &quot;label&quot;: &quot;t:common.options.alcohol_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;palm_oil_free&quot;,
              &quot;label&quot;: &quot;t:common.options.palm_oil_free.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;anti_bacterial&quot;,
              &quot;label&quot;: &quot;t:common.options.anti_bacterial.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;probiotic&quot;,
              &quot;label&quot;: &quot;t:common.options.probiotic.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;antioxidants&quot;,
              &quot;label&quot;: &quot;t:common.options.antioxidants.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_salt&quot;,
              &quot;label&quot;: &quot;t:common.options.low_salt.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;low_carb&quot;,
              &quot;label&quot;: &quot;t:common.options.low_carb.label&quot;,
              &quot;group&quot;: &quot;Food and health&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;none&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading&quot;,
          &quot;default&quot;: &quot;Collapsible tab&quot;,
          &quot;info&quot;: &quot;t:common.blocks.collapsible_tab.settings.heading.info&quot;,
          &quot;label&quot;: &quot;t:common.blocks.collapsible_tab.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;uppercase_text&quot;,
          &quot;label&quot;: &quot;t:settings_schema.typography.settings.heading_uppercase.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;richtext&quot;,
          &quot;id&quot;: &quot;content&quot;,
          &quot;label&quot;: &quot;t:common.blocks.collapsible_tab.settings.content.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;page&quot;,
          &quot;id&quot;: &quot;page&quot;,
          &quot;label&quot;: &quot;t:common.blocks.collapsible_tab.settings.page.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;share_buttons&quot;,
      &quot;name&quot;: &quot;t:common.blocks.share_buttons.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;nutritional_information&quot;,
      &quot;name&quot;: &quot;t:common.blocks.nutritional_information.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading&quot;,
          &quot;default&quot;: &quot;Nutritional information&quot;,
          &quot;label&quot;: &quot;t:common.blocks.nutritional_information.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;right_label&quot;,
          &quot;default&quot;: &quot;Per 100g&quot;,
          &quot;label&quot;: &quot;t:common.blocks.nutritional_information.settings.right_label.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;richtext&quot;,
          &quot;id&quot;: &quot;information&quot;,
          &quot;label&quot;: &quot;t:common.blocks.nutritional_information.settings.information.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.nutritional_information.settings.information.info&quot;,
          &quot;default&quot;: &quot;&lt;p&gt;Protein, 13g&lt;br/&gt;Total Carbohydrate, 36g&lt;br/&gt;- Dietary Fiber, 11g&lt;br/&gt;- Sugars, 6g&lt;br/&gt;Total Fat, 1g&lt;/p&gt;&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;horizontal_bar_chart&quot;,
      &quot;name&quot;: &quot;t:common.blocks.horizontal_bar_chart.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;uppercase_text&quot;,
          &quot;label&quot;: &quot;t:settings_schema.typography.settings.heading_uppercase.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;label&quot;,
          &quot;label&quot;: &quot;t:common.blocks.horizontal_bar_chart.settings.label.label&quot;,
          &quot;default&quot;: &quot;t:common.settings.label.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;value&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.blocks.horizontal_bar_chart.settings.value.label&quot;,
          &quot;default&quot;: 50
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;value_alt&quot;,
          &quot;label&quot;: &quot;t:common.blocks.horizontal_bar_chart.settings.value_alt.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.horizontal_bar_chart.settings.value_alt.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;comparative_scale&quot;,
      &quot;name&quot;: &quot;t:common.blocks.comparative_scale.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;uppercase_text&quot;,
          &quot;label&quot;: &quot;t:settings_schema.typography.settings.heading_uppercase.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;left_label&quot;,
          &quot;label&quot;: &quot;t:common.blocks.comparative_scale.settings.left_label.label&quot;,
          &quot;default&quot;: &quot;Label 1&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;right_label&quot;,
          &quot;label&quot;: &quot;t:common.blocks.comparative_scale.settings.right_label.label&quot;,
          &quot;default&quot;: &quot;Label 2&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;marker_position&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 100,
          &quot;step&quot;: 1,
          &quot;unit&quot;: &quot;%&quot;,
          &quot;label&quot;: &quot;t:common.blocks.comparative_scale.settings.marker_position.label&quot;,
          &quot;default&quot;: 50
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;marker_position_alt&quot;,
          &quot;label&quot;: &quot;t:common.blocks.comparative_scale.settings.marker_position_alt.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.comparative_scale.settings.marker_position_alt.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;complementary&quot;,
      &quot;name&quot;: &quot;t:common.blocks.complementary_products.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;paragraph&quot;,
          &quot;content&quot;: &quot;t:common.blocks.complementary_products.settings.paragraph_to_select_complementary&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;block_heading&quot;,
          &quot;default&quot;: &quot;Pairs well with&quot;,
          &quot;label&quot;: &quot;t:common.blocks.complementary_products.settings.block_heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;product_list_limit&quot;,
          &quot;min&quot;: 1,
          &quot;max&quot;: 10,
          &quot;step&quot;: 1,
          &quot;default&quot;: 10,
          &quot;label&quot;: &quot;t:common.blocks.complementary_products.settings.product_list_limit.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;product_tile_style&quot;,
          &quot;label&quot;: &quot;t:common.settings.product_tile_style.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;mini&quot;,
              &quot;label&quot;: &quot;t:common.options.mini.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;standard&quot;,
              &quot;label&quot;: &quot;t:common.options.standard.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;mini&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;enable_quick_buy&quot;,
          &quot;label&quot;: &quot;t:common.settings.enable_quick_buy.label&quot;,
          &quot;info&quot;: &quot;t:common.settings.enable_quick_buy_mini_only.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;tags&quot;,
      &quot;name&quot;: &quot;t:common.blocks.tags.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;title_size&quot;,
          &quot;label&quot;: &quot;t:common.settings.title_size.label&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text-sm&quot;,
              &quot;label&quot;: &quot;t:common.options.small.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;text-base&quot;,
              &quot;label&quot;: &quot;t:common.options.base.label&quot;
            &amp;#125;
          ],
          &quot;default&quot;: &quot;text-sm&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;textarea&quot;,
          &quot;id&quot;: &quot;include_tags_list&quot;,
          &quot;label&quot;: &quot;t:common.blocks.tags.settings.include_tags.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.tags.settings.include_tags.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;allow_tag_links&quot;,
          &quot;label&quot;: &quot;t:common.blocks.tags.settings.allow_tag_links.label&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;collection&quot;,
          &quot;id&quot;: &quot;tag_collection&quot;,
          &quot;label&quot;: &quot;t:common.settings.collection.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.tags.settings.collection_tags.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.tag_style.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;background_color&quot;,
          &quot;label&quot;: &quot;t:common.settings.background_color.label&quot;,
          &quot;default&quot;: &quot;bg-transparent text-scheme-text&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;bg-transparent text-scheme-text&quot;,
              &quot;label&quot;: &quot;t:common.options.transparent.label&quot;
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
              &quot;value&quot;: &quot;bg-scheme-text text-scheme-background&quot;,
              &quot;label&quot;: &quot;t:common.options.text.label&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;show_border&quot;,
          &quot;label&quot;: &quot;t:common.settings.show_border.label&quot;,
          &quot;default&quot;: true
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;features_list&quot;,
      &quot;name&quot;: &quot;t:sections.features_list.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;uppercase_text&quot;,
          &quot;label&quot;: &quot;t:settings_schema.typography.settings.heading_uppercase.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_1&quot;,
          &quot;default&quot;: &quot;t:common.blocks.features_list.settings.title.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_2&quot;,
          &quot;default&quot;: &quot;t:common.blocks.features_list.settings.title.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_3.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_3&quot;,
          &quot;default&quot;: &quot;t:common.blocks.features_list.settings.title.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_4.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_4&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_5.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_5&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_6.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_6&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:settings_schema.borders.name&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;paragraph&quot;,
          &quot;content&quot;: &quot;t:sections.features_list.paragraph&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;border_between_rows&quot;,
          &quot;label&quot;: &quot;t:sections.features_list.settings.border_between_rows.label&quot;,
          &quot;default&quot;: true
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;border_top_bottom&quot;,
          &quot;label&quot;: &quot;t:sections.features_list.settings.border_top_bottom.label&quot;,
          &quot;default&quot;: false
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;dot_rating&quot;,
      &quot;name&quot;: &quot;t:common.blocks.dot_rating.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;uppercase_text&quot;,
          &quot;label&quot;: &quot;t:settings_schema.typography.settings.heading_uppercase.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;dot_color&quot;,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.dot_color.label&quot;,
          &quot;default&quot;: &quot;text&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;text&quot;,
              &quot;label&quot;: &quot;t:common.options.text.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;accent_1&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_1.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;accent_2&quot;,
              &quot;label&quot;: &quot;t:common.options.accent_2.label&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_1&quot;,
          &quot;default&quot;: &quot;t:common.blocks.dot_rating.settings.title.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rating_1&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 5,
          &quot;step&quot;: 1,
          &quot;default&quot;: 0,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.rating.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;dynamic_rating_1&quot;,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_2&quot;,
          &quot;default&quot;: &quot;t:common.blocks.dot_rating.settings.title.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rating_2&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 5,
          &quot;step&quot;: 1,
          &quot;default&quot;: 0,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.rating.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;dynamic_rating_2&quot;,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_3.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_3&quot;,
          &quot;default&quot;: &quot;t:common.blocks.dot_rating.settings.title.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rating_3&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 5,
          &quot;step&quot;: 1,
          &quot;default&quot;: 0,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.rating.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;dynamic_rating_3&quot;,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_4.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_4&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rating_4&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 5,
          &quot;step&quot;: 1,
          &quot;default&quot;: 0,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.rating.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;dynamic_rating_4&quot;,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_5.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_5&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rating_5&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 5,
          &quot;step&quot;: 1,
          &quot;default&quot;: 0,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.rating.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;dynamic_rating_5&quot;,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_6.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;title_6&quot;,
          &quot;label&quot;: &quot;t:common.settings.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;rating_6&quot;,
          &quot;min&quot;: 0,
          &quot;max&quot;: 5,
          &quot;step&quot;: 1,
          &quot;default&quot;: 5,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.rating.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;dynamic_rating_6&quot;,
          &quot;label&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.dot_rating.settings.dynamic_rating.info&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;tabs&quot;,
      &quot;name&quot;: &quot;t:common.blocks.tabs.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;uppercase_heading&quot;,
          &quot;label&quot;: &quot;t:common.blocks.tabs.settings.uppercase_heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_1&quot;,
          &quot;default&quot;: &quot;t:common.blocks.tabs.settings.heading.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;richtext&quot;,
          &quot;id&quot;: &quot;content_1&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;,
          &quot;default&quot;: &quot;t:common.blocks.tabs.settings.content.default&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;page&quot;,
          &quot;id&quot;: &quot;page_content_1&quot;,
          &quot;label&quot;: &quot;t:common.blocks.tabs.settings.page.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.tabs.settings.page.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_2&quot;,
          &quot;default&quot;: &quot;t:common.blocks.tabs.settings.heading.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;richtext&quot;,
          &quot;id&quot;: &quot;content_2&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;,
          &quot;default&quot;: &quot;t:common.blocks.tabs.settings.content.default&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;page&quot;,
          &quot;id&quot;: &quot;page_content_2&quot;,
          &quot;label&quot;: &quot;t:common.blocks.tabs.settings.page.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.tabs.settings.page.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_3.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_3&quot;,
          &quot;default&quot;: &quot;t:common.blocks.tabs.settings.heading.default&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;richtext&quot;,
          &quot;id&quot;: &quot;content_3&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;,
          &quot;default&quot;: &quot;t:common.blocks.tabs.settings.content.default&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;page&quot;,
          &quot;id&quot;: &quot;page_content_3&quot;,
          &quot;label&quot;: &quot;t:common.blocks.tabs.settings.page.label&quot;,
          &quot;info&quot;: &quot;t:common.blocks.tabs.settings.page.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.blocks.tabs.settings.active_tab.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;tab_style&quot;,
          &quot;label&quot;: &quot;t:common.settings.style.label&quot;,
          &quot;default&quot;: &quot;underline&quot;,
          &quot;options&quot;: [
            &amp;#123;
              &quot;value&quot;: &quot;underline&quot;,
              &quot;label&quot;: &quot;t:common.options.underline.label&quot;
            &amp;#125;,
            &amp;#123;
              &quot;value&quot;: &quot;border&quot;,
              &quot;label&quot;: &quot;t:common.settings.border&quot;
            &amp;#125;
          ]
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;select&quot;,
          &quot;id&quot;: &quot;tab_color&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_color&quot;,
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
            &amp;#125;
          ]
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;information_list&quot;,
      &quot;name&quot;: &quot;t:common.blocks.information_list.name&quot;,
      &quot;limit&quot;: 1,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;display_on_card&quot;,
          &quot;label&quot;: &quot;t:common.settings.display_on_card.label&quot;,
          &quot;default&quot;: false,
          &quot;info&quot;: &quot;t:common.settings.display_on_card.info&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_1&quot;,
          &quot;default&quot;: &quot;t:common.settings.label.label&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;inline_richtext&quot;,
          &quot;id&quot;: &quot;content_1&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;,
          &quot;default&quot;: &quot;t:common.blocks.information_list.settings.content.default&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_2&quot;,
          &quot;default&quot;: &quot;t:common.settings.label.label&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;inline_richtext&quot;,
          &quot;id&quot;: &quot;content_2&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;,
          &quot;default&quot;: &quot;t:common.blocks.information_list.settings.content.default&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_3.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_3&quot;,
          &quot;default&quot;: &quot;t:common.settings.label.label&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;inline_richtext&quot;,
          &quot;id&quot;: &quot;content_3&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;,
          &quot;default&quot;: &quot;t:common.blocks.information_list.settings.content.default&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_4.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_4&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;inline_richtext&quot;,
          &quot;id&quot;: &quot;content_4&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.options.item_5.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;text&quot;,
          &quot;id&quot;: &quot;heading_5&quot;,
          &quot;label&quot;: &quot;t:common.settings.heading.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;inline_richtext&quot;,
          &quot;id&quot;: &quot;content_5&quot;,
          &quot;label&quot;: &quot;t:common.settings.header_content&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;header&quot;,
          &quot;content&quot;: &quot;t:common.settings.style.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;col_width&quot;,
          &quot;min&quot;: 5,
          &quot;max&quot;: 25,
          &quot;step&quot;: 1,
          &quot;label&quot;: &quot;t:common.blocks.information_list.settings.col_width.label&quot;,
          &quot;default&quot;: 20,
          &quot;unit&quot;: &quot;ch&quot;
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;heading_style&quot;,
          &quot;label&quot;: &quot;t:common.settings.bold_heading.label&quot;,
          &quot;default&quot;: false
        &amp;#125;,
        &amp;#123;
          &quot;type&quot;: &quot;checkbox&quot;,
          &quot;id&quot;: &quot;append_colon&quot;,
          &quot;label&quot;: &quot;t:common.blocks.information_list.settings.append_colon.label&quot;,
          &quot;default&quot;: false
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;spacer&quot;,
      &quot;name&quot;: &quot;t:common.blocks.spacer.name&quot;,
      &quot;settings&quot;: [
        &amp;#123;
          &quot;type&quot;: &quot;range&quot;,
          &quot;id&quot;: &quot;height&quot;,
          &quot;min&quot;: 0.5,
          &quot;max&quot;: 10,
          &quot;step&quot;: 0.5,
          &quot;unit&quot;: &quot;x&quot;,
          &quot;label&quot;: &quot;t:common.settings.height.label&quot;,
          &quot;default&quot;: 4
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
  ]
&amp;#125;
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
