class Dialogue extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:"open"});
        this.template = '';
        this.styles = '';
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(prop, oldVal, newVal) {}

    get character() {
        return this.getAttribute("character");
    }

    get dialogue() {
        return this.getAttribute("dialogue");
    }

    static get observedAttributes() {
        return ["character", "dialogue"]
    }

    static getTemplate() {
        return fetch('./components/dialogue/dialogue.html')
        .then(response => response.text());
        // outputs the content of the html file
    }

    static componentStyles() {
        return fetch('./components/dialogue/dialogue.css')
        .then(response => response.text());
        // outputs the content of the css file
    }

    async render(){
        this.styles = await Dialogue.componentStyles();

        this.template = await Dialogue.getTemplate();

        this.shadow.innerHTML = `
        <style> 
        ${this.styles}
        </style>
        ${this.template}
        `
    }
}

export default Dialogue;