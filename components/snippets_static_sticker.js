export default function snippets_static_sticker() {
  const html = `<div class="sticker- pointer-events-none absolute z-20 origin-top-left will-change-transform">
  
    <div class="sticker sticker--fit-to-test  whitespace-nowrap">
      
    </div>
  
    <div class="sticker__container rotate-anim relative">
      <div class="relative max-w-none">
        <div
          class="absolute inset-0 "
          style="clip-path: url(#clip-)"
        >
          <div class="sticker__text sticker-text- absolute inset-0 flex items-center justify-center text-center ">
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
<style>
  .sticker- &#123;
    top: %;
    left: %;
    transform: rotate(deg) translate(-50%, -50%);
  &#125;

  .sticker- img,
  .sticker- svg,
  .sticker- .sticker-text-container &#123;
    width: calc( * 0.75px);

    @media (min-width: 640px) &#123;
      width: px;
    &#125;
  &#125;

  .sticker-text- &#123;
    padding: calc(2rem *  / 300);
  &#125;

  .sticker-text-,
  .sticker- .sticker__fit-to-text  &#123;
    --adjusted-sticker-font-size: calc( * 1.5);
    font-size: calc(var(--adjusted-sticker-font-size) *  / 300);
    line-height: 1;
  &#125;
</style>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
