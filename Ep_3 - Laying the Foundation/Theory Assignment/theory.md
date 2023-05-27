Topics
JSX
React.createElement vs JSX
Benefits of JSX
Behind the Scenes of JSX
Babel & parcel role in JSX
Components
Functional Components
Composing Components

## QUE_1 :: What is JSX?

JSX means Javascript XML. it is syntax extension used in React that allows you to write Html-like code directy into within Javascript.

it combine html and Javascript syntax to making it easier to build user interface in React.

## QUE_2 :: Superpowers of JSX

it synatx is similler to Html so its Easy to understood.

in JSX if we want to add any javascript code we can add using {} braces inside JSX.
we can write any javascript code inside JSX using {} braces.

Component Composition : nesting of Component is know as Component Composing.
it help in making complex UI in simple mananer. it help in write reusabal and maintainabal code.

Easy to learn : developer who know html and css will easier to learn Jsx.beacuse Jsx have similler synatx to HTML.

babel convert JSX code into React then convert into object that object convert into Javascript(DOM).

JSX ==> react.createElement ==> object ==> javascript (DOM)

JSX have support of tool like babel and parcel for better development.

Performance Optimization: JSX helps optimize performance by enabling React to efficiently update and render the UI.

Static Type Checking: JSX is compatible with static type checking tools like TypeScript and Flow

## QUE_3 :: Role of type attribute in script tag? What options can I use there?

The type attribute in the <script> tag is used to specify the MIME type (Multipurpose Internet Mail Extensions) of the content within the <script> tag.
It helps the browser understand how to interpret and execute the script code.

1. <script type="text/javascript">...</script>

most comman used. if we don't spicificed then its also by default.

2. <script type="module">...</script>

If you are using JavaScript modules, you can set the type attribute to module.

3. <script type="application/json">...</script>

if the content within the <script> tag is JSON (JavaScript Object Notation) data.

4. <script type="text/typescript">...</script>

you can specify Other Scripting Languages( TypeScript, CoffeeScript, or Dart) just like typescript.

## QUE_4 :: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

{TitleComponent}: Represents the component as a reference or variable, but doesn't render it.

{<TitleComponent/>}: Renders the TitleComponent component directly using self-closing tags.

{<TitleComponent></TitleComponent>}: Renders the TitleComponent component using opening and closing tags, allowing for additional content or nested components.

In most cases, the second approach {<TitleComponent/>} is the most commonly used and straightforward way to render a component in JSX.
