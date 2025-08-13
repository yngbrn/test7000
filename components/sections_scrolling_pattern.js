export default function sections_scrolling_pattern() {
  const html = `<div>

shift s linear infinite

&lt;section
  class=&quot;bg-scheme-background text-scheme-text bg-scheme-gradient&quot;
  data-color-scheme=&quot;&quot;
&gt;
  &lt;div class=&quot;relative text-0&quot;&gt;
    &lt;scrolling-items-container class=&quot;block&quot;&gt;
      &lt;scrolling-items
        style=&quot;
          --base-scrolling-items-speed: s;
          --local-scrolling-items-speed-multiplier: 1;
          --scrolling-items-speed: calc(
          var(--base-scrolling-items-speed) * var(--global-scrolling-items-speed-multiplier) *
          var(--local-scrolling-items-speed-multiplier)
          );
          --scrolling-items-direction: ;
        &quot;
        class=&quot;js-enabled motion-reduce:px-section-horizontal-spacing block w-max whitespace-nowrap motion-safe:animate-[scrolling-items_var(--scrolling-items-speed)_linear_infinite_var(--scrolling-items-direction)] motion-safe:hover:[animation-play-state:paused] motion-reduce:block motion-reduce:-translate-x-1/4 motion-reduce:whitespace-normal motion-reduce:text-center&quot;
      &gt;
        &lt;scrolling-items-surface class=&quot;flex flex-wrap items-center justify-center lg:-mx-5 lg:flex-nowrap&quot;&gt;
          &lt;scrolling-items-content class=&quot;&quot;&gt;
            &lt;span
              style=&quot;width: px; height: px;&quot;
              class=&quot;inline-block pattern- scrolling-pattern-container&quot;
            &gt;&lt;/span&gt;
          &lt;/scrolling-items-content&gt;
        &lt;/scrolling-items-surface&gt;
      &lt;/scrolling-items&gt;
    &lt;/scrolling-items-container&gt;
    &lt;noscript&gt;
      &lt;div id=&quot;scrolling-pattern-&quot;&gt;
        &lt;span
          style=&quot;width: px; height: px;&quot;
          class=&quot;inline-block pattern- scrolling-pattern-container&quot;
        &gt;&lt;/span&gt;
      &lt;/div&gt;

      &lt;style&gt;
        @media (prefers-reduced-motion: no-preference) &amp;#123;
          .pattern- &amp;#123;
            -webkit-backface-visibility: hidden;
            animation:  ;
          &amp;#125;
        &amp;#125;
      &lt;/style&gt;
    &lt;/noscript&gt;
  &lt;/div&gt;
&lt;/section&gt;

&lt;style&gt;
  .pattern- &amp;#123;
    -webkit-mask-size: px;
    mask-size: px;
    background: rgb(var(--color-scheme-));
    
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M24 0H20L0 20V24L24 0ZM24 24V20L20 24H24Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M12 0H0V12H12V24H24V12H12V0Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_20_77)&#x27;%3E%3Crect x=&#x27;-4&#x27; y=&#x27;-2&#x27; width=&#x27;27&#x27; height=&#x27;25&#x27; stroke=&#x27;black&#x27; stroke-width=&#x27;2&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_20_77&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_4_23)&#x27;%3E%3Crect x=&#x27;-0.499954&#x27; y=&#x27;-0.5&#x27; width=&#x27;24&#x27; height=&#x27;24&#x27; stroke=&#x27;black&#x27;/%3E%3Crect x=&#x27;11.5&#x27; y=&#x27;-0.292893&#x27; width=&#x27;16.6777&#x27; height=&#x27;16.6777&#x27; transform=&#x27;rotate(45 11.5 -0.292893)&#x27; stroke=&#x27;black&#x27;/%3E%3Cpath d=&#x27;M11.5 -1V24&#x27; stroke=&#x27;black&#x27;/%3E%3Cpath d=&#x27;M-1 11.5H24&#x27; stroke=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_4_23&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_17_52)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M25 -0.16129L24.1613 -1L12 11.1613L-0.161289 -0.999971L-0.999999 -0.161261L11.1613 12L-1 24.1613L-0.16129 25L12 12.8387L24.1613 25L25 24.1613L12.8387 12L25 -0.16129Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_17_52&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
   
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Crect width=&#x27;12&#x27; height=&#x27;24&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_5_5)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M16 -8H12L-8 12V16L16 -8ZM16 -4H20L-4 20V16L16 -4ZM20 9.53674e-07H24L9.53674e-07 24V20L20 9.53674e-07ZM24 4H28L4 28V24L24 4ZM32 8H28L8 28V32L32 8ZM24 24V20L20 24H24Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_5_5&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M2.4 0H4.8V2.4V4.8H7.2V7.2V9.6H4.8V7.2L2.4 7.2V4.8H0V2.4H2.4V0ZM2.4 14.4H0V12V9.6V7.2H2.4V9.6H4.8V12H2.4V14.4ZM2.4 21.6H0V19.2V16.8H2.4V14.4H4.8V12H7.2V9.6H9.6V12H12V9.6H9.6V7.2V4.8H7.2L7.2 2.4V0H9.6H12H14.4V2.4H12V4.8H14.4V2.4H16.8V4.8H19.2V2.4H16.8V0H19.2H21.6H24V2.4H21.6V4.8H24V7.2V9.6H21.6V7.2H19.2H16.8V9.6H14.4V12H16.8V9.6H19.2H21.6V12H19.2V14.4H21.6V12H24V14.4V16.8H21.6H19.2V19.2L16.8 19.2V16.8V14.4H14.4V16.8V19.2L16.8 19.2V21.6H19.2L19.2 24H16.8H14.4V21.6H12V24H9.6V21.6V19.2H7.2V21.6V24H4.8H2.4V21.6ZM2.4 21.6H4.8V19.2H2.4V21.6ZM21.6 21.6V19.2L19.2 19.2L19.2 21.6H21.6ZM21.6 21.6V24H24V21.6H21.6ZM12 16.8V14.4H9.6H7.2V16.8H9.6H12Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M16.2426 9.24264L14.8284 7.82843L12 10.6569L9.17157 7.82843L7.75736 9.24264L10.5858 12.0711L7.75736 14.8995L9.17157 16.3137L12 13.4853L14.8284 16.3137L16.2426 14.8995L13.4142 12.0711L16.2426 9.24264Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M13 7H11V11L7 11V13H11V17H13V13H17V11L13 11V7Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Crect x=&#x27;9&#x27; y=&#x27;9&#x27; width=&#x27;6&#x27; height=&#x27;6&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M12 16L8 9.33333L16 9.33333L12 16Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Ccircle cx=&#x27;12&#x27; cy=&#x27;12&#x27; r=&#x27;3&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
   
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M0 0H24L12 12L0 24V0Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M0 12V0C6.62742 0 12 5.37258 12 12C12 5.37258 17.3726 0 24 0V12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_25_558)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M0 12V0C6.62581 0 11.9974 5.36997 12 11.9952L12 0H24C24 6.62742 18.6274 12 12 12H0ZM12 12H24L24 24C17.3726 24 12 18.6274 12 12ZM12 12V24H0C0 17.3726 5.37258 12 12 12Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_25_558&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Crect y=&#x27;12&#x27; width=&#x27;16.9706&#x27; height=&#x27;16.9706&#x27; transform=&#x27;rotate(-45 0 12)&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_25_833)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M-6 10C-7.64124 10 -9.40189 10.8161 -11.2929 12.7071L-12.7071 11.2929C-10.5981 9.1839 -8.35876 8 -6 8C-3.64124 8 -1.40189 9.1839 0.707107 11.2929C2.59811 13.1839 4.35876 14 6 14C7.64124 14 9.40189 13.1839 11.2929 11.2929C13.4019 9.1839 15.6412 8 18 8C20.3588 8 22.5981 9.1839 24.7071 11.2929C26.5981 13.1839 28.3588 14 30 14C31.6412 14 33.4019 13.1839 35.2929 11.2929L36.7071 12.7071C34.5981 14.8161 32.3588 16 30 16C27.6412 16 25.4019 14.8161 23.2929 12.7071C21.4019 10.8161 19.6412 10 18 10C16.3588 10 14.5981 10.8161 12.7071 12.7071C10.5981 14.8161 8.35876 16 6 16C3.64124 16 1.40189 14.8161 -0.707108 12.7071C-2.59811 10.8161 -4.35876 10 -6 10Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_25_833&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_25_823)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M12 3.58582L26.7071 18.2929L25.2929 19.7071L12 6.41424L-1.29289 19.7071L-2.70711 18.2929L12 3.58582Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_25_823&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cpath d=&#x27;M6 10L2 3.33333L10 3.33333L6 10Z&#x27; fill=&#x27;black&#x27;/%3E%3Cpath d=&#x27;M18 13L22 19.6667L14 19.6667L18 13Z&#x27; fill=&#x27;black&#x27;/%3E%3C/svg%3E%0A&quot;);
    
    --mask-image: url(&quot;data:image/svg+xml,%3Csvg width=&#x27;24&#x27; height=&#x27;24&#x27; viewBox=&#x27;0 0 24 24&#x27; fill=&#x27;none&#x27; xmlns=&#x27;http://www.w3.org/2000/svg&#x27;%3E%3Cg clip-path=&#x27;url(%23clip0_28_175)&#x27;%3E%3Cpath fill-rule=&#x27;evenodd&#x27; clip-rule=&#x27;evenodd&#x27; d=&#x27;M6 6L0 0H12L6 6ZM12 12L6 6L0 12V24L6 18L12 24L24 24L18 18L24 12L24 0L18 6L12 0V12ZM12 12L18 18L12 24V12ZM12 12L18 6L24 12L12 12ZM12 12L0 12L6 18L12 12Z&#x27; fill=&#x27;black&#x27;/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id=&#x27;clip0_28_175&#x27;%3E%3Crect width=&#x27;24&#x27; height=&#x27;24&#x27; fill=&#x27;white&#x27;/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A&quot;);
    
    -webkit-mask-image: var(--mask-image);
    mask-image: var(--mask-image);
  &amp;#125;
&lt;/style&gt;


&amp;#123;
  &quot;name&quot;: &quot;t:sections.scrolling_pattern.name&quot;,
  &quot;settings&quot;: [
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;type&quot;,
      &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.type.label&quot;,
      &quot;default&quot;: &quot;half_square_triangle&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;diagonal_lines&quot;,
          &quot;label&quot;: &quot;t:common.options.diagonal_lines.label&quot;,
          &quot;group&quot;: &quot;Lines&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;grid&quot;,
          &quot;label&quot;: &quot;t:common.options.grid_lines.label&quot;,
          &quot;group&quot;: &quot;Lines&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;grid_with_diagonal_lines&quot;,
          &quot;label&quot;: &quot;t:common.options.grid_with_diagonal_lines.label&quot;,
          &quot;group&quot;: &quot;Lines&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;crosshatch&quot;,
          &quot;label&quot;: &quot;t:common.options.crosshatch.label&quot;,
          &quot;group&quot;: &quot;Lines&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;checkerboard&quot;,
          &quot;label&quot;: &quot;t:common.options.checkerboard.label&quot;,
          &quot;group&quot;: &quot;Lines&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;zig_zag&quot;,
          &quot;label&quot;: &quot;t:common.options.zig_zag.label&quot;,
          &quot;group&quot;: &quot;Lines&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;waves&quot;,
          &quot;label&quot;: &quot;t:common.options.waves.label&quot;,
          &quot;group&quot;: &quot;Lines&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;half_square_triangle&quot;,
          &quot;label&quot;: &quot;t:common.options.half-square_triangle.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;dots&quot;,
          &quot;label&quot;: &quot;t:common.options.dots.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;triangle&quot;,
          &quot;label&quot;: &quot;t:common.options.triangles.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;polka_dot&quot;,
          &quot;label&quot;: &quot;t:common.options.polka_dot.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;polka_dot_triangles&quot;,
          &quot;label&quot;: &quot;t:common.options.polka_dot_triangles.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;plus&quot;,
          &quot;label&quot;: &quot;t:common.options.plus.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;cross&quot;,
          &quot;label&quot;: &quot;t:common.options.cross.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;squares&quot;,
          &quot;label&quot;: &quot;t:common.options.squares.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;diamonds&quot;,
          &quot;label&quot;: &quot;t:common.options.diamonds.label&quot;,
          &quot;group&quot;: &quot;Shapes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;vertical_stripes&quot;,
          &quot;label&quot;: &quot;t:common.options.vertical_stripes.label&quot;,
          &quot;group&quot;: &quot;Stripes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;diagonal_stripes&quot;,
          &quot;label&quot;: &quot;t:common.options.diagonal_stripes.label&quot;,
          &quot;group&quot;: &quot;Stripes&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;squiggle&quot;,
          &quot;label&quot;: &quot;t:common.options.squiggle.label&quot;,
          &quot;group&quot;: &quot;Miscellaneous&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;windmill&quot;,
          &quot;label&quot;: &quot;t:common.options.windmill.label&quot;,
          &quot;group&quot;: &quot;Miscellaneous&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;8bit&quot;,
          &quot;label&quot;: &quot;t:common.options.8bit.label&quot;,
          &quot;group&quot;: &quot;Miscellaneous&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;origami&quot;,
          &quot;label&quot;: &quot;t:common.options.origami.label&quot;,
          &quot;group&quot;: &quot;Miscellaneous&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;color&quot;,
      &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.color.label&quot;,
      &quot;default&quot;: &quot;text&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;text&quot;,
          &quot;label&quot;: &quot;t:common.options.text.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;accent-1&quot;,
          &quot;label&quot;: &quot;t:common.options.accent_1.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;accent-2&quot;,
          &quot;label&quot;: &quot;t:common.options.accent_2.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;card&quot;,
          &quot;label&quot;: &quot;t:common.options.card.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;background&quot;,
          &quot;label&quot;: &quot;t:common.options.background.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;background-gradient&quot;,
          &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.color.options.background_gradient.label&quot;
        &amp;#125;
      ]
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;size&quot;,
      &quot;min&quot;: 6,
      &quot;max&quot;: 42,
      &quot;unit&quot;: &quot;px&quot;,
      &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.size.label&quot;,
      &quot;step&quot;: 6,
      &quot;default&quot;: 12
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;range&quot;,
      &quot;id&quot;: &quot;speed&quot;,
      &quot;min&quot;: 50,
      &quot;max&quot;: 200,
      &quot;step&quot;: 10,
      &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.speed.label&quot;,
      &quot;default&quot;: 80
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;select&quot;,
      &quot;id&quot;: &quot;direction&quot;,
      &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.direction.label&quot;,
      &quot;options&quot;: [
        &amp;#123;
          &quot;value&quot;: &quot;&quot;,
          &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.direction.options.right_to_left.label&quot;
        &amp;#125;,
        &amp;#123;
          &quot;value&quot;: &quot;reverse&quot;,
          &quot;label&quot;: &quot;t:sections.scrolling_pattern.settings.direction.options.left_to_right.label&quot;
        &amp;#125;
      ],
      &quot;default&quot;: &quot;&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;header&quot;,
      &quot;content&quot;: &quot;t:common.settings.header_color&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;color_scheme&quot;,
      &quot;id&quot;: &quot;color_scheme&quot;,
      &quot;default&quot;: &quot;scheme1&quot;,
      &quot;label&quot;: &quot;t:common.settings.color_scheme.label&quot;
    &amp;#125;,
    &amp;#123;
      &quot;type&quot;: &quot;checkbox&quot;,
      &quot;id&quot;: &quot;use_gradient_background&quot;,
      &quot;label&quot;: &quot;t:common.settings.use_gradient_background.label&quot;
    &amp;#125;
  ],
  &quot;presets&quot;: [
    &amp;#123;
      &quot;name&quot;: &quot;t:sections.scrolling_pattern.name&quot;
    &amp;#125;
  ],
  &quot;disabled_on&quot;: &amp;#123;
    &quot;groups&quot;: [
      &quot;header&quot;,
      &quot;footer&quot;,
      &quot;aside&quot;
    ]
  &amp;#125;
&amp;#125;
</div>`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
