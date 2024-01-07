export default interface cuentaProvedor {
    Id: number;
    NombreProvedor:string;
    Monto: number;
    fechaInicio: Date;
    fechaCierre: Date;
    Estado: "abierta"|"cerrada"
}