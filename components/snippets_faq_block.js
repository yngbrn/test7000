export default function snippets_faq_block() {
  const html = `<li
  class="card"
  
>
  <div
    class="card__surface p-4border-scheme-text border-t-2 py-4"
    x-data="&#123; open: false &#125;"
    x-cloak
  >
    < class="">
      <button
        @click="open = !open"
        class="font-heading heading-secondary flex w-full cursor-pointer items-center justify-between text-left"
        :aria-expanded="open ? true : 'false'"
      >
        <div class="flex w-10/12 grow-0 items-center lg:w-11/12">
          
            <span class="mr-2 h-8 w-8 shrink-0">
              
            </span>
          
          <span class="break-words">
            
          </span>
        </div>
        <div class="block flex-shrink-0 pl-5">
          <span
            class="inline-block h-5 w-5 origin-center transform transition"
            :class="&#123;'rotate-180': open &#125;"
          >
            
          </span>
        </div>
      </button>
    </>
    <div class="rte mt-4" x-show="open" id="">
      
    </div>
  </div>

  <noscript>
    <div class="rte mt-8">
      <h2 class="heading-standard"></h2>
      
    </div>
  </noscript>
</li>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
