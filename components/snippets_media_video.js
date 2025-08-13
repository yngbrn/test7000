export default function snippets_media_video() {
  const html = `

  <div
    class="media media--css-only media- media--disable-styles  object-wrapper "
    
      style="--tw-aspect-h: ;"
    
  >
    
      
        
          
        
          
          
        
        <div class="absolute inset-0 z-10 grid h-full w-full place-content-center">
          <span class="sr-only"></span>
          <div class="push-btn">
            <div class="push-btn__surface p-2 align-bottom">
              <div class="p-2.5">
                <div class="relative h-10 w-10">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
        <button
          x-data
          class="relative h-full w-full cursor-pointer"
          type="button"
          title=", "
          @click="$store.modals.open('')"
        >
          
        </button>
      
        <data-island
          id="video-"
          x-data="Video('inline')"
          class="contents"
          x-intersect:leave="pause"
        >
          <button
            class="relative h-full w-full cursor-pointer"
            type="button"
            title=", "
            @click="enabled = true"
          >
            
          </button>
          <template x-if="enabled">
            <div
              class="contents"
              x-data="HTMLVideo"
              @play="play"
              @pause="pause"
            >
              
                
              
                <video
                  x-ref="video"
                  
                    controls
                  
                  
                    loop
                  
                  
                    muted
                  
                  autoplay
                  playsinline
                  class=""
                >
                  <source
                    src="/assets/placeholder-video.mp4"
                    type="video/mp4"
                  >
                  Your browser does not support the video tag.
                </video>
              
            </div>
          </template>
        </data-island>
      
    
      <data-island
        id="video-"
        x-data="Video('inline', 'autoplay')"
        class="contents"
        x-intersect:leave="pause"
        x-intersect:enter="play"
      >
        <data-island
          class="contents"
          x-data="HTMLVideo"
          @play="play"
          @pause="pause"
        >
          
            
          
            <video
              x-ref="video"
              
                controls
              
              
                loop
              
              
                muted
              
              autoplay
              playsinline
              class=""
            >
              <source
                src="/assets/placeholder-video.mp4"
                type="video/mp4"
              >
              Your browser does not support the video tag.
            </video>
          
        </data-island>
      </data-island>
    
  </div>

  <div
    class="media media- media--shape"
  >
    <div class="media__shape-container">
      
        Image shape
      
      <div
        class="media__shape-wrapper z-10"
        style="clip-path:url(#clip-)"
      >
        
          
            
              
            
              
              
            
            <div class="absolute inset-0 z-10 grid h-full w-full place-content-center">
              <span class="sr-only"></span>
              <div class="push-btn">
                <div class="push-btn__surface p-2 align-bottom">
                  <div class="p-2.5">
                    <div class="relative h-10 w-10">
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          
            <button
              x-data
              class="relative h-full w-full cursor-pointer"
              type="button"
              title=", "
              @click="$store.modals.open('')"
            >
              
            </button>
          
            <data-island
              id="video-"
              x-data="Video('inline')"
              class="contents"
              x-intersect:leave="pause"
            >
              <button
                class="relative h-full w-full cursor-pointer"
                type="button"
                title=", "
                @click="enabled = true"
              >
                
              </button>
              <template x-if="enabled">
                <div
                  class="contents"
                  x-data="HTMLVideo"
                  @play="play"
                  @pause="pause"
                >
                  
                    
                  
                    <video
                      x-ref="video"
                      
                        controls
                      
                      
                        loop
                      
                      
                        muted
                      
                      autoplay
                      playsinline
                      class=""
                    >
                      <source
                        src="/assets/placeholder-video.mp4"
                        type="video/mp4"
                      >
                      Your browser does not support the video tag.
                    </video>
                  
                </div>
              </template>
            </data-island>
          
        
          <data-island
            id="video-"
            x-data="Video('inline', 'autoplay')"
            class="contents"
            x-intersect:leave="pause"
            x-intersect:enter="play"
          >
            <data-island
              class="contents"
              x-data="HTMLVideo"
              @play="play"
              @pause="pause"
            >
              
                
              
                <video
                  x-ref="video"
                  
                    controls
                  
                  
                    loop
                  
                  
                    muted
                  
                  autoplay
                  playsinline
                  class=""
                >
                  <source
                    src="/assets/placeholder-video.mp4"
                    type="video/mp4"
                  >
                  Your browser does not support the video tag.
                </video>
              
            </data-island>
          </data-island>
        
      </div>

      
        Image shape outline
      
      <svg
        class="media__svg absolute inset-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        
          <use style="fill: none;" href="#outline-" />
        
      </svg>
    </div>

    
      Drop shadow and border
    
    
      <div class="media__drop-shadow-container">
        
          <svg
            class="media__svg media__drop-shadow  media__drop-shadow--shape"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <use class="media__drop-shadow-fill stroke-none"  href="#outline-" />
          </svg>
        
          <div class="media__svg media__drop-shadow media__drop-shadow--shape">
            <div
              class="absolute inset-0 bg-scheme-gradient"
              style="clip-path:url(#clip-)"
            ></div>
          </div>
        

        
          <svg
            class="media__svg media__drop-shadow-stroke"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <use class="media__drop-shadow-stroke-path"  href="#outline-" />
          </svg>
        
      </div>
    
  </div>


  <style>
    .media- &#123;
      transform: rotate(deg);
    &#125;
  </style>


`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
