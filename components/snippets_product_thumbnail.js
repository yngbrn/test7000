export default function snippets_product_thumbnail() {
  const html = `
<li
  class="product-thumbnail-list-item product-thumbnail-list-item--active relative splide__slide  pt-media-shadow-halfpb-media-shadow-half lg:pl-media-shadow-halfpr-media-shadow-half"
  data-media-id=""
  :class="&#123; 'product-thumbnail-list-item--active' :  === currentMediaId &#125;"
  
    x-ref="firstThumbnail"
    data-first-thumbnail
  
  
    x-ref="lastThumbnail"
    data-last-thumbnail
  
>
  <a
    role="button"
    class="media-thumbnail block"
    href=""
    @click.prevent="currentMediaId = "
    @keydown.space="currentMediaId = "
    @keydown.enter="currentMediaId = "
  >
    <div class="media--small relative">
      
        <div class="absolute right-1 top-1 z-20 grid h-6 w-6 place-content-center border border-scheme-text border-opacity-5 bg-scheme-card">
          <div class="opacity-70">
            
              
            
              
            
          </div>
        </div>
      

      

      
    </div>
  </a>
</li>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
