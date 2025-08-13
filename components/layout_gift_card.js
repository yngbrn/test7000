export default function layout_gift_card() {
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
    

    
    

    &lt;title&gt;
      
      
        &amp;ndash; tagged &quot;&quot;
      
       &amp;ndash; Page 
      
        &amp;ndash; 
      
    &lt;/title&gt;

    
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

  &lt;body class=&quot;template-giftcard&quot;&gt;
    &lt;main role=&quot;main&quot; id=&quot;MainContent&quot;&gt;
      
    &lt;/main&gt;

    &lt;script&gt;
      document.documentElement.className = document.documentElement.className.replace(&#x27;no-js&#x27;, &#x27;js&#x27;);
      window.addEventListener(&#x27;DOMContentLoaded&#x27;, function() &amp;#123;
        var qrCode = document.getElementById(&#x27;QrCode&#x27;);

        new QRCode(qrCode, &amp;#123;
          text: qrCode.dataset.identifier,
          width: 120,
          height: 120,
          imageAltText: theme.strings.qrImageAlt
        &amp;#125;);

        document
          .getElementById(&#x27;GiftCardDigits&#x27;)
          .addEventListener(&#x27;focus&#x27;, function(event) &amp;#123;
            event.target.select();
          &amp;#125;);
      &amp;#125;);
      window.theme = &amp;#123;
        strings: &amp;#123;
          qrImageAlt: 
        &amp;#125;,
        moneyFormat: ,
        cartItemCount: 
      &amp;#125;;
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
