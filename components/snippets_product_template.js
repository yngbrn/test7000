export default function snippets_product_template() {
  const html = `

<style>
    --max-possible-width: min(var(--max-site-width), 100vw);
    --column-width: calc((var(--max-possible-width) - (var(--section-x-padding) * 2)  - var(--grid-gap)*11) / 12);
    --media-width: calc((var(--column-width) * ) + (var(--grid-gap) * ));
    --media-column-width: calc((var(--media-width) - (calc(var(--grid-gap)/2)*11)) / 12);
    --feature-media-width: calc((var(--media-width) - (var(--media-column-width)*2) - (calc(var(--grid-gap)/2)*2)));
    --largest-media-aspect-ratio: ;
    --thumbnails-height:  calc(var(--feature-media-width) / var(--largest-media-aspect-ratio));
  &#125;
</style>

<data-island
  class="relative overflow-hidden bg-scheme-background text-scheme-text bg-scheme-gradient"
  data-color-scheme=""
  role="banner"
  x-data="
    Product(&#123;
      product: ,
      variant: ,
      featuredMediaID: ,
      template: ,
      thumbnailsPosition: ,
      showThumbnailsOnMobile: ,
      isPreOrder: 
    &#125;)
  "
  src="product"
  data-product-root=""
>
  <div class="section-content relative z-10 mx-auto max-w-site py-section-vertical-spacing lg:px-section">
    
      <h2 class="inline-heading-rte font-heading heading-standard  heading-style break-words text-center ">
        
      </h2>
    

    <div class="section-content-top-margin">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div class="product-media col-span-full ">
          
          
          
            
            <div class="px-section lg:px-0">
              <div
                
                  data-product-media-type-image data-product-image-index="0"
                  
                
              >
                <div
                  
                    class="cursor-zoom-in"
                    @click.prevent="openZoom('')"
                    @keyup.space.prevent="openZoom('')"
                    @keyup.enter.prevent="openZoom('')"
                    tabindex="0" role="button"
                  
                >
                  
                    <a href="">
                  
                  
                  
                    </a>
                  
                </div>
              </div>
            </div>
          
            <div>
              <div class="relative grid grid-cols-1 gap-5 lg:grid-cols-12">
                <div class="col-span-2col-span-3col-span-full hidden lg:block">
                  
                  

                  
                    <div class="thumbnails-container">
                      <data-island
                        id="slideshow-thumbnails-"
                        class="splide splide--thumbnails"
                        x-data="ProductThumbnails"
                      >
                        <div class="splide__track h-full">
                          <div
                            class="thumbnails-overflow-indicator-top pointer-events-none absolute left-0 right-0 top-0 z-[2] h-24 w-full bg-gradient-to-b from-scheme-background to-scheme-background-0 transition-opacity duration-150"
                            :class="&#123; 'opacity-0' : firstVisible &#125;"
                          ></div>
                  
                  <ul class="w-full splide__list h-fullgrid grid-cols-5grid-cols-4  gap-2.5">
                    
                      
                    
                  </ul>
                  
                    <div
                      class="thumbnails-overflow-indicator-bottom pointer-events-none absolute bottom-0 left-0 right-0 z-[2] h-24 w-full bg-gradient-to-t from-scheme-background to-scheme-background-0 transition-opacity duration-150"
                      :class="&#123; 'opacity-0' : lastVisible &#125;"
                    ></div>
                    </div>
                    </data-island>
                    </div>
                  
                </div>

                <div class="lg:col-span-10 lg:col-start-3lg:col-span-9 lg:col-start-4row-start-1 col-span-full min-w-[0]">
                  <div
                    id="slideshow-"
                    data-drag-disabled=""
                    data-first-media=""
                    
                      data-thumbnails="slideshow-thumbnails-"
                    
                    
                      data-two-slides-visible-on-mobile
                    
                  >
                    <div class="splide__track">
                      <ul
                        class="feature-media-list splide__list w-full lg:relative lg:grid"
                        role="list"
                      >
                        
                          
                          <li
                            class="feature-media-item block  max-lg:[.splide:not(.is-active)_&]:hidden lg:hidden   splide__slide px-section lg:w-full lg:px-0"
                            data-media-id=""
                            x-transition.opacity.duration.200ms
                            x-show="isMaxLgBreakpoint || currentMediaId === "
                            
                              :class="&#123; 'lg:hidden' : false &#125;"
                            
                            
                              data-product-media-type-image
                              data-product-image-index=""
                              
                            
                          >
                            <div
                              
                                @click.prevent="openZoom('')"
                                @keyup.space.prevent="openZoom('')"
                                @keyup.enter.prevent="openZoom('')"
                                class="cursor-zoom-in"
                                tabindex="0" role="button"
                              
                            >
                              
                            </div>
                          </li>
                        
                      </ul>
                    </div>
                    
                    
                    
                    
                    
                      <div class="mt-2.5 px-section lg:mb-0">
                        <button
                          aria-label=""
                          class="push-btn w-full"
                        >
                          <span class="push-btn__surface inline-block w-full">
                            <span class="-mt-0.5 inline-block w-6 align-middle">
                              
                            </span>
                            <span class="text-sm">
                              
                            </span>
                          </span>
                        </button>
                      </div>
                    
                    <div class="splide__arrows mt-4 flex items-center justify-end gap-2 px-section lg:hidden">
                      
                    </div>
                    
                      <div class="splide__arrows mt-4 hidden items-center justify-end gap-2 text-right lg:block">
                        <div class="controls relative z-10 ml-auto inline-block pt-button-shadowpb-button-shadow">
                          <div class="flex gap-2">
                            <button
                              class="push-btn"
                              @click="changeMedia('prev')"
                              @keydown.space="changeMedia('prev')"
                              @keydown.left.prevent="changeMedia('prev')"
                              @keydown.enter="changeMedia('prev')"
                            >
                              <span class="sr-only">
                                
                              </span>
                              <span class="push-btn__surface p-2 align-bottom">
                                <span class="block h-5 w-5">
                                  
                                </span>
                              </span>
                            </button>
                            <button
                              class="push-btn"
                              @click="changeMedia('next')"
                              @keydown.space="changeMedia('next')"
                              @keydown.right.prevent="changeMedia('next')"
                              @keydown.enter="changeMedia('next')"
                            >
                              <span class="sr-only">
                                
                              </span>
                              <span class="push-btn__surface p-2 align-bottom">
                                <span class="block h-5 w-5">
                                  
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    

                    
                      
                      
                      <div class="px-section">
                        <ul class="mt-4 grid w-full lg:hidden grid-cols-5grid-cols-4 gap-2.5">
                          
                            
                          
                        </ul>
                      </div>
                    
                  </div>
                </div>
              </div>
            </div>
          
        </div>

        <div class="product-content col-span-full  px-section lg:px-0 ">
          <div class="product-block-container w-full max-w-full xl:grid xl:grid-cols-12">
            <div class="relative xl:col-span-10 xl:col-start-2">
              

              
                
                
                  <div class=" pt-card-shadowpb-card-shadow">
                    <div class="card">
                      <div class="card__surface p-5">
                        ||__card-content__||
                      </div>
                    </div>
                  </div>
                

                
                  
                    
                  
                

                
                  
                    
                  
                    <div
                      class=" break-words"
                      
                    >
                      
                      
                        
                      
                      
                        <a href="">
                      
                      < class="font-heading heading-feature ">
                        
                      </>
                      
                        </a>
                      
                    </div>
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    

                    
                    <div
                      class=" text-sm"
                      
                    >
                      
                        <div class="related-products">
                          
                            <h2 class="font-heading break-word heading-secondary mb-5">
                              
                            </h2>
                          
                          <ul class="mt-5 grid  gap-5">
                            
                              
                                
                              
                                
                              
                            
                          </ul>
                        </div>
                      
                        ?section_id=&product_id=&limit=&intent=complementary
                        <data-island
                          class="related-products"
                          x-data
                          x-html="
                            $fetchedFragment(
                              '',
                              '.related-products',
                              
                                null,
                                true
                              
                            )
                          "
                          on="idle"
                        ></data-island>
                      
                    </div>
                  
                    <div
                      class=""
                      
                    >
                      
                    </div>
                  
                    <div
                      class=""
                      
                    >
                      
                    </div>
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                  
                    
                

                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</data-island>




  
  <script>
    window.ProductModel = &#123;
          &#123;
            version: '1.0',
          &#125;,
        ]);
      &#125;,

        if (errors) return;

          );
          return;
        &#125;

        document.querySelectorAll('[id^="ModelJson-"]').forEach((modelJSON) => &#123;
          modelJSON.remove();
        &#125;);
      &#125;,
    &#125;;

    window.addEventListener('DOMContentLoaded', () => &#123;
        document
          .forEach((element) => element.classList.add('hidden'));
      &#125;
    &#125;);
  </script>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
