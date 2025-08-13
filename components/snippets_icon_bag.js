export default function snippets_icon_bag() {
  const html = `<svg
  class="theme-icon"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M38.316 17H9.684C8.754 17 8 17.746 8 18.667v21.666C8 41.253 8.754 42 9.684 42h28.632c.93 0 1.684-.746 1.684-1.667V18.667c0-.92-.754-1.667-1.684-1.667ZM16 13v-2.5a7.5 7.5 0 0 1 15 0V13"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
