export default function snippets_product_block_icon_row() {
  const html = `
<div
  class="  -mx-section"
  
>
  <ul
    class="feature-icon-list flex gap-4 pb-2  px-section overflow-x-auto snap-x snap-promixity flex-wrap"
  >
    
      icon_
      text_
      
      
        <li class="flex  flex-col items-center text-center scroll-mx-section snap-start shrink-0">
          <span
            style="--icon-thickness: ;"
            class="mb-2 inline-block  rounded-full border-[calc(var(--icon-thickness)_*_1px)]border-0 border-current "
          >
            
          </span>
          <span class="block max-w-[12ch] break-words text-sm  uppercase">
            
          </span>
        </li>
      
    
  </ul>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
