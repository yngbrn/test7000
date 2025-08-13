export default function layout_password() {
  const html = `<div>&lt;!doctype html&gt;
&lt;html class=&quot;no-js&quot; lang=&quot;&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width,initial-scale=1&quot;&gt;
    &lt;meta name=&quot;theme-color&quot; content=&quot;&quot;&gt;
    &lt;link rel=&quot;canonical&quot; href=&quot;&quot;&gt;

    

    
      &lt;link
        rel=&quot;icon&quot;
        type=&quot;image/png&quot;
        href=&quot;&quot;
      &gt;
    

    
    

    &lt;title&gt;&lt;/title&gt;

    
      &lt;meta name=&quot;description&quot; content=&quot;&quot;&gt;
    

    

    
    &lt;script type=&quot;esms-options&quot;&gt;
      &amp;#123;
        &quot;noLoadEventRetriggers&quot;: true
      &amp;#125;
    &lt;/script&gt;

    &lt;script type=&quot;importmap&quot;&gt;
      &amp;#123;
        &quot;imports&quot;: &amp;#123;
          &quot;vendor&quot;: &quot;/assets/vendor.bundle.min.js&quot;,
          &quot;deferrable-data&quot;: &quot;/assets/deferrable-data.bundle.js&quot;,
          &quot;product-model&quot;: &quot;/assets/island-product-model.bundle.js&quot;
        &amp;#125;
      &amp;#125;
    &lt;/script&gt;

    

    

    

    &lt;script&gt;
      document.documentElement.className =
        document.documentElement.className.replace(&#x27;no-js&#x27;, &#x27;js&#x27;);
    &lt;/script&gt;

    &lt;script&gt;
      function debounce(fn, wait) &amp;#123;
        let t;
        return (...args) =&gt; &amp;#123;
          clearTimeout(t);
          t = setTimeout(() =&gt; fn.apply(this, args), wait);
        &amp;#125;;
      &amp;#125;
    &lt;/script&gt;

    
    
      
      
    

    &lt;style&gt;
      :root &amp;#123;
        --max-site-width: 1820px;
      &amp;#125;
    &lt;/style&gt;

    
      
      

      

      
        uppercase
      
        none
      
      em

      :root &amp;#123;
        --heading-font-stack: , ;
        --heading-font-weight: ;
        --heading-font-style: ;
        --heading-letterspacing: ;
        --heading-capitalize: ;
        --main-font-stack: , ;
        --main-font-weight: ;
        --main-font-style: ;
      &amp;#125;
    
    

    

    &lt;style id=&quot;manual-critical-css&quot;&gt;
      [x-cloak] &amp;#123;
        display: none;
      &amp;#125;

      data-island &amp;#123;
        display: block;
      &amp;#125;

      [data-parallax-container] &amp;#123;
        will-change: opacity;
        opacity: 0;
        transition: opacity 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      &amp;#125;
      .no-js [data-parallax-container],
      [data-parallax-container].animated &amp;#123;
        opacity: 1;
      &amp;#125;

      @media (prefers-reduced-motion) &amp;#123;
        [data-parallax-container] &amp;#123;
          opacity: 1;
        &amp;#125;
      &amp;#125;
    &lt;/style&gt;

    
    
      &lt;link
        rel=&quot;preload&quot;
        as=&quot;font&quot;
        href=&quot;&quot;
        type=&quot;font/woff2&quot;
        crossorigin
      &gt;
    
    
      &lt;link
        rel=&quot;preload&quot;
        as=&quot;font&quot;
        href=&quot;&quot;
        type=&quot;font/woff2&quot;
        crossorigin
      &gt;
    
    
  &lt;/head&gt;

  &lt;body
    class=&quot;template-password&quot;
    data-color-scheme=&quot;scheme1&quot;
  &gt;
    &lt;data-island
      role=&quot;banner&quot;
      x-data
      x-init=&quot;
        initTeleport($refs.modalContent);
        $store.modals.register(&#x27;password&#x27;, &#x27;modal&#x27;);
      &quot;
      on=&quot;idle&quot;
    &gt;
      &lt;div
        class=&quot;relative z-0 flex min-h-screen flex-col justify-between px-section&quot;
        role=&quot;header&quot;
      &gt;
        &lt;div
          class=&quot;password-login relative z-10 py-12 text-center text-sm&quot;
          role=&quot;complementary&quot;
        &gt;
          &lt;button
            id=&quot;logInWithPasswordBtn&quot;
            data-password-toggle
            @click=&quot;$store.modals.open(&#x27;password&#x27;);&quot;
            class=&quot;push-btn&quot;
            aria-haspopup=&quot;dialog&quot;
          &gt;
            &lt;span class=&quot;push-btn__surface pointer-events-none flex items-center justify-center&quot;&gt;
              &lt;span class=&quot;mr-1 inline-block h-5 w-5&quot; aria-hidden=&quot;true&quot;&gt;
                
              &lt;/span&gt;
              &lt;span&gt;&lt;/span&gt;
            &lt;/span&gt;
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;main role=&quot;main&quot; id=&quot;MainContent&quot;&gt;
          
        &lt;/main&gt;
        &lt;footer&gt;
          &lt;div class=&quot;password-powered-by py-5 text-center text-sm&quot;&gt;
            
                  &lt;div class=&quot;color-scheme-text inline-block w-12&quot; data-color-scheme=&quot;scheme1&quot;&gt;
                  &lt;/div&gt;
                &lt;/a&gt;
              
            
          &lt;/div&gt;
        &lt;/footer&gt;
      &lt;/div&gt;
      &lt;div x-ref=&quot;modalContent&quot; x-show=&quot;$store.modals.modal.open&quot;&gt;
        &lt;template data-should-teleport=&quot;#modal-slot&quot;&gt;
          &lt;div
            data-password-login
            id=&quot;Login&quot;
            x-show=&quot;$store.modals.modal.contents === &#x27;password&#x27;&quot;
            x-cloak
            class=&quot;fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center bg-scheme-background px-section text-center text-scheme-text&quot;
            data-color-scheme=&quot;scheme1&quot;
            data-modal-label=&quot;&quot;
            @click.stop
            x-trap.noscroll.inert=&quot;$store.modals.modal.open&quot;
            role=&quot;dialog&quot;
            aria-modal=&quot;true&quot;
          &gt;
            &lt;button
              @click=&quot;$store.modals.close(&#x27;password&#x27;)&quot;
              class=&quot;push-btn absolute right-2.5 top-2.5 ml-auto&quot;
            &gt;
              &lt;span class=&quot;visually-hidden&quot;&gt;
                
              &lt;/span&gt;
              &lt;span class=&quot;push-btn__surface p-2 align-bottom&quot;&gt;
                &lt;span class=&quot;block h-5 w-5&quot;&gt;&lt;/span&gt;
              &lt;/span&gt;
            &lt;/button&gt;
            &lt;div
              class=&quot;card lg:max-w-md&quot;
              data-color-scheme=&quot;scheme1&quot;
            &gt;
              &lt;div class=&quot;card__surface p-5 lg:p-10&quot;&gt;
                &lt;h1 class=&quot;font-heading heading-standard&quot;&gt;
                  
                &lt;/h1&gt;
                &lt;div
                  class=&quot;mt-8  text-left lg:mx-auto&quot;
                  @modal-is-open.window=&quot;setTimeout(() =&gt; &amp;#123; $focus.first() &amp;#125;, 200)&quot;
                &gt;
                  
                    
                      &lt;script type=&quot;text/javascript&quot;&gt;
                        window.addEventListener(&#x27;load&#x27;, function () &amp;#123;
                          document
                            .getElementById(&#x27;logInWithPasswordBtn&#x27;)
                            .click();
                        &amp;#125;);
                      &lt;/script&gt;
                      &lt;div class=&quot;text-scheme-accent-1&quot;&gt;
                        
                      &lt;/div&gt;
                    
                    &lt;label
                      class=&quot;font-secondary mb-2 mt-4 block text-sm text-scheme-text&quot;
                      for=&quot;Password&quot;
                    &gt;
                      
                    &lt;/label&gt;
                    &lt;input
                      type=&quot;password&quot;
                      name=&quot;password&quot;
                      id=&quot;Password&quot;
                      class=&quot;input w-full&quot;
                     /&gt;
                    &lt;button
                      type=&quot;submit&quot;
                      name=&quot;commit&quot;
                      class=&quot;push-btn mt-5 w-full&quot;
                    &gt;
                      &lt;span class=&quot;push-btn__surface w-full&quot;&gt;
                        
                        
                          &amp;nbsp;&amp;rarr;
                        
                      &lt;/span&gt;
                    &lt;/button&gt;
                  
                &lt;/div&gt;
                &lt;p class=&quot;mt-8 text-sm&quot;&gt;
                  
                &lt;/p&gt;
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/template&gt;
      &lt;/div&gt;
    &lt;/data-island&gt;

    

    
  &lt;/body&gt;
&lt;/html&gt;</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
