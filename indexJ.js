    

document.getElementById('boton').addEventListener('click', obtenerdatos);
function obtenerdatos() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.json', true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
        let DatosProducto = datos.DatosProducto;
            console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';
            for (let item of DatosProducto) {
                res.innerHTML += `<tr>
                <td>${item.codigo}</td>
                <td>${item.descripcion}</td>
                <td>${item.unidad}</td>
                <td>${item.cantidad}</td>
                <td>${item.proveedor}</td>

                </tr>`;
            }
            var table= document.getElementById("buscar");
            
            table.style.display="block"
            
        }
    };
}

const consultarData = (code) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let respuesta = JSON.parse(xhttp.responseText);
        let DatosProducto = respuesta.DatosProducto;
        DatosProducto.map((producto) => {
          if (code === producto.codigo) {
            recibirDato(producto);
          }
        });
      }
    };
    xhttp.open("GET", "index.json", true);
    xhttp.send();
  };
  const recibirDato = (producto) => {
    const { codigo, descripcion, unidad, cantidad, proveedor} =
      producto;
    document.getElementById("datos").innerHTML = `
      <div>
          <p> <strong>Codigo: </strong> ${codigo}</p> 
          <p> <strong>Descripciom: </strong> ${descripcion} </p> 
          <p> <strong>Unidad: </strong> ${unidad} </p> 
          <p> <strong>Cantidad: </strong> ${cantidad} </p> 
          <p> <strong>Proveedor: </strong> ${proveedor} </p> 
        
      </div>
      `;
  };
  const mostrarError = () => {
    document.getElementById("datos").innerHTML = "<p>404 Not Found</p>";
  };
  