export default function snippets_social_sharing() {
  const html = `<div>&lt;!-- /snippets/social-sharing.liquid --&gt;
&lt;div class=&quot;flex items-center justify-start text-sm&quot;&gt;
  &lt;h3 class=&quot;mr-5 w-auto&quot;&gt;:&lt;/h3&gt;
  &lt;div class=&quot;social-sharing -mx-2 flex flex-wrap items-center justify-start&quot;&gt;
    
      &lt;a
        class=&quot;my-1 p-2mr-2&quot;
        target=&quot;_blank&quot;
        href=&quot;//www.facebook.com/sharer.php?u=&quot;
      &gt;
        
          &lt;span class=&quot;inline-block h-5 w-5&quot;&gt;&lt;/span&gt;

        
          &lt;span class=&quot;secondary-text-link uppercase&quot;&gt;
            
          &lt;/span&gt;
        
        &lt;span class=&quot;visually-hidden&quot;&gt;
          
        &lt;/span&gt;
      &lt;/a&gt;
    

    
      &lt;a
        class=&quot;my-1  p-2mr-2&quot;
        target=&quot;_blank&quot;
        href=&quot;//twitter.com/share?text=&amp;amp;url=&quot;
      &gt;
        
          &lt;span class=&quot;inline-block h-5 w-5&quot;&gt;&lt;/span&gt;
        
          &lt;span class=&quot;secondary-text-link uppercase&quot;&gt;
            
          &lt;/span&gt;
        
        &lt;span class=&quot;visually-hidden&quot;&gt;
          
        &lt;/span&gt;
      &lt;/a&gt;
    

    
      &lt;a
        class=&quot;my-1  p-2mr-2&quot;
        target=&quot;_blank&quot;
        href=&quot;//pinterest.com/pin/create/button/?url=&amp;amp;media=&amp;amp;description=&quot;
      &gt;
        
          &lt;span class=&quot;inline-block h-5 w-5&quot;&gt;
            
          &lt;/span&gt;
        
          &lt;span class=&quot;secondary-text-link uppercase&quot;&gt;
            
          &lt;/span&gt;
        
        &lt;span class=&quot;visually-hidden&quot;&gt;
          
        &lt;/span&gt;
      &lt;/a&gt;
    
  &lt;/div&gt;
&lt;/div&gt;</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
