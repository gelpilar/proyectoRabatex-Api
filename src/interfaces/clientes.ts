export default interface cliente {
    Id: number;
    Nombre: string;
    Estado: "falta" | "sobra" | "cero";
}