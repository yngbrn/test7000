export default function snippets_product_tile_quick_buy() {
  const html = `

<div
  class="product-quick-buy__container relative z-20 mt-5 max-w-xs mx-auto"
>
  
    
      <input type="hidden" name="id" value="" />
    
      <div class="hiddenmb-2.5 text-center">
        <label
          class="hidden "
          for="fallback-selector-"
          >Variant</label
        >
        <select
          @change="mainSelectorChange"
          x-ref="singleVariantSelector"
          name="id"
          id="fallback-selector-"
          class="font-secondary input mx-auto max-w-full appearance-none p-2 pr-10 text-sm text-scheme-text w-full"
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

      
        <div
          class="relative z-10 "
          :class="&#123; 'invisible': !currentVariant &#125;"
          
        >
          
            <fieldset class="product-variant-picker-block -mx-color-fieldset-offset  js-enabled">
              <legend class="hidden ">
                
                
                  : <span x-text="options[]"></span>
                
              </legend>
              <div class="-mx-1 flex flex-wrap justify-center">
                
                  
                  <div class="variant-input relative mx-1 mb-2.5 inline-block break-words">
                    <input
                      class="color-swatch peer absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                      @change="optionChange"
                      type="radio"
                      id="Section--Product--Option-"
                      name="Section--Product--options[]"
                      value=""
                      data-handle=""
                      
                        checked
                      
                      data-single-option-selector
                      data-position=""
                     />
                    <label
                      class="
                        relative block rounded-button border-input border-scheme-text text-center text-sm
                        
                          p-2 min-w-[2.5rem] bg-scheme-secondary-background text-scheme-text peer-checked:bg-scheme-text peer-checked:text-scheme-text-contrast
                        
                          p-0.5 border-opacity-10 peer-checked:border-opacity-100
                        
                        cursor-pointer
                        
                          line-through
                        
                        cursor-pointer
                      "
                      for="Section--Product--Option-"
                      title=""
                    >
                      
                        
                          <span
                            class="absolute bottom-0 left-0 top-1/2 z-10 h-0.5 w-full -translate-y-1/2 -rotate-45 bg-scheme-text"
                          ></span>
                        
                        <span
                          class="block h-10 w-10 bg-cover"
                          style="background-image: url(); background-color: ;"
                        ></span>
                      
                      <span
                        
                          class="sr-only"
                        
                      >
                        
                      </span>
                    </label>
                  </div>
                
              </div>
            </fieldset>
          
        </div>
      
    

    <span class="sr-only"></span>

    <div
      class="font-secondary mb-2.5 rounded-button bg-scheme-accent-1 px-3 py-2 text-xs text-scheme-accent-1-contrast empty:hidden"
      x-text="cartAddErrorMessage"
    ></div>

    <div class="relative z-10 text-center cursor-not-allowed pt-button-shadowpb-button-shadow">
      <button
        class="push-btn btn text-sm lg:text-base after:hidden bg-scheme-secondary-background text-scheme-text  w-full disabled:opacity-40 cursor-not-allowed"
        type="submit"
        
          disabled="disabled"
        
        :disabled="!currentVariantAvailable"
        :class="&#123; 'cursor-not-allowed' : !currentVariantAvailable &#125;"
      >
        <span
          class="push-btn__surface w-full"
          x-text="addToCartText"
        >
          
            
          
            
          
        </span>
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
    

    <div
      x-show="currentVariant && currentVariant.unit_price"
      
        style="display: none;"
      
    >
      <div
        class="mt-2.5 text-center text-sm text-scheme-text"
        data-unit-price-wrapper
      >
        <span class="sr-only">
          
        </span>
        <span x-html="formatMoney(currentVariant.unit_price)">
          
        </span>
        <span aria-hidden="true"> / </span>
        <span class="sr-only">
          
        </span>
        <span x-show="currentVariant.unit_price_measurement && currentVariant.unit_price_measurement.reference_value !== 1 ? currentVariant.unit_price_measurement.reference_value : false">
          
            
          
        </span>
        <span x-html="currentVariant.unit_price_measurement && currentVariant.unit_price_measurement.reference_unit">
          
        </span>
      </div>
    </div>
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
