export default function snippets_header_group_support() {
  const html = `<script
  type="module"
>
  const calculateHeaderHeights = () => &#123;
    const headerGroupHeights = [];

    document
      .querySelectorAll(
      )
      .forEach((headerGroupSectionEl, i, list) => &#123;
        window.requestAnimationFrame(() => &#123;
          headerGroupHeights.push(
            headerGroupSectionEl.getBoundingClientRect().height
          );

          if (i === list.length - 1) &#123;
            document.documentElement.style.setProperty(
              '--header-group-height',
              \`$&#123;headerGroupHeights.reduce((subtotal, a) => subtotal + a, 0)&#125;px\`
            );
          &#125;
        &#125;);
      &#125;);
  &#125;;

  calculateHeaderHeights();

  const debouncedCalculateHeaderHeights = debounce(calculateHeaderHeights, 300);

  window.addEventListener('resize', debouncedCalculateHeaderHeights);
</script>

  <script type="module">

      window.dispatchEvent(new Event('resize'));
    &#125;);


      window.dispatchEvent(new Event('resize'));
    &#125;);


      window.dispatchEvent(new Event('resize'));
    &#125;);
  </script>
`
  return <div dangerouslySetInnerHTML={{__html: html}} />
}
