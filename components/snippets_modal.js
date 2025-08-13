export default function snippets_modal() {
  const html = `<data-island role="complementary" x-data on="load">
  <template x-teleport="body">
    <div
      x-show="$store.modals.modal.open"
      @keydown.escape.prevent.stop="$store.modals.close('modal')"
      class="fixed inset-0 z-40"
      id="modals-modal"
    >
      <div
        id="modal-slot"
        x-show="$store.modals.modal.open"
        x-transition.duration.300ms
        role="dialog"
        aria-modal="true"
        class="relative m-auto h-full w-full overflow-y-auto"
        x-trap.noscroll.inert="$store.modals.modal.open"
        :aria-label="getModalLabel('modal', $el)"
        tabindex="-1"
      ></div>
    </div>
  </template>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
