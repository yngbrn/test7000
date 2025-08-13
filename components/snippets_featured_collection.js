export default function snippets_featured_collection() {
  const html = `




<a href="" class="push-btn inline-block">
  <span class="push-btn__surface"></span>
</a>

<div
  
    id="slideshow--"
  
  class="section-content-top-margin splide"
>
  <div class="splide__track overflow-visible splide__track--scattered with-top-card-shadowwith-bottom-card-shadow">
    <ul class="splide__list grid gap-theme grid-cols-2grid-cols-1 ">
      
        <li class="splide__slide ">
          
          
        </li>
      
        
          <li class="splide__slide ">
            
            
          </li>
        
      
    </ul>
  </div>
  
    <div class="splide__arrows mt-5 flex items-center justify-between px-section">
      
        <div>
          
            
          
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
        "focus": ,
        "type": "loop",
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
    <style>
      @media (min-width: 990px) &#123;
        #slideshow-- .splide__slide &#123;
          width: %;
        &#125;
      &#125;
    </style>
  
</div>


  
    <div class="mt-5 text-center lg:mt-10">
      
    </div>
  
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
