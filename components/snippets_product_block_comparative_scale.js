export default function snippets_product_block_comparative_scale() {
  const html = `<div
  class=""
  
>
  <div class=" comparison-chart items-center gap-1 pb-4">
    
    <div class="flex justify-between pb-1">
      
        <div class="col-span-2 text-sm  uppercase">
          
          <span class="sr-only">%</span>
        </div>
      
      
        <div class="col-span-2 text-right text-sm  uppercase">
          
          <span class="sr-only">
            %</span
          >
        </div>
      
    </div>
    <div class="relative col-span-8">
      <div class="relative h-chart rounded-full border-general border-scheme-text bg-scheme-accent-1">
        <div
          class="absolute left-[20%] top-0 h-full w-0 border-r-general border-scheme-text"
        ></div>
        <div
          class="absolute left-[40%] top-0 h-full w-0 border-r-general border-scheme-text"
        ></div>
        <div
          class="absolute left-[60%] top-0 h-full w-0 border-r-general border-scheme-text"
        ></div>
        <div
          class="absolute left-[80%] top-0 h-full w-0 border-r-general border-scheme-text"
        ></div>
        <div
          class="absolute top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-general border-scheme-text bg-scheme-accent-1 p-[2px]"
          style="left: %"
        >
          <div class="h-full w-full rounded-full bg-scheme-text"></div>
        </div>
      </div>
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
