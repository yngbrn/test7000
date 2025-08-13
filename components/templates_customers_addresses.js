export default function templates_customers_addresses() {
  const html = `
  <div
    class="section-content mx-auto max-w-lg px-section py-section-vertical-spacing"
    data-color-scheme="scheme1"
  >
    <a class="mb-10 inline-block text-sm" href=""
      >&larr; 
    </a>
    <h1 class="font-heading heading-feature mb-5">
      
    </h1>
    <div data-address>
      <button
        class="push-btn mb-5 w-full"
        type="button"
        id="AddressNewButton"
        data-address-new
        aria-expanded="false"
      >
        <span class="push-btn__surface w-full">
          
        </span>
      </button>

      
        <div
          data-address-form
          class="hidden pb-8"
          id="AddressNewForm"
        >
          <h2 class="font-heading heading-standard mb-2.5">
            
          </h2>

          <div class="">
            
              
            
          </div>

          <div data-address-fields class="address-form mt-5">
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressFirstNameNew"
              >
                
              </label>
              <input
                class="w-full"
                type="text"
                name="address[first_name]"
                id="AddressFirstNameNew"
                value=""
                autocomplete="given-name"
                autocapitalize="words"
               />
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressLastNameNew"
              >
                
              </label>
              <input
                class="w-full"
                type="text"
                name="address[last_name]"
                id="AddressLastNameNew"
                value=""
                autocapitalize="words"
                autocomplete="family-name"
               />
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressCompanyNew"
              >
                
              </label>
              <input
                class="w-full"
                type="text"
                name="address[company]"
                id="AddressCompanyNew"
                value=""
                autocomplete="organization"
                autocapitalize="words"
               />
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressAddress1New"
              >
                
              </label>
              <input
                class="w-full"
                type="text"
                name="address[address1]"
                id="AddressAddress1New"
                value=""
                autocomplete="street-address address-line1"
                autocapitalize="words"
               />
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressAddress2New"
              >
                
              </label>
              <input
                class="w-full"
                type="text"
                name="address[address2]"
                id="AddressAddress2New"
                value=""
                autocomplete="street-address address-line2"
                autocapitalize="words"
               />
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressCityNew"
              >
                
              </label>
              <input
                class="w-full"
                type="text"
                name="address[city]"
                id="AddressCityNew"
                value=""
                autocomplete="address-level2"
                autocapitalize="words"
               />
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressCountryNew"
              >
                
              </label>
              <select
                class="w-full appearance-none text-scheme-text"
                name="address[country]"
                id="AddressCountryNew"
                autocomplete="country"
                data-provinces="Test"
                data-default=""
              >
                
              </select>
            </div>
            <div id="AddressProvinceContainerNew">
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressProvinceNew"
              >
                
              </label>
              <select
                class="w-full appearance-none text-scheme-text"
                name="address[province]"
                id="AddressProvinceNew"
                autocomplete="address-level1"
                data-default=""
              ></select>
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressZipNew"
              >
                
              </label>
              <input
                class="w-full"
                type="text"
                name="address[zip]"
                id="AddressZipNew"
                value=""
                autocomplete="postal-code"
                autocapitalize="characters"
               />
            </div>
            <div>
              <label
                class="font-secondary mb-1 mt-5 block text-sm"
                for="AddressPhoneNew"
              >
                
              </label>
              <input
                class="w-full"
                type="tel"
                name="address[phone]"
                id="AddressPhoneNew"
                value=""
                autocomplete="phone"
                pattern="[0-9\-]*"
               />
            </div>
          </div>
          <div class="mt-4">
            
            <label for="address_default_address_new">
              
            </label>
          </div>

          <div class="mt-4">
            <button class="push-btn mr-4 w-full" type="submit">
              <span class="push-btn__surface w-full">
                
              </span>
            </button>
            <button type="button" data-address-new class="mt-2.5">
              
            </button>
          </div>
        </div>
      
    </div>

    <h2 class="font-heading heading-standard mb-2.5">
      
    </h2>

    
      <div data-address class="border-t-text border-primary-border mt-4 pt-4">
        
          <p>
            <strong></strong>
          </p>
        

        

        <div class="mt-4">
          <button
            class="push-btn mr-4 w-full"
            type="button"
            id="EditFormButton_"
            data-address-edit=""
            aria-expanded="false"
          >
            <span class="push-btn__surface w-full">
              
            </span>
          </button>
          <form
            class="mt-2.5 inline-block"
            data-address-delete-form
            method="post"
            data-target=""
            action="/account/addresses/"
            data-confirm-message=""
          >
            <input class="w-full" type="hidden" name="_method" value="delete" />
            <button type="submit">
              
            </button>
          </form>
        </div>

        <div
          id="EditAddress_"
          data-address-form=""
          class="hidden py-8"
        >
          
            <h3 class="font-heading text-lg">
              
            </h3>
            <div data-address-fields class="address-form">
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressFirstName_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="text"
                  name="address[first_name]"
                  id="AddressFirstName_"
                  value=""
                  autocomplete="given-name"
                  autocapitalize="words"
                 />
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressLastName_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="text"
                  name="address[last_name]"
                  id="AddressLastName_"
                  value=""
                  autocapitalize="words"
                  autocomplete="family-name"
                 />
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressCompany_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="text"
                  name="address[company]"
                  id="AddressCompany_"
                  value=""
                  autocomplete="organization"
                  autocapitalize="words"
                 />
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressAddress1_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="text"
                  name="address[address1]"
                  id="AddressAddress1_"
                  value=""
                  autocomplete="street-address address-line1"
                  autocapitalize="words"
                 />
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressAddress2_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="text"
                  name="address[address2]"
                  id="AddressAddress2_"
                  value=""
                  autocomplete="street-address address-line2"
                  autocapitalize="words"
                 />
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressCity_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="text"
                  name="address[city]"
                  id="AddressCity_"
                  value=""
                  autocomplete="address-level2"
                  autocapitalize="words"
                 />
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressCountry_"
                >
                  
                </label>
                <select
                  class="address-country-option w-full appearance-none text-scheme-text"
                  name="address[country]"
                  id="AddressCountry_"
                  data-form-id=""
                  autocomplete="country"
                  data-default=""
                >
                  
                </select>

                <div id="AddressProvinceContainer_">
                  <label
                    class="font-secondary mb-1 mt-5 block text-sm"
                    for="AddressProvince_"
                  >
                    
                  </label>
                  <select
                    class="w-full appearance-none text-scheme-text"
                    name="address[province]"
                    id="AddressProvince_"
                    autocomplete="address-level1"
                    data-default=""
                  ></select>
                </div>
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressZip_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="text"
                  name="address[zip]"
                  id="AddressZip_"
                  value=""
                  autocomplete="postal-code"
                  autocapitalize="characters"
                 />
              </div>
              <div>
                <label
                  class="font-secondary mb-1 mt-5 block text-sm"
                  for="AddressPhone_"
                >
                  
                </label>
                <input
                  class="w-full"
                  type="tel"
                  name="address[phone]"
                  id="AddressPhone_"
                  value=""
                  autocomplete="phone"
                  pattern="[0-9\-]*"
                 />
              </div>
            </div>
            <div class="mt-4">
              
              <label for="address_default_address_">
                
              </label>
            </div>

            <div class="mt-4">
              <button class="push-btn mr-4 w-full" type="submit">
                <span class="push-btn__surface w-full">
                  
                </span>
              </button>
              <button
                type="button"
                class="mt-2.5"
                data-address-edit=""
              >
                
              </button>
            </div>
          
        </div>
      </div>
    

    
      
    
  </div>


<script>
    var newAddressForm = document.getElementById('AddressNewForm');
    var newAddressFormButton = document.getElementById('AddressNewButton');

    if (!newAddressForm) &#123;
      return;
    &#125;

      // eslint-disable-next-line no-new
        'AddressCountryNew',
        'AddressProvinceNew',
        &#123;
          hideElement: 'AddressProvinceContainerNew',
        &#125;
      );
    &#125;

    // Initialize each edit form's country/province selector
    document
      .querySelectorAll('.address-country-option')
      .forEach(function (option) &#123;
        var formId = option.dataset.formId;
        var countrySelector = 'AddressCountry_' + formId;
        var provinceSelector = 'AddressProvince_' + formId;
        var containerSelector = 'AddressProvinceContainer_' + formId;
        // eslint-disable-next-line no-new
          hideElement: containerSelector,
        &#125;);
      &#125;);

    // Toggle new/edit address forms
    document.querySelectorAll('[data-address-new]').forEach(function (button) &#123;
      button.addEventListener('click', function () &#123;
        var isExpanded =
          newAddressFormButton.getAttribute('aria-expanded') === 'true';

        newAddressForm.classList.toggle('hidden');
        newAddressFormButton.setAttribute('aria-expanded', !isExpanded);
        newAddressFormButton.focus();
      &#125;);
    &#125;);

    document.querySelectorAll('[data-address-edit]').forEach(function (button) &#123;
      button.addEventListener('click', function (evt) &#123;
        var formId = evt.target.dataset.addressEdit;
        var editButton = document.getElementById('EditFormButton_' + formId);
        var editAddress = document.getElementById('EditAddress_' + formId);
        var isExpanded = editButton.getAttribute('aria-expanded') === 'true';

        editAddress.classList.toggle('hidden');
        editButton.setAttribute('aria-expanded', !isExpanded);
        editButton.focus();
      &#125;);
    &#125;);

    document
      .querySelectorAll('[data-address-delete-form]')
      .forEach(function (form) &#123;
        form.addEventListener('submit', function (evt) &#123;
          evt.preventDefault();
          var target = evt.target.dataset.target;
          var confirmMessage = evt.target.dataset.confirmMessage;

          // eslint-disable-next-line no-alert
          if (
            confirm(
              confirmMessage || 'Are you sure you wish to delete this address?'
            )
          ) &#123;
              parameters: &#123; _method: 'delete' &#125;,
            &#125;);
          &#125;
        &#125;);
      &#125;);
  &#125;
</script>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
