let accion = 'editar';
switch (accion) {
    case 'listar':
        console.log('listar');
        break;
    case 'crear':
        console.log('crear');
        break;
    case 'editar':
        console.log('editar');
        break;
    case 'eliminar':
        console.log('eliminar');
        break;
    default:
        console.log('accion no soportada');
        break;
}