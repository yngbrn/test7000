export default function snippets_product_block_star_rating() {
  const html = `
  <div
    class="empty:hidden  text-sm"
    style="--star-rating-star-color: var(--color-scheme-text); --star-rating-star-background-color: rgba(var(--color-scheme-text), 0.1); --star-rating-caption-color: rgb(var(--color-scheme-text));"
    
  >
    
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
