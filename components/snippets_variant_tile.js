export default function snippets_variant_tile() {
  const html = `

  <div
    class="product-tile relative  text-scheme-text card"
  >
    
      <data-island
        class="contents"
        x-data="
          QuickBuy(&#123;
            product: ,
            variant: ,
            featuredMediaID: ,
            isPreOrder: 
          &#125;)
        "
        src="/assets/island-quick-buy.bundle.js"
        data-product-root="--"
      >
    
    <div
      class="bg-scheme-card card__surface p-2.5 lg:p-5p-5 h-full group"
    >
      
        <div class="product-media-object relative pt-media-shadowpb-media-shadow">
          
        </div>
      
      <div class="product-tile mt-5 break-words text-center">
        <a
          href=""
          class="absolute left-0 top-0 z-10 block h-full w-full"
        >
          <span class="visually-hidden"></span>
        </a>
        <h3 class="font-body text-base"></h3>
        <p class="mt-1"></p>
        
          <p class="mt-1"></p>
        

        
          <span
            class="mt-2.5 inline-block"
            x-html="formatMoney(currentPrice)"
            :class="
              &#123;
                'invisible': !currentVariant
              &#125;
            "
            data-product-price
          >
            
          </span>
          
              <span class="">
                <span class="sr-only">
                  
                </span>
                <s
                  data-compare-price
                  class="text-scheme-text"
                  x-html="formatMoney(currentVariant.compare_at_price)"
                >
                  
                    
                  
                </s>
              </span>
            </span>
          
        
          
        
      </div>
      
        <div>
          
        </div>
      
      
        
        
      
      
        
        
      
      
      
        
        
      
    </div>
    
      </data-island>
    
  </div>

  <div class="product-tile  text-scheme-text card">
    <div class="bg-scheme-card card__surface p-5 h-full">
      <div class="relative pt-media-shadowpb-media-shadow">
        
      </div>
      <div class="product-tile mt-5 text-center">
        <h3 class="font-body text-base">
          
        </h3>
        
      </div>
    </div>
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
