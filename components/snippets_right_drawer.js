export default function snippets_right_drawer() {
  const html = `<data-island role="complementary" x-data on="load">
  <template x-teleport="body">
    <div
      x-show="$store.modals.rightDrawer.open"
      @keydown.escape.prevent.stop="$store.modals.close('rightDrawer')"
      @click="$store.modals.close('rightDrawer')"
      class="fixed inset-0 z-50"
      data-color-scheme=""
      id="modals-rightDrawer"
    >
      <div
        x-show="$store.modals.rightDrawer.open"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="opacity-0"
        x-transition:enter-end="opacity-100"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="opacity-100"
        x-transition:leave-end="opacity-0"
        class="fixed inset-0 bg-scheme-text/75"
      >
        <!-- Overlay -->
      </div>
      <div
        x-show="$store.modals.rightDrawer.open"
        x-transition:enter="transition ease-out duration-300"
        x-transition:enter-start="translate-x-full"
        x-transition:enter-end="translate-x-0"
        x-transition:leave="transition ease-in duration-300"
        x-transition:leave-start="translate-x-0"
        x-transition:leave-end="translate-x-full"
        class="h-full w-full"
      >
        <div
          @click.stop
          x-trap.noscroll.inert="$store.modals.rightDrawer.open"
          class="relative ml-auto h-full w-11/12 overflow-hidden border-l-section border-section-border bg-scheme-background text-scheme-text md:w-7/12 lg:w-5/12"
          id="right-drawer-slot"
          role="dialog"
          aria-modal="true"
          :aria-label="getModalLabel('rightDrawer', $el)"
          tabindex="-1"
        >
          <!-- Modal content is teleported here -->
        </div>
      </div>
    </div>
  </template>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
