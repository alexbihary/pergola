# Pergola CSS

an 'attribute module' CSS framework for modern browsers with semantic sensibility



## About Attribute Modules for CSS

Attribute Modules for CSS is a strategy that uses semantic attributes instead of classes to target elements for styling. The problem is that the `class` attribute has been used for all kinds of purposes, ranging from structural style, semantic labeling, element state, JavaScript hooks, and more. When the structural style hooks are moved into their own semantic attributes, the markup becomes organized and now the `class` attribute can be used for describing the true nature of the content.

This strategy isn't about abandoning the class attribute. It's more about taking the non-semantic styling hooks out of the class attribute, allowing the classes to remain descriptive about the nature of the content. As an example, use Pergola's attributes to style the structure of the elements, and use custom classes to override or enhance the content. Continue reading for plenty of examples.

For further reading about Attribute Module CSS, check out these references:
- https://amcss.github.io/
- https://github.com/amcss/attribute-module-specification/
- http://glenmaddern.com/articles/introducing-am-css
- [HTML Living Standard](https://html.spec.whatwg.org/multipage/dom.html#classes) (commentary on the class attribute)

## About Pergola CSS



### Components

- [Grids](#grids)
- [Navigation](#navigation)
- [Buttons](#buttons)
- [Groups](#groups)
- [Dropdowns](#dropdowns)

### Utilities

- [Text Modifiers](#text)
- [Background Modifiers](#bg)


## <a name="grids"></a> Grids

Add a `ui-grid` attribute to the root element of any grid in the layout.

Grids are made up of 12 equal columns with zero padding (opt-in).

```
<body ui-grid>
</body>
```

Add a `ui-cols` attribute to sibling elements inside of a `ui-grid` to define width by number of columns. Make use of responsive prefixes to target different viewports (xs, sm, md, lg, xl).

```
<body ui-grid>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3">
    Here is Content A
  </div>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3">
    Here is Content B
  </div>
</body>
```

Set a value for the `ui-grid` to opt-in to various padding options (padded, xpad, ypad).
```
<body ui-grid>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3">
    Here is Content A
  </div>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3">
    Here is Content B
  </div>
</body>
```



## <a name="navigation"></a> Navigation

Add a `ui-nav` attribute to the root element of a navigation component (navbar, menu). Set the value for additional properties (fixed, top, bottom, left, right).

TODO: add variations for tabs, pills, stacked.
```
<body>
  <nav ui-nav="fixed top">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  <aside ui-nav>
    <ul>
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
    </ul>
  </aside>
</body>
```

## <a name="buttons"></a> Buttons

Add a `ui-btn` attribute to an `a`, `input` or `button` element to style a basic button. Set the value to select size variations (xs, sm, md, lg, xl), semantic variations (default, primary, secondary, success, info, warning, danger, muted, inverse). Button state is handled with classes (active, disabled), as well as with pseudo-class `active` and attribute `disabled`.
```
<button ui-btn>Default</button>
<button ui-btn="primary">Primary</button>
<button ui-btn="success">Success</button>
<button ui-btn="info">Info</button>
<button ui-btn="warning">Warning</button>
<button ui-btn="danger">Danger</button>

<button ui-btn="xs">Extra small button</button>
<button ui-btn="sm">Small button</button>
<button ui-btn>Default size button</button>
<button ui-btn="lg">Large button</button>
<button ui-btn="xl">Extra large button</button>

<button class="active">Active state</button>
<button disabled>Disabled state</button>
```

Buttons by default are flat and do not have a border. Add a value to opt-in to various button variations (outline, border, borderless, round, pill, circle, square).
```
<button ui-btn="outline pill">Button</button>
```

## <a name="dropdowns"></a> Dropdowns

Add a `ui-dropdown` attribute to the list item of a dropdown menu. Set the value to 'open' to open the dropdown. By default, the submenu is hidden, and is only shown on 'click' or 'hover' of the `ui-dropdown` component.
```
<body>
  <nav ui-nav="bar fixed top">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
      <li ui-dropdown>
        <a href="#">Share To...</a>
        <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Google+</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <aside ui-nav>
    <ul>
      <li ui-dropdown="open">
        <a href="#">Option 1 with submenu</a>
        <ul>
          <li><a href="#">Submenu A</a></li>
          <li><a href="#">Submenu B</a></li>
          <li><a href="#">Submenu C</a></li>
        </ul>
      </li>
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
    </ul>
  </aside>
</body>
```

## <a name="text"></a> Text Modifiers

Add a `ui-text` attribute to specify where text content appears and set a value to specify alignment (center, left, right, justify), or style (muted, primary, success, info, warning, danger).

```
<body ui-grid>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3" ui-text>
    Here is Content A
  </div>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3" ui-text="right">
    Here is Content B
  </div>
</body>
```

## <a name="bg"></a> Background Modifiers

Add a `ui-bg` attribute to specify a background style of an element (primary, success, info, warning, danger).
```
<body ui-grid>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3" ui-bg="primary">
    Here is Content A
  </div>
  <div ui-cols="xs:12 sm:8 md:6 lg:4 xl:3" ui-bg="warning">
    Here is Content B
  </div>
</body>
```
