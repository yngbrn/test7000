export default function snippets_product_block_collapsible_tab() {
  const html = `<div
  class=""
  
>
  <details
    class="appearance-none border-b-general border-scheme-text py-2.5"
    x-data="&#123; open: false &#125;"
    @toggle="open = $root.open"
  >
    <summary>
      <div class=" flex items-center justify-between">
        <div class=" flex items-center uppercase">
          
            <span class="mr-2 h-8 w-8">
              
            </span>
          
          
        </div>
        <div class="ml-auto flex">
          <span
            class="m-auto inline-block h-5 w-5 transition"
            :class="&#123; 'rotate-180' : open &#125;"
          >
            
          </span>
        </div>
      </div>
    </summary>
    <div class="rte my-5">
      
      
    </div>
  </details>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
