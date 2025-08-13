export default function snippets_drawer_cart() {
  const html = `<data-island
  x-data="ModalCart(&#123;openOnAddToCart: &#125;)"
  x-cloak
  x-init="initTeleport($root);"
  on="idle"
>
  <div>
    <template data-should-teleport="#right-drawer-slot">
      <div
        x-show="$store.modals.rightDrawer.contents === 'cart'"
        class="flex h-screen max-h-full flex-col overflow-hidden"
        :data-modal-label="$store.modals.rightDrawer.contents === 'cart'? '' : false"
        data-cart-drawer
      >
        <div class="relative flex items-center justify-between px-section pb-2.5 pt-5">
          <h2 class="font-heading text-base lg:text-xl" tabindex="-1">
            
            <span class="sr-only">
              -
              <span x-text="$store.cart_count.countWithText"></span>
            </span>
          </h2>
          <button
            @click.prevent="$store.modals.close('cart')"
            class="top-0 block"
          >
            <span class="sr-only">
              
            </span>
            <span class="inline-block h-5 w-5"></span>
          </button>
        </div>
        <div class="flex flex-auto flex-col overflow-hidden">
          
          <div class="relative  px-section pb-safe-bottom pt-5">
            <div
              class="pointer-events-none absolute left-0 right-0 top-0 h-16 w-full -translate-y-full bg-gradient-to-t from-scheme-background to-scheme-background-0"
            ></div>
            
          </div>
        </div>
      </div>
    </template>
  </div>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
