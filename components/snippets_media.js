export default function snippets_media() {
  const html = `
<div
  class="pt-media-shadowpb-media-shadow"
  
    @media-visible.camel="!isUsingSlideshowToDisplayMedia && scrollToTopOf($el)"
  
  data-product-single-media-wrapper=""
>
  
    
      
      <div class="media media--css-only">
        <data-island
          x-data="Video('inline', 'autoplay')"
          id="video--"
          class="media-style relative w-full overflow-hidden"
          style="padding-top: %;"
          x-intersect:leave="pause"
        >
          <template x-if="enabled">
            <div
              class="media__styled-element absolute inset-0 h-full w-full bg-scheme-card transition-opacity duration-500"
              :class="&#123; 'opacity-0 pointer-events-none' : !shown &#125;"
            >
              
              
                
                  <div
                    class="contents"
                    x-data="HTMLVideo"
                    @play="play"
                    @pause="pause"
                  >
                    
                  </div>
                
                  
                  
                    
                      
                      <data-island
                        class="contents"
                        x-data="YouTubeEmbed"
                        @play="play"
                        @pause="pause"
                        src="/assets/island-youtube-embed.bundle.js"
                      >
                        
                      </data-island>
                    
                      <data-island
                        class="contents"
                        x-data="VimeoEmbed"
                        @play="play"
                        @pause="pause"
                        src="/assets/island-vimeo-embed.bundle.js"
                      >
                        
                      </data-island>
                  
              
            </div>
          </template>
          <div
            class="media__styled-element group absolute inset-0 cursor-pointer transition-opacity duration-300"
            :class="&#123; 'opacity-0 pointer-events-none' : shown &#125;"
            @click="enabled = true"
          >
            <div class="absolute inset-0 h-full w-full">
              
            </div>
            <div class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 group-hover:opacity-30">
              <div class="h-full w-full bg-scheme-background"></div>
            </div>
            <button class="absolute inset-0 grid h-full w-full place-content-center">
              <span class="sr-only"></span>
              <div class="relative z-10">
                <div class="push-btn">
                  <div class="push-btn__surface p-2 align-bottom">
                    <div class="p-2.5">
                      <div class="h-10 w-10">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </data-island>
      </div>
    
      <div class="media media--css-only">
        <data-island
          x-data="ProductModel"
          class="media__styled-element relative w-full"
          style="padding-top: 100%;"
          src="product-model"
        >
          
        </data-island>

        <link
          id="ModelViewerStyle"
          rel="stylesheet"
          media="print"
          onload="this.media='all'"
        >
        
      </div>
    
      
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
