export default function sections_gift_card() {
  const html = `




<div
  class="mx-auto flex min-h-screen max-w-2xl items-center justify-center px-5 py-10 lg:px-10"
  data-color-scheme="scheme1"
>
  <div class="card">
    <div class="card__surface p-5 lg:p-10">
      <header class="giftcard__header text-center" role="banner">
        <div class="site-header__logo h1 break-all text-center">
          <a
            href=""
            class="site-header__link site-header__logo-link font-heading heading-standard"
          >
            
              
              x
              <img
                src=""
                class="mx-auto"
                loading="eager"
                width=" "
                srcset=" 1x,  2x"
                alt=""
               />
            
              
            
          </a>
        </div>

        <h1 class="font-heading heading-standard mt-10">
          
        </h1>
        
          <p class="giftcard__tag"></p>
        
        
        
          <p class="giftcard__tag">
            
          </p>
        
        
          <p class="giftcard__tag giftcard__tag--active">
            
          </p>
        
      </header>

      <div class="giftcard-wrapper mt-8">
        <main class="giftcard" role="main">
          <div class="giftcard__wrap relative">
            <img
              src=""
              alt="Gift card illustration"
              loading="lazy"
             />

            
            <div class="h1 absolute right-0 top-0 p-2 text-2xl text-white lg:p-4 lg:text-5xl giftcard__amount giftcard__amount--medium">
              
                <span class="giftcard__tooltip">
                  <span class="giftcard__tooltip-label">
                    
                  </span>
                </span>
              
              <strong></strong>
            </div>

            <div class="giftcard__code absolute bottom-8 left-0 right-0 w-full text-center">
              <div class="giftcard__code__inner inline-block bg-white p-2 text-center text-base uppercase lg:text-2xl">
                <input
                  type="text"
                  style="box-shadow: none;"
                  class="border-text-width input giftcard__code__text block border-2 border-dashed p-2 text-center  disabled"
                  id="GiftCardDigits"
                  value=""
                  aria-label=""
                  readonly
                 />
              </div>
            </div>
          </div>

          <p class="mt-5 text-center">
            
          </p>

          <div class="flex justify-center py-8">
            <div
              id="QrCode"
              class="giftcard__qr-code"
              data-identifier=""
            ></div>
          </div>

          <ul class="giftcard-action-list relative z-10 text-center">
            <li class="giftcard-action-list__item mt-5">
              <a
                href=""
                class="push-btn inline-block"
                target="_blank"
                rel="noopener"
                aria-describedby="a11y-new-window-message"
              >
                <span class="push-btn__surface">
                  
                </span>
              </a>
            </li>
            <li class="mt-5">
              <button type="button" onclick="window.print();">
                <span></span>
              </button>
            </li>
            
              <li>
                <a
                  class="giftcard__apple-wallet"
                  href=""
                >
                  <img
                    class="giftcard__apple-wallet-image"
                    src=""
                    width="120"
                    height="40"
                    alt=""
                    loading="lazy"
                   />
                </a>
              </li>
            
          </ul>
        </main>
      </div>
    </div>
  </div>
</div>

<style>
  .giftcard__code__text &#123;
    min-width: 250px;
  &#125;
</style>


&#123;
  "name": "t:sections.gift_card.name",
  "settings": [
    &#123;
      "type": "image_picker",
      "id": "logo",
      "label": "t:common.settings.logo.label"
    &#125;,
    &#123;
      "type": "range",
      "id": "logo_max_width",
      "min": 20,
      "max": 450,
      "step": 10,
      "unit": "px",
      "label": "t:common.settings.logo_max_width.label",
      "default": 120
    &#125;
  ]
&#125;
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
