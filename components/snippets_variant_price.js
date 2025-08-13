export default function snippets_variant_price() {
  const html = `<div
  class="
    price
     
     price--on-sale 
     price--no-compare
  "
>
  <div class="price__container">
    
      Explanation of description list:
        - div.price__regular: Displayed when there are no variants on sale
        - div.price__sale: Displayed when a variant is a sale
    
    <div class="price__regular hidden">
      <span class="visually-hidden visually-hidden--inline">
        
      </span>
      <span class="price-item price-item--regular">
        
      </span>
    </div>
    <div class="price__sale hidden">
      
        <span class="visually-hidden visually-hidden--inline">
          
        </span>
        <span>
          <s class="price-item price-item--regular">
            
              
            
              
            
          </s>
        </span>
      
      <span class="visually-hidden visually-hidden--inline">
        
      </span>
      <span class="price-item price-item--sale price-item--last">
        
      </span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">
        
      </span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden"
          >&nbsp;
          
          &nbsp;</span
        >
        <span>
          
            
          
          
        </span>
      </span>
    </small>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
