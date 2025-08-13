export default function snippets_vertical_video_embeds() {
  const html = `


<a href="" class="push-btn inline-block">
  <span class="push-btn__surface"></span>
</a>

<div
  id="slideshow--"
  class="section-content-top-margin splide"
  style="--desktop-slide-width: px;"
>
  <div class="splide__track">
    <ul class="splide__list">
      
        <li
          class="splide__slide  lg:w-[var(--desktop-slide-width)]"
          
        >
          

          
            
              
                
                <div
                  class="relative"
                  style="padding-bottom: %;"
                >
                  <iframe
                    class="absolute inset-0 h-full w-full"
                    width="315"
                    height="560"
                    src="https://www.youtube.com/embed/"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    
                      loading="lazy"
                    
                  ></iframe>
                </div>
              
                <data-island
                  x-data="TikTokEmbed('')"
                  class="relative [&>*]:!m-0"
                  
                    on="before:visible"
                  
                    on="load"
                  
                ></data-island>
              
                
                <div
                  class="relative"
                >
                  <blockquote
                    class="instagram-media"
                    data-instgrm-captioned
                    data-instgrm-permalink="https://www.instagram.com/reel/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                    style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"
                  ></blockquote>
                  
                    
                    
                    
                  
                    <data-island
                      x-data="AsyncScriptLoader"
                      on="before:visible"
                    >
                      <template x-ref="scripts">
                        
                        
                        
                      </template>
                    </data-island>
                  
                </div>
              
                <div
                  class="vertical-embed-wrapper relative"
                  style="padding-bottom: %;"
                >
                  
                </div>
            
          
            <div
              class="relative"
              style="padding-bottom: %;"
            >
              <data-island
                class="absolute inset-0 h-full w-full"
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
                  class="h-full w-full object-cover"
                >
                  <source
                    src="/assets/placeholder-video.mp4"
                    type="video/mp4"
                  >
                  Your browser does not support the video tag.
                </video>
              </data-island>
            </div>
          
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
          "type": "loop",
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
      .vertical-embed-wrapper > blockquote,
      .vertical-embed-wrapper > div,
      .vertical-embed-wrapper > iframe &#123;
        margin: 0 !important;
        width: 100% !important;
        height: 100% !important;
        position: absolute !important;
        inset: 0 !important;
        margin: 0 !important;
        min-width: 100% !important;
        max-width: 100% !important;
      &#125;

      .vertical-embed-wrapper iframe &#123;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        width: 100% !important;
        height: 100% !important;
        border: 0 !important;
      &#125;
    </style>
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
