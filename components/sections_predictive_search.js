export default function sections_predictive_search() {
  const html = `<div>
  

  
    .query-suggestion mark &amp;#123;
      background-color: rgb(var(--color-scheme-accent-1));
    &amp;#125;
  

  &lt;div id=&quot;predictive-search-results&quot; class=&quot;pb-safe-bottom&quot;&gt;
    &lt;template x-if=&quot;loading&quot;&gt;
      &lt;div class=&quot;absolute bottom-0 left-0 right-0 top-0 flex items-start justify-center&quot;&gt;
        &lt;div class=&quot;h-6 w-6 pb-12 pt-12&quot;&gt;
          &lt;div class=&quot;loading&quot;&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;div
      :class=&quot;&amp;#123;&#x27;opacity-100&#x27;: !loading, &#x27;opacity-0&#x27;: loading &amp;#125;&quot;
      class=&quot;mt-5 grid  gap-5 transition-opacity lg:grid-cols-12 lg:gap-10&quot;
    &gt;
      
        &lt;div class=&quot;col-span-full&quot;&gt;
          &lt;h2 id=&quot;predictive-search-suggestions&quot; class=&quot;&quot;&gt;
            
          &lt;/h2&gt;
          &lt;ul class=&quot;mt-5&quot;&gt;
            
              &lt;li
                id=&quot;predictive-search-option-query-&quot;
                class=&quot;predictive-search__option&quot;
                role=&quot;option&quot;
                aria-selected=&quot;false&quot;
              &gt;
                &lt;a href=&quot;&quot; class=&quot;&quot; tabindex=&quot;-1&quot;&gt;
                  &lt;div class=&quot;&quot;&gt;
                    &lt;p class=&quot;query-suggestion&quot; aria-label=&quot;&quot;&gt;
                      
                    &lt;/p&gt;
                  &lt;/div&gt;
                &lt;/a&gt;
              &lt;/li&gt;
            
          &lt;/ul&gt;
        &lt;/div&gt;
      

      
        &lt;div class=&quot;lg:col-span-9lg:col-span-full&quot;&gt;
          
            &lt;h2 id=&quot;predictive-search-products&quot; class=&quot;&quot;&gt;
              
            &lt;/h2&gt;
          
          &lt;ul
            id=&quot;predictive-search-results-list&quot;
            class=&quot;mt-5 grid grid-cols-3 gap-5 lg:grid-cols-5&quot;
            role=&quot;listbox&quot;
            aria-labelledby=&quot;predictive-search-products&quot;
          &gt;
            
              &lt;li
                id=&quot;predictive-search-option-&quot;
                class=&quot;predictive-search__option&quot;
                role=&quot;option&quot;
                aria-selected=&quot;false&quot;
              &gt;
                
              &lt;/li&gt;
            
          &lt;/ul&gt;
        &lt;/div&gt;
      

      
        &lt;div class=&quot;lg:col-span-3&quot;&gt;
          &lt;div class=&quot;-mt-5&quot;&gt;
            
              &lt;h2 class=&quot; mt-5&quot;&gt;
                
              &lt;/h2&gt;
              &lt;ul
                id=&quot;predictive-search-results-collections-list&quot;
                class=&quot;mt-5 grid grid-cols-2 gap-5&quot;
                role=&quot;listbox&quot;
              &gt;
                
                  
                  &lt;li
                    id=&quot;predictive-search-option-collection-&quot;
                    class=&quot;predictive-search__option&quot;
                    role=&quot;option&quot;
                    aria-selected=&quot;false&quot;
                  &gt;
                    &lt;a href=&quot;&quot;&gt;
                      
                        &lt;div class=&quot;object-wrapper &quot;&gt;
                          
                        &lt;/div&gt;
                      
                      &lt;div class=&quot;mt-2 text-center&quot;&gt;
                        &lt;h3 class=&quot;text-sm&quot;&gt;
                          &lt;p class=&quot;product-grid-title&quot;&gt;
                            
                          &lt;/p&gt;
                        &lt;/h3&gt;
                      &lt;/div&gt;
                    &lt;/a&gt;
                  &lt;/li&gt;
                
              &lt;/ul&gt;
            
            
              &lt;h2 class=&quot;  mt-5&quot;&gt;
                
              &lt;/h2&gt;
              &lt;ul
                id=&quot;predictive-search-results-articles-list&quot;
                class=&quot;mt-5 grid gap-5 lg:gap-10&quot;
                role=&quot;listbox&quot;
              &gt;
                
                  &lt;li
                    id=&quot;predictive-search-option-articles-&quot;
                    class=&quot;predictive-search__option py-2&quot;
                    role=&quot;option&quot;
                    aria-selected=&quot;false&quot;
                  &gt;
                    &lt;a href=&quot;&quot;&gt;
                      &lt;div class=&quot;mt-2 text-centertext-left&quot;&gt;
                        &lt;h3 class=&quot;text-base&quot;&gt;
                          &lt;p class=&quot;product-grid-title&quot;&gt;&lt;/p&gt;
                        &lt;/h3&gt;
                      &lt;/div&gt;
                    &lt;/a&gt;
                  &lt;/li&gt;
                
              &lt;/ul&gt;
            
            
              &lt;h2 class=&quot;  mt-5&quot;&gt;
                
              &lt;/h2&gt;
              &lt;ul
                id=&quot;predictive-search-results-pages-list&quot;
                class=&quot;mt-5 grid gap-5 lg:gap-10&quot;
                role=&quot;listbox&quot;
              &gt;
                
                  &lt;li
                    id=&quot;predictive-search-option-pages-&quot;
                    class=&quot;predictive-search__option py-2&quot;
                    role=&quot;option&quot;
                    aria-selected=&quot;false&quot;
                  &gt;
                    &lt;a href=&quot;&quot;&gt;
                      &lt;div class=&quot;mt-2 text-left&quot;&gt;
                        &lt;h3 class=&quot;text-base&quot;&gt;
                          &lt;p class=&quot;product-grid-title&quot;&gt;&lt;/p&gt;
                        &lt;/h3&gt;
                      &lt;/div&gt;
                    &lt;/a&gt;
                  &lt;/li&gt;
                
              &lt;/ul&gt;
            
          &lt;/div&gt;
        &lt;/div&gt;
      
    &lt;/div&gt;
  &lt;/div&gt;

  
    &lt;div
      :class=&quot;&amp;#123; &#x27;opacity-0 pointer-events-none&#x27; : loading &amp;#125;&quot;
      class=&quot;predictive-search__option relative z-10 mt-5 text-center&quot;
      id=&quot;predictive-search-option-search-keywords&quot;
      role=&quot;option&quot;
    &gt;
      &lt;button class=&quot;push-btn inline-flex items-center justify-between&quot;&gt;
        
        &lt;span class=&quot;push-btn__surface&quot;&gt;
          
        &lt;/span&gt;
      &lt;/button&gt;
    &lt;/div&gt;
  
    &lt;div class=&quot;text-center&quot;&gt;
      &lt;p&gt;
        
      &lt;/p&gt;
    &lt;/div&gt;
  

  &lt;span class=&quot;hidden&quot; id=&quot;predictive-search-count&quot;&gt;
    
      
    
      
    
  &lt;/span&gt;


</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
