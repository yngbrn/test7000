export default function snippets_product_block_buy_buttons() {
  const html = `<div class="" >
  

  
    <div class="mb-2.5">
      
    </div>

    <div class="hiddenno-js">
      <label class="" for="fallback-selector-"
        >Variant</label
      >
      <select
        x-ref="singleVariantSelector"
        name="id"
        id="fallback-selector-"
        class="font-secondary text-sm"
      >
        
          <option
            
              selected="selected"
            
            
              disabled="disabled"
            
            x-bind:selected="currentVariantId === "
            value=""
          >
            
          </option>
        
      </select>
    </div>

    

    
      push-btn__surface push-btn__surface--secondary w-full
    
      push-btn__surface w-full
    

    
      <div class="mb-5">
        
      </div>
    

    <div
      class="font-secondary mb-5 rounded-button bg-scheme-accent-1 px-3 py-2 text-sm text-scheme-accent-1-contrast empty:hidden"
      x-text="cartAddErrorMessage"
    ></div>

    <div
      class=""
      
        x-intersect:enter="stickyAddToCartShown = false"
        x-intersect:leave="stickyAddToCartShown = true"
      
    >
      <div class="w-full">
        <button
          class="
            add-to-cart-btn mb-1 push-btn btn text-sm lg:text-base after:hidden bg-scheme-secondary-background text-scheme-text  w-full
            cursor-not-allowed
          "
          type="submit"
          :class="&#123; 'cursor-not-allowed': !currentVariantAvailable &#125;"
          :disabled="!currentVariantAvailable"
          :aria-label="addToCartText"
          
            disabled="disabled"
          
        >
          <span class="">
            <span x-text="addToCartText">
              
                
              
                
              
            </span>
            
              <span x-show="currentVariantAvailable">&nbsp;&#8211;&nbsp;</span
              ><span
                x-show="currentVariantAvailable"
                x-html="formatMoney(totalCurrentPrice)"
              >
                
              </span>
              
                <span
                  x-show="currentVariantAvailable && currentVariantHasCompareAtPrice"
                  class=""
                >
                  <span class="sr-only">
                    
                  </span>
                  <s
                    data-compare-price
                    x-html="formattedTotalCompareAtPrice"
                  >
                    
                      
                    
                  </s>
                </span>
              
            
          </span>
        </button>
      </div>

      
        <script>
          const addToCartBtnEl = document.querySelector('.add-to-cart-btn');

          if (addToCartBtnEl) &#123;
            document.documentElement.style.setProperty(
              '--payment-button-height',
              \`$&#123;addToCartBtnEl.getBoundingClientRect().height&#125;px\`
            );
          &#125;
        </script>
        <div class="dynamic-payment-buttons mt-2.5  min-h-[calc(var(--payment-button-height)_+_1.9em)]">
          
        </div>
      
    </div>

    
      <div
        class=" rte mb-8 mt-4"
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
        !
        
        .
      </div>
    
  

  
    <data-island
      class="empty:hidden"
      x-html-if-set.use-empty="
        variantChanged &&
        $fetchedFragment(
          \`variants/$&#123;currentVariant.id&#125;/?section_id=pickup-availability\`,
          '.pickup-availability',
          'opacity-50'
        )
      "
      on="idle"
    >
      
    </data-island>
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
