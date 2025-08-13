export default function snippets_icon_menu() {
  const html = `<svg
  class="theme-icon"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path vector-effect="non-scaling-stroke" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43 38H5m38-14H5m38-14H5"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
