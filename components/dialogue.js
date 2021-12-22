class Dialogue extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({mode:"open"});
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

    static componentStyles() {
        return `
        <style> 
        .dialogue {
            position:absolute;
            bottom:2px;
            left:2px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          
        .character-name {
            height: 20px;
            font-family: "nintendo_ds_biosregular";
            font-size: 32px;
            color: #f6f6f6;
            background-color: rgb(22, 22, 22, 0.7);
            border: 2px solid white;
            outline: 2px solid rgb(85, 85, 85);
            padding: 5px 10px 15px 10px;
            border-radius: 3px;
            margin-bottom: 7px;
          }
          
        .text-box {
            width: 675px;
            height: 150px;
            font-family: "nintendo_ds_biosregular";
            font-size: 32px;
            color: #f6f6f6;
            background-color: rgb(22, 22, 22, 0.7);
            border: 2px solid white;
            outline: 2px solid rgb(85, 85, 85);
            padding: 9px;
            border-radius: 3px;
          }
        </style>
        `
    }

    render(){
        const style = Dialogue.componentStyles();
        this.shadow.innerHTML = `
        ${style}
        <div class="dialogue">

            <div class="character-name">Junpei</div>
    
            <div class="text-box">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsa consequuntur,
                nam odio sunt, esse minus enim illum ad eius magnam debitis qui labore doloremque dolores ab veniam quos quis. 
            </div>
        </div>
        `
    }
}

customElements.define('dialogue-template',Dialogue);