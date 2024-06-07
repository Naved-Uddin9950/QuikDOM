class quikdom {
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
}

export const Renderer = (selector) => new quikdom(selector);
