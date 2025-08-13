export default function snippets_pagination() {
  const html = `


  <div class="mt-10">
    <nav
      class="pagination relative grid grid-cols-12"
      role="navigation"
      aria-label=""
    >
      <div class="relative z-10 col-span-2 text-left">
        
          <a
            href=""
            class="pagination__item push-btn mr-auto inline-block"
            aria-label=""
          >
            <span class="push-btn__surface push-btn__surface--secondary p-2 align-bottom">
              <span class="block h-5 w-5"></span>
            </span>
          </a>
        
      </div>
      <div class="col-span-8">
        <ul
          class="pagination__list absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center"
          role="list"
        >
          
            <li class="mx-2">
              
                <a
                  href=""
                  class="pagination__item secondary-text-link inline-block lg:px-1"
                  aria-label=""
                >
                  
                </a>
              
                
                  <span
                    class="pagination__item theme-underline inline-block lg:px-1"
                    aria-current="page"
                    aria-label=""
                  >
                    
                  </span>
                
                  <span class="pagination__item inline-block  lg:px-1">
                    
                  </span>
                
              
            </li>
          
        </ul>
      </div>
      <div class="relative z-10 col-span-2 text-right">
        
          <a
            href=""
            class="pagination__item push-btn ml-auto inline-block"
            aria-label=""
          >
            <span class="push-btn__surface push-btn__surface--secondary p-2 align-bottom">
              <span class="block h-5 w-5"></span>
            </span>
          </a>
        
      </div>
    </nav>
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
