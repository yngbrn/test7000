export default function snippets_product_tile_mini() {
  const html = `

  <div
    class="product-tile product-tile--mini relative  text-scheme-text card"
  >
    
      <data-island
        class="contents"
        x-data="
          QuickBuy(&#123;
            product: ,
            variant: ,
            featuredMediaID: 
          &#125;)
        "
        src="/assets/island-quick-buy.bundle.js"
        data-product-root="-"
      >
    

    <div class="flex items-center justify-between bg-scheme-card card__surface p-2.5">
      <a
        href=""
        class="flex justify-start gap-5"
      >
        
          <div class="media--small w-24 shrink-0">
            <div class="product-media-object relative pt-media-shadowpb-media-shadow">
              
            </div>
          </div>
        
        <div class="product-tile flex items-center break-words text-left">
          <div>
            <h3 class="font-body text-base"></h3>
            
              <p class="mt-1"></p>
            

            
          </div>
        </div>
      </a>
      
        <div>
          
            <input type="hidden" name="id" value="" />

            <span class="sr-only">
              
            </span>

            <div
              class="font-secondary mb-2.5 rounded-button bg-scheme-accent-1 px-3 py-2 text-xs text-scheme-accent-1-contrast empty:hidden"
              x-text="cartAddErrorMessage"
            ></div>

            <div class="relative z-10 text-center cursor-not-allowed pt-button-shadowpb-button-shadow">
              <button
                class="push-btn"
                type="submit"
              >
                <div class="push-btn__surface push-btn__surface--secondary p-2 align-bottom">
                  <div class="m-auto h-4 w-4"></div>
                </div>
                <span class="visually-hidden">, </span>
              </button>
            </div>

            
              <div
                class=" rte mt-2.5 text-center text-sm"
                tabindex="-1"
                x-ref="added"
                x-show="addedToCart"
                x-cloak
                x-transition:enter="transition ease duration-300"
                x-transition:enter-start="opacity-0"
                x-transition:enter-end="opacity-100"
                x-transition:leave="transition ease duration-300"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
              >
                <div class="text-sm">
                  !
                  
                  .
                </div>
              </div>
            
          
        </div>
      
    </div>
    
      </data-island>
    
  </div>

  <div class="product-tile product-tile--mini relative  text-scheme-text card max-w-sm">
    <div class="flex items-center justify-between bg-scheme-card card__surface p-2.5">
      <div class="flex justify-start gap-5">
        <div class="media--small w-24">
          <div class="relative pt-media-shadowpb-media-shadow">
            
          </div>
        </div>
        <div class="product-tile flex items-center  text-left">
          <div>
            <h3 class="font-body text-base">
              
            </h3>
            
          </div>
        </div>
      </div>
    </div>
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
