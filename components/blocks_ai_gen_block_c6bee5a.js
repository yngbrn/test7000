export default function blocks_ai_gen_block_c6bee5a() {
  const html = `<div>
  @prompt
    3 buttons





  .ai-three-buttons-container- &amp;#123;
    display: flex;
    gap: px;
    justify-content: ;
    flex-wrap: wrap;
    padding: px;
  &amp;#125;

  .ai-three-buttons-button- &amp;#123;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: px px;
    background-color: ;
    color: ;
    border: px solid ;
    border-radius: px;
    font-size: px;
    font-weight: ;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: px;
  &amp;#125;

  .ai-three-buttons-button-:hover &amp;#123;
    background-color: ;
    color: ;
    border-color: ;
    transform: translateY(-2px);
  &amp;#125;

  @media screen and (max-width: 749px) &amp;#123;
    .ai-three-buttons-container- &amp;#123;
      flex-direction: ;
      gap: px;
    &amp;#125;

    .ai-three-buttons-button- &amp;#123;
      
        width: 100%;
      
      font-size: px;
      padding: px px;
    &amp;#125;
  &amp;#125;


&lt;div class=&quot;ai-three-buttons-container-&quot; &gt;
  
    &lt;a
      href=&quot;&quot;
      class=&quot;ai-three-buttons-button-&quot;
    &gt;
      
    &lt;/a&gt;
  

  
    &lt;a
      href=&quot;&quot;
      class=&quot;ai-three-buttons-button-&quot;
    &gt;
      
    &lt;/a&gt;
  

  
    &lt;a
      href=&quot;&quot;
      class=&quot;ai-three-buttons-button-&quot;
    &gt;
      
    &lt;/a&gt;
  
&lt;/div&gt;


&amp;#123;
  &quot;name&quot;: &quot;Three buttons&quot;,
  &quot;settings&quot;: [
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;Button 1&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;text&quot;,
      &quot;id&quot;: &quot;button_1_text&quot;,
      &quot;label&quot;: &quot;Button 1 text&quot;,
      &quot;default&quot;: &quot;Shop now&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;url&quot;,
      &quot;id&quot;: &quot;button_1_link&quot;,
      &quot;label&quot;: &quot;Button 1 link&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;Button 2&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;text&quot;,
      &quot;id&quot;: &quot;button_2_text&quot;,
      &quot;label&quot;: &quot;Button 2 text&quot;,
      &quot;default&quot;: &quot;Learn more&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;url&quot;,
      &quot;id&quot;: &quot;button_2_link&quot;,
      &quot;label&quot;: &quot;Button 2 link&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;Button 3&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;text&quot;,
      &quot;id&quot;: &quot;button_3_text&quot;,
      &quot;label&quot;: &quot;Button 3 text&quot;,
      &quot;default&quot;: &quot;Contact us&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;url&quot;,
      &quot;id&quot;: &quot;button_3_link&quot;,
      &quot;label&quot;: &quot;Button 3 link&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;Layout&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;alignment&quot;,
      &quot;label&quot;: &quot;Button alignment&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;flex-start&quot;,
          &quot;label&quot;: &quot;Left&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;center&quot;,
          &quot;label&quot;: &quot;Center&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;flex-end&quot;,
          &quot;label&quot;: &quot;Right&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;space-between&quot;,
          &quot;label&quot;: &quot;Space between&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;space-around&quot;,
          &quot;label&quot;: &quot;Space around&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;center&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;button_spacing&quot;,
      &quot;min&quot;: 5,
      &quot;max&quot;: 50,
      &quot;step&quot;: 5,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Button spacing&quot;,
      &quot;default&quot;: 15
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;container_padding&quot;,
      &quot;min&quot;: 0,
      &quot;max&quot;: 50,
      &quot;step&quot;: 5,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Container padding&quot;,
      &quot;default&quot;: 20
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;mobile_layout&quot;,
      &quot;label&quot;: &quot;Mobile layout&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;row&quot;,
          &quot;label&quot;: &quot;Row&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;column&quot;,
          &quot;label&quot;: &quot;Column&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;column&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;mobile_button_spacing&quot;,
      &quot;min&quot;: 5,
      &quot;max&quot;: 30,
      &quot;step&quot;: 5,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Mobile button spacing&quot;,
      &quot;default&quot;: 10
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;Button style&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;button_min_width&quot;,
      &quot;min&quot;: 80,
      &quot;max&quot;: 200,
      &quot;step&quot;: 10,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Minimum width&quot;,
      &quot;default&quot;: 120
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;button_padding_vertical&quot;,
      &quot;min&quot;: 8,
      &quot;max&quot;: 25,
      &quot;step&quot;: 1,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Vertical padding&quot;,
      &quot;default&quot;: 12
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;button_padding_horizontal&quot;,
      &quot;min&quot;: 15,
      &quot;max&quot;: 40,
      &quot;step&quot;: 5,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Horizontal padding&quot;,
      &quot;default&quot;: 25
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;button_border_radius&quot;,
      &quot;min&quot;: 0,
      &quot;max&quot;: 25,
      &quot;step&quot;: 1,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Border radius&quot;,
      &quot;default&quot;: 5
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;button_border_width&quot;,
      &quot;min&quot;: 0,
      &quot;max&quot;: 5,
      &quot;step&quot;: 1,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Border width&quot;,
      &quot;default&quot;: 1
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;button_font_size&quot;,
      &quot;min&quot;: 12,
      &quot;max&quot;: 24,
      &quot;step&quot;: 1,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;Font size&quot;,
      &quot;default&quot;: 16
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;button_font_weight&quot;,
      &quot;label&quot;: &quot;Font weight&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;400&quot;,
          &quot;label&quot;: &quot;Normal&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;500&quot;,
          &quot;label&quot;: &quot;Medium&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;600&quot;,
          &quot;label&quot;: &quot;Semi bold&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;700&quot;,
          &quot;label&quot;: &quot;Bold&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;500&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;Colors&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color&quot;,
      &quot;id&quot;: &quot;button_background_color&quot;,
      &quot;label&quot;: &quot;Background color&quot;,
      &quot;default&quot;: &quot;#000f9f&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color&quot;,
      &quot;id&quot;: &quot;button_text_color&quot;,
      &quot;label&quot;: &quot;Text color&quot;,
      &quot;default&quot;: &quot;#ffffff&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color&quot;,
      &quot;id&quot;: &quot;button_border_color&quot;,
      &quot;label&quot;: &quot;Border color&quot;,
      &quot;default&quot;: &quot;#000f9f&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color&quot;,
      &quot;id&quot;: &quot;button_hover_background_color&quot;,
      &quot;label&quot;: &quot;Hover background color&quot;,
      &quot;default&quot;: &quot;#000000&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color&quot;,
      &quot;id&quot;: &quot;button_hover_text_color&quot;,
      &quot;label&quot;: &quot;Hover text color&quot;,
      &quot;default&quot;: &quot;#ffffff&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color&quot;,
      &quot;id&quot;: &quot;button_hover_border_color&quot;,
      &quot;label&quot;: &quot;Hover border color&quot;,
      &quot;default&quot;: &quot;#000000&quot;
    &amp;#125;
  ],
  &quot;presets&quot;: [
    &amp;#123;
      &quot;name&quot;: &quot;Three buttons&quot;
    &amp;#125;
  ],
  &quot;tag&quot;: null
&amp;#125;</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
