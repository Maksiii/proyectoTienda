
function eliminarusu (nombre){
    Swal.fire({
        title: 'Estas seguro?',
        text: "No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'eliminado',
            'producto eliminado correctamente',
            'success'
          ).then(function(){
            window.location.href = "/eliminarUsuario/"+ nombre +"/";
          })
        }
      })
}