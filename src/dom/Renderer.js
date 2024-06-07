class DOM {
    constructor(selector) {
        this.selector = document.querySelectorAll(selector);
    }

    // Elements manipulation
    create(element) {
        this.selector.forEach(item => {
            let newElement = document.createElement(element);
            item.appendChild(newElement);
            this.newElement = newElement;
            this.element = element;
        })
        return this;
    }

    remove() {
        this.selector.forEach(item => {
            item.remove();
        })
        return this;
    }

    content(str) {
        this.selector.forEach(item => {
            item.innerHTML += str;
        })
        return this;
    }

    contentg(index = 'all') {
        if (index === 'all') {
            let nodes = [];
            this.selector.forEach(item => {
                nodes.push(item.innerHTML)
            })
            return nodes;
        } else if (this.selector.length >= index > 0) {
            return this.selector[index - 1].innerHTML
        } else {
            console.error('Renderer Error: Undefined value in contentg method');
            return Error.call('Renderer Error ', 'Undefined value in contentg method')
        }
    }

    empty(index = 'all') {
        if (index === 'all') {
            this.selector.forEach(item => {
                item.innerHTML = '';
            })
        } else if (this.selector.length >= index > 0) {
            this.selector[index - 1].innerHTML = '';
        } else {
            console.error('Renderer Error: Undefined value in empty method');
        }
    }

    // Styles Manipulation
    style(styles) {
        this.selector.forEach(item => {
            item.style = styles;
        })
        return this;
    }

    // Class Manipulation
    addClass(clss) {
        this.selector.forEach(item => {
            item.classList.add(clss);
        })
        return this;
    }

    removeClass(clss) {
        this.selector.forEach(item => {
            item.classList.remove(clss);
        })
    }

    toggle(clss) {
        this.selector.forEach(item => {
            item.classList.toggle(clss);
        })
    }

    // Attribute Manipulation
    setAt(attribute, value) {
        this.selector.forEach(item => {
            item.setAttribute(attribute, value)
        })
        return this;
    }

    getAt(attribute) {
        let attries = []
        this.selector.forEach(item => {
            attries.push(item.getAttribute(attribute));
        })
        return attries;
    }

    removeAt(attribute) {
        this.selector.forEach(item => {
            item.removeAttribute(attribute);
        })

        return this;
    }

    // Event Handling
    click(index = 'all', fn) {
        if (index === 'all') {
            this.selector.forEach(item => {
                item.addEventListener('click', (e) => {
                    fn(e);
                })
            })
        } else if (this.selector.length >= index > 0) {
            this.selector[index - 1].addEventListener('click', (e) => {
                fn(e);
            })
        } else {
            console.error('Renderer Error: Undefined value in click method');
        }
    }

    submit(index = 'all', fn) {
        if (index === 'all') {
            this.selector.forEach(item => {
                item.addEventListener('submit', (e) => {
                    fn(e);
                })
            })
        } else if (this.selector.length >= index > 0) {
            this.selector[index - 1].addEventListener('submit', (e) => {
                fn(e);
            })
        } else {
            console.error('Renderer Error: Undefined value in submit method');
        }
    }
    
    load(index = 'all', fn) {
        if (index === 'all') {
            this.selector.forEach(item => {
                item.addEventListener('load', (e) => {
                    fn(e);
                })
            })
        } else if (this.selector.length >= index > 0) {
            this.selector[index - 1].addEventListener('load', (e) => {
                fn(e);
            })
        } else {
            console.error('Renderer Error: Undefined value in load method');
        }
    }

    // Will work on this later
    removeEvent(index = 'all', fn) {
        if(index === 'all') {
            this.selector.forEach(item => {
            })
        }
    }
}

export const Renderer = (selector) => new DOM(selector);
