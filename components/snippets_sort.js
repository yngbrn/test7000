export default function snippets_sort() {
  const html = `<template data-should-teleport="#right-drawer-slot">
  <div
    :data-modal-label="$store.modals.rightDrawer.contents === 'sort' ? '' : false"
    x-show="$store.modals.rightDrawer.contents === 'sort'"
    class="sidebar-filters  px-section"
  >
    <div class="flex flex-auto flex-col">
      <div class="">
        <div class="relative flex items-center justify-between pb-2.5 pt-5">
          <h1
            class="font-heading  heading-standard heading-style full_shadow"
            class=""
            tabindex="-1"
          >
            
          </h1>
          <button
            @click.prevent="$store.modals.close('sort')"
            class="top-0 block"
          >
            <span class="sr-only">
              
            </span>
            <span class="inline-block h-5 w-5"></span>
          </button>
        </div>
        <div class="border-t-genereal flex flex-auto flex-col overflow-hidden border-scheme-text pt-5">
          
            <div class="custom-radio mb-2 flex justify-start">
              <input
                type="radio"
                class="sr-only absolute"
                name="sort_by"
                form="Facet-Filters-Form"
                value=""
                
                  checked
                
                id="Sort-"
               />
              <label
                for="Sort-"
                class="flex  cursor-pointer items-center"
              >
                <span class="custom-radio__input"></span>
                <span>
                  <span class="mr-1"></span>
                </span>
              </label>
            </div>
          
        </div>
      </div>
      <div class="my-5">
        <button
          class="push-btn z-0 w-full"
          form="Facet-Filters-Form"
          type="submit"
          @click.prevent="filterFormSubmit($event, 'sort')"
        >
          <span class="push-btn__surface w-full">
            
          </span>
        </button>
      </div>
    </div>
  </div>
</template>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
