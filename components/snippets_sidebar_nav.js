export default function snippets_sidebar_nav() {
  const html = `
<template x-teleport="#left-drawer-slot">
  <div
    :data-modal-label="$store.modals.leftDrawer.contents === 'nav' ? '' : false"
    x-show="$store.modals.leftDrawer.contents === 'nav'"
    class="sidebar-nav px-section py-5  sidebar-nav--enable-transitions "
  >
    <div class="relative flex items-center justify-between pb-5">
      <h2 class="sr-only" class="" tabindex="-1">
        
      </h2>
      <button @click.prevent="$store.modals.close('nav')" class="top-0 block">
        <span class="sr-only">
          
        </span>
        <span class="inline-block h-5 w-5"></span>
      </button>
    </div>
    <ul class="mt-5">
      
    </ul>

    <div class="mt-5 space-y-5">
      
        <nav aria-label="Secondary">
          <ul class="space-y-1.5">
            
              <li>
                <a class="inline-block py-1" href="">
                  
                </a>
              </li>
            
          </ul>
        </nav>
      

      
        <ul class="space-y-1.5">
          
            <li>
              <a href="">
                
              </a>
            </li>
            <li>
              
            </li>
          
            <li>
              
            </li>
            <li>
              
            </li>
          
        </ul>
      

      
        <form
          class="relative mx-auto mt-10 block max-w-2xl"
          action="/search"
          method="get"
          role="search"
        >
          <label for="Search" class="visually-hidden">
            
          </label>
          <input
            type="search"
            name="q"
            id="Search"
            class="input w-full pr-12 placeholder-current"
            value=""
            placeholder=""
           />
          <button
            class="absolute right-2 top-1/2 flex -translate-y-1/2 transform p-1"
            type="submit"
            class="button"
          >
            <span class="inline-block h-5 w-5 shrink-0">
              
            </span>
            <span class="visually-hidden">
              
            </span>
          </button>
        </form>
      

      
        
      
    </div>
  </div>
</template>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
