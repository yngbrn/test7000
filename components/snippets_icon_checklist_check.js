export default function snippets_icon_checklist_check() {
  const html = `<svg
  role="img"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
    <title>Checkmark</title>
    <path vector-effect="non-scaling-stroke" d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path vector-effect="non-scaling-stroke" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
