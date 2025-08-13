export default function snippets_cart_items() {
  const html = `<data-island
  x-data="CartItems"
  data-cart-items
  class="flex flex-auto flex-col overflow-hidden overflow-y-auto px-section"
  on="idle"
>
  
    
  
  
    
    <form
      action=""
      class="cart__contents critical-hidden"
      method="post"
      id="cart"
    >
      <div class="flex-auto overflow-hidden overflow-y-auto border-t-general border-scheme-text  pb-16 pt-4">
        
          <div class="hidden lg:grid  mb-5 items-end border-b-section border-scheme-text pb-5">
            <p class="justify-self-start lg:col-span-8">
              
            </p>
            <p class="justify-self-start lg:col-span-3">
              
            </p>
            <p class="justify-self-end lg:col-span-3">
              
            </p>
          </div>
        
        
          
        
        <ul :key="cart-items" class="gap-gutter grid grid-cols-1">
          
            
              <div
                x-data="CartItemQuantity"
                x-ref="quantityControl"
                @remove="remove"
                class="max-w-min"
              >
                <div class="ml-[0.1rem]  lg:flex lg:justify-start lg:ml-0 mt-2.5 lg:mt-5">
                  <label class="sr-only" for="updates_">
                    :</label
                  >
                  <div class="input flex h-8 max-w-min flex-nowrap items-stretch justify-center p-0 text-xs text-scheme-text lg:text-base">
                    <button
                      class="h-full w-8"
                      aria-label="&minus;"
                      @click.prevent.stop="decrement"
                    >
                      <div class="m-auto h-2 w-2 lg:h-4 lg:w-4">
                        
                      </div>
                    </button>
                    <input
                      type="number"
                      name="updates[]"
                      id="updates_"
                      value=""
                      data-variant-id=""
                      data-last-value=""
                      class="w-12 border-0 bg-transparent text-center text-sm shadow-none focus:ring-current lg:text-base"
                      size="4"
                      min="0"
                      step="1"
                      aria-label=""
                      x-ref="quantityInput"
                      x-model.number.fill="quantity"
                      @change="itemQuantityChange()"
                      @keyup.debounce.750ms="$dispatch('change')"
                      autocomplete="off"
                     />
                    <button
                      class="h-full w-8"
                      aria-label="&plus;"
                      @click.prevent.stop="increment"
                    >
                      <div class="m-auto h-2 w-2 lg:h-4   lg:w-4">
                        
                      </div>
                    </button>
                  </div>
                </div>
                <div>
                  <p class="text-xs lg:text-center mt-1.5 lg:mt-2.5">
                    <a href="" @click.prevent="remove">
                      
                    </a>
                  </p>
                </div>
              </div>
            
            <li
              x-data="CartItem('')"
              class="grid  py-2.5 lg:py-5"
              :class="&#123; 'opacity-50 cursor-progress': locked &#125;"
              key="CartItem--"
              id="CartItem--"
              data-line-item-key=""
            >
              <div class="col-span-1 lg:col-span-2  lg:col-span-2 lg:max-w-[166px]  row-span-2">
                
                  <a
                    href=""
                    class="block"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    
                  </a>
                
              </div>
              <div class="col-span-2  lg:col-span-6 lg:row-span-3 ">
                <div>
                  <a href="">
                    <div data-product-title>
                      <p class="text-sm leading-tight lg:text-base">
                        
                      </p>

                      
                        <p class="mt-1 text-sm">
                          
                            <span class="visually-hidden">
                              
                            </span>
                            
                            <span class="visually-hidden">
                              
                            </span>
                            <s></s>
                          
                            
                          
                        </p>
                      

                      
                        <p class="mt-1 text-xs"></p>
                      
                    </div>

                    
                      <p class="text-xs"></p>
                    

                    
                      <p class="text-xs">
                        
                      </p>
                    

                    
                      
                        
                        
                          <p class="text-xs">
                            :
                            
                              <a href="">
                                
                              </a>
                            
                              
                            
                          </p>
                        
                      
                    
                  </a>
                  
                    <div
                      
                        class="lg:mb-1"
                      
                    >
                      
                        <ul
                          class="mt-1 text-xs"
                          aria-label=""
                        >
                          
                            <li class="order-discount__item">
                              <span class="-mx-1 inline-block rounded-button bg-scheme-accent-1 p-1 text-scheme-accent-1-contrast">
                                
                                
                                  (-)
                                
                              </span>
                            </li>
                          
                        </ul>
                      
                      
                        <div class="text-xs  inline-block bg-scheme-accent-1 text-scheme-accent-1-contrast p-1 rounded-button -mx-1  text-scheme-text ">
                           /&nbsp;
                          
                            
                          
                          
                        </div>
                      
                    </div>
                  
                </div>

                
                  
                
              </div>
              
                <div class="col-span-2 lg:col-span-3 lg:row-span-2">
                  <div class="max-w-min">
                    
                  </div>
                </div>
              
              <div class="col-start-4 row-start-1   lg:col-span-3 lg:row-span-2  lg:col-start-5  break-words text-right text-sm leading-tight lg:text-base">
                
                  <del class="block">
                    
                  </del>
                  <span class="mt-1 inline-block rounded-button bg-scheme-accent-1 p-1 text-scheme-accent-1-contrast">
                    
                  </span>
                
                  
                
              </div>
              <div
                class="col-span-full mt-1"
                id="Line-item-error-"
                role="alert"
                data-item-title=""
                style="display: none;"
                x-show="errorMessage"
              >
                <div
                  class="w-fit rounded-button bg-scheme-accent-1 px-2 py-1 text-xs text-scheme-accent-1-contrast"
                  x-text="errorMessage"
                ></div>
              </div>
            </li>
          
        </ul>
        
          <div class="row-start-2  md:row-auto  col-span-14  md:col-span-8  my-2  md:my-0 ">
            <label class="block text-sm" for="CartSpecialInstructions">
              
            </label>
            <data-island class="contents" x-data="CartNote">
              <textarea
                name="note"
                id="CartSpecialInstructions"
                class="input mb-2 mt-1 block w-full p-2 transition-opacity"
                :class="&#123; 'opacity-50 cursor-progress' : updating &#125;"
                :readonly="updating"
                @change="updateNote"
                @keyup.debounce.750ms="$dispatch('change')"
              >
                
              </textarea>
            </data-island>
          </div>
        
      </div>
    </form>
  
    <div class="py-5 text-center">
      <p></p>
    </div>
  
</data-island>
<p
  class="sr-only"
  id="cart-live-region-text"
  aria-live="polite"
  role="status"
  aria-hidden="true"
>
  :
  
</p>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
