export default function snippets_image_with_text_overlay() {
  const html = `

<div class="relative z-10 h-full lg:bg-transparent">
  
    <a href="" class="absolute inset-0 z-20"></a>
  

  <div class="lg:h-full max-w-site px-5 lg:px-10 mx-auto">
    <div class="  media media--css-only h-full w-full">
      
        
        
          <div class="hidden lg:block">
            
          </div>
        
          
        
        
          <div class="lg:hidden">
            
          </div>
        
      
        <div class=" absolute inset-0">
          
        </div>
      
    </div>
  </div>
  <div
    class="px-section py-section-vertical-spacing empty:hidden  z-10  text-scheme-text   max-w-site mx-auto"
  >
    
    
      
        
        <div
          class="mx-auto w-full"
          style="max-width: %"
          role="complementary"
        >
          
        </div>
      
        <div
          class="mx-auto w-full"
          style="max-width: %"
          role="complementary"
        >
          
        </div>
      
    
      
        <h2 class="inline-heading-rte font-heading  heading-style ">
          
        </h2>
      
      
        <div class="inline-rte  mt-5">
          
        </div>
      
    

    
      <div class="relative z-10 mt-5">
        <a class="push-btn inline-block" href="">
          <span class="push-btn__surface"></span>
        </a>
      </div>
    
  

    
      <div class="flex w-full flex-col items-center gap-5 ">
        
      </div>
    
      
        <div class="flex   hidden lg:hidden">
          
            <div class="lg:hidden  ">
              <div class="break-words  ">
                
              </div>
            </div>
          

          <div
            class="hidden lg:block     text-scheme-text"
          >
            <div class="break-words ">
              
            </div>
            
              <div class=""></div>
            
          </div>
        </div>
      
    
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
