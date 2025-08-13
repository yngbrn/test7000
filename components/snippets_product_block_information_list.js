export default function snippets_product_block_information_list() {
  const html = `<div
  class=""
  
>
  <ul
    class="information-list flex flex-col gap-y-4"
  >
    
      heading_
      content_
      
      
        <li class="information-list__container grid grid-cols-sidebar items-baseline gap-x-1">
          <div class="information-list__heading break-words font-bold">
            
            :
          </div>
          <data-island
            class="inline-rte information-list__content"
            x-data="RTE"
          >
            
          </data-island>
        </li>
      
    
  </ul>
  
    .product-block-information-list .information-list__container .information-list__heading &#123;
        width: 5ch;

        @media (min-width: 640px) &#123;
            width: ch;
        &#125;
    &#125;
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
