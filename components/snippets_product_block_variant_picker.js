export default function snippets_product_block_variant_picker() {
  const html = `
  <div
    class=" space-y-2.5"
    
  >
    
    
      

      <fieldset class="product-variant-picker-block -mx-color-fieldset-offset  js-enabled">
        
          <div class="my-1 lg:flex lg:items-center lg:justify-start">
            <label
              class=" break-words pr-2.5 lg:w-1/4 lg:shrink-0 xl:w-1/5"
              for="Option-"
            >
              
            </label>
            <select
              id="Option-"
              name="options[]"
              @change="optionChange"
              class="single-option-selector font-body input mt-2.5 w-full appearance-none text-base lg:mt-0 "
              data-single-option-selector
              data-position=""
            >
              
                <option
                  value=""
                  
                    selected="selected"
                  
                >
                  
                </option>
              
            </select>
          </div>
        
          <div class="my-1 lg:flex lg:items-center lg:justify-start">
            <legend class=" pr-2.5 lg:w-1/4 lg:shrink-0 xl:w-1/5">
              
              
                :<br />
                <span
                  class="mt-1 inline-block"
                  x-text="options[]"
                ></span>
              
            </legend>
            
            <div class="mt-2.5  lg:flex-1">
              
                
                <div class="variant-input relative break-words ">
                  <input
                    class="color-swatch custom-button peer absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                    @change="optionChange"
                    type="radio"
                    id="Section--Option-"
                    name="Section--options[]"
                    value=""
                    data-handle=""
                    
                      checked
                    
                    data-single-option-selector
                    data-position=""
                   />
                  <label
                    class="
                      
                        block rounded-button bg-scheme-secondary-background
                      
                        btn after:hidden 
                        bg-scheme-secondary-background text-scheme-text peer-checked:bg-scheme-text peer-checked:text-scheme-text-contrast
                        px-2 lg:px-4
                      
                      cursor-pointer
                      
                        line-through
                      
                      cursor-pointer
                    "
                    for="Section--Option-"
                    title=""
                  >
                    
                      
                        <span
                          class="absolute bottom-0 left-0 top-1/2 z-10 h-[var(--input-border-width)] w-full -translate-y-1/2 -rotate-45 bg-scheme-text"
                        ></span>
                      
                      
                        
                        <span
                          class="block h-8 w-8 rounded-button bg-cover"
                          style="background-position: ; background-image: url(); background-color: rgb();"
                        ></span>
                      
                        <span
                          class="block h-8 w-8 rounded-button bg-cover"
                          style="background-image: url(); background-color: ;"
                        ></span>
                      
                    
                    <span
                      
                        class="sr-only"
                      
                    >
                      
                    </span>
                  </label>
                </div>
              
            </div>
          </div>
        
      </fieldset>
    
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
