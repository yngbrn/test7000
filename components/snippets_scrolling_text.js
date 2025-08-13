export default function snippets_scrolling_text() {
  const html = `


  <div class="flex shrink-0 grow-0 items-center ">
    
      <span class=" heading-effects"></span>
      
        <span class="flex-shrink-0 px-2 text-current">
          <svg class="h-4 w-4 rotate-anim origin-[50%_66.66%]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            
              
                <circle cx="100" cy="100" r="95" fill="currentColor"/>
              
                <path d="M100.5 2L198 99.5L100.5 197L3 99.5L100.5 2Z" fill="currentColor"/>
              
                <path d="M100.5 16L198 184.875H3L100.5 16Z" fill="currentColor"/>
              
                <path d="M43.3846 187.385L100.308 12L157.231 187.385L8 78.9231H192.615" fill="currentColor"/>
              
                <path d="M100.5 3L114.058 58.7724L157.809 21.6208L135.996 74.7109L193.228 70.3708L144.375 100.5L193.228 130.629L135.996 126.289L157.809 179.379L114.058 142.228L100.5 198L86.9419 142.228L43.1909 179.379L65.0044 126.289L7.77197 130.629L56.625 100.5L7.77197 70.3708L65.0044 74.7109L43.1909 21.6208L86.9419 58.7724L100.5 3Z" fill="currentColor"/>
              
                <path d="M172.01 105.408C168.411 103.281 163.994 101.645 159.087 100.5C163.994 99.3549 168.411 97.719 172.01 95.5923C187.388 86.7584 192.623 67.1275 183.789 51.75C174.955 36.3725 155.324 31.1376 139.946 39.9715C136.347 42.0982 132.748 45.0428 129.313 48.6418C130.785 43.8977 131.603 39.1535 131.603 35.0638C131.603 17.396 117.207 3 99.5396 3C81.8718 3 67.4758 17.396 67.4758 35.0638C67.4758 39.1535 68.2938 43.8977 69.7661 48.6418C66.3307 45.0428 62.5681 41.9346 59.1327 39.9715C43.7552 31.1376 24.1243 36.3725 15.2904 51.75C6.45651 67.1275 11.6914 86.7584 27.0689 95.5923C30.6679 97.719 35.0849 99.3549 39.9926 100.5C35.0849 101.645 30.6679 103.281 27.0689 105.408C11.6914 114.242 6.45651 133.872 15.2904 149.25C24.1243 164.628 43.7552 169.862 59.1327 161.029C62.7317 158.902 66.3307 155.957 69.7661 152.358C68.2938 157.102 67.4758 161.846 67.4758 165.936C67.4758 183.604 81.8718 198 99.5396 198C117.207 198 131.603 183.604 131.603 165.936C131.603 161.846 130.785 157.102 129.313 152.358C132.748 155.957 136.511 159.065 139.946 161.029C155.324 169.862 174.955 164.628 183.789 149.25C192.459 133.872 187.224 114.242 172.01 105.408Z" fill="currentColor"/>
            
          </svg>
        </span>
      
        
          <span class="inline-block px-2">&nbsp;</span>
        
      
    
      <span class=" heading-effects"></span>
    
  </div>


<div
  id="scrolling-text-"
  class="scrolling-text overflow-hidden "
>
  
    <a
      href=""
      class="text--text hover:text--accent-1"
    >
  
  <scrolling-items-container class="block">
    <scrolling-items
      style="
        --base-scrolling-items-speed: s;
        --local-scrolling-items-speed-multiplier: 1;
        --scrolling-items-speed: calc(
        var(--base-scrolling-items-speed) * var(--global-scrolling-items-speed-multiplier) *
        var(--local-scrolling-items-speed-multiplier)
        );
        --scrolling-items-direction: ;
      "
      class="block w-max whitespace-nowrap motion-safe:animate-[scrolling-items_var(--scrolling-items-speed)_linear_infinite_var(--scrolling-items-direction)] motion-safe:hover:[animation-play-state:paused]   motion-reduce:px-section-horizontal-spacing motion-reduce:block motion-reduce:-translate-x-1/4 motion-reduce:whitespace-normal motion-reduce:text-center"
    >
      <scrolling-items-surface class="flex flex-nowrap items-center ">
        <scrolling-items-content class="">
          
        </scrolling-items-content>

        <noscript>
          
          <div class="flex flex-nowrap items-center ">
            
              <div class="motion-reduce:hidden ">
                
              </div>
            
          </div>
        </noscript>
      </scrolling-items-surface>
    </scrolling-items>
  </scrolling-items-container>
  
    </a>
  
</div>

<style>
  
  @media (prefers-reduced-motion: no-preference) &#123;
    #scrolling-text- .rotate-anim &#123;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      animation-name: rotate;
      animation-duration: 3s;
    &#125;
  &#125;
  
</style>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
