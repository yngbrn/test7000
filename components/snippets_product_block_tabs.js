export default function snippets_product_block_tabs() {
  const html = `

<div
  class=" flex flex-col items-start gap-5"
  
  x-data="&#123; tab: 'tab_1' &#125;"
>
  <div
    class="product-tabs__tabs flex flex-wrap justify-start gap-4 text-center text-scheme-text lg:justify-evenly"
    role="tablist"
    aria-labelledby="tablist_product_tabs"
  >
    
      
      
      
      

      
        <button
          @click="tab = ''"
          :class="&#123; '': tab === '', '': tab !== '' &#125;"
          class="text-scheme-text lg:text-base "
          id=""
          type="button"
          role="tab"
          :aria-selected="tab === '' ? 'true' : 'false'"
          aria-controls=""
          x-cloak
        >
          
        </button>
      
    
  </div>

  <div class="product-tabs__content">
    
      content_
      page_content_
      

      <div
        x-show="tab === ''"
        id=""
        role="tabpanel"
        aria-labelledby=""
        
          style="display: none;"
        
      >
        <data-island class="rte" x-data="RTE">
          
            
          
            
              
            
          
        </data-island>
      </div>
    
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
