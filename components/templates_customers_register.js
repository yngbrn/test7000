export default function templates_customers_register() {
  const html = `<div
  class="section-content px-section py-section-vertical-spacing"
  data-color-scheme="scheme1"
>
  <div class="card mx-auto max-w-md">
    <div class="card__surface relative z-shape-divider mx-auto bg-scheme-card p-5 text-left lg:p-10">
      <h1 class="font-heading heading-standard mb-2.5">
        
      </h1>
      
      
        
          <div class="mt-5" tabindex="-1">
            
          </div>
        

        <label for="FirstName" class="font-secondary mb-1 mt-5 block text-sm">
          
        </label>
        <input
          type="text"
          class="w-full"
          id="FirstName"
          
            autofocus
          
          
            value=""
          
         />

        <label for="LastName" class="font-secondary mb-1 mt-5 block text-sm">
          
        </label>
        <input
          type="text"
          class="w-full"
          id="LastName"
          
            value=""
          
         />

        <label for="Email" class="font-secondary mb-1 mt-5 block text-sm">
          
        </label>
        <input
          type="email"
          id="Email"
          class="w-full border-scheme-accent-1"
          value=""
          spellcheck="false"
          autocomplete="off"
          autocapitalize="off"
         />

        <label
          for="CreatePassword"
          class="font-secondary mb-1 mt-5 block text-sm"
        >
          
        </label>
        <input
          type="password"
          class="w-full border-scheme-accent-1"
          id="CreatePassword"
         />

        <div class="mt-5">
          <button type="submit" class="push-btn w-full">
            <span class="push-btn__surface w-full">
              
            </span>
          </button>
        </div>

        <div class="text-center">
          <a
            class="mt-5 inline-block text-sm"
            href=""
          >
            
          </a>
        </div>
      
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
