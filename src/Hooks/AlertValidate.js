import Swal from 'sweetalert2'


export const invalidData = (value)=>{
    Swal.fire({
        title: 'Error!',
        text: `El campo ${value} no puede estar vacio`,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
}
export const duplicateValue = (value)=>{
  Swal.fire({
      title: 'Error!',
      text: `El valor de ${value} ya esta en uso`,
      icon: 'error',
      confirmButtonText: 'Ok'
    })
}
export const successCreate = ()=>{
    Swal.fire({
        title: 'Excelente!',
        text: `Operación realizada con exito!`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })
}