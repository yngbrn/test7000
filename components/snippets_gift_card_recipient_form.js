export default function snippets_gift_card_recipient_form() {
  const html = `

<data-island
  x-data="GiftCardRecipient"
  src="/assets/island-gift-card-recipient.bundle.js"
>
  <div
    class="custom-checkbox js-enabled"
  >
    <input
      x-model="enabled"
      type="checkbox"
      name=""
      class="sr-only absolute"
      id="Recipient-Checkbox-"
      disabled
      :disabled="false"
     />
    <label
      class="flex items-center justify-start"
      for="Recipient-Checkbox-"
    >
      <span class="custom-checkbox__input"></span>
      
    </label>
  </div>
  <div
    class="no-js-undo-cloak"
    x-show="enabled"
    x-collapse
    x-cloak
  >
    <div
      class="text-scheme-accent-1-contrast mt-5 rounded-button bg-scheme-accent-1 p-5  hidden"
      :class="&#123; 'hidden' : !errors &#125;"
    >
      <h2 class="font-heading" tabindex="-1" autofocus>
        
      </h2>
      <ul class="space-y-2.5">
        
          
            <li class="font-secondary text-sm">
              
                
              
                <a
                  href="#Recipient--"
                  class="underline"
                >
                  
                </a>
              
            </li>
          
        
        <template x-if="errors">
          <template x-for="(error, field) in errors" :key="field">
            <li class="font-secondary text-sm">
              <template x-if="field === 'form'">
                <span
                  x-text="error"
                ></span>
              </template>
              <template x-if="field !== 'form'">
                <a
                  :href="\`#Recipient-$&#123;field&#125;-\`"
                  class="underline"
                  x-text="error"
                >
                </a>
              </template>
            </li>
          </template>
        </template>
      </ul>
    </div>
    <fieldset>
      <div>
        <label
          class=""
          for="Recipient-email-"
        >
          <span class="js-enabled">
            
          </span>
          <span class="no-js">
            
          </span>
        </label>
        <input
          class=" "
          type="email"
          :class="&#123; '' : errors && errors.hasOwnProperty('email') &#125;"
          id="Recipient-email-"
          placeholder=""
          value=""
          name="properties[Recipient email]"
          
            aria-invalid="true"
            aria-describedby="RecipientForm-email-error-"
          
          :disabled="!enabled"
         />
      </div>
      <div
        id="RecipientForm-email-error-"
        class=" hidden"
        :class="&#123; 'hidden' : !(errors && errors.hasOwnProperty('email')) &#125;"
        x-text="errors && errors.hasOwnProperty('email') ? \`$&#123;errors['email']&#125;.\` : null"
      >
        
          .
        
      </div>

      <div>
        <label
          class=""
          for="Recipient-name-"
        >
          
        </label>
        <input
          class=" "
          :class="&#123; '' : errors && errors.hasOwnProperty('name') &#125;"
          autocomplete="name"
          type="text"
          id="Recipient-name-"
          placeholder=""
          value=""
          name="properties[Recipient name]"
          
            aria-invalid="true"
            aria-describedby="RecipientForm-name-error-"
          
          :disabled="!enabled"
         />
      </div>
      <div
        id="RecipientForm-name-error-"
        class=" hidden"
        :class="&#123; 'hidden' : !(errors && errors.hasOwnProperty('name')) &#125;"
        x-text="errors && errors.hasOwnProperty('name') ? \`$&#123;errors['name']&#125;.\` : null"
      >
        
          .
        
      </div>

      <div>
        
        <label
          class=""
          for="Recipient-message-"
        >
          
        </label>
        <textarea
          rows="10"
          id="Recipient-message-"
          class=" "
          :class="&#123; '' : errors && errors.hasOwnProperty('message') &#125;"
          name="properties[Message]"
          maxlength=""
          placeholder=""
          aria-label=""
          
            aria-invalid="true"
            aria-describedby="RecipientForm-message-error-"
          
          x-model="recipientMessage"
          :disabled="!enabled"
        ></textarea>
      </div>

      <label class="">
        <span class="no-js"></span>
        <span class="js-enabled"
          ><span x-text="messageLength"></span
          >/<span x-show="messageLength < ">
            </span
          ><span x-show="messageLength >= ">
            
          </span>
        </span>
      </label>

      <div
        id="RecipientForm-message-error-"
        class=" hidden"
        :class="&#123; 'hidden' : !(errors && errors.hasOwnProperty('message')) &#125;"
        x-text="errors && errors.hasOwnProperty('message') ? \`$&#123;errors['message']&#125;.\` : null"
      >
        
          .
        
      </div>

      <div>
        <label
          class=""
          for="Recipient-send_on-"
        >
          
        </label>
        <input
          class=" "
          :class="&#123; '' : errors && errors.hasOwnProperty('send_on') &#125;"
          autocomplete="send_on"
          type="date"
          id="Recipient-send_on-"
          placeholder=""
          pattern="\d&#123;4&#125;-\d&#123;2&#125;-\d&#123;2&#125;"
          value=""
          name="properties[Send on]"
          
            aria-invalid="true"
            aria-describedby="RecipientForm-send_on-error-"
          
          :disabled="!enabled"
         />
      </div>
      <div
        id="RecipientForm-send_on-error-"
        class=" hidden"
        :class="&#123; 'hidden' : !(errors && errors.hasOwnProperty('send_on')) &#125;"
        x-text="errors && errors.hasOwnProperty('send_on') ? \`$&#123;errors['send_on']&#125;.\` : null"
      >
        
          .
        
      </div>
    </fieldset>
    <input
      type="hidden"
      name=""
      value="if_present"
      id="Recipient-Control-"
      :disabled="true"
     />
    <input
      type="hidden"
      value=""
      id="Recipient-timezone-offset-"
      disabled
      :disabled="false"
      :value="new Date().getTimezoneOffset()"
     />
  </div>
</data-island>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
