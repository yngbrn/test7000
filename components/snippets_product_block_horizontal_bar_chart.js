export default function snippets_product_block_horizontal_bar_chart() {
  const html = `<div
  class=""
  
>
  <div class="comparison-chart flex items-center items-center justify-start">
    <h4 class="w-1/5 shrink-0 text-sm uppercase">
      
    </h4>
    
    <div class="relative flex-1" aria-label="%">
      <div
        class="relative h-chart rounded-full border-general border-scheme-text bg-scheme-accent-1"
        style="width: %"
      ></div>
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
