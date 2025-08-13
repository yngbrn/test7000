export default function snippets_product_block_dot_rating() {
  const html = `

<div
  class=""
  
>
  <ul
    class="text-left"
  >
    
      title_
      rating_
      dynamic_rating_
      
      
        <li class="flex items-center justify-between gap-x-3 pb-[0.7em] last:pb-0 uppercase">
          
          <div class="flex gap-x-1 pt-icon-center">
            
              
              
                
              
            

            <span class="sr-only">
              
            </span>

            
              <span
                class=" "
              ></span>
            
          </div>
        </li>
      
    
  </ul>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
