class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }


    atacar(){
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque indefinido';
                break;
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);

    }
}

    // Exemplo de uso:
    const heroi1 = new Heroi('Herói1', 25, 'mago');
    const heroi2 = new Heroi('Herói2', 30, 'guerreiro');
    const heroi3 = new Heroi('Herói3', 22, 'monge');
    const heroi4 = new Heroi('Herói4', 28, 'ninja');

    heroi1.atacar();  // Exemplo de saída: o mago atacou usando magia
    heroi2.atacar();  // Exemplo de saída: o guerreiro atacou usando espada
    heroi3.atacar();  // Exemplo de saída: o monge atacou usando artes marciais
    heroi4.atacar();  // Exemplo de saída: o ninja atacou usando shuriken