export default function snippets_icon_search() {
  const html = `<svg
  class="theme-icon"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path vector-effect="non-scaling-stroke" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21.5a15.5 15.5 0 1 0 31 0 15.5 15.5 0 0 0-31 0v0ZM43 42l-9-9"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
