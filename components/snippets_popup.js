export default function snippets_popup() {
  const html = `<data-island role="complementary" x-data on="load">
  <template x-teleport="body">
    <div
      x-show="$store.modals.popup.open"
      @keydown.escape.prevent.stop="$store.modals.close('popup')"
      class="fixed inset-0 z-40"
      id="popups-popup"
    >
      <div
        x-show="$store.modals.popup.open"
        class="fixed inset-0 bg-scheme-text/75"
        x-transition.opacity.duration.100ms
        @click="$store.modals.close('popup')"
      >
        <!-- Overlay -->
      </div>
      <div
        id="popup-slot"
        x-show="$store.modals.popup.open"
        x-transition.duration.200ms
        role="dialog"
        aria-popup="true"
        class="relative m-4 max-h-[calc(100%_-_(theme(spacing.4)_*_2))] overflow-y-scroll border-section border-section-border bg-scheme-background text-scheme-text lg:m-24 lg:max-h-[calc(100%_-_(theme(spacing.24)_*_2))]"
        x-trap.noscroll.inert="$store.modals.popup.open"
        :aria-label="getModalLabel('popup', $el)"
        tabindex="-1"
      ></div>
    </div>
  </template>
</data-island>



`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
