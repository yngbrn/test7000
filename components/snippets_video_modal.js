export default function snippets_video_modal() {
  const html = `

<data-island
  x-data="
    &#123;
      init() &#123;
        this.$store.modals.register('', 'modal');
        initTeleport(this.$root);
      &#125;,
      destroy() &#123;
        this.$store.modals.close('');
        delete this.$store.modals.modals[''];
      &#125;
    &#125;
  "
  on="idle"
>
  <div x-cloak>
    <template data-should-teleport="#modal-slot">
      <template x-if="$store.modals.modal.contents === ''">
        <div
          data-modal-label=""
          class="fixed inset-0 h-full w-full bg-scheme-background"
        >
          <div class="fixed flex w-full items-center justify-between px-section pb-2.5 pt-5">
            <h2 class="sr-only" class="" tabindex="-1">
              
            </h2>
            <button
              @click.prevent="$store.modals.close('')"
              class="ml-auto block"
            >
              <span class="sr-only">
                
              </span>
              <span class="inline-block h-5 w-5">
                
              </span>
            </button>
          </div>
          <div
            class="flex h-full w-full"
            x-show="$store.modals.modal.contents === ''"
          >
            <div
              x-data="Video('inline', 'autoplay')"
              id="video-in-"
              class="aspect-h-9 aspect-w-16 relative m-auto w-9/12"
              @-will-close.window="pause"
              x-init="enabled = true"
            >
              <template x-if="enabled">
                <div
                  x-data="HTMLVideo"
                  class="transition-opacity duration-500"
                  :class="&#123; 'opacity-0 pointer-events-none' : !shown &#125;"
                  @play="play"
                  @pause="pause"
                >
                  
                    
                  
                    <video
                      x-ref="video"
                      autoplay
                      class="absolute inset-0 h-full w-full"
                      controls
                    >
                      <source
                        src="/assets/placeholder-video.mp4"
                        type="video/mp4"
                      >
                      Your browser does not support the video tag.
                    </video>
                  
                </div>
              </template>
              <button
                @click="enabled = true"
                class="absolute inset-0 z-10 grid h-full w-full place-content-center"
                :class="&#123; 'opacity-0 pointer-events-none' : shown &#125;"
              >
                <span class="sr-only"></span>
                <div class="push-btn">
                  <div class="push-btn__surface p-2 align-bottom">
                    <div class="p-2.5">
                      <div class="h-10 w-10">
                        
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </template>
    </template>
  </div>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
