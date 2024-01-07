export default interface Registro {
    fecha: Date;
    tipo: "venta"|"gasto"|"prove";
    detalle: string;
    monto: number;
    id_del_asociado: number;
    Estado: 0 | 1 | 2;
}