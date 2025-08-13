export default function sections_scrolling_text_with_icons() {
  const html = `


  <section
    class="bg-scheme-background text-scheme-text bg-scheme-gradient"
    data-color-scheme=""
  >
    
  </section>

  
      --icon-thickness: ;
    &#125;
  



&#123;
  "name": "t:sections.scrolling_text_with_icons.name",
  "settings": [
    &#123;
      "type": "paragraph",
      "content": "t:common.settings.paragraph_if_a_user"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "repeat_text",
      "default": true,
      "label": "t:common.settings.repeat_text.label",
      "info": "t:common.settings.repeat_text.info"
    &#125;,
    &#123;
      "type": "url",
      "id": "link",
      "label": "t:common.settings.link.label"
    &#125;,
    &#123;
      "type": "select",
      "id": "font",
      "label": "t:common.settings.font.label",
      "options": [
        &#123;
          "value": "font-heading heading-secondary",
          "label": "t:common.options.heading.label"
        &#125;,
        &#123;
          "value": "body",
          "label": "t:common.options.body.label"
        &#125;
      ],
      "default": "font-heading heading-secondary"
    &#125;,
    &#123;
      "type": "select",
      "id": "gap",
      "label": "t:sections.scrolling_text_with_icons.settings.gap.label",
      "options": [
        &#123;
          "value": "gap-20",
          "label": "t:common.options.small.label"
        &#125;,
        &#123;
          "value": "gap-36",
          "label": "t:common.options.medium.label"
        &#125;,
        &#123;
          "value": "gap-44",
          "label": "t:common.options.large.label"
        &#125;
      ],
      "default": "gap-36"
    &#125;,
    &#123;
      "type": "select",
      "id": "icon_size",
      "label": "t:sections.scrolling_text_with_icons.settings.icon_size.label",
      "options": [
        &#123;
          "value": "size-6",
          "label": "t:common.options.small.label"
        &#125;,
        &#123;
          "value": "size-8",
          "label": "t:common.options.medium.label"
        &#125;,
        &#123;
          "value": "size-10",
          "label": "t:common.options.large.label"
        &#125;
      ],
      "default": "size-8"
    &#125;,
    &#123;
      "type": "range",
      "id": "speed",
      "min": 10,
      "max": 400,
      "step": 10,
      "label": "t:common.settings.speed.label",
      "default": 120
    &#125;,
    &#123;
      "type": "select",
      "id": "direction",
      "label": "t:common.settings.direction.label",
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
      "type": "text",
      "name": "t:common.blocks.text.name",
      "settings": [
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
          "default": "star"
        &#125;
      ]
    &#125;
  ],
  "presets": [
    &#123;
      "name": "t:sections.scrolling_text_with_icons.name",
      "settings": &#123;
        "font": "body",
        "show_border": true
      &#125;,
      "blocks": [
        &#123;
          "type": "text",
          "settings": &#123;
            "text": "Free shipping worldwide",
            "icon": "globe"
          &#125;
        &#125;,
        &#123;
          "type": "text",
          "settings": &#123;
            "text": "Environmentally friendly",
            "icon": "leaf"
          &#125;
        &#125;,
        &#123;
          "type": "text",
          "settings": &#123;
            "text": "24/7 support",
            "icon": "chat_bubble"
          &#125;
        &#125;,
        &#123;
          "type": "text",
          "settings": &#123;
            "text": "Food org certified",
            "icon": "check_mark"
          &#125;
        &#125;,
        &#123;
          "type": "text",
          "settings": &#123;
            "text": "Good for you",
            "icon": "heart"
          &#125;
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
