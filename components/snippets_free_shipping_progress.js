export default function snippets_free_shipping_progress() {
  const html = `


  
    <div class=" [text-wrap:balance] text-center text-sm">
      
        
        
      
        
      
    </div>

    <div class="mt-4 w-full  mx-auto px-4">
      <div
        class="h-chart w-full rounded-button border-general border-scheme-text bg-scheme-text"
      >
        <div
          class="h-full rounded-button transition-[width] duration-75 ease-in "
          style="width: %;"
        ></div>
      </div>
    </div>
  

  
  <div
    class=" mx-auto w-full max-w-xl mb-6 lg:mb-12mb-6 lg:mb-4  "
    
      data-color-scheme=""
    
  >
    
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
