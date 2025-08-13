export default function snippets_star_rating() {
  const html = `
  
  <div class="flex items-center justify-start">
    <div
      class="rating"
      role="img"
      aria-label=""
    >
      <span
        aria-hidden="true"
        class="rating-star color--primary"
        style="--rating: ; --rating-max: ; --rating-decimal: ;"
      ></span>
    </div>
    <p class="rating-text text-sm">
      <span aria-hidden="true">
         /
        
      </span>
    </p>
    <p class="rating-count text-sm">
      <span aria-hidden="true"
        >()</span
      >
      <span class="sr-only">
        
        
      </span>
    </p>
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
