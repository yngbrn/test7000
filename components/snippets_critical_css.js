export default function snippets_critical_css() {
  const html = `<style id="generated-critical-css">
.max-w-site&#123;max-width:var(--max-site-width)&#125;.\[\&\:not\(\.is-initialized\)\]\:visible:not(.is-initialized)&#123;visibility:visible&#125;@media (max-width:989px)&#123;.splide:not(.is-active) .max-lg\:\[\.splide\:not\(\.is-active\)_\&\]\:hidden&#123;display:none&#125;&#125;
</style>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
