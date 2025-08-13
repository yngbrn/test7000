export default function snippets_recipe_banner() {
  const html = `



<div class="relative z-10 mx-auto max-w-site">
  <div class="card">
    <div class="card__surface p-5 lg:p-10 section-content text_alignment relative z-10 mx-auto">
      <div class="grid grid-flow-row-dense grid-cols-1 gap-6 lg:grid-cols-12">
        
          <div class=" my-auto">
            
          </div>
        
        <div class="lg:flex lg:items-center lg:col-span-12 max-w-2xl mx-auto">
          <div class="text-center  flex w-full flex-col gap-6">
            
              <h1 class="font-heading  heading-style  break-words">
                
              </h1>
            

            <ul class="recipe__meta flex flex-wrap justify-center gap-x-4 gap-y-2.5 lg:gap-x-5 lg:justify-start lg:pr-8lg:justify-center lg:px-4lg:justify-end lg:pl-8">
              
                
                

                
                

                
                  <li class="recipe__icons flex items-center gap-1.5">
                    <span
                      style="--icon-thickness: ;"
                      class="inline-block  rounded-full border-[calc(var(--icon-thickness)_*_1px)]border-0 border-current "
                    >
                      
                    </span>
                    <p class="text-left leading-[1em]">
                      
                    </p>
                  </li>
                
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
