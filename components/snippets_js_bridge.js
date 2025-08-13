export default function snippets_js_bridge() {
  const html = `<script>
  window.THEMENAME = 'Shapes';
  window.THEMEVERSION = '1.0.1';

  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

  window.theme = &#123;
    strings: &#123;
      itemCountOne: ,
      itemCountOther: ,
      loading: ,
      addToCart: ,
      preOrder: ,
      soldOut: ,
      unavailable: ,
      regularPrice: ,
      salePrice: ,
      sale: ,
      unitPrice: ,
      unitPriceSeparator: ,
      cartEmpty: ,
      cartCookies: ,
      update: ,
      quantity: ,
      discountedTotal: ,
      regularTotal: ,
      priceColumn: ,
      addingToCart: ,
      addedToCart: ,
      cartError: ,
      cartAddError: 
    &#125;,
    routes: &#123;
      root_url: ,
      cart_url: ,
      cart_add_url: ,
      cart_change_url: ,
      cart_update_url: ,
      cart_clear_url: ,
      predictive_search_url: ''
    &#125;,
    moneyFormat: ,
    moneyWithCurrencyFormat: ,
    cartItemCount: ,
    settings: &#123;
      cartType: ,
      openModalOnAddToCart: ,
      parallaxIntensity: 
    &#125;,
    info: &#123;
      name: 'Shapes',
    &#125;
  &#125;;
</script>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
