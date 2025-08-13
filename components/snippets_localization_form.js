export default function snippets_localization_form() {
  const html = `

  
    <div class="inline-block mr-5 lg:mr-10">
      <h2 class="visually-hidden" id="country-heading-">
        
      </h2>
      <data-island
        x-data="&#123; expanded: false &#125;"
        @keydown.escape.prevent.stop="expanded = false"
        @click.outside="expanded = false"
        class="relative"
        x-init="$watch('expanded', async () => &#123; await $nextTick(); $focus.focus($el.querySelector('[aria-current=true]')); &#125;);"
      >
        <button
          type="button"
          class="secondary-text-link flex items-center py-1 text-sm"
          :aria-expanded="expanded"
          aria-controls="country-list-"
          aria-describedby="country-heading-"
          @click.prevent="expanded = ! expanded"
        >
          <span>
             (
            
            )</span
          >
          <span
            class="chevron-down ml-2 inline-block w-3 fill-current transition-transform duration-150"
            :class="&#123; 'rotate-180' : expanded&#125;"
          >
            
          </span>
        </button>
        <ul
          id="country-list-"
          class="absolute left-0 top-0 z-30 max-h-[60vh] translate-y-[calc(-100%_-_1.25rem)] snap-y snap-mandatory overflow-y-auto bg-scheme-card py-2 [box-shadow:inset_0_0_0_var(--input-border-width)_rgb(var(--color-button-border))] lg:left-auto lg:right-0"
          x-show="expanded"
          style="display: none;"
        >
          
            <li class="w-40 px-2.5 text-sm bg-scheme-text text-scheme-text-contrast">
              <button
                class="break-word p-2 text-left"
                type="button"
                
                  aria-current="true"
                
                @click.prevent="$refs.input.value = ''; $root.closest('form').submit();"
              >
                 (
                )
              </button>
            </li>
          
        </ul>
        <input
          x-ref="input"
          type="hidden"
          name="country_code"
          id="CountrySelector"
          value=""
         />
      </data-island>
    </div>
  
  
    <div class="inline-block">
      <h2 class="visually-hidden" id="lang-heading-">
        
      </h2>
      <data-island
        class="relative"
        x-data="&#123; expanded: false &#125;"
        @keydown.escape.prevent.stop="expanded = false"
        @click.outside="expanded = false"
        x-init="$watch('expanded', async () => &#123; await $nextTick(); $focus.focus($el.querySelector('[aria-current=true]')); &#125;);"
      >
        <button
          type="button"
          class="secondary-text-link flex items-center py-1 text-sm"
          :aria-expanded="expanded"
          aria-controls="lang-list-"
          aria-describedby="lang-heading-"
          @click.prevent="expanded = ! expanded"
        >
          
          <span
            class="chevron-down ml-2 inline-block w-3 fill-current transition-transform duration-150"
            :class="&#123; 'rotate-180' : expanded &#125;"
          >
            
          </span>
        </button>
        <ul
          id="lang-list-"
          class="absolute top-0 max-h-[60vh] translate-y-[calc(-100%_-_1.25rem)] snap-y snap-mandatory overflow-y-auto bg-scheme-card py-2 [box-shadow:inset_0_0_0_var(--input-border-width)_rgb(var(--color-button-border))] lg:left-auto lg:right-0"
          x-show="expanded"
          style="display: none;"
        >
          
            <li class="snap-start px-2.5 text-sm bg-scheme-text text-scheme-text-contrast">
              <button
                class="break-word text-balance p-2 text-left"
                type="button"
                lang=""
                
                  aria-current="true"
                
                @click.prevent="$refs.input.value = ''; $root.closest('form').submit();"
              >
                
              </button>
            </li>
          
        </ul>
        <input
          x-ref="input"
          type="hidden"
          name="locale_code"
          id="LocaleSelector"
          value=""
         />
      </data-island>
    </div>
  
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
