export default function sections_main_article_recipe_structured_data() {
  const html = `

<title></title>
<script type="application/ld+json">
  &#123;
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": ,
    "image": ,
    "description": ,
    "author": &#123;
      "@type": "Person",
      "name": 
    &#125;,
    "keywords": ,
    "recipeYield": [],
    "recipeIngredient": ,
    "totalTime": ,
    "datePublished": 
  &#125;
</script>


&#123;
  "name": "t:sections.article_recipe_structured_data.short_name",
  "settings": [
    &#123;
      "type": "paragraph",
      "content": "t:sections.article_recipe_structured_data.settings.paragraph_info"
    &#125;,
    &#123;
      "type": "text",
      "id": "metafield_ingredients",
      "label": "t:sections.article_recipe_structured_data.settings.metafield_ingredients.label",
      "default": "custom.ingredients",
      "info": "t:sections.article_recipe_structured_data.settings.metafield_ingredients.info"
    &#125;,
    &#123;
      "type": "text",
      "id": "metafield_serves",
      "label": "t:sections.article_recipe_structured_data.settings.metafield_serves.label",
      "default": "custom.serves",
      "info": "t:sections.article_recipe_structured_data.settings.metafield_serves.info"
    &#125;,
    &#123;
      "type": "text",
      "id": "total_time_metafield",
      "label": "t:sections.article_recipe_structured_data.settings.total_time_metafield.label",
      "default": "custom.total_time_iso_format",
      "info": "t:sections.article_recipe_structured_data.settings.total_time_metafield.info"
    &#125;
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
