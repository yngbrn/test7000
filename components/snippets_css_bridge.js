export default function snippets_css_bridge() {
  const html = `<div>
  :root &amp;#123;
    --payment-button-height: 48px;
    --section-x-padding: 1.25rem;
    --grid-gap: 1.25rem;
    --icon-thickness: ;
    --header-height: 60px;
    --global-scrolling-items-speed-multiplier: 1;
    --transparent: transparent;

    --section-border-color: , , ;
    --section-border-thickness: px0px;
    --shape-divider-offset: px2px;

    --button-border-radius: ;
    --textarea-border-radius: 1rem;
    --button-border-width: px;
    --input-border-width: px1px;
    --button-shadow-border-width: var(--button-border-width)0;
    --button-text-transform: uppercasenone;
    --button-drop-shadow-size:  px0px;
    --button-drop-shadow-top-size: -px;
    --button-drop-shadow-left-size: -0pxpx;
    --button-hover-top-size: -px0px;
    --button-hover-left-size: var(--button-drop-shadow-left-size);
    --button-shadow-display: blocknone;
    --sticker-border-radius: ;
    --sticker-border-width: px;
    --sticker-shadow-border-width: var(--sticker-border-width)0;
    --sticker-text-transform: uppercasenone;
    --sticker-drop-shadow-top-size: -px;
    --sticker-drop-shadow-left-size: -0px;
    --sticker-drop-shadow-display: blocknone;
    --card-border-radius: ;
    --card-drop-shadow-size: px;
    --card-drop-shadow-top-size: -px;
    --card-drop-shadow-left-size: -0px;
    --card-border-width: px;
    --card-shadow-border-width: var(--card-border-width)0;
    --media-border-radius: ;
    --media-drop-shadow-display: blocknone;
    --media-drop-shadow-size: px;
    --media-drop-shadow-top-size: -px;
    --media-drop-shadow-left-size: -0px;
    --media-drop-shadow-size-half: px;
    --media-drop-shadow-top-size-half: -px;
    --media-drop-shadow-left-size-half: -0px;
    --media-border-width: px;
    --media-shadow-border-width: var(--media-border-width)0;
    --heading-shadow-spread: px;
    --heading-stroke-thickness: px;
    --product-tiles-text-transform: uppercasenone;
    --general-border-width: px;

    
    --chart-height: 1rem;
    
    --chart-height: 0.75rem;
    
    --chart-height: 0.5rem;
    

    --hover-effect-zoom-media: 1.31;
    --hover-effect-enlarge-shape: 1.11;
    --hover-effect-lift-shape: -rem0;
    --hover-effect-rotate-shape: deg0deg;
  &amp;#125;

  
    

    
      url(&quot;data:image/svg+xml,%3Csvg width=&#x27;48&#x27; height=&#x27;48&#x27; viewBox=&#x27;0 0 48 48&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M2 12L23.2826 36.0527C23.3724 36.1542 23.4826 36.2354 23.6062 36.291C23.7297 36.3467 23.8636 36.3755 23.999 36.3755C24.1345 36.3755 24.2684 36.3467 24.3919 36.291C24.5154 36.2354 24.6257 36.1542 24.7155 36.0527L46 12&#x27; stroke=&#x27;&#x27; stroke-width=&#x27;&#x27; stroke-linecap=&#x27;round&#x27; stroke-linejoin=&#x27;round&#x27; vector-effect=&#x27;non-scaling-stroke&#x27;/%3E%3C/svg%3E%0A&quot;)
    

    
      :root,
    
    [data-color-scheme=&quot;&quot;] &amp;#123;
      --color-scheme-text: , , ;
      --color-scheme-text-contrast: , , ;
      --color-scheme-background: , , ;
      --color-scheme-accent-1: , , ;
      --color-scheme-accent-1-contrast: , , ;
      --color-scheme-accent-2: , , ;
      --color-scheme-accent-2-contrast: , , ;
      --color-scheme-card-text: , , ;
      --color-scheme-card: , , ;
      --color-scheme-gradient: ;
      --color-scheme-secondary-background: ;
      --color-scheme-secondary-text: ;
      --select-svg: ;
    &amp;#125;

    /* unique values for each scheme */
    :root &amp;#123;
      --color-scheme--text:   ;
      --color-scheme--text-contrast: , , ;
      --color-scheme--background: , , ;
      --color-scheme--accent-1: , , ;
      --color-scheme--accent-1-contrast: , , ;
      --color-scheme--accent-2: , , ;
      --color-scheme--accent-2-contrast: , , ;
      --color-scheme--card-text: , , ;
      --color-scheme--card: , , ;
      --color-scheme--gradient: ;
      --color-scheme--secondary-background: ;
      --color-scheme--secondary-text: ;
      --color-scheme--select-svg: ;
    &amp;#125;
  

  

  ::selection &amp;#123;
    background-color: rgb();
    color: rgb();
  &amp;#125;

  
    .card &amp;#123;
      --color-scheme-secondary-background: var(--color-scheme-card);
      --color-scheme-secondary-text: var(--color-scheme-card-text);
    &amp;#125;
  


  [data-color-scheme] &amp;#123;
    --color-heading-shadow: var(--);
    --color-heading-stroke: var(--);
    --color-button-background: var(--color-scheme-);
    --color-button-text: var(--color-scheme--contrast);
    --color-button-border: var(--color-scheme-text);
    --color-button-shadow: var(--);
    --color-card-border: var(--);
    --color-card-shadow: var(--);
    --color-sticker-border: var(--);
    --color-sticker-shadow: var(--);
    --color-media-border: var(--);
    --color-media-shadow: var(--);
    --color-media-shadow-fill: rgb(var(--));
    --color-sticker-shadow: var(--);
    --color-sticker-shadow-fill: rgb(var(--));
    
      --color-sticker-shadow-fill: none;
    
    
      --color-media-shadow-fill: none;
    
    --heading-color: var(--);
    --heading-italics-color: var(--);
    --heading-text-shadow:
      
      
      em em 0 rgb(var(--color-heading-shadow))
      ;,
      
      
      
        em em 0 rgb(var(--color-heading-shadow));
      
    --payment-terms-background-color: rgb(var(--color-scheme-background));

    
      --color-button-background-hover: var(--color-scheme-);
      --color-button-text-hover: var(--color-scheme--contrast);
      --color-button-border-hover: var(--color-scheme-);
      --color-button-secondary-text-hover: var(--color-scheme--contrast);
      --color-button-secondary-background-hover: var(--color-scheme-);
    
      --color-button-background-hover: var(--color-button-background);
      --color-button-text-hover: var(--color-button-text);
      --color-button-border-hover: var(--color-scheme-text);
      --color-button-secondary-text-hover: var(--color-scheme-secondary-text);
      --color-button-secondary-background-hover: var(--color-scheme-secondary-background);
    
  &amp;#125;

  /*
  Typography and spacing sizes
  */
  
  :root &amp;#123;
    --base-font-size: %;
    --base-line-height: ;
    --heading-line-height: ;

    --font-size-ratio-xs: 0.7491535;
    --font-size-ratio-sm: 0.8908985;
    --font-size-ratio-base: 1;
    --font-size-ratio-lg: 1.33484;
    --font-size-ratio-xl: 1.498307;
    --font-size-ratio-2xl: 1.681793;
    --font-size-ratio-3xl: 2;
    --font-size-ratio-4xl: 2.66968;
    --font-size-ratio-5xl: 2.996614;
    --font-size-ratio-6xl: 3.563594;
    --font-size-ratio-7xl: 4;
    --font-size-ratio-8xl: 4.519842;
    --font-size-ratio-9xl: 4.996614;
    --font-size-ratio-10xl: 5.563594;

    --font-size-xs: calc(var(--font-size-ratio-xs) * 1rem);
    --font-size-sm: calc(var(--font-size-ratio-sm) * 1rem);
    --font-size-base: calc(var(--font-size-ratio-base) * 1rem);
    --font-size-lg: calc(var(--font-size-ratio-lg) * 1rem);
    --font-size-xl: calc(var(--font-size-ratio-xl) * 1rem);
    --font-size-2xl: calc(var(--font-size-ratio-2xl) * 1rem);
    --font-size-3xl: calc(var(--font-size-ratio-3xl) * 1rem);
    --font-size-4xl: calc(var(--font-size-ratio-4xl) * 1rem);
    --font-size-5xl: calc(var(--font-size-ratio-5xl) * 1rem);
    --font-size-6xl: calc(var(--font-size-ratio-6xl) * 1rem);
    --font-size-7xl: calc(var(--font-size-ratio-7xl) * 1rem);
    --font-size-8xl: calc(var(--font-size-ratio-8xl) * 1rem);
    --font-size-9xl: calc(var(--font-size-ratio-9xl) * 1rem);
    --font-size-10xl: calc(var(--font-size-ratio-10xl) * 1rem);

    --type-scale-n-2: var(--font-size-xs);
    --type-scale-n-1: var(--font-size-sm);
    --type-scale-n0: var(--font-size-base);
    --type-scale-n1: var(--font-size-lg);
    --type-scale-n2: var(--font-size-xl);
    --type-scale-n3: var(--font-size-2xl);
    --type-scale-n4: var(--font-size-3xl);
    --type-scale-n5: var(--font-size-4xl);
    --type-scale-n6: var(--font-size-5xl);
    --type-scale-n7: var(--font-size-6xl);
    --type-scale-n8: var(--font-size-7xl);
    --type-scale-n9: var(--font-size-8xl);
    --type-scale-n10: var(--font-size-9xl);
    --type-scale-n11: var(--font-size-10xl);

    --standard-heading-size: var(--type-scale-n);
    --feature-heading-size: var(--type-scale-n);
    --secondary-heading-size: var(--type-scale-n);

    --section-vertical-spacing: ;

    
      --button-font-stack: var(--heading-font-stack);
      --button-font-weight: var(--heading-font-weight);
      --button-font-style: var(--heading-font-style);
      --button-letter-spacing: var(--heading-letterspacing);
    
      --button-font-stack: var(--main-font-stack);
      --button-font-weight: var(--main-font-weight);
      --button-font-style: var(--main-font-style);
      --button-letter-spacing: inherit;
    
  &amp;#125;

  &amp;#125;

  @media (min-width: 990px) &amp;#123;
    :root &amp;#123;
      --standard-heading-size: var(--type-scale-n);
      --feature-heading-size: var(--type-scale-n);
      --secondary-heading-size: var(--type-scale-n);
      --section-vertical-spacing: ;
      --section-x-padding: 2.5rem;
      --grid-gap: 2.5rem;
    &amp;#125;
  &amp;#125;

  .heading-standard &amp;#123;
    font-size: var(--standard-heading-size);
  &amp;#125;

  .heading-feature &amp;#123;
    font-size: var(--feature-heading-size);
  &amp;#125;

  .heading-secondary &amp;#123;
    font-size: var(--secondary-heading-size);
  &amp;#125;

  /*
  Rich Text Editor
  */
  

  :root,
  [data-color-scheme] &amp;#123;
    --rte-spacing: 1.25rem;
    --rte-link-color: ;
    --rte-link-color-contrast: ;
    --rte-link-hover-color: ;
    --rte-blockquote-background-color: ;
    --rte-blockquote-text-color: ;
    --rte-list-style-type: ;
    --underline-thickness: px;
    --rte-link-decoration-style: ;
  &amp;#125;

  .rte a,
  .inline-rte a &amp;#123;
    text-decoration-line: underline;
    text-decoration-style: var(--rte-link-decoration-style);
    text-decoration-thickness: var(--underline-thickness);
    color: rgb(var(--rte-link-color));
  &amp;#125;

  .rte a:hover,
  .inline-rte a:hover &amp;#123;
    color: rgb(var(--rte-link-hover-color));
  &amp;#125;

  .inline-heading-rte a &amp;#123;
    text-decoration-line: underline;
    text-decoration-style: var(--rte-link-decoration-style);
    text-decoration-thickness: var(--underline-thickness);
  &amp;#125;

  .heading-effects a &amp;#123;
    text-decoration-line: unset;
    text-decoration-style: unset;
    text-decoration-thickness: unset;
  &amp;#125;


  /*
  Heading effects
  */
  

  :root &amp;#123;
    --heading-highlight-start: %;
    --heading-highlight-end: %;
    --heading-highlight-opacity-0: rgba(255,255,255,0);
    --color-heading-highlight: ;
    --color-heading-highlight-text: ;
    --heading-text-highlight: linear-gradient(180deg, var(--heading-highlight-opacity-0) var(--heading-highlight-start), var(--color-heading-highlight) var(--heading-highlight-start), var(--color-heading-highlight) var(--heading-highlight-end), var(--heading-highlight-opacity-0) var(--heading-highlight-end));
  &amp;#125;

  
    .heading-effects,
    .heading-effects a
    , .heading-standard, .heading-standard a
    , .heading-feature, .heading-feature a &amp;#123;
      color: rgb(var(--heading-color));
      text-shadow: var(--heading-text-shadow);
      -webkit-text-stroke: var(--heading-stroke-thickness) rgb(var(--color-heading-stroke));
      text-stroke: var(--heading-stroke-thickness) rgb(var(--color-heading-stroke));
      text-decoration: none;
    &amp;#125;
  
    /* Italic styling */

    .heading-effects,
    .heading-effects a
    , .heading-standard, .heading-standard a
    , .heading-feature, .heading-feature a &amp;#123;
      text-decoration: none;
    &amp;#125;

    .feature-text.heading-effects i,
    .feature-text.heading-effects em
    , .heading-standard.inline-heading-rte i, .heading-standard.inline-heading-rte em
    , .heading-feature.inline-heading-rte i, .heading-feature.inline-heading-rte em &amp;#123;
      font-style: ;
      color: rgb(var(--heading-italics-color));
    &amp;#125;

    
      .feature-text.heading-effects i,
      .feature-text.heading-effects em
      , .heading-standard.inline-heading-rte i, .heading-standard.inline-heading-rte em
      , .heading-feature.inline-heading-rte i, .heading-feature.inline-heading-rte em &amp;#123;
        position: relative;
        display: inline;
        background: var(--heading-text-highlight);
        color: rgb(var(--color-heading-highlight-text));
        margin-inline: auto;
        padding-inline: 0.25ch;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        z-index: -1;
      &amp;#125;
    
  

  /*
  Cards
  */
  :root &amp;#123;
    
      
        --card-shadow-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M24 0H20L0 20V24L24 0ZM24 24V20L20 24H24Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
      
        --card-shadow-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_101_3)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M21.7088 13.9473L10 2.29458L-1.70881 13.9473L0.0577438 15.7054L10 5.81077L19.9423 15.7054L21.7088 13.9473Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_101_3&#x27;%3E%3Crect width=&#x27;20&#x27; height=&#x27;20&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E&quot;);
      
        --card-shadow-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_101_5)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M-5 7.5C-5.82421 7.5 -7.10101 8.19181 -8.728 10.795L-11.272 9.205C-9.56566 6.47486 -7.50912 4.5 -5 4.5C-2.49088 4.5 -0.434342 6.47486 1.272 9.205C2.89899 11.8082 4.17579 12.5 5 12.5C5.82421 12.5 7.10101 11.8082 8.728 9.205C10.4343 6.47486 12.4909 4.5 15 4.5C17.5091 4.5 19.5657 6.47486 21.272 9.205C22.899 11.8082 24.1758 12.5 25 12.5C25.8242 12.5 27.101 11.8082 28.728 9.205L31.272 10.795C29.5657 13.5251 27.5091 15.5 25 15.5C22.4909 15.5 20.4343 13.5251 18.728 10.795C17.101 8.19181 15.8242 7.5 15 7.5C14.1758 7.5 12.899 8.19181 11.272 10.795C9.56566 13.5251 7.50912 15.5 5 15.5C2.49088 15.5 0.434342 13.5251 -1.272 10.795C-2.89899 8.19181 -4.17579 7.5 -5 7.5Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_101_5&#x27;%3E%3Crect width=&#x27;20&#x27; height=&#x27;20&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
      
        --card-shadow-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Ccircle cx=&#x27;10&#x27; cy=&#x27;10&#x27; r=&#x27;3&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
      
        --card-shadow-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Crect x=&#x27;7&#x27; y=&#x27;7&#x27; width=&#x27;6&#x27; height=&#x27;6&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
  &amp;#125;

  .card::after &amp;#123;
    -webkit-mask-image: var(--card-shadow-mask-image);
    mask-image: var(--card-shadow-mask-image);
    
      -webkit-mask-position: right top;
      mask-position: right top;
    
  &amp;#125;

  /*
  Media
  */
  .media--css-only::before,
  .media__drop-shadow--shape &amp;#123;
    
      
        -webkit-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M24 0H20L0 20V24L24 0ZM24 24V20L20 24H24Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
        mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M24 0H20L0 20V24L24 0ZM24 24V20L20 24H24Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
      
        -webkit-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_101_3)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M21.7088 13.9473L10 2.29458L-1.70881 13.9473L0.0577438 15.7054L10 5.81077L19.9423 15.7054L21.7088 13.9473Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_101_3&#x27;%3E%3Crect width=&#x27;20&#x27; height=&#x27;20&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E&quot;);
        mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_101_3)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M21.7088 13.9473L10 2.29458L-1.70881 13.9473L0.0577438 15.7054L10 5.81077L19.9423 15.7054L21.7088 13.9473Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_101_3&#x27;%3E%3Crect width=&#x27;20&#x27; height=&#x27;20&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E&quot;);
      
        -webkit-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_101_5)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M-5 7.5C-5.82421 7.5 -7.10101 8.19181 -8.728 10.795L-11.272 9.205C-9.56566 6.47486 -7.50912 4.5 -5 4.5C-2.49088 4.5 -0.434342 6.47486 1.272 9.205C2.89899 11.8082 4.17579 12.5 5 12.5C5.82421 12.5 7.10101 11.8082 8.728 9.205C10.4343 6.47486 12.4909 4.5 15 4.5C17.5091 4.5 19.5657 6.47486 21.272 9.205C22.899 11.8082 24.1758 12.5 25 12.5C25.8242 12.5 27.101 11.8082 28.728 9.205L31.272 10.795C29.5657 13.5251 27.5091 15.5 25 15.5C22.4909 15.5 20.4343 13.5251 18.728 10.795C17.101 8.19181 15.8242 7.5 15 7.5C14.1758 7.5 12.899 8.19181 11.272 10.795C9.56566 13.5251 7.50912 15.5 5 15.5C2.49088 15.5 0.434342 13.5251 -1.272 10.795C-2.89899 8.19181 -4.17579 7.5 -5 7.5Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_101_5&#x27;%3E%3Crect width=&#x27;20&#x27; height=&#x27;20&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
        mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_101_5)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M-5 7.5C-5.82421 7.5 -7.10101 8.19181 -8.728 10.795L-11.272 9.205C-9.56566 6.47486 -7.50912 4.5 -5 4.5C-2.49088 4.5 -0.434342 6.47486 1.272 9.205C2.89899 11.8082 4.17579 12.5 5 12.5C5.82421 12.5 7.10101 11.8082 8.728 9.205C10.4343 6.47486 12.4909 4.5 15 4.5C17.5091 4.5 19.5657 6.47486 21.272 9.205C22.899 11.8082 24.1758 12.5 25 12.5C25.8242 12.5 27.101 11.8082 28.728 9.205L31.272 10.795C29.5657 13.5251 27.5091 15.5 25 15.5C22.4909 15.5 20.4343 13.5251 18.728 10.795C17.101 8.19181 15.8242 7.5 15 7.5C14.1758 7.5 12.899 8.19181 11.272 10.795C9.56566 13.5251 7.50912 15.5 5 15.5C2.49088 15.5 0.434342 13.5251 -1.272 10.795C-2.89899 8.19181 -4.17579 7.5 -5 7.5Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_101_5&#x27;%3E%3Crect width=&#x27;20&#x27; height=&#x27;20&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
      
        -webkit-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Ccircle cx=&#x27;10&#x27; cy=&#x27;10&#x27; r=&#x27;3&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
      
        -webkit-mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;20&#x27; height=&#x27;20&#x27; viewBox=&#x27;0 0 20 20&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Crect x=&#x27;7&#x27; y=&#x27;7&#x27; width=&#x27;6&#x27; height=&#x27;6&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
  &amp;#125;


  /*
  Custom cursor
  */
  
    @media (pointer: fine) &amp;#123;
      
      body &amp;#123;
        cursor: url(&#x27;&#x27;)  , auto;
        cursor: -webkit-image-set(
          url(&#x27;&#x27;) 1x,
          url(&#x27;&#x27;) 2x)  , auto;
        cursor: image-set(
          url(&#x27;&#x27;) 1x,
          url(&#x27;&#x27;) 2x)  , auto;
      &amp;#125;
      
      
      button, [role=&quot;button&quot;], a &amp;#123;
          cursor: url(&#x27;&#x27;)  , pointer;
          cursor: -webkit-image-set(
          url(&#x27;&#x27;) 1x,
          url(&#x27;&#x27;) 2x)  , pointer;
          cursor: image-set(
          url(&#x27;&#x27;) 1x,
          url(&#x27;&#x27;) 2x)  , pointer;
      &amp;#125;
      
    &amp;#125;

    @media (any-pointer: coarse) &amp;#123;
      
      body &amp;#123;
        cursor: default;
      &amp;#125;
      
      
      button, [role=&quot;button&quot;], a &amp;#123;
        cursor: default;
      &amp;#125;
      
    &amp;#125;
  
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
