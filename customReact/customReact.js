function addElement(reactElement, container){
    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.Children;
    domelement.setAttribute('href', reactElement.props.href);
        domelement.setAttribute('target', reactElement.props.target);

    
    container.appendChild(domelement);

}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank'
    },
    Children:'Click me'
}

const mainContainer = document.getElementById('root')

addElement(reactElement, mainContainer);



/*const reactElement = react.createElement(
    'a',
    {
        href: 'http//www.google.com',
        target: '_blank'
    },
    'click me to visit'
)
return(
reactElement
)*/