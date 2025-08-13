export default function snippets_product_block_price() {
  const html = `
<div
  class="  text-lg  "
  :class="&#123; 'invisible': !currentVariant &#125;"
  
>
  <span class="sr-only"></span>
  <span
    class="text-scheme-text "
    x-html="formatMoney(currentPrice)"
    :class="
      &#123;
        'invisible': !currentVariant
      &#125;
    "
    data-product-price
  >
    
  </span>

  
    <span
      x-show="currentVariantHasCompareAtPrice"
      class=""
    >
      <span class="sr-only"></span>
      <s
        data-compare-price
        class="text-scheme-text"
        x-html="currentVariantHasCompareAtPrice ? formatMoney(currentVariant.compare_at_price) : ''"
      >
        
          
        
      </s>
    </span>
  

  <div
    x-show="currentVariant && currentVariant.unit_price"
    
      style="display: none;"
    
  >
    <div class="mt-2.5 text-sm text-scheme-text" data-unit-price-wrapper>
      <span class="sr-only">
        
      </span>
      <span x-html="formatMoney(currentVariant.unit_price)">
        
      </span>
      <span aria-hidden="true"> / </span>
      <span class="sr-only">
        
      </span>
      <span
        x-html="currentVariant.unit_price_measurement && currentVariant.unit_price_measurement.reference_value != 1 ? currentVariant.unit_price_measurement.reference_value : ''"
      >
        
          
        
      </span>
      <!--  -->
      <span x-html="currentVariant.unit_price_measurement?.reference_unit">
        
      </span>
    </div>
  </div>

  
    <div class="product__tax caption mt-2.5 text-sm">
      
        
      
    </div>
  

  
    
      
      
      
    
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
