# HTML Template Repository with HTML Proofer

This template repository includes preconfigured GitHub Action that will validate html files in a project with (HTMLProofer)[https://github.com/gjtorikian/html-proofer/].
And htmx to load partials

```html
<main
  data-hx-trigger="load"
  data-hx-swap="outerHTML"
  data-hx-get="index.main.partial.html"
></main>
```

```js
function init() {
  import("...js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
```

Add the data-proofer-ignore attribute to any tag to ignore it from every check.

```html
<a href="https://notareallink" data-proofer-ignore>Not checked.</a>
```

Team 1

1.Vitalii Levinton – (global.header-nav.partial.html, index.hero.partial.html)
2.Andrii Khrushch – (index.adventure-hero.partial.html)
3.Marko Hlovachevkyi – (index.cabin-rentals.partial.html)
4.Kaziuta Rostyslav – (index.things-to-do.partial.html)
5.Herei Vladyslav – (index.our-facilities.partial.html)
6.Cherevychnyi Yaroslav – (index.shop-cafe.partial.html)
7.Ilya Borodiy – (index.testimonials.partial.html)
8.Hordiienko Vladyslava – (index.make-a-reservation.partial.html)
9.Huz Maryna – (global.footer.partial.html)
10.Kazantsev Ivan – (about.about-yosemite.partial.html)
11.Maria Batoorina – (about.season-activities.partial.html)
12.Dykunets Ivan – (gallery.roulette-gallery.partial.html)
13.Iryna Abrosimova – (gallery.roulette-gallery.partial.html)
14.Abrosimova Iryna - (accommodation.cabin-rentals.partial.html) NOT ADDED
15.Mariia Shuryha – (accommodation.choose-the-best.partial.html)
16.Dudnik Roman – (rental-policies.content.partial.html)
17.Dmytro Honcharenko – (how-to-get-there.guide.partial.html)
18.Stanislav Kustov – (how-to-get-there.html, how-to-get-there.map-contact.partial.html)
10-2.Yaroslav Milevskyi - (about.about-yosemite-gallery.partial.html) NOT ADDED