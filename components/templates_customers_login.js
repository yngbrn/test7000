export default function templates_customers_login() {
  const html = `<data-island
  class="section-content px-section py-section-vertical-spacing"
  x-data="AccountLogin"
  data-color-scheme="scheme1"
  src="/assets/island-account-login.bundle.js"
>
  <div
    class="card mx-auto max-w-md"
    :class="&#123;'hidden': state !== 'login'&#125;"
    data-state="login"
  >
    <div class="card relative z-shape-divider mx-auto text-center">
      <div class="card__surface bg-scheme-card p-5 lg:p-10">
        
          <div class="items-center justify-between lg:flex">
            <h1
              class="font-heading heading-standard mb-2.5"
              tabindex="-1"
              data-should-focus
            >
              
            </h1>
            <a
              class="font-secondary  text-sm"
              href=""
            >
              
            </a>
          </div>
          
            <div class="mt-5" tabindex="-1" data-login-error>
              
            </div>
          
          <label
            class="font-secondary mb-1 mt-5 block text-left text-sm"
            class="label-hidden"
          >
            
          </label>
          <input
            type="email"
            class="w-full border-scheme-accent-1"
            spellcheck="false"
            autocomplete="email"
            autocapitalize="off"
            
              autofocus
            
           />
          
            <label
              class="font-secondary mb-1 mt-5 block text-left text-sm"
              class="label-hidden"
            >
              
            </label>
            <input
              type="password"
              autocomplete="password"
              class="w-full border-scheme-accent-1"
             />
          
          <div class="mt-5">
            <button type="submit" class="push-btn  w-full">
              <span class="push-btn__surface w-full">
                
              </span>
            </button>
          </div>
          <div class="mt-5 text-center">
            <a class="block text-sm" href="">
              
            </a>
            
              <button
                @click="state = 'recover'"
                type="button"
                class="mt-2.5 inline-block "
              >
                <span class="text-sm">
                  
                </span>
              </button>
            
          </div>
        
      </div>
    </div>
  </div>

  <div
    class="card mx-auto max-w-md"
    :class="&#123;'hidden': state !== 'recover'&#125;"
    x-cloak
    data-state="recover"
  >
    <div class="card relative z-shape-divider mx-auto text-center">
      <div class="card__surface bg-scheme-card p-5 lg:p-10">
        <h2
          class="font-heading heading-standard mb-2.5"
          data-should-focus
          tabindex="-1"
        >
          
        </h2>
        
          
            <div class="mt-5" tabindex="-1" data-login-error>
              
            </div>
          
          
            <p data-recover-success>
              
            </p>
          
            <p></p>
            <label
              for="RecoverEmail"
              class="font-secondary mb-1 mt-5 block text-left text-sm"
            >
              
            </label>
            <input
              type="email"
              class="border-text-width border-primary-border w-full bg-transparent"
              name="email"
              id="RecoverEmail"
              spellcheck="false"
              autocomplete="off"
              autocapitalize="off"
             />
            <div class="mt-5 text-center">
              <button type="submit" class="push-btn  block w-full">
                <span class="push-btn__surface w-full">
                  
                </span>
              </button>
              <button
                class="mt-5 text-sm"
                type="button"
                @click="state = 'login'"
              >
                
              </button>
            </div>
          
        
      </div>
    </div>
  </div>

  
    <div class="mt-8">
      <h2 class="mb-2 text-center"></h2>

      
        <button type="submit" class="push-btn  w-full">
          <span class="push-btn__surface w-full">
            
          </span>
        </button>
      
    </div>
  
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
