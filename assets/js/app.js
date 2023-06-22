const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) {//Se declara como async para que podamos utilizar await
  $n.textContent = 'Cargando...';//Mayuscula en en mensaje 

  try {//agregar try-catch para capturar los errores 
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();//Agregado para poder obtener los datos de respuesta
    console.log(data);
    $n.textContent = data.name;//Se quita '{}' agregadas para intentar interpolar las cadenas
    $b.textContent = data.blog;
    $l.textContent = data.location;
  } catch (err) {//Agregar catch para captura de error
    handleError(err);//Se agrega handleError pq esta en catch
  }
}

function handleError(err) {
  console.log('¡OH NO!');//Se agrega ¡ para ortografía en español
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`//Se agrega el $ al $n  para que se pueda acceder al elemento HTML
}

displayUser('stolinski');//Se retira el .catch(handleError) porque  arriba estamos manejando el error