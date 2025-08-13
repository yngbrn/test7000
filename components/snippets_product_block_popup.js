export default function snippets_product_block_popup() {
  const html = `<data-island
  class=""
  x-data
  data-color-scheme=""
  x-init="
    $store.modals.register('product-popup--', 'popup');
    initTeleport($root);
  "
>
  <div class="js-enabled" >
    <button
      @click.prevent="$store.modals.open('product-popup--')"
      aria-haspopup="dialog"
      class="product-popup font-body cursor-pointer inline-flex justify-start items-center"
    >
      
        <span class="pointer-events-none mr-2 inline-block h-8 w-8">
          
        </span>
      
      <span class="secondary-text-link py-0.5 text-sm ">
        
      </span>
    </button>
  </div>
  <noscript>
    <a
      href=""
      class="inline-flex justify-start items-center"
    >
      
        <span class="mr-2 inline-block h-8 w-8">
          
        </span>
      
      <span class="secondary-text-link py-1 ">
        
      </span>
    </a>
  </noscript>
  <div x-cloak>
    <template data-should-teleport="#popup-slot">
      <template x-if="$store.modals.popup.contents === 'product-popup--'">
        <div
          data-modal-label=""
        >
          <div class="sticky top-0">
            <button
              @click.prevent="$store.modals.close('popup')"
              type="button"
              class="absolute right-2 top-2 ml-auto block w-8 p-1"
            >
              <span class="visually-hidden">
                
              </span>
              <span class="inline-block h-6 w-6">
                
              </span>
            </button>
          </div>
          <div class="p-4 lg:p-8">
            <h2 class="font-heading text-2xl">
              
            </h2>
            <data-island x-data="RTE" class="rte mt-8">
              
            </data-island>
          </div>
        </div>
      </template>
    </template>
  </div>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
