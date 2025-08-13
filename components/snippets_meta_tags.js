export default function snippets_meta_tags() {
  const html = `

<meta property="og:site_name" content="">
<meta property="og:url" content="">
<meta property="og:title" content="">
<meta property="og:type" content="">
<meta property="og:description" content="">


  <meta property="og:image" content="http:">
  <meta
    property="og:image:secure_url"
    content="https:"
  >
  <meta property="og:image:width" content="">
  <meta property="og:image:height" content="">



  <meta
    property="og:price:amount"
    content=""
  >
  <meta property="og:price:currency" content="">



  <meta
    name="twitter:site"
    content=""
  >

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="">
<meta name="twitter:description" content="">`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
