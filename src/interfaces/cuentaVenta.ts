export default interface cuentaVenta {
    Id: number;
    NombreCliente:string;
    Monto: number;
    fechaInicio: Date;
    fechaCierre: Date;
    Estado: "abierta"|"cerrada"
}