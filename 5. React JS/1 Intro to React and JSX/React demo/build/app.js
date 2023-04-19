var rootElement = document.getElementById('root'); // Root DOM Element
var root = ReactDOM.createRoot(rootElement); // Root React Element. We've transformed the DOM element into a React element

//Written without JSX syntax
// const firstHeadingElement = React.createElement('h1', {}, 'Hello from React') // created our first React Element
// const secondHeadingElement =  React.createElement('h2', {}, 'Second Heading from React')
// const headerElement = React.createElement('header', {}, firstHeadingElement, secondHeadingElement)
// //console.log(JSON.parse(JSON.stringify(headerElement)))

// Written with JSX syntax
var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            { className: "header-container" },
            "Hello from React"
        ),
        React.createElement(
            "h2",
            null,
            "Slogan here"
        ),
        React.createElement(
            "p",
            null,
            "Regular Paragraph"
        )
    ),
    React.createElement(
        "button",
        null,
        "Click me"
    )
);

root.render(headerElement);