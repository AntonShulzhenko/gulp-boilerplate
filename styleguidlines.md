### Project styles structure

* `src` - development directory.
    * `styles` - main styles folder
        * `base` - contain common styles
        * `components` - can contain sub-folders with module styles
        * `helpers` - functions, mixins, etc.
        * `layouts`
        * `reset`
        * `utilities` - classes helpers
        * `variables`
        
    * `styles.scss` - main style file contains all common styles
    
    
### Don'ts vs Do's

Don'ts                         | Do's
:------------------------------|:------------------------------
Don't use tabs for indentation | Do use two (2) spaces for indentation.
Don’t use under_scores or “camelCase” to name classes or IDs. | Do use dashes `-` to separate words.
Don’t use Class and ID names to reflect the underlying markup structure. `.container-span` and `.small-header-div` are bad names. | Do think about CSS in terms of objects and use simple nouns as names. `.global-alert` and `.badge` are good names.
Don’t use IDs and overly-specific selectors to style. Only use these when absolutely necessary (e.g. form controls or page anchors). | Do use classes to facilitate reusability and reduce CSS selector specificity conflicts.
Don't use `!important` | Do use `!important` for utility classes, that are set one property to element
Don't use `transliteration` for class naming | Do use semantic class names, that describes what element is or what it does


### Best Practices List

* Write related selectors on the same line but unrelated selectors on new lines;

        .btn, .btn--success,
        .btn-link {
        
        }
* Include one space between the selector and the opening brace. `.selector {}`
* Use shorthand for hex values when possible. `#fff` vs `#ffffff`
* Write hex values in lowercase. `#3d3d3d` vs `#3D3D3D`
* Enclose URLs in single quotes. Generally, single quotes are preferred over double quotes, since they’re easier to type. `url('/image.png')` vs `url("/image.png")`
* Don’t use units for zero (0) values, except for angles (deg) and time (s or ms). `margin-right: 0;` vs `margin-right: 0px;`
* Include one space after our property–value delimiting colon `property: value`
* Add each declaration on its own new line

        .selector {
          property-one: value-one;
          property-two: value-two;
        }
* Leave the opening brace on the same line as our last selector

        .selector`space here`{
            
        }
        
* The first declaration on a new line after our opening brace
 
        .selector {
          `first declaration`                    
        }
        
* The closing brace on its own new line

        .selector {
                             
        }`Closing brace on a new line`
        

### Whitespaces

* `One (1)` empty line between closely related rulesets.
* `Two (2)` empty lines between loosely related rulesets.
* `Four (4)` empty lines between entirely new sections.

**Example**
    
    /* ------------------------------------ *\
       #FOO
    \* ------------------------------------ */
    
    .foo {
      foo-prop: foo-val;
      
      &__title {
        foo-title-prop: foo-title-val;
      }
      
    
      &__bar {}
        
        
      &--baz {}
    }
    
    
    
    
    /* ------------------------------------ *\
       #BAR
    \* ------------------------------------ */
    
    .bar {
      bar-prop: bar-val;
    
      &__bar {}
            
            
      &--baz {}
    }

### Comments

    One line comment    |   /* Comment */
                        |
                        |   .selector {}
    
    
    Multiline comment   |   /**
                        |    * First comment line
                        |    * Second comment line
                        |    *
                        |    * n-th comment-line
                        |    */
                        |
                        |   .selector {}
    
                        
    Title comment       |   /* ------------------------------------ *\
                        |      #SECTION
                        |   \* ------------------------------------ */
                        |
                        |   .selector {}
                        
                        
### Naming

#### Hyphen Delimited

All strings in classes are delimited with a hyphen (-), like so:

    .page-head { }
    
    .sub-content { }

### State change class naming

By default to show active, disabled, etc. elements states use prefix `is-` or if elements has some features use `has-` prefix for class naming

    EXAMPLE

    .is-active { }
    .is-opened { }
    
    .has-submenu { }
    
#### BEM-like Naming

BEM splits components’ classes into three groups:

* **`Block:`** The sole root of the component.
* **`Element:`** A component part of the Block.
* **`Modifier:`** A variant or extension of the Block.

To take an analogy (note, not an example):

    .person { }
    .person__head { }
    .person--tall { }
    
Elements are delimited with `two (2)` underscores `(__)`, and Modifiers are delimited by `two (2)` hyphens `(--)`.

`.person {}` is the Block; it is the sole root of a discrete entity.

`.person__head {}` is an Element; it is a smaller part of the .person {} Block.

`.person--tall {}` is a Modifier; it is a specific variant of the .person {} Block.

**Use semantic and understandable class names for elements depending on context**

## Namespaces list

* `.l-`: layouts
* `.c-`: components
* `.u-`: utilities
* `.js-`: JavaScript hooks
* `.is-` | `.has-`: state classes

### Layouts

Layouts splits into two categories - `global layouts` & `block-level layouts`

**Global layouts** - big grid containers that are used everywhere in project styles

    <div class="site-header">
      <div class="l-wrap">
        <!-- stuff -->
      </div>
    </div>
    
    <div class="site-footer">
      <div class="l-wrap">
        <!-- stuff -->
      </div>
    </div>
    
`.l-wrap` here is a container that uses in different parts of markup

`Block-level layouts` - uses inside block elements or components to position block elements without changing elements behavior.
 
    <form class="form l-form" action="#">
      <div class="form__row">
        <div class="form__item l-form__item"></div>
        <div class="form__item l-form__item"></div>
      </div>
      
      <div class="form__row">
        <div class="form__item l-form__item--large"></div>
        <div class="form__item l-form__item--small"></div>
      </div>
      <!-- ... -->
    </form>
    
`.l-form` layout created to position form elements.