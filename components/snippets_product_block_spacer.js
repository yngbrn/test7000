export default function snippets_product_block_spacer() {
  const html = `
<div
  style="--spacer-height: rem;"
  class="h-[var(--spacer-height)]"
  
></div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
