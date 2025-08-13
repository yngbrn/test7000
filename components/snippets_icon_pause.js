export default function snippets_icon_pause() {
  const html = `<svg
  class="theme-icon"
  viewBox="0 0 48 48"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.667 5h-3.334C10.493 5 9 6.547 9 8.455v31.09C9 41.453 10.492 43 12.333 43h3.334C17.507 43 19 41.453 19 39.545V8.455C19 6.547 17.508 5 15.667 5Zm21 0h-3.334C31.493 5 30 6.547 30 8.455v31.09C30 41.453 31.492 43 33.333 43h3.334C38.507 43 40 41.453 40 39.545V8.455C40 6.547 38.508 5 36.667 5Z"/>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
