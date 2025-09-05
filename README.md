# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main data-hx-trigger="load" data-hx-swap="outerHTML" data-hx-get="index.main.partial.html"></main>
```


```js
function init() {
    import('...js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```


Team 1
- Dykunets Ivan
- Dudnik Roman - 16 rental-policies.content.partial.html
- Cherevychnyi Yaroslav 6 index.shop-cafe.partial.html
- Huz Maryna - 9 (global.footer.partial.html)
- Kaziuta Rostyslav - 4(index.things-to-do.partial.html)
- Maria Batoorina
- Andrii Khrushch -2(index.adventure-hero.partial.html)
- Marko Hlovachevkyi
- Ilya Borodiy
- Mariia Shuryha - 15 (accommodation.choose-the-best.partial.html)
- Stanislav Kustov
- Hordiienko Vladyslava
- Iryna Abrosimova - 13  (gallery.roulette-gallery.partial.html)


