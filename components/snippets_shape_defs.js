export default function snippets_shape_defs() {
  const html = `
  
  <svg
    width="0"
    height="0"
    viewBox=""
    role="presentation"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <clipPath id="clip-" clipPathUnits="objectBoundingBox">
        <path clip-rule="evenodd" transform="" d="" fill="black"/>
      </clipPath>
      <path id="outline-" vector-effect="non-scaling-stroke" d="" />
    </defs>
  </svg>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
