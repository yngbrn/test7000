export default function snippets_icon_play() {
  const html = `<svg
  class="theme-icon"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7.653a1.654 1.654 0 0 1 2.394-1.479l32.693 16.347a1.654 1.654 0 0 1 0 2.958L10.394 41.825A1.654 1.654 0 0 1 8 40.347V7.653Z"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
