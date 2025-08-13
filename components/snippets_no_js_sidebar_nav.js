export default function snippets_no_js_sidebar_nav() {
  const html = `<div
  class="sidebar-nav  sidebar-nav--enable-transitions "
>
  <div class="relative flex items-center justify-between pb-5">
    <h2 class="sr-only" class="" tabindex="-1">
      
    </h2>
  </div>
  <ul class="mt-5">
    
      
      
      <li
        class="text-lg lg:text-xl"
        style="--first-delay-tap: ;"
      >
        
          <div
            x-data="
              &#123;
                expanded: truefalse
              &#125;
            "
          >
            <button
              class="font-heading flex w-full flex-row items-center justify-between py-2.5"
              @click="expanded = ! expanded"
              :aria-expanded="expanded"
            >
              <span></span>
              <div class="ml-auto">
                <span class="block h-3 w-3" :class="&#123;'rotate-180': expanded&#125;">
                  
                </span>
              </div>
            </button>
            <div x-show="expanded" x-collapse>
              <ul class="pb-5 text-base font-main">
                
                  
                  

                  
                    <li
                      class="my-3 text-base"
                      style="--second-delay-tap: ;"
                    >
                      
                        <div
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
                                class="my-3 pl-5 text-base"
                                style="--third-delay-tap: ;"
                              >
                                <a href="">
                                  
                                </a>
                              </li>
                            
                          </ul>
                        </div>
                      
                        <a class="" href="">
                          
                        </a>
                      
                    </li>
                  
                    
                      <li>
                        
                        
                      </li>
                    
                    
                  
                
              </ul>
              
                <ul class="nav-item mb-5 grid grid-cols-2 gap-5">
                  
                </ul>
              
            </div>
          </div>
        
          <a class="font-heading block py-2.5" href="">
            
          </a>
        
      </li>
    
  </ul>

  <div class="mt-5 space-y-5">
    
      <nav aria-label="Secondary">
        <ul class="space-y-1.5">
          
            <li>
              <a class="inline-block py-1" href="">
                
              </a>
            </li>
          
        </ul>
      </nav>
    

    
      <ul class="space-y-1.5">
        
          <li>
            <a href="">
              
            </a>
          </li>
          <li>
            
          </li>
        
          <li>
            
          </li>
          <li>
            
          </li>
        
      </ul>
    

    
      
    
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
