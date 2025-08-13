export default function snippets_video_with_text_overlay() {
  const html = `

<data-island
  id="video-"
  x-data="Video('inline', 'autoplay')"
  class="relative z-10 h-full lg:bg-transparent"
  x-intersect:enter.margin.25%.0px.75%.0px="play"
  x-intersect:leave.margin.25%.0px.75%.0px="pause"
  on="before:visible"
>
  
    <a href="" class="absolute inset-0 z-20"></a>
  

  <div class="lg:h-full max-w-site px-5 lg:px-10 mx-autobg-scheme-text/80">
    <div
      class=" media media--css-only relative banner-section-content--h"
      
        style="--custom-aspect-h: "
      
    >
      <data-island
        class="contents"
        x-data="HTMLVideo"
        @play="play"
        @pause="pause"
        on="before:visible"
      >
        
          
        
          <video
            x-ref="video"
            autoplay
            playsinline
            muted
            class=""
          >
            <source
              src="/assets/placeholder-video.mp4"
              type="video/mp4"
            >
            Your browser does not support the video tag.
          </video>
        
      </data-island>
    </div>
  </div>
  <div
    class="px-section py-section-vertical-spacing  z-20  text-scheme-text   max-w-site mx-auto"
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
      
    
      
        <h2 class="inline-heading-rte font-heading   heading-style ">
          
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
    
      <div class="flex  ">
        
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
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
