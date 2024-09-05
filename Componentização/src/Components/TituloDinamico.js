class TituloDinamico extends HTMLElement{
    constructor(){
        super();


        const shadow = this.attachShadow({mode: 'open'})

        // Base componente <h1>Felipe</h1>
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = 'Felipe'


        // Estilizar o component
        const style = document.createElement('Style')
        style.textContent = `
        h1{
            color: red;
        }
        `


        // Enviar para o shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)
    }
}

customElements.define("titulo-dinamico", TituloDinamico)