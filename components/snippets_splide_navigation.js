export default function snippets_splide_navigation() {
  const html = `<div class="controls relative z-10 ml-auto pt-button-shadowpb-button-shadow">
  <div class="flex gap-2">
    <button class="splide__arrow splide__arrow--prev push-btn">
      <span class="sr-only"></span>
      <span class="push-btn__surface p-2 align-bottom">
        <span class="block h-5 w-5"></span>
      </span>
    </button>
    
      <button
        class="splide__toggle push-btn"
        type="button"
        aria-label=""
        data-play=""
        data-pause=""
      >
        <span class="push-btn__surface p-2 align-bottom">
          <span class="splide__toggle__pause">
            <span class=" block h-5 w-5"></span>
          </span>
          <span class="splide__toggle__play">
            <span class="block h-5 w-5"></span>
          </span>
        </span>
      </button>
    
    <button class="splide__arrow splide__arrow--next push-btn">
      <span class="sr-only"></span>
      <span class="push-btn__surface p-2 align-bottom">
        <span class="block h-5 w-5"></span>
      </span>
    </button>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
