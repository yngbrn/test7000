export default function snippets_product_block_features_list() {
  const html = `<div
  class=""
  
>
  <ul
    class="features-list__container text-left"
  >
    
      title_
      
      
        
        <li class="features-list__item flex items-center justify-between gap-x-3  uppercase">
          <span></span>
          <div class="inline-block h-5 w-5 shrink-0 rounded-full border-[calc(var(--icon-thickness)_*_1px)] border-current">
            
          </div>
        </li>
      
    
  </ul>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
