export default function sections_header() {
  const html = `


  
  
    <h1 class="h1 font-heading ">
  
    <div class="h1 font-heading ">
  
    
      
      <a href="" class="site-header__logo-link inline w-full">
        <div class="logo-image relative">
          <img
            src=""
            srcset="
              
              
              
            "
            alt=""
            width=""
            height=""
            loading="eager"
            
              class="text-transparent transition-opacity"
              :class="&#123; 'opacity-100' : !isStuck, 'opacity-0' : isStuck &#125;"
            
              class="text-transparent"
            
           />
          
            
            <img
              src=""
              srcset="
              
              
              
              "
              alt=""
              width=""
              height=""
              class="absolute inset-0 h-full w-full text-transparent transition-opacity"
              :class="&#123; 'opacity-0' : !isStuck, 'opacity-100' : isStuck &#125;"
              loading="eager"
              x-cloak
             />
          
        </div>
      </a>
    
      <a href="" class="break-word block w-fit md:max-w-full"></a>
    
  
    </h1>
  
    </div>
  



  
    
    
    <a href="" class="push-btn push-btn--pop inline-block push-btn--no-shadow">
      <span class="push-btn__surface "></span>
    </a>
    
  





  <nav role="navigation">
    
      
      <div
        class="pointer-events-none absolute inset-y-0 z-0 bg-[--active-color-scheme-background] text-scheme-text max-lg:hidden"
        x-show="activeWrappedMenuToggleEl"
        :style="
          &#123;
            left: activeWrappedMenuToggleEl ? \`$&#123;activeWrappedMenuToggleEl.getBoundingClientRect().left&#125;px\` : '',
            width: activeWrappedMenuToggleEl ? \`$&#123;activeWrappedMenuToggleEl.getBoundingClientRect().width&#125;px\` : ''
          &#125;
         "
         style="display: none;"
      ></div>
    
    <ul x-ref="navigation" class="-mx-2.5 flex flex-wrap justify-startjustify-center items-center text-base uppercase py-2 gap-2">
      
      <li class="no-js-focus-wrapper relative z-10 flex h-full items-center px-2.5">
        <div class="pt-button-shadowpb-button-shadow">
          
        </div>
      </li>
      
      
        <li
          class="no-js-focus-wrapper inline-block h-full"
          
            :class="&#123;
              'relative': navWrapped
            &#125;"
          
        >
          
          
            <button class="relative h-full items-stretch "
              @click="toggleMenu()"
              x-bind:aria-expanded="menuOpen.menu? true: 'false'"
              aria-controls="menu"
              data-dropdown-parent="menu"
              
                x-effect="if (!navWrapped && menuOpen.menu === true) activeWrappedMenuToggleEl = $el"
                :class="
                  &#123;
                    'text-[--active-color-scheme-text]': menuOpen.menu
                  &#125;
                "
              
              >
                
                  <span x-cloak :class="&#123; 'opacity-100': menuOpen.menu, 'opacity-0': !menuOpen.menu &#125;" class="pointer-events-none absolute inset-0 z-0 bg-scheme-background" data-color-scheme=""></span>
                
              <span class="relative flex h-full items-center text-centertext-left">
                <span class="inline-block pr-1"></span>
                <span class="svg-scale rotate ml-1 mr-1 inline-block h-2 w-2 shrink-0 origin-center transform align-middle transition-transform duration-150" :class="&#123;'rotate-180': menuOpen.menu&#125;"></span>
              </span>
            </button>
            <div class="no-js-focus-container z-100 absolute top-full left-0 py-half-section-vertical-spacing   transform text-centertext-left overflow-hidden overflow-y-auto bg-[--active-color-scheme-background] text-[--active-color-scheme-text]"
              :class="
                &#123;
                  'z-header-dropdown': menuOpen.menu,
                &#125;
              "
              id="menu"
              x-cloak
              x-show="menuOpen.menu"
              
                x-transition:enter="transition ease-in-out duration-200"
                x-transition:enter-start="opacity-0"
                x-transition:enter-end="opacity-100"
                x-transition:leave="transition ease-in-out duration-200"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
              
              data-header-dropdown
              @focusout="focusOut($event, 'menu')"
              @click.away.prevent="menuOpen.menu = false"
              
                :style="&#123;
                  minWidth: activeWrappedMenuToggleEl
                    ? \`max(12rem, $&#123;
                        activeWrappedMenuToggleEl.getBoundingClientRect().width
                      &#125;px)\`
                    : false
                &#125;"
                data-color-scheme=""
              
            >
              

              
                
                  <ul class=" text-centertext-left">
                    
                      
                      
                        <li class="">
                          
                            <h2 class="font-heading mb-2 py-1">
                              <a aria-current="page" class="inline-block py-1" href="" aria-current="page">
                              
                              </a>
                            </h2>
                            <ul class="font-body -mx-5 text-base ">
                              
                                <li>
                                  <a aria-current="page" href="" class="">
                                    
                                  </a>
                                </li>
                              
                            </ul>
                          
                            <a aria-current="page" href="" class="-mx-5 text-base ">
                              
                            </a>
                          
                        </li>
                      
                    

                    
                      
                      
                          
                            
                              
                          
                              
                          
                            <li class="-mt-2 lg:col-span-2 ">
                              
                                
                                
                              
                                <a aria-current="page" href="" class="-mx-5 text-base ">
                                  
                                </a>
                              
                            </li>
                          
                      
                    
                  </ul>
                  
                    
                
              
                
                  <ul class="min-w-full ">
                    
                      
                        <li>
                          
                            <data-island
                              x-data="&#123; expanded: false &#125;"
                            >
                              <button
                                class="font-body flex w-full cursor-pointer items-center justify-between gap-1 text-base"
                                @click="expanded = ! expanded"
                                :aria-expanded="expanded ? true : false"
                                aria-controls=""
                                id="child-menu-button_"
                              >
                                <span></span>
                                <span class="svg-scale rotate ml-1 mr-1 inline-block h-2 w-2 shrink-0 origin-center transform align-middle transition-transform duration-150" :class="&#123;'rotate-180': expanded&#125;"></span>
                              </button>
                              <ul
                                class="font-body flex flex-col text-base"
                                x-show="expanded"
                                x-collapse.duration.150ms
                                x-cloak
                                id=""
                                aria-labelledby="child-menu-button_"
                              >
                                
                                  <li class="mt-3 pl-5">
                                    <a aria-current="page" href="" class="break-words normal-case">
                                      
                                    </a>
                                  </li>
                                
                              </ul>
                            </data-island>
                          
                              <a aria-current="page" href="" class="font-body text-base">
                                
                              </a>
                          
                        </li>
                    
                  </ul>
                
              
            </div>
          
            <a aria-current="page" href="" class="">
              
            </a>
          
        </li>
      
    </ul>
  </nav>





  <form x-ref="searchForm" action="" method="get" role="search"  @submit="onFormSubmit" @click.away.prevent="searchOpen = false">
    <div x-ref="searchFieldComponent" class="relative py-2" @focusout="searchFocusOut">
      <input
        id="header-search"
        type="search"
        name="q"
        value=""
        class="header-search-input font-secondary w-full border-0 bg-transparent py-2 pl-9 shadow-none placeholder:text-scheme-text"
        placeholder=""
        
          aria-expanded="false"
          aria-owns="predictive-search-results-list"
          aria-controls="predictive-search-results-list"
          aria-autocomplete="list"
          autocorrect="off"
          autocomplete="off"
          autocapitalize="off"
          spellcheck="false"
          x-ref="input"
          x-model="rawQuery"
          @input.debounce.300="onChange"
          @focus="onFocus"
        
       />
      <label class="visually-hidden" for="header-search"></label>
      <input type="hidden" name="options[prefix]" value="last" />
      
        <input type="hidden" name="type" value="product,article,page" />
      
      <button class="absolute left-0 top-1/2 flex -translate-y-1/2 transform p-1" aria-label="">
        <span class="inline-block h-6 w-6 shrink-0"></span>
      </button>
      <button x-cloak @click="close()"@click="closeSearch" class="absolute right-0 top-1/2 flex -translate-y-1/2 transform p-1" type="button">
        <span class="visually-hidden"></span>
        <span class="inline-block h-6 w-6 shrink-0"></span>
      </button>
    </div>
    
    <div id="predictiveSearchResults" tabindex="-1" x-cloak class="absolute left-0 right-0 z-40 h-screen text-scheme-text">
      <div
        x-show="resultsOpen"
        class="absolute left-0 right-0 z-50 h-screen bg-scheme-text/75"
        @click="close()"
      ></div>
      <template x-if="loading && !results">
        <div class="relative z-50 bg-scheme-background">
          <div class="mx-auto h-6 w-6 pb-12 pt-12" data-predictive-loading>
            <div class="loading"></div>
          </div>
        </div>
      </template>
      <template x-if="resultsOpen">
        <div x-show="resultsOpen" class="relative z-50 max-h-three-quarters-screen-height scroll-pb-5 overflow-hidden overflow-y-auto bg-scheme-background px-section pb-5 lg:scroll-pb-10 lg:pb-10" x-ref="results">
        </div>
      </template>
    </div>
    <span class="predictive-search-status visually-hidden" role="status" aria-hidden="true"></span>
    
  </form>



<button
  class=" js-enabled -m-1 inline-block p-1 lg:hidden"
  type="button"
  x-bind:aria-expanded="$store.modals.leftDrawer.contents === 'nav'"
  @click="$store.modals.open('nav')"
  data-menu-drawer-toggle>

  <span class="visually-hidden pointer-events-none"></span>
  
  <span class="icon pointer-events-none block">
    <span class="inline-block h-7 w-7 align-middle"></span>
  </span>
  
</button>
<noscript>
  <div class="no-js-focus-wrapper">
    <button
      class="-m-1 inline-block p-1 lg:hidden"
      type="button"
      data-menu-drawer-toggle>
      <span class="visually-hidden"></span>
      
      <span class="icon block">
        <span class="inline-block h-7 w-7 align-middle"></span>
      </span>
      
    </button>

    <div class="no-js-focus-container z-100 absolute top-full left-0 py-section-vertical-spacing px-section transform hidden w-11/12 md:w-7/12 lg:w-5/12 text-centertext-left max-h-three-quarters-screen-height overflow-hidden overflow-y-auto bg-scheme-background text-scheme-text">
      
    </div>
  </div>
</noscript>
<data-island x-data on="idle">
  <div>
    
  </div>
</data-island>



  
    <div class="pointer-events-none relative my-auto align-middle">
      <span class="inline-block h-7 w-7 fill-current align-top">
        
          
        
          
        
        <span class="visually-hidden"> </span>
      </span>
      <span
        x-show="$store.cart_count.count > 0"
        class="absolute -right-2 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-scheme-text text-[0.625rem] tracking-normal text-scheme-background"
        x-text="$store.cart_count.count"
        
          style="display: none;"
        
      >
        
      </span>
      <span class="visually-hidden">
        
          
        
          
        
      </span>
    </div>
  
     (<span  x-text="$store.cart_count.count"></span>)
    <span class="visually-hidden">
      
        
      
        
      
    </span>
  



  
    <button
      class="js-enabled whitespace-nowrap "
      type="button"
      id="CartButton"
      @click.prevent="$store.modals.open('cart')"
      >
      
    </button>
    <noscript>
      <a
        class="whitespace-nowrap "
        href=""
      >
        
      </a>
    </noscript>
  
    <a
      class="whitespace-nowrap "
      href=""
    >
      
    </a>
  




  
    
      <a class="" href="">
        <span class="visually-hidden"></span>
        
        <span class="inline-block h-7 w-7 align-middle"></span>
      
      </a>
    
      <a class="" href="">
        <span class="visually-hidden"></span>
        
        <span class="inline-block h-7 w-7 align-middle"></span>
        
      </a>
    
  


<data-island
  class="
    site-header w-full text-scheme-text
    
      absolute top-0 left-0 right-0 z-20 border-b-section bg-scheme-background/0
      
        border-transparent
      
        border-section-border
      
    
      relative bg-scheme-background text-scheme-text border-b-section border-section-border
    
    transition-[background-color,border-color] duration-200 ease-in-out
    
      lg:w-auto
    
  "
  role="banner"
  x-data="Header()"
  data-color-scheme=""
  
    
      :data-color-scheme="headerIsActive ? '' : isStuck ? '' : ''"
    
      :data-color-scheme="headerIsActive ? '' : ''"
    
  
    
      :data-color-scheme="isStuck ? '' : ''"
    
  
  
    data-sticky-header
    
      :class="
        &#123;
          'header-is-active bg-scheme-background' : headerIsActive,
          'bg-scheme-background': isStuck,
          'bg-scheme-background/0': !isStuck && !headerIsActive,
        &#125;
      "
    
      :class="
        &#123;
          'header-is-active' : headerIsActive,
          
            'bg-scheme-background' : headerIsActive,
            'bg-scheme-background/0' : !headerIsActive,
            'hover:bg-scheme-background' : !headerIsActive && isStuck,
          
        &#125;
      "
    
  
    :class="
      &#123;
        'header-is-active' : headerIsActive,
          
            'bg-scheme-background' : headerIsActive,
            'bg-scheme-background/0': !headerIsActive,
          
      &#125;
    "
  
  style="
    --active-color-scheme-text: rgb(var(--color-scheme--text));
    --active-color-scheme-background: rgb(var(--color-scheme--background));
  "
>
  <div id="headerBorderWrap" class="headerBorderWrap">
    <div
      id="headerContainer"
      class="z-10"
    >
      <div
        class="overflow-hidden px-section py-2 lg:py-0"
      >
        
        <div class="flex items-center justify-items-center gap-x-3 lg:gap-x-5">
          
          <div class="">
            
              <div class="z-10 flex items-center"></div>
            
            
              <div class="w-auto">
                
              </div>
            
            
              <div class="hidden lg:block">
                
              </div>
            
          </div>

          
          <div class=" text-center">
            
              
            
              
            
          </div>

          
          <div
            class=" flex flex-wrap items-center justify-end gap-x-3"
            data-utility-links
          >
            
              <div class="lg:hidden">
                
              </div>
            

            <div class="hidden h-full lg:block">
              
            </div>

            
              <a
                data-open-search
                x-ref="search"
                @click.prevent="openSearch"
                @keydown.space="openSearch"
                href=""
                class="hidden lg:block "
              >
                
                  <span class="inline-block h-7 w-7 fill-current align-middle">
                    
                  </span>
                
                <span class="visually-hidden">
                  
                </span>
                
                  <span></span>
                
              </a>
              <div
                class="absolute bottom-0 left-0 right-0 top-0 z-20 flex  items-center bg-[--active-color-scheme-background] text-scheme-text"
                x-cloak
                x-show="searchOpen"
                x-transition:enter="transition ease-in-out duration-200"
                x-transition:enter-start="opacity-0"
                x-transition:enter-end="opacity-100"
                x-transition:leave="transition ease-in-out duration-200"
                x-transition:leave-start="opacity-100"
                x-transition:leave-end="opacity-0"
                @click.away.prevent="searchOpen = false"
                data-header-search
              >
                <data-island
                  class="w-full"
                  
                    x-data="PredictiveSearch('')"
                    @keyup="onKeyup"
                    @keydown="onKeydown"
                    @click.outside.prevent="close()"
                    @keyup.escape.prevent.stop="close(false)"
                    @focusin.window="( searchOpen && ! $root.contains($event.target) ) && close()"
                    x-trap.inert.noscroll="searchOpen"
                  
                  on="idle"
                >
                  
                </data-island>
              </div>
            

            <div class="flex h-full items-center justify-end">
              
            </div>

            
              <div class="relative z-10 ml-5 hidden items-center py-2.5py-2 lg:flex">
                <div class="pt-button-shadowpb-button-shadow">
                  
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</data-island>
<noscript>
  <style>
    html.no-js .no-js-focus-wrapper:focus-within > .no-js-focus-container &#123;
      display: block !important;
    &#125;
  </style>
</noscript>

  
        position: sticky;
        top: 0;
        z-index: 40;
      &#125;
    </style>
  


  <style>
    .logo-image &#123;
      max-width: px;
    &#125;
  </style>


  <script>
    document
      .classList.add('has-no-height');
  </script>
  <style>
      padding-top: rem;
    &#125;

    @media (min-width: 990px) &#123;
        padding-top: rem;
      &#125;
    &#125;
  </style>




<script type="application/ld+json">
  &#123;
    "@context": "http://schema.org",
    "@type": "Organization",
    "name": ,
    
      
      "logo": ,
    
    "sameAs": [
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      
    ],
    "url": 
  &#125;
</script>


  
  <script type="application/ld+json">
    &#123;
      "@context": "http://schema.org",
      "@type": "WebSite",
      "name": ,
      "potentialAction": &#123;
        "@type": "SearchAction",
        "target": ,
        "query-input": "required name=search_term_string"
      &#125;,
      "url": 
    &#125;
  </script>



&#123;
  "name": "t:sections.header.name",
  "class": "section-site-header relative z-40",
  "settings": [
    &#123;
      "type": "header",
      "content": "t:common.settings.logo.label"
    &#125;,
    &#123;
      "type": "image_picker",
      "id": "logo",
      "label": "t:common.settings.logo.label",
      "info": "t:common.settings.logo.info"
    &#125;,
    &#123;
      "type": "range",
      "id": "logo_max_width",
      "min": 20,
      "max": 400,
      "step": 10,
      "unit": "px",
      "label": "t:common.settings.logo_max_width.label",
      "default": 100
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.header.settings.header_menu"
    &#125;,
    &#123;
      "type": "link_list",
      "id": "main_linklist",
      "label": "t:sections.header.settings.main_linklist.label",
      "default": "main-menu"
    &#125;,
    &#123;
      "type": "select",
      "id": "nested_nav_style",
      "label": "t:sections.header.settings.nested_nav_style.label",
      "options": [
        &#123;
          "value": "mega_menu",
          "label": "t:sections.header.settings.nested_nav_style.options.mega_menu.label"
        &#125;,
        &#123;
          "value": "dropdown",
          "label": "t:sections.header.settings.nested_nav_style.options.dropdown.label"
        &#125;
      ],
      "default": "mega_menu"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.header.settings.nested_nav_style.options.mega_menu.label"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "showcase_top_level_collections",
      "label": "t:sections.header.settings.showcase_top_level_collections.label",
      "info": "t:sections.header.settings.showcase_top_level_collections.info"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_all_navigation_links",
      "label": "t:sections.header.settings.show_all_navigation_links.label",
      "info": "t:sections.header.settings.show_all_navigation_links.info"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "showcase_second_level_links",
      "label": "t:sections.header.settings.showcase_second_level_links.label",
      "info": "t:sections.header.settings.showcase_second_level_links.info"
    &#125;,
    &#123;
      "type": "select",
      "id": "crop",
      "label": "t:sections.header.settings.crop.label",
      "options": [
        &#123;
          "value": "",
          "label": "t:common.options.no_crop.label"
        &#125;,
        &#123;
          "value": "aspect-w-4 aspect-h-3",
          "label": "t:common.options.landscape.label"
        &#125;,
        &#123;
          "value": "aspect-w-1 aspect-h-1",
          "label": "t:common.options.square.label"
        &#125;,
        &#123;
          "value": "aspect-w-3 aspect-h-4",
          "label": "t:common.options.portrait.label"
        &#125;
      ],
      "default": "aspect-w-1 aspect-h-1"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_layout"
    &#125;,
    &#123;
      "type": "select",
      "id": "header_layout",
      "label": "t:sections.header.settings.header_layout.label",
      "options": [
        &#123;
          "value": "menu_icon_logo_center",
          "label": "t:sections.header.settings.header_layout.options.menu_icon_left_logo_center.label"
        &#125;,
        &#123;
          "value": "navigation_left_logo_center",
          "label": "t:sections.header.settings.header_layout.options.navigation_left_logo_center.label"
        &#125;,
        &#123;
          "value": "logo_left_navigation_center",
          "label": "t:sections.header.settings.header_layout.options.logo_left_navigation_center.label"
        &#125;
      ],
      "default": "navigation_left_logo_center"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "header_show_search",
      "label": "t:sections.header.settings.header_show_search.label"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "sticky_header",
      "label": "t:sections.header.settings.sticky_header.label"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "show_icons",
      "label": "t:sections.header.settings.show_icons.label"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.header.settings.header_overlay_settings"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "enable_overlay_on_homepage",
      "label": "t:sections.header.settings.enable_overlay_on_homepage.label",
      "default": false
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "enable_overlay_on_collection_pages",
      "label": "t:sections.header.settings.enable_overlay_on_collection_pages.label",
      "default": false
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "enable_overlay_on_product_pages",
      "label": "t:sections.header.settings.enable_overlay_on_product_pages.label",
      "default": false
    &#125;,
    &#123;
      "type": "image_picker",
      "id": "overlay_logo",
      "label": "t:sections.header.settings.overlay_logo.label",
      "info": "t:sections.header.settings.overlay_logo.info"
    &#125;,
    &#123;
      "type": "color_scheme",
      "id": "overlay_color_scheme",
      "default": "scheme1",
      "label": "t:sections.header.settings.overlay_color_scheme.label"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "transparent_when_overlaid_and_stuck",
      "label": "t:sections.header.settings.transparent_when_overlaid_and_stuck.label",
      "default": true
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "overlay_show_separator_border",
      "label": "t:sections.header.settings.overlay_show_separator_border.label",
      "info": "t:sections.header.settings.overlay_show_separator_border.info"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.header.settings.header_overlay_compensation",
      "info": "Adjust the padding above the first section when overlay header is enabled."
    &#125;,
    &#123;
      "type": "range",
      "id": "overlay_first_section_padding_top_desktop",
      "label": "t:sections.header.settings.overlay_first_section_padding_top_desktop.label",
      "min": 0,
      "max": 10,
      "step": 1,
      "unit": "rem",
      "default": 3
    &#125;,
    &#123;
      "type": "range",
      "id": "overlay_first_section_padding_top_mobile",
      "label": "t:sections.header.settings.overlay_first_section_padding_top_mobile.label",
      "min": 0,
      "max": 10,
      "step": 1,
      "unit": "rem",
      "default": 3
    &#125;,
    &#123;
      "type": "header",
      "content": "t:common.settings.header_color"
    &#125;,
    &#123;
      "type": "color_scheme",
      "id": "color_scheme",
      "default": "scheme1",
      "label": "t:common.settings.color_scheme.label"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.header.settings.header_active_color_scheme"
    &#125;,
    &#123;
      "type": "paragraph",
      "content": "t:sections.header.settings.paragraph_active_color_scheme"
    &#125;,
    &#123;
      "type": "color_scheme",
      "id": "active_color_scheme",
      "default": "scheme1",
      "label": "t:common.settings.color_scheme.label"
    &#125;,
    &#123;
      "type": "header",
      "content": "t:sections.header.settings.header_sidebar_menu"
    &#125;,
    &#123;
      "type": "link_list",
      "id": "mobile_main_linklist",
      "label": "t:sections.header.settings.mobile_main_linklist.label",
      "info": "t:sections.header.settings.mobile_main_linklist.info"
    &#125;,
    &#123;
      "type": "select",
      "id": "sidebar_menu_font_size",
      "label": "t:common.settings.font_size.label",
      "options": [
        &#123;
          "value": "heading-secondary",
          "label": "t:sections.feature_text_columns.settings.heading_size.options.secondary.label"
        &#125;,
        &#123;
          "value": "heading-standard",
          "label": "t:common.options.standard.label"
        &#125;,
        &#123;
          "value": "heading-feature",
          "label": "t:common.options.feature.label"
        &#125;
      ],
      "default": "heading-secondary"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "sidebar_show_footer_menu",
      "label": "t:sections.header.settings.sidebar_show_footer_menu.label"
    &#125;,
    &#123;
      "type": "checkbox",
      "id": "sidebar_show_social_icons",
      "label": "t:sections.header.settings.sidebar_show_social_icons.label"
    &#125;
  ],
  "blocks": [
    &#123;
      "type": "feature_desktop_link",
      "limit": 1,
      "name": "t:sections.header.blocks.feature_desktop_link.name",
      "settings": [
        &#123;
          "type": "url",
          "id": "button_link",
          "label": "t:common.settings.button_link.label"
        &#125;,
        &#123;
          "type": "text",
          "id": "button_label",
          "label": "t:common.settings.button_label.label",
          "default": "Shop Now"
        &#125;,
        &#123;
          "type": "select",
          "id": "position",
          "label": "t:sections.header.blocks.feature_desktop_link.settings.position.label",
          "options": [
            &#123;
              "value": "first_item_in_navigation",
              "label": "t:sections.header.blocks.feature_desktop_link.settings.position.options.first_item_in_navigation.label"
            &#125;,
            &#123;
              "value": "right_of_cart",
            &#125;
          ],
          "default": "first_item_in_navigation"
        &#125;,
        &#123;
          "type": "select",
          "id": "button_color",
          "label": "t:common.settings.color.label",
          "options": [
            &#123;
              "value": "",
              "label": "t:common.options.default.label"
            &#125;,
            &#123;
              "value": "bg-scheme-text text-scheme-text-contrast",
              "label": "t:common.options.text.label"
            &#125;,
            &#123;
              "value": "bg-scheme-accent-1 text-scheme-accent-1-contrast",
              "label": "t:common.options.accent_1.label"
            &#125;,
            &#123;
              "value": "bg-scheme-accent-2 text-scheme-accent-2-contrast",
              "label": "t:common.options.accent_2.label"
            &#125;
          ],
          "default": ""
        &#125;,
        &#123;
          "type": "checkbox",
          "id": "hide_button_shadow",
          "label": "t:sections.header.blocks.feature_desktop_link.settings.hide_button_shadow.label"
        &#125;
      ]
    &#125;
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
