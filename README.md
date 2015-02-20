# Pergola CSS

an 'attribute modular' CSS framework for modern browsers with semantic sensibility


## Components

- Grid Components
- Navigation Components
- Button Components
- Button Group Components
- Dropdown Components
- Button Dropdown Components


## Modifiers

- Text Alignment Modifiers
- Background Modifiers


### Grid Components

Add a `ui-grid` attribute to the root element of any grid in the layout.

Grids are made up of 12 columns with zero padding/margin (opt-in).

```
<body ui-grid>
</body>
```

- - -
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

- - -
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

### Text Alignment Modifiers

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

### Background Modifiers

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


### Navigation Components

Add a `ui-nav` attribute to the root element of a navbar component. Set the value for additional properties (fixed, top, bottom, left, right).

TODO: add variations for tabs, pills, stacked pills.
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

### Button Components

Add a `ui-btn` attribute to an `a`, `input` or `button` element to style a basic button. Set the value to select size variations (xs, sm, md, lg, xl), semantic variations (primary, success, info, warning, danger), and state (active, disabled).
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

<button ui-btn="active">Active state</button>
<button ui-btn="disabled">Disabled state</button>
```

### Dropdown Components

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

