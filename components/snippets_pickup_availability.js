export default function snippets_pickup_availability() {
  const html = `


  
  <div class="pickup-availability">
    <div class="pickup-availability-preview">
      <div class="my-8 grid grid-cols-[auto_minmax(min-content,_1fr)] grid-rows-[auto_auto] items-center gap-x-1">
        <div class="size-4">
          
        </div>
        <h2 class="text-sm">
          
        </h2>
        <div class="col-start-2 mt-0.5 text-xs empty:hidden">
          
        </div>
        <button
          type="button"
          @click="$store.modals.open('pickup-availability-')"
          aria-haspopup="dialog"
          class="col-start-2 mt-2mt-3 w-fit text-xs text-scheme-text"
        >
          
        </button>
      </div>
    </div>

    <div class="pickup-availability-drawer" x-cloak>
      <data-island
        x-data="
          &#123;
              existingDrawerContents: document.getElementById('pickup-availability-drawer-contents-')
          &#125;
        "
        x-init="
          
            initTeleport($root);
          
          if (existingDrawerContents) existingDrawerContents.remove();

          $store.modals.register('pickup-availability-', 'rightDrawer');
        "
        on="idle"
      >
        <template
          
            data-should-teleport="#right-drawer-slot"
          
            x-teleport="#right-drawer-slot"
          
        >
          <template
            id="pickup-availability-drawer-contents-"
            x-if="$store.modals.rightDrawer.contents === 'pickup-availability-'"
          >
            <div
              data-modal-label=" "
            >
              <div class="flex h-screen flex-col">
                <div class="px-section">
                  <div class="relative flex items-center justify-between border-b-general border-scheme-text pb-2.5 pt-5">
                    <h1 id="ModalTitle" class="">
                      <div class="font-heading text-lg">
                        
                      </div>
                      <div></div>
                    </h1>
                    <button
                      @click.prevent="$store.modals.close('pickup-availability-')"
                      class="top-0 ml-2.5 block"
                    >
                      <span class="sr-only">
                        
                      </span>
                      <span class="inline-block h-6 w-6">
                        
                      </span>
                    </button>
                  </div>
                </div>
                <ul
                  class="relative flex-auto overflow-y-auto px-section"
                  role="list"
                >
                  
                    <li class="py-5">
                      <p class="font-heading text-md">
                        
                      </p>
                      <div class="my-2 flex items-start">
                        <div class="mr-1.5 mt-[.225rem] inline-block h-4 w-2.5">
                          
                        </div>
                        <div>
                          <p class="text-sm">
                            
                              
                              , 
                            
                              
                            
                          </p>
                        </div>
                      </div>
                      <address class="mt-2 block text-sm not-italic">
                        <div>
                          
                        </div>
                        
                          <div class="mt-2">
                            <a
                              class="theme-link text-sm"
                              href="tel:"
                            >
                              
                            </a>
                          </div>
                        
                      </address>
                    </li>
                  
                </ul>
              </div>
            </div>
          </template>
        </template>
      </data-island>
    </div>
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
