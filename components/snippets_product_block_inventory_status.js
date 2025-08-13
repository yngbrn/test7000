export default function snippets_product_block_inventory_status() {
  const html = `

<div
  class=" text-sm"
  
>
  <div class="no-js:space-y-1">
    
      <div
        x-show="currentVariantId === "
        
          class="no-js:!block"
          style="display: none;"
        
      >
        
          <span class="hidden no-js:inline">:</span>
        
        
          
            <span></span>
          
            
              <span class="text-scheme-accent-1-contrast inline-block rounded-button bg-scheme-accent-1 px-1.5 py-1">
                
              </span>
            
              <span class="text-scheme-accent-1-contrast inline-block rounded-button bg-scheme-accent-1 px-1.5 py-1">
                
              </span>
            
          
        
          
            <span>
              
            </span>
          
            <span>
              
            </span>
          
        
      </div>
    
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
