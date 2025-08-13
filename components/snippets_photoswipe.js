export default function snippets_photoswipe() {
  const html = `
<div x-ref="photoSwipeComponent">
  <data-island
    x-data="PhotoSwipe"
    src="/assets/island-photoswipe.bundle.js"
    on="idle"
  >
    <div
      id="PhotoSwipeContainer"
      data-color-scheme=""
    ></div>

    <script type="application/json" data-photoswipe-images>
      &#123;
        
          "": &#123;
            "src": ,
            "width": ,
            "height": ,
            "aspectRatio": ,
            "alt": 
          &#125;,
        
      &#125;
    </script>

    
  </data-island>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
