export default function snippets_block_sticker() {
  const html = `

<svg width="0" height="0" viewBox="0 0 200 200">
  <defs>
    <clipPath id="clip-" clipPathUnits="objectBoundingBox">
      <path clip-rule="evenodd" transform="scale(0.005,0.005)" d="" fill="black"/>
    </clipPath>
    <path id="outline-" vector-effect="non-scaling-stroke"  d="" />
  </defs>
</svg>
<div
  class="sticker pointer-events-none absolute z-sticker max-lg:hidden lg:hidden"
  id="sticker-"
  data-color-scheme=""
>
  <div class="sticker__translate-container" >
    <div
      class="sticker__parallax-container"
      data-sticker
      
        data-parallax-container
        data-parallax-speed=""
        data-parallax-id=""
      
    >
      <div
        class="sticker__parallax-element"
        
          data-parallax-element
        
      >
        <div class="sticker__rotate-container sticker-rotate-when-scrolling constantly-rotate">
          
            
            <div class="sticker__image rotate-anim">
              
            </div>
          
            
              <div class="sticker__fit-to-text   whitespace-nowrap">
                
              </div>
            
              <div class="sticker__container rotate-anim relative">
                <div
                  class="absolute inset-0 "
                  style="clip-path: url(#clip-)"
                >
                  <div
                    id="sticker-text-"
                    class="sticker__text absolute inset-0 flex items-center justify-center text-center "
                  >
                    <div></div>
                  </div>
                </div>
                <svg
                  class="sticker__width-container relative max-w-none "
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <use class="sticker__svg fill-transparent" href="#outline-" />
                </svg>
                
                  
                    <div class="sticker__svg sticker__drop-shadow">
                      <div
                        class="aspect-h-1 aspect-w-1 absolute h-full w-full bg-scheme-gradient"
                        style="clip-path: url(#clip-)"
                      ></div>
                    </div>
                    <svg
                      class="sticker__svg sticker__drop-shadow"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      
                      <use class="sticker__drop-shadow-border-only"  href="#outline-" />
                      
                    </svg>
                  
                    <svg
                      class="sticker__svg sticker__drop-shadow"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <use class="sticker__drop-shadow-path"  href="#outline-" />
                    </svg>
                  
                
              </div>
            
          
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  
    #sticker- &#123;
      --block-width: ;
    &#125;

    @media (min-width: 990px) &#123;
      #sticker- &#123;
        --block-width: ;
      &#125;
    &#125;
  
    #sticker- &#123;
      --block-width: ;
    &#125;
  

  #sticker- &#123;
    top: %;
    left: %;
  &#125;

  #sticker- .sticker__translate-container &#123;
    transform: translate(-50%, -50%);
  &#125;

  #sticker- .sticker__rotate-container &#123;
    transform: rotate(deg);
  &#125;

  #sticker-text-,
  #sticker- .sticker__fit-to-text  &#123;
    --adjusted-sticker-font-size: calc( * 1.5);
    font-size: calc(var(--adjusted-sticker-font-size) * var(--block-width) / 300);
    line-height: 1;
  &#125;

  #sticker-text- &#123;
    padding: calc(2rem * var(--block-width) / 300);
  &#125;

  #sticker- .sticker__width-container &#123;
    width: calc(var(--block-width) * 1px);
  &#125;
</style>


  
    
  
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
