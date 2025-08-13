export default function snippets_social_icons() {
  const html = `
<ul class="-mx-2 -mt-2 flex flex-wrap ">
  
    
    social__link
    
      
        <li class="mx-2 mt-2">
          <a
            class="fill-current"
            href="mailto:"
            target="_blank"
          >
            <span class="inline-block h-5 w-5" aria-hidden="true">
              
            </span>
            <span class="visually-hidden"></span>
          </a>
        </li>
      
        <li class="mx-2 mt-2">
          <a
            class="inline-block  secondary-text-link"
            href="mailto:"
          >
            
          </a>
        </li>
      
    
  
</ul>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
