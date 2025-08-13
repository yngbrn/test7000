export default function snippets_feature_text_with_image() {
  const html = `



<div class="block">
  <div class="relative z-20 flex flex-col items-center">
    
      <h2 class="feature-text inline-heading-rte font-heading heading-style break-words   text-center heading-effects ">
        
      </h2>
    

    
      <div class="mx-auto mb-5 mt-5">
        <a href="" class="push-btn inline-block">
          <span class="push-btn__surface"></span>
        </a>
      </div>
    
  </div>
  <div class="image-container mx-auto pt-media-shadowpb-media-shadow mt-5 lg:mt-10">
    
      
      
    
      
    
  </div>

  
      width: %;
    &#125;

    @media (min-width: 990px) &#123;
        width: %;
      &#125;
    &#125;
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
