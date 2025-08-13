export default function snippets_product_tile_media_image() {
  const html = `


  <div class="media media--css-only media- media--disable-styles ">
    <div class="media__styled-element ">
      
      
        <div
          class="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 will-change-[opacity] group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 motion-reduce:transition-none"
        >
          
        </div>
      
      
        
          
            <div
              :class="&#123; 'opacity-100 pointer-events-auto' : currentMediaId === , 'opacity-0 pointer-events-none' : currentMediaId !==  &#125;"
              class="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 will-change-[opacity] motion-reduce:transition-none"
            >
              
            </div>
          
        
      
    </div>
  </div>

  <div class="media media- media--shape">
    <div class="media__shape-container">
      
        Image shape
      
      <div
        class="media__shape-wrapper"
        style="clip-path:url(#clip-)"
      >
        

        
          <div
            class="pointer-events-none absolute inset-0 z-10 h-full w-full opacity-0 transition-opacity duration-300 will-change-[opacity] group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 motion-reduce:transition-none"
          >
            
          </div>
        

        
          
            
              <div
                :class="&#123; 'opacity-100 pointer-events-auto' : currentMediaId === , 'opacity-0 pointer-events-none' : currentMediaId !==  &#125;"
                class="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 will-change-[opacity] motion-reduce:transition-none"
              >
                
              </div>
            
          
        
      </div>

      
        Image shape outline
      
      <svg
        class="media__svg absolute inset-0 will-change-transform"
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
            class="media__svg media__drop-shadow  media__drop-shadow--shape will-change-transform"
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
            class="media__svg media__drop-shadow-stroke will-change-transform"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <use class="media__drop-shadow-stroke-path"  href="#outline-" />
          </svg>
        
      </div>
    
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
