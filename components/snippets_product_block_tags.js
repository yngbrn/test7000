export default function snippets_product_block_tags() {
  const html = `


  
    
    
      
        
          <li class="product-tags__tag">
            <a href="/">
              <span class="product-tag pb-1    uppercase">
                
              </span>
            </a>
          </li>
        
          <li class="product-tags__tag">
            <a href="/collections/all/">
              <span class="product-tag pb-1    uppercase">
                
              </span>
            </a>
          </li>
        
      
        <li class="product-tags__tag">
          <p class="product-tag pb-1   ">
            
          </p>
        </li>
      
      
    
  
  



  <div
    class=" text-sm"
    id=""
    
  >
    <ul
      class="product-tags flex flex-wrap gap-3 "
    >
      
    </ul>
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
