class CardNews extends HTMLElement{
    constructor(){
        super(); // Invocar o método construtor de quem esta sendo herdado

        const shadow = this.attachShadow({mode:"closed"});
        shadow.innerHTML = "<h1> Hello World </h1>"
    }
}

customElements.define('card-news',CardNews )