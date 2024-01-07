export default interface Proveedor {
    Id: number;
    Nombre: string;
    Estado: "cerrado" | "abierto";
    precio:number;
}