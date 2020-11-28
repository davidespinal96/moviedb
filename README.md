## Tecnologías Usadas
- Bootstrap 4.0: Para el manejo de estilos de texto, tamaño adaptativo de elementos visuales según la pantalla.
- Angular Material: Usado en el estilo del paginador.
- Angular CLI 11.0: Interfaz de consola para crear componentes, directivas, pipes, modulos y servicios. 

## Componentes, servicios y pipes.
Para la creacion de esta aplicacion solo se utilizo el modulo app.module que se crear por defecto al generar el proyecto.

- navbar.component que contienen la barra de navegacion principal.
- loading.component utilizado para precarga de cada vista.
- home.component tiene un componente hijo llamado card.component que se encarga de renderizar, un listado de tarjetas de las ultimas peliculas en cartelera. 
- movie.component renderiza el detalle de cada pelicula con su datos principales segun seleccionemos cada tarjeta.
- search.component se encarga de buscar peliculas, según lo que escribamos en la barra de busqueda.
- page-not-found.component encargado d emostrar una vista 404 cuando se intenta buscar una url que no existe.
- pagination.pipe encargado de filtrar los datos del api, por un numero determinado de resultados.
- moviedb.service encargado de consultar los datos json del api https://www.themoviedb.org.

Comandos utilizados para la generacion de las diferentes secciones de la app:

Proyecto: teniendo instalado anteriormente node y npm solo ejecutamos la instruccion ng new nombre-app

Componentes: ng g c nombre-componente
Pipes: ng g p nombre-pipe
Services: ng g s nombre-servicio

Compilar para produccion:
ng build --prod
