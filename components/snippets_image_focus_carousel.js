export default function snippets_image_focus_carousel() {
  const html = `


  

  
  <li
    class="splide__slide  lg:w-[var(--desktop-slide-width)]"
    aria-describedby="Section--CaptionContainer-label-"
    
  >
    
    <div
      data-slide-scale-container
      class="relative scale-100scale-[0.8] transition-transform"
    >
      
        <div class="relative pt-media-shadowpb-media-shadow">
          
          
            <a href="" class="absolute inset-0 z-10"></a>
          
        </div>
      
        <div class="relative pt-media-shadowpb-media-shadow">
          <div class="relative w-full">
            
          </div>
        </div>
      
    </div>
  </li>
  
  

  
    
    <div
      :class="&#123; 'invisible': slideIndex !==  &#125;"
      aria-hidden="slideIndex !==  ? 'true' : false"
      data-slide-highlight-text
      class="relative col-start-1 row-start-1 text-center invisible"
      id="Section--CaptionContainer-label-"
    >
      
        < class="font-heading heading-secondary break-words">
          
        </>
      
      
        <div class="inline-rte mt-2.5">
          
        </div>
      
      
        <a href="" class="absolute inset-0 z-10"></a>
      
      
        <div class="relative z-10 mt-5">
          <a
            href=""
            class="push-btn inline-block"
          >
            <span class="push-btn__surface">
              
            </span>
          </a>
        </div>
      
    </div>
    
    
  


  
    
    <li class="splide__slide  lg:w-[var(--desktop-slide-width)]">
      <div
        data-slide-scale-container
        class="scale-100scale-[0.8] transition-transform"
      >
        <div class="relative w-full">
          
        </div>
      </div>
    </li>
    
    

    
      
      <div
        :class="&#123; 'invisible': slideIndex !==  &#125;"
        aria-hidden="slideIndex !==  ? 'true' : false"
        data-slide-highlight-text
        class="relative col-start-1 row-start-1 text-center invisible"
      >
        
      </div>
      
      
    
  


<data-island
  x-data="FocusCarousel('slideshow--')"
  role="banner"
  id="slideshow--"
  class="section-content-top-margin splide"
  data-focus-carousel
  
    data-enlarge-active-slide
  
  style="--desktop-slide-width: %;"
>
  <div class="splide__track pt-card-shadowpb-card-shadow">
    <ul
      class="splide__list items-center"
    >
      
    </ul>
  </div>
  <div class="splide__arrows items-top mt-5 px-section">
    <div class="grid gap-5 lg:gap-0  lg:grid-cols-[1fr_var(--desktop-slide-width)_1fr] ">
      
        <div
          class="flex flex-col lg:col-start-2"
        >
          <div
            id="Section--CaptionContainer"
            class="mx-auto  lg:mx-0 lg:max-w-full"
            :class="
              &#123;
                'opacity-100 transition-opacity duration-200': !isTransitioning,
                'opacity-0  transition-opacity duration-200': isTransitioning
              &#125;
            "
          >
            <div class="grid">
              
            </div>
          </div>
        </div>
      
      <div class="flex justify-end">
        
      </div>
    </div>
  </div>
  <script class="slideshow-options" type="application/json">
    &#123;
      "mediaQuery": "min",
      "arrows": true,
      "pagination": false,
      "rewind": true,
      "autoWidth": true,
      "gap": "1.25rem",
      "focus": "center",
      "type": "loop",
      "speed": 500,
      "autoScroll": &#123;
        "autoStart": falsetrue,
        "speed": 0
      &#125;,
      "padding": &#123;
        "left": "1.25rem",
        "right": "1.25rem"
      &#125;,
      "breakpoints": &#123;
        "990": &#123;
          "gap": "2.5rem",
          "padding": &#123;
            "left": "2.5rem",
            "right": "2.5rem"
          &#125;
        &#125;
      &#125;
    &#125;
  </script>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
