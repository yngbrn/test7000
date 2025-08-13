export default function snippets_collection_banner() {
  const html = `


  
  <div class="pt-half-section-vertical-spacing max-w-site px-section mx-auto w-full">
    <div class="">
      <div class=" object-wrapper ">
        
      </div>
    </div>
  </div>


<div class="section-content relative z-10 mx-auto max-w-site px-section py-section-vertical-spacing">
  <div class="card mx-auto">
    <div class="card__surface p-5 lg:p-10 break-words">
      
        <h1 class="font-heading heading-feature  heading-style text-center ">
          
        </h1>
      
      
        <div class="mt-5 rte mx-auto max-w-xl text-center text-rte">
          
        </div>
      
      
        <div class="relative mt-5 py-2">
          <nav role="navigation">
            <ul class="flex flex-wrap justify-center gap-2.5">
              
                <li class="inline-block">
                  
                    <a
                      class="btn bg-scheme-text text-sm text-scheme-text-contrast after:hidden lg:text-base"
                      href=""
                      aria-current="page"
                    >
                      
                    </a>
                  
                    <a
                      class="btn bg-scheme-secondary-background text-sm text-scheme-text  after:hidden lg:text-base"
                      href=""
                    >
                      
                    </a>
                  
                </li>
              
            </ul>
          </nav>
        </div>
      
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
