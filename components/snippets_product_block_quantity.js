export default function snippets_product_block_quantity() {
  const html = `
<data-island
  class=""
  x-data="Quantity"
  
>
  <div class="lg:flex lg:items-center lg:justify-start">
    <label
      class="  pr-2.5 lg:w-1/4 lg:shrink-0 xl:w-1/5"
      for="Quantity-"
    >
      
    </label>
    <div class="mt-2.5 lg:mt-0 lg:flex-1">
      <div class="flex flex-nowrap items-center justify-start">
        <button
          class="push-btn"
          aria-label="&minus;"
          @click.prevent.stop="decrement"
        >
          <div class="push-btn__surface push-btn__surface--secondary p-2 align-bottom">
            <div class="m-auto h-4 w-4"></div>
          </div>
        </button>
        <input
          type="number"
          class="input--no-border block max-w-[3rem] appearance-none border-0 bg-transparent p-2 text-center text-base text-scheme-text"
          form=""
          id="Quantity-"
          name="quantity"
          x-model.number.fill="quantity"
          x-ref="quantityInput"
          min="1"
          value="1"
          step="1"
         />
        <button
          class="push-btn"
          aria-label="&plus;"
          @click.prevent.stop="increment"
        >
          <div class="push-btn__surface push-btn__surface--secondary p-2 align-bottom">
            <div class="m-auto h-4 w-4"></div>
          </div>
        </button>
      </div>
    </div>
  </div>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
