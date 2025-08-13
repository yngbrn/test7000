export default function snippets_product_block_description() {
  const html = `
  <div
    class="js-enabled "
    x-data="&#123; open: false &#125;"
    
  >
    <div
      class="rte "
      x-show="!open"
    >
      
    </div>
    <button
      @click="open = !open"
      x-show="!open"
      :aria-expanded="open ? true : 'false'"
      class="font-secondary theme-link mt-2.5 cursor-pointer text-base w-full text-center"
    >
      
    </button>
    <data-island
      class="rte "
      x-show="open"
      x-data="RTE"
      on="idle"
      style="display: none;"
    >
      
    </data-island>
  </div>
  <noscript>
    <div class="rte ">
      
    </div>
  </noscript>

  <div
    class=" w-full max-w-full"
    
  >
    <data-island
      x-data="RTE"
      class="rte "
    >
      
    </data-island>
  </div>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
