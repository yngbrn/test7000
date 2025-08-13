export default function snippets_collection_focus_carousel() {
  const html = `




  
  <li
    class="splide__slide  lg:w-[var(--desktop-slide-width)]"
    
    aria-describedby="Section--CaptionContainer-label-"
    
  >
    
    <div
      data-slide-scale-container
      class="scale-100scale-[0.8] transition-transform"
    >
      
    </div>
  </li>
  
  

  
    
    <div
      :class="&#123; 'invisible': slideIndex !==  &#125;"
      aria-hidden="slideIndex !==  ? 'true' : false"
      data-slide-highlight-text
      class="relative col-start-1 row-start-1 text-center invisible"
      id="Section--CaptionContainer-label-"
    >
      
        
      
      
        
        
          
        
      
      <a href="" class="absolute inset-0"></a>

      
        
        <data-island
          class="contents"
          x-data="
            FocusedQuickBuy(&#123;
              product: ,
              variant: ,
              isPreOrder: 
            &#125;)
          "
          src="/assets/island-focused-quick-buy.bundle.js"
          data-product-root="-"
        >
          <div class="relative z-20 mt-5 max-w-xs mx-auto">
            
              <input type="hidden" name="id" value="" />

              <div
                class="font-secondary mb-2.5 rounded-button bg-scheme-accent-1 px-3 py-2 text-xs text-scheme-accent-1-contrast empty:hidden"
                x-text="cartAddErrorMessage"
              ></div>

              <div class="relative z-10 text-center cursor-not-allowed pt-button-shadowpb-button-shadow">
                <button
                  class="push-btn btn text-sm lg:text-base after:hidden bg-scheme-secondary-background text-scheme-text  w-full disabled:opacity-40 cursor-not-allowed"
                  type="submit"
                  disabled="disabled"
                >
                  <span
                    class="push-btn__surface w-full"
                    x-text="addToCartText"
                  >
                    
                      
                    
                      
                    
                  </span>
                  <span class="visually-hidden">, </span>
                </button>
              </div>

              
                <div
                  class=" rte mt-2.5 text-center text-sm"
                  tabindex="-1"
                >
                  <div class="text-sm">
                    !
                    
                    .
                  </div>
                </div>
              
            
          </div>
        </data-island>
      
    </div>
    
    
  


  
    
    <li class="splide__slide  lg:w-[var(--desktop-slide-width)]">
      <div
        data-slide-scale-container
        class="scale-100scale-[0.8] transition-transform"
      >
        
        
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
  <div class="splide__track splide__track--focus-carousel overflow-visible  with-top-card-shadowwith-bottom-card-shadow">
    <ul
      class="splide__list items-center py-4"
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
