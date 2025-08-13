export default function snippets_product_tile() {
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
        data-product-root="-"
      >
    
    <div
      class="product-tile__container bg-scheme-card card__surface p-2.5 lg:p-5p-5 h-full"
    >
      
        <a
          href=""
          class="product-tile__featured-media group block"
        >
          <div class="product-media-object relative pt-media-shadowpb-media-shadow">
            
          </div>
        </a>
      
      <div class="product-tile mt-5 break-words ">
        <a
          href=""
          class="block h-full w-full"
        >
          <h3 class="font-body text-base"></h3>
          
            <p class="mt-1"></p>
          

          
          
            <div class="rte mt-2.5 normal-case text-scheme-text">
              
            </div>
          

          
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
            
          
            
          
        </a>
      </div>
      
        <div class="product-tile__quick-buy">
          
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
