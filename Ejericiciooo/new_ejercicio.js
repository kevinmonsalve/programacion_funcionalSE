//CLASE CARRO

class Carro{
    constructor(color, marca, modelo){
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        }

    //Metodos
    solicitar(){
      console.log(`solicitando carro ${this.color}, ${this.marca},Modelo: ${this.modelo}`);
      return this;

    }



}

const carroVolkswagenPolo = new Carro ('','Grande', ['Queso','Pollo','Champiñones'] );

console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());

//HERENCIA

class Combos extends Pizza{
     constructor(combo, cantidad, masa, tamano, ingrediente, bebida, postre){
         super(masa, tamano, ingrediente);
         this.combo = combo;
         this.cantidad = cantidad;
         this.bebida = bebida;
         this.postre = postre;
     }

     elegirCombo(){
         this.preparar();
         this.hornear();
         this.empacar();

         console.log(`Pedido: Combo ${this.combo} - ${this.cantidad} Pizza ${this.masa}, ${this.ingrediente} + ${this.bebida} + ${this.postre}`);
         return this
     }

}

const Pedido = new Combos ('Personas', 1, 'Mediana', 'Masa Tradicional', ['Queso', 'Pollo', 'Champiñones'], 'Coca-cola', 'Rollitos de canela', 1);
console.log(Pedido.elegirCombo());

