const rootElement = document.getElementById('root') // Root DOM Element
const root = ReactDOM.createRoot(rootElement) // Root React Element. We've transformed the DOM element into a React element

//Written without JSX syntax
    // const firstHeadingElement = React.createElement('h1', {}, 'Hello from React') // created our first React Element
    // const secondHeadingElement =  React.createElement('h2', {}, 'Second Heading from React')
    // const headerElement = React.createElement('header', {}, firstHeadingElement, secondHeadingElement)
    // //console.log(JSON.parse(JSON.stringify(headerElement)))

// Written with JSX syntax
const headerElement = (
    <div>
            <header>
        <h1 className="header-container">Hello from React</h1>
        <h2>Slogan here</h2>
        <p>Regular Paragraph</p>
    </header>
    <button>Click me</button>
    </div>

)

    root.render(headerElement)