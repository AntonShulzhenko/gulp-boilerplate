# Project documentation
This documentation contains instruction how to start project and recommended styleguidelines.

* [Start project](#start)
    * [List of Gulp tasks](#tasks)
    * [Flags](#flags)
    * [Other](#other)
    
* [Project structure](#structure)

* [Styleguidelines](#styles)
    * [SCSS](#scss)
    * [HTML](#html)

# <a name="start"></a>Start project

Clone this repo and then in command line type:

* `npm install` or `yarn` - install all dependencies
* `gulp` - run dev-server and let magic happen, or
* `gulp build` - build project from sources


## <a name="tasks"></a>List of Gulp tasks

To run separate task type in command line `gulp [task_name]`.
Almost all tasks also have watch mode - `gulp [task_name]:watch`, but you don't need to use it directly.

### Main tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`default`          | will start all tasks required by project in dev mode: initial build, watch files, run server with livereload
`build:dev`        | build dev version of project (without code optimizations)
`build`            | build production-ready project (with code optimizations)

### Other tasks
Task name          | Description                                                      
:------------------|:----------------------------------
`sass` 	           | compile .sass/.scss to .css. This task contains [postcss](https://github.com/postcss/postcss) for [autoprefixer](https://github.com/postcss/autoprefixer) and [Lost](https://github.com/peterramsing/lost). It is also possible to include any postcss [plugins](https://github.com/postcss/postcss#plugins) when needed
`webpack`          | compile .js sources into bundle file
`copy`             | copy common files from `./src` path to `./build` path
`nunjucks`         | compile Mozilla's [nunjucks](https://mozilla.github.io/nunjucks/) templates
`server`           | run dev-server powered by [BrowserSync](https://www.browsersync.io/)
`clean`            | remove `./build` folder


## <a name="flags"></a>Flags

Several useful flags.

* `gulp --open` or `gulp server --open` - run dev server and then open preview in browser

* `gulp --tunnel=[name]` or `gulp server --tunnel [name]` - runs dev server and allows you to easily share a web service on your local development machine (powered by [localtunnel.me](https://localtunnel.me/)). Local workspace will be available at `[name].localtunnel.me`.

* `gulp [task_name] --prod` or `gulp [task_name] --production` - run task in production mode. Some of the tasks (like, sass or js compilation) have additional settings for production mode (such as code minification), so with this flag you can force production mode. `gulp build` uses this mode by default.

## <a name="other"></a>Other
There are also available to use [npm scripts](https://docs.npmjs.com/misc/scripts):

* `npm run start` - same as `gulp default`.
* `npm run build` - same as `gulp build`.
* `npm run ghpages` to push only `./build` folder to **gh-pages** branch on github (very useful for previews).
* `npm run lint` - linting javascript with **eslint**.
* `npm run lint-fix` - fix as many issues as possible relatives to **eslint** settings.

___

# <a name="structure"></a>Project structure

* `src` - development directory.
    * `fonts`
    * `icons`
    * `img`
    * `js` - this directory can contain sub-directories
    * `sass`
        * `base` - contain common styles
        * `components` - header, footer, etc.
        * `modules` - contains modules styles
        * `objects` - layout styles
        * `reset` - reset default styles
        * `settings` - variables and project settings
        * `tools` - mixins, functions, etc.
        * `trumps` - contains style files with classes for common use
    * `_init.scss` - this file contains necessary files that reuses in every new style file (app.scss, module-1.scss, etc.)
    * `app.scss` - main style file
    * `module-1.scss` - **_example_** of module style file

* `build` - directory with compiled and copied files.

___

# <a name="styles"></a>Styleguidlines

## <a name="scss"></a>SCSS

Recommended rules for writing styles using **scss** syntax

### Comments
For comment declaration uses inline comment syntax

    One line comment    |   // Comment
                        |
                        |   .selector {}
    
    
    Multiline comment   |   //
                        |   // First comment line
                        |   // Second comment line
                        |   //
                        |
                        |   .selector {}
    
                        
    Title comment       |   //------------------------------------//
                        |   //  #SECTION
                        |   //------------------------------------//
                        |
                        |   .selector {}
                        

### Rulesets syntax

#### Example

    .foo, .foo--bar,
    .baz {
      display: block;
      background-color: green;
      color: red;
    }
    
* related selectors on the same line; unrelated selectors on new lines;
* a space before our opening brace `( { )`;
* properties and values on the same line;
* a space after our property–value delimiting colon `( : )`;
* each declaration on its own new line;
* the opening brace `( { )` on the same line as our last selector;
* our first declaration on a new line after our opening brace `( { )`;
* our closing brace `( } )` on its own new line;
* each declaration indented by **`two (2)`** spaces;
* a trailing semi-colon **`( ; )`** on our last declaration.


#### Indentation 

    .foo {
      color: red;
    
      .bar {
        color: blue;
      }
    
    }
    
#### Whitespaces

* `One (1)` empty line between closely related rulesets.
* `Two (2)` empty lines between loosely related rulesets.
* `Four (4)` empty lines between entirely new sections.
    
**Example**
    
    //------------------------------------//
    //  #FOO
    //------------------------------------//
    
    .foo {
    
      &__bar {}
        
        
      &--baz {}
    }
    
    
    
    
    //------------------------------------//
    //  #BAR
    //------------------------------------//
    
    .bar {
    
      &__bar {}
            
            
      &--baz {}
    }


### Naming

#### Hyphen Delimited

All strings in classes are delimited with a hyphen (-), like so:

    .page-head { }
    
    .sub-content { }
    
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

**Prefers to use semantic and understandable names for elements depending on context**

### !important

**Avoid using `!important`**

## <a href="html"></a>HTML

To denote thematic breaks in content recommends using `four (4)` empty lines

    <header class="page-head">
      ...
    </header>
    
    
    
    
    <main class="page-content">
      ...
    </main>
    
    
    
    
    <footer class="page-foot">
      ...
    </footer>
    
Separate independent but loosely related snippets of markup with a single empty line

    <ul class="primary-nav">
    
      <li class="primary-nav__item">
        <a href="/" class="primary-nav__link">Home</a>
      </li>
    
      <li class="primary-nav__item  primary-nav__trigger">
        <a href="/about" class="primary-nav__link">About</a>
    
        <ul class="primary-nav__sub-nav">
          <li><a href="/about/products">Products</a></li>
          <li><a href="/about/company">Company</a></li>
        </ul>
      </li>
    
      <li class="primary-nav__item">
        <a href="/contact" class="primary-nav__link">Contact</a>
      </li>
    
    </ul>
    
### JavaScript Hooks

To bind elements with JavaScript use specific classes are prepended with `js-`

    <input type="submit" class="btn js-btn" value="Follow">
    
This means that we can have an element elsewhere which can carry with style of `.btn {}`, but without the behaviour of `.js-btn`.

___

Styleguidelines documentation based on this article - <a href="https://cssguidelin.es">High-level advice and guidelines for writing sane, manageable, scalable CSS</a>