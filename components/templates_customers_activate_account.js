export default function templates_customers_activate_account() {
  const html = `<div
  class="section-content px-section py-section-vertical-spacing"
  data-color-scheme="scheme1"
>
  <div class="card mx-auto max-w-md">
    <div class="card__surface relative z-shape-divider mx-auto bg-scheme-card p-5 text-left lg:p-10">
      <h1 class="font-heading heading-standard mb-2.5">
        
      </h1>
      <p></p>

      
        
          <div
            class="mt-4 text-scheme-accent-1"
            tabindex="-1"
            data-login-error
          >
            
          </div>
        

        <label
          class="font-secondary mb-1 mt-5 block text-sm"
        >
          
        </label>
        <input
          type="password"
          class="w-full"
         />

        <label
          class="font-secondary mb-1 mt-5 block text-sm"
        >
          
        </label>
        <input
          type="password"
          class="w-full"
         />

        <div class="mt-5">
          <button type="submit" class="push-btn  w-full">
            <span class="push-btn__surface w-full">
              
            </span>
          </button>
        </div>
        <div class="mt-5 text-center">
          <button
            type="submit"
            class="push-btn push-btn--background w-full"
            name="decline"
          >
            <span class="push-btn__surface w-full">
              
            </span>
          </button>
        </div>
      
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
