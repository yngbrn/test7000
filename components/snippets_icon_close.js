export default function snippets_icon_close() {
  const html = `<svg
  class="theme-icon"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path vector-effect="non-scaling-stroke" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43 5 5 43m38 0L5 5"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
