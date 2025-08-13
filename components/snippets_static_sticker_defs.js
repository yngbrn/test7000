export default function snippets_static_sticker_defs() {
  const html = `
<svg width="0" height="0" viewBox="0 0 200 200">
  <defs>
    <clipPath id="clip-" clipPathUnits="objectBoundingBox">
      <path clip-rule="evenodd" transform="scale(0.005,0.005)" d="" fill="black"/>
    </clipPath>
    <path id="outline-" vector-effect="non-scaling-stroke"  d="" />
  </defs>
</svg>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
