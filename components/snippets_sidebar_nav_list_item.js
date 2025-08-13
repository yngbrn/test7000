export default function snippets_sidebar_nav_list_item() {
  const html = `

<li
  class="text-lg lg:text-xl"
  style="--first-delay-tap: ;"
>
  
    <data-island
      x-data="
        &#123;
          expanded: truefalse
        &#125;
      "
    >
      <button
        class="font-heading flex w-full flex-row items-center justify-between py-2.5 text-left "
        @click="expanded = ! expanded"
        :aria-expanded="expanded"
      >
        <span></span>
        <div class="ml-auto">
          <span
            class="block h-3 w-3"
            :class="&#123;'rotate-180': expanded&#125;"
          >
            
          </span>
        </div>
      </button>
      <div x-show="expanded" x-collapse>
        <ul class="pb-5 text-base font-main">
          
            
            

            
              <li
                class="my-3 text-base"
                style="--second-delay-tap: ;"
              >
                
                  <data-island
                    x-data="&#123; expanded: false &#125;"
                  >
                    <button
                      class="flex w-full flex-row items-center justify-between "
                      @click="expanded = ! expanded"
                      :aria-expanded="expanded"
                    >
                      <span></span>
                      <div class="ml-auto">
                        <span
                          class="block h-3 w-3"
                          :class="&#123;'rotate-180': expanded&#125;"
                        >
                          
                        </span>
                      </div>
                    </button>
                    <ul x-show="expanded" x-collapse>
                      
                        
                        <li
                          class="mt-3 pl-5 text-base"
                          style="--third-delay-tap: ;"
                        >
                          <a href="">
                            
                          </a>
                        </li>
                      
                    </ul>
                  </data-island>
                
                  <a class="" href="">
                    
                  </a>
                
              </li>
            
              
                  <li class="text-base">
                    
                    
                  </li>
                
              
            
          
        </ul>
        
          <ul class="nav-item mb-5 grid grid-cols-2 gap-5">
            
          </ul>
        
      </div>
    </data-island>
  
    <a
      class="font-heading block py-2.5 "
      href=""
    >
      
    </a>
  
</li>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
