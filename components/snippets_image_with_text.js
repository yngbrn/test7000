export default function snippets_image_with_text() {
  const html = `




<div class="relative z-10 mx-auto max-w-site px-section">
  <div class="card">
    <div class="card__surface p-5 lg:p-10 section-content text_alignment relative z-10 mx-auto">
      <div class="grid grid-flow-row-dense grid-cols-1 gap-10 lg:grid-cols-12">
        <div class="">
          
            
          
            
          
        </div>
        <div class="flex items-center ">
          <div class=" w-full">
            
              <h2 class="inline-heading-rte font-heading   heading-style  break-words">
                
              </h2>
            

            <div class="rte mt-5 max-w-2xl mx-automl-auto">
              
            </div>

            
              <div class="mt-5">
                <a href="" class="push-btn inline-block">
                  <span class="push-btn__surface"></span>
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
