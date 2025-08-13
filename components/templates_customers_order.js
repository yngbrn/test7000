export default function templates_customers_order() {
  const html = `
<div
  class="section-content max-w-site px-section py-section-vertical-spacing"
  data-color-scheme="scheme1"
>
  <a class="mb-10 inline-block text-sm" href=""
    >&larr; 
  </a>
  <h1 class="font-heading heading-feature mb-5">
    
  </h1>

  <h2 class="font-heading heading-secondary mb-2.5">
    
  </h2>
  <p class="text-sm">
    
  </p>

  
    
    <p></p>
    <p>
      
    </p>
  

  <table class="responsive-table mt-4 text-sm">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      
        <tr
          id=""
          class="responsive-table-row  border-t-grid border-grid-color lg:border-none"
        >
          <td data-label="">
            <div class="space-y-3">
              <span class="text-scheme-accent-1">
                
              </span>

              
                <div class="mt-1 text-sm">
                  
                </div>
              

              
                
                  
                  
                    <div class="mt01 text-sm">
                      
                      :

                      
                      
                        <a href="">
                          
                        </a>
                      
                        
                      
                    </div>
                  
                
              

              
                <ul
                  class="mb2 mt-1 text-sm text-scheme-accent-1 lg:text-base"
                  aria-label=""
                >
                  
                    <li class="order-discount__item">
                       (-
                      
                      )
                    </li>
                  
                </ul>
              

              
                <div class="fulfillment mt-2 space-y-1 text-xs">
                  
                  <span class="block">
                    
                    
                  </span>

                  
                    <a
                      class="block underline"
                      href=""
                    >
                      
                    </a>
                  
                  <span class="block">
                    
                    
                      #
                    
                  </span>
                </div>
              
            </div>
          </td>
          <td data-label="">
            
          </td>
          <td data-label="">
            <div>
              
                <del class="cart__price block ">
                  
                </del>
                <span class="order-discount cart__price line-height--1 mb2 block text-scheme-accent-1">
                  
                </span>
              
                <span></span>
              
              
                <div class="mt-1 text-sm  text-scheme-accent-1">
                  <span class="visually-hidden">
                    
                  </span>
                  
                  <span aria-hidden="true">/&nbsp;</span
                  ><span class="visually-hidden">
                    
                    &nbsp;</span
                  >
                  
                    
                  
                  
                </div>
              
            </div>
          </td>
          <td data-label="">
            
          </td>
          <td data-label="">
            <div>
              
                <del class="cart__price block ">
                  
                </del>
                <span class="order-discount cart__price line-height--1 mb2 block text-scheme-accent-1">
                  
                </span>
              
                <span></span>
              
            </div>
          </td>
        </tr>
      
    </tbody>
    <tfoot>
      <tr class="responsive-table-row border-t-grid border-grid-color lg:border-none">
        <td colspan="4" class="table-small-hide">
          
        </td>
        <td data-label="">
          
        </td>
      </tr>

      
        
          <tr>
            <td colspan="4" class="table-small-hide">
              
              &nbsp;&mdash;&nbsp;<span class="text-scheme-accent-1">
                
              </span>
            </td>
            <td
              class="align--bottom text-right text-scheme-accent-1"
              data-label=""
            >
              <span
                ><span class="text-sm text-scheme-accent-1 lg:hidden">
                  
                </span>
                -
              </span>
            </td>
          </tr>
        
      

      
        <tr>
          <td colspan="4" class="table-small-hide">
             ()
          </td>
          <td data-label=" ()">
            
          </td>
        </tr>
      

      
        <tr>
          <td colspan="4" class="table-small-hide">
             (
            %)
          </td>
          <td data-label=" ( %)">
            
          </td>
        </tr>
      

      <tr class="font-bold">
        <td colspan="4" class="table-small-hide">
          
        </td>
        <td data-label="">
          &nbsp;
        </td>
      </tr>

      
        <tr>
          <td colspan="4" class="table-small-hide pt1">
            
          </td>
          <td
            class="pt1 text-right"
            data-label=""
          >
            
            
          </td>
        </tr>
      
    </tfoot>
  </table>

  <div class="lg:grid lg:grid-cols-2">
    <div class="mt-10">
      <h3 class="font-heading heading-secondary mb-2.5">
        
      </h3>

      <p>
        :
        
      </p>

      
    </div>
    <div class="mt-10">
      <h3 class="font-heading heading-secondary mb-2.5">
        
      </h3>

      <p>
        :
        
      </p>

      
    </div>
  </div>
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
