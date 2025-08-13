export default function snippets_filters() {
  const html = `<template data-should-teleport="#left-drawer-slot">
  <div
    :data-modal-label="$store.modals.leftDrawer.contents === 'filters' ? '' : false"
    x-show="$store.modals.leftDrawer.contents === 'filters'"
    class="sidebar-filters px-section "
  >
    
    <div class="relative flex w-full items-center justify-between border-b-general border-scheme-text pb-2.5 pt-5">
      <h1
        class="font-heading  heading-standard heading-style full_shadow"
        class=""
        tabindex="-1"
      >
        
      </h1>
      <button
        @click.prevent="$store.modals.close('filters')"
        class="top-0 block"
      >
        <span class="sr-only">
          
        </span>
        <span class="inline-block h-5 w-5"></span>
      </button>
    </div>
    
      <aside>
        <nav>
          <ul class="mb-5 mt-5">
            
              <li class="mb-2.5">
                <a class="pb-1" href="">
                  
                </a>
              </li>
            
          </ul>
        </nav>
      </aside>
    
    <form
      class="flex flex-auto flex-col"
      id="Facet-Filters-Form"
      @submit.prevent="filterFormSubmit"
    >
      
        <input type="hidden" name="q" value="" />
        <input name="options[prefix]" type="hidden" value="last" />
      
        <input
          type="hidden"
          name="q"
          value=""
         />
      
      <div class="-mx-5 flex-auto overflow-y-auto px-5 py-5">
        
          
          <div
            class="mb-4"
            x-data="&#123; expanded:  &#125;"
          >
            <button
              type="button"
              class="flex w-full items-center py-2 text-left text-base font-main"
              :aria-expanded="expanded"
              @click="expanded = ! expanded"
              aria-controls="accordion"
            >
              
              
                <span class="ml-1"> ()</span>
              
              <span
                class="svg-scale rotate ml-auto inline-block w-4 origin-center transform align-middle transition"
                :class="&#123;'rotate-180': expanded &#125;"
              >
                
              </span>
            </button>
            <div
              id="accordion"
              x-show="expanded"
              x-collapse
            >
              <div class="">
                
                  
                    
                      <div class="-ml-0.5 mt-2.5 grid grid-cols-5 gap-1">
                        
                          <div class="variant-input relative inline-block">
                            <input
                              type="checkbox"
                              class="color-swatch absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                              name=""
                              value=""
                              id="Filter---mobile"
                              
                                checked
                              
                              
                                disabled
                              
                             />
                            <label
                              for="Filter---mobile"
                              class="relative block min-w-4 cursor-pointer capitalize flex items-center line-throughhover:text--accent-1"
                              
                                disabled
                              
                            >
                              
                                <span
                                  class="absolute bottom-0 left-0 top-0 z-10 h-0.5 w-full bg--text top-1/2 -translate-y-1/2 -rotate-45 transform"
                                ></span>
                              
                              
                                
                                  
                                  
                                  background-position: ; background-image: url(); background-color: rgb();
                                
                                  
                                  background-image: url(); background-position: ;
                                
                              
                              <span class="color-swatch-input block w-full border-input border-scheme-text">
                                <span
                                  class="block w-full bg-cover"
                                  style="padding-top: 100%; "
                                >
                                </span>
                              </span>
                              <span class="sr-only">
                                
                              </span>
                            </label>
                          </div>
                        
                      </div>
                    
                      <div class="-ml-0.5 mt-2.5 grid grid-cols-5 gap-1">
                        
                          
                          <div class="variant-input relative inline-block">
                            <input
                              type="checkbox"
                              class="color-swatch absolute left-0 top-0 h-full w-full cursor-pointer opacity-0"
                              name=""
                              value=""
                              id="Filter---mobile"
                              
                                checked
                              
                              
                                disabled
                              
                             />
                            <label
                              for="Filter---mobile"
                              class="relative block min-w-4 cursor-pointer p-0.5 capitalize flex items-center line-throughhover:text--accent-1"
                              
                                disabled
                              
                            >
                              
                                <span
                                  class="absolute bottom-0 left-0 top-0 z-10 h-0.5 w-full bg--text top-1/2 -translate-y-1/2 -rotate-45 transform"
                                ></span>
                              
                              <span class="color-swatch-input block w-full border-input border-scheme-text">
                                <span
                                  class="block w-full bg-cover"
                                  style="
                                    padding-top: 100%;
                                    background-image: url();
                                    background-color: ;
                                  "
                                >
                                </span>
                              </span>
                              <span class="sr-only">
                                
                              </span>
                            </label>
                          </div>
                        
                      </div>
                    
                      <ul class="mt-2.5">
                        
                          <li class="custom-checkbox mt-2 flex items-center justify-start">
                            <input
                              type="checkbox"
                              class="sr-only absolute"
                              name=""
                              value=""
                              id="Filter---mobile"
                              
                                checked
                              
                              
                                disabled
                              
                             />
                            <label
                              for="Filter---mobile"
                              class="cursor-pointer uppercasecapitalize flex items-center text--meta line-throughhover:text--accent-1"
                              
                                disabled
                              
                            >
                              <span class="custom-checkbox__input"></span>
                              
                              
                                <span class="ml-1 inline-block"
                                  >()</span
                                >
                              
                            </label>
                          </li>
                        
                      </ul>
                    
                  
                    
                    <div class="mt-2.5 flex max-w-[20rem] items-center justify-start">
                      <div class="filter-group-display__price-range-from flex grow items-center justify-center">
                        <span class="pr-1"></span>
                        <div class="relative w-full">
                          <input
                            name=""
                            class="input w-full placeholder:text-scheme-text"
                            id="Filter--GTE-mobile"
                            
                              
                                value=""
                              
                                value=""
                              
                            
                            type="number"
                            placeholder=""
                            min="0"
                            max=""
                           />
                          <label
                            class="field__label sr-only"
                            for="Filter--GTE-mobile"
                          >
                            
                          </label>
                        </div>
                      </div>
                      <div class="px-2">&ndash;</div>
                      <div class="filter-group-display__price-range-to  flex grow items-center justify-center">
                        <span class="pr-1"></span>
                        <div class="relative w-full">
                          <input
                            name=""
                            class="input w-full placeholder:text-scheme-text"
                            id="Filter--LTE-mobile"
                            
                              
                                value=""
                              
                                value=""
                              
                            
                            type="number"
                            placeholder=""
                            min="0"
                            max=""
                           />
                          <label
                            class="field__label sr-only"
                            for="Filter--LTE-mobile"
                          >
                            
                          </label>
                        </div>
                      </div>
                    </div>
                
              </div>
            </div>
          </div>
        
      </div>
      <div class="my-5 grid grid-cols-2 gap-5">
        <button
          class="push-btn z-0 w-full"
          type="submit"
          @click.prevent="filterFormSubmit($event, 'filters')"
        >
          <span class="push-btn__surface w-full">
            
          </span>
        </button>
        
          <a
            class="push-btn z-0 inline-block w-full"
            href=""
            @click.prevent="clearAllFilters(event)"
          >
            <span class="push-btn__surface w-full">
              
            </span>
          </a>
        
      </div>
    </form>
  </div>
</template>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
