export default function templates_customers_reset_password() {
  const html = `<div class="section-content px-section py-section-vertical-spacing">
  <div class="card mx-auto max-w-md">
    <div class="card__surface relative z-shape-divider mx-auto bg-scheme-card p-5 text-left lg:p-10">
      
        <h1 class="font-heading heading-standard mb-2.5">
          
        </h1>

        <p>
          
          
          
        </p>

        
          <div class="mt-5" tabindex="-1" data-login-error>
            
          </div>
        

        <label
          for="ResetPassword"
          class="font-secondary mb-1 mt-5 block text-sm"
        >
          
        </label>
        <input
          type="password"
          id="ResetPassword"
          class="w-full border-scheme-accent-1"
         />

        <label
          for="PasswordConfirmation"
          class="font-secondary mb-1 mt-5 block text-sm"
        >
          
        </label>
        <input
          type="password"
          id="PasswordConfirmation"
          class="w-full border-scheme-accent-1"
         />

        <div class="mt-4">
          <div class="push-btn w-full">
            <input
              type="submit"
              class="push-btn__surface  w-full"
              value=""
             />
          </div>
        </div>
      
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
