export default function snippets_scrolling_text_with_icons_block() {
  const html = `<div
  
    class="flex items-center justify-start"
  
  
>
  
    <span class=" inline-block  border-[calc(var(--icon-thickness)_*_1px)]border-0 rounded-full border-current ">
      
    </span>
  
  <span>
    
  </span>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
