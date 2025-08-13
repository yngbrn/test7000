export default function snippets_icon_add() {
  const html = `<svg
  class="theme-icon"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path vector-effect="non-scaling-stroke" d="M24 5v38m19-19H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
