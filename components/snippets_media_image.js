export default function snippets_media_image() {
  const html = `


  <div class="media media--css-only media- media--disable-styles  object-wrapper ">
    
      
    
  </div>

  <div class="media media- media--shape">
    <div class="media__shape-container">
      
        Image shape
      
      <div
        class="media__shape-wrapper"
        style="clip-path:url(#clip-)"
      >
        
          
        
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


  <style>
    .media- &#123;
      transform: rotate(deg);
    &#125;
  </style>



  
    .media- &#123;
      width: vw;
    &#125;

    @media (min-width: 990px) &#123;
      .media- &#123;
        width: vw;
      &#125;
    &#125;
  
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
