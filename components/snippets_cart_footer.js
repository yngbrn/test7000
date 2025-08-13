export default function snippets_cart_footer() {
  const html = `<data-island
  x-data="CartFooter"
  data-cart-footer
  on="idle"
>
  
    <div class="border-t-section border-scheme-text pt-5 lg:pt-10 pt-2.5 lg:pt-5 ">
      <div class="grid grid-cols-14 gap-2   max-w-5xl mx-auto ">
        
          <div class="col-span-14 md:col-span-6 md:row-span-3">
            <label class="block text-sm" for="CartSpecialInstructions">
              
            </label>
            <data-island class="contents" x-data="CartNote">
              <textarea
                name="note"
                id="CartSpecialInstructions"
                class="input mb-2 mt-2.5 block w-full p-2 transition-opacity"
                :class="&#123; 'opacity-50 cursor-progress' : updating &#125;"
                :readonly="updating"
                @change="updateNote"
                @keyup.debounce.750ms="$dispatch('change')"
              >
                
              </textarea>
            </data-island>
          </div>
        
        <div class="col-span-14  md:col-span-6 md:col-end-last ">
          <dl class="grid grid-cols-2  md:grid-cols-5  items-center text-right">
            
              <div class="col-span-full -mx-1 inline-block flex justify-between rounded-button bg-scheme-accent-1 p-1 text-scheme-accent-1-contrast lg:col-span-full lg:col-start-2">
                <dt class="  md:col-span-3 ">
                  <span class="sr-only">
                    :</span
                  ><span></span>
                </dt>
                <dd class=" md:col-span-2 ">
                  -
                </dd>
              </div>
            
            <dt class="text-left  md:col-span-3 ">
              
            </dt>
            <dd class=" md:col-span-2 ">
              
            </dd>
          </dl>
          <p class="mt-2.5 text-right text-xs">
            
              
            
              
            
          </p>
        </div>
        <div class="col-span-14 row-start-3  md:row-start-2 md:col-span-6 md:col-end-last ">
          <div class="relative z-10">
            <input
              class="no-js ml-auto block cursor-pointer border-general border-scheme-text px-5 py-2.5"
              type="submit"
              name="update"
              value=""
              form="cart"
             />
            <div class="push-btn relative inline-block w-full  lg:mt-2.5 ">
              <input
                class="push-btn__surface ml-auto block w-full cursor-pointer"
                type="submit"
                value=""
                form="cart"
               />
            </div>
          </div>

          
            <script>
              const submitBtnEl = document.querySelector(
              );

              if (submitBtnEl) &#123;
                document.documentElement.style.setProperty(
                  \`$&#123;submitBtnEl.getBoundingClientRect().height&#125;px\`
                );
              &#125;
            </script>
              
            </div>
          
        </div>
      </div>
      <div
        class="mt-5 inline-block rounded-button bg-scheme-accent-1 p-2.5 text-sm text-scheme-accent-1-contrast empty:hidden"
        id="cart-errors"
      ></div>
    </div>
  
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
