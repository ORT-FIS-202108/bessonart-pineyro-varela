# Mis Gastos - Grupo 7

- Luca Bessonart - 231764
- Sofía Piñeyro - 243498
- Florencia Varela - 254005

## Repositorio Git
### Creación y uso de repositorios locales y remotos
Un repositorio es una estructura de directorios en disco, donde se almacenan los elementos de software producidos a lo largo de todo un proyecto.
Git es el sistema de control de versiones distribuido más utilizado del mundo. Es un proyecto de código abierto maduro y con un mantenimiento activo que desarrolló originalmente Linus Torvalds en el año 2005.
GitHub es una plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git. GitHub aloja respositorios de código y brinda herramientas muy útiles para el trabajo en equipo.
Para este proyecto, se creó el repositorio en GitHub. Cada integrante del equipo trabajará en un repositorio local, que se mantendrá actualizado con el repositorio remoto.
### Comandos Git ejecutados desde terminal y desde el IDE
Los comandos de Git que utilizamos son los siguientes.

`git clon <repo url>`

Este comando se usa para crear una copia o clonar un repositorio remoto. Git es compatible con varios protocolos de red y sus formatos de URL correspondiente. 

`git pull <remoto> <rama>`

Este comando se emplea para extraer y descargar contenido desde un repositorio remoto y actualizar al instante el repositorio local para reflejar ese contenido, es decir, recupera las nuevas confirmaciones y las fusiona en una rama local.
`<remoto>` es el nombre del repositorio remoto, por lo general `origin`, y `<rama>` es el nombre de la rama local, por ejemplo `main`.
Notar que si hay cambios no confirmados, la fusión fallará y la rama local quedará intacta.

`git push <remoto> <rama>`

Este comando se usa para subir cambios realizados en una rama local a un repositorio remoto. Envía la rama especificada, junto con toos los commits y objetos internos necesarios, creando una rama local en el repositorio de destino.
Se puede usar `git push <remoto> --all` para enviar todas las ramas locales al repositorio remoto.  

`git status`

Este comando muestra el estado del directorio de trabajo y del área del entorno de ensayo. Permite ver los cambios que se han preparado, los que no y los archivos en los que Git no está realizando un seguimiento. 

`git log`

Este comando muestra las instantáneas confirmadas. Te permite ver el historial del proyecto, filtrarlo y buscar cambios concretos. 
Se puede personalizar de distintas maneras:
* `git log -n <limite>`, limita el número de confirmaciones que se muestran.
* `git log --oneline`, permite agrupar cada confirmación en una sola línea.
* `git log --stat`, incluye información sobre los archivos que se han modificado y el número relativo de líneas que se han añadido o eliminado en cada uno de ellos.
* `git log -p`, muestra la diferencia completa de cada confirmación.
* `git log --author="<nombre>"`, busca confirmaciones por un autor en concreto.
* `git log --grep="<patrón>"`, busca confirmaciones con un mensaje de confirmación que coincida con el patrón.
* `git log <archivo>`, muestra las confirmaciones que incluyen el archivo especificado.

`git add <file>`

Este comando añade un cambio del directorio de trabajo en el entorno de ensayo, indicando a Git que se quiere incluir actualizaciones en un archivo concreto en la próxima confirmación. 
Existen otras opciones para ejecutar este comando, como:

* `git add <directory>`, prepara todos los cambios de `<directory>`.
* `git add -A`, prepara todos los archivos que hay en el repositorio. Esto incluye archivos nuevos, modificados y eliminados. La opción `-A` es equivalente a `--all`.
* `git add .`, prepara los archivos nuevos y modificados, pero no los eliminados.
* `git add -u`, prepara los archivos modificados y eliminados, pero no los archivos nuevos.

Notar que `git add` no afecta al repositorio de manera significativa, los cambios no se registran hasta ejecutar `git commit`.

`git commit`

Las confirmaciones de cambios realizados se crean con este comando para capturar el estado de un proyecto en ese determinado momento. El comando abrirá un editor de texto pidiendo un mensaje para la confirmación. Una vez escrito el mensaje, guarda el archivo y cierra el editor para crear la confirmación.

Se puede utilizar un comando de atajo `git commit -m "mensaje"`, que crea inmediatamente una confirmación con el mensaje determinado. 


`git branch`

Este comando enumera todas las ramas que hay en un repositorio.
Existen otras opciones que permiten crear y eliminar ramas, así como cambiar su nombre. Estas son:
* `git branch <rama>`, crea una nueva rama llamada `<rama>`.
* `git branch -d <rama>`, elimina la rama especificada. Git evita que la rama se elimine si tiene cambios que no se han fusionado, por lo que es una operación segura.
* `git branch -D <rama>`, fuerza la eliminación de la rama especificada.
* `git branch -m <rama>`, cambia el nombre de la rama actual a `<rama>`.
* `git branch -a`, enumera todas las ramas remotas.

`git checkout <rama>`

Este comando permite cambiar a una rama específica ya existente. 
Acepta el argumento `-b <nueva rama>`, que permite crear una nueva rama y cambiar a ella al instante.

## Versionado
### Aplicar buenas prácticas de versionado
### Uso de ramas separadas de 'main'
### Resumen de commits y evolución del proyecto
## Elicitación
- lluvia de ideas
- encuestas
- ingenieria inversa
### Evidencia de actividades de investigación
### Referencias a fuentes de información
### Caracterización de usuarios: User Personas
### Modelo conceptual del problema
## Especificación
### Definición de requerimientos funcionales y no funcionales
Como forma de estandarizar los requerimientos se definió una forma de identidicación que consiste en el tipo de reuerimiento seguido de un número. Para cada requerimiento se especidica una breve descripción y una prioridad (Alta, Media o Baja).
####  Requerimientos No  Funcionales 
| Identificación | Descripción                                                      | Prioridad |
| -------------- |:---------------------------------------------------------------- | --------- |
| RNF1           | Primary Color: Deep Purple 700.                                  | Alta      |
| RNF2           | Secondary Color: Teal 700.                                       | Alta      |
| RNF3           | Font: Roboto.                                                    | Alta      |
| RNF4           | Icons: filled.                                                   | Alta      |
| RNF5           | El sistema deberá funcionar en Android 12.                       | Alta      |
| RNF6           | Implementar el uso de "Chips" para la descripción de los gastos. | Baja      |
### User Stories / Use Cases detallados
### Bocetos de IU
## Validación y verificación
### Verificar la especificación
### Validar la solución con personas no involucradas en el proyecto
## Reflexión
### Detalle del trabajo individual
### Técnicas aplicadas y aprendizajes


## Bibliografía
- [¿Qué es Git?](https://www.atlassian.com/es/git/tutorials/what-is-git "¿Qué es Git? Atlassian Git - Tutorial")
- [¿Qué es Github?](https://conociendogithub.readthedocs.io/en/latest/data/introduccion/ "Conociendo GitHub")
- [Tutoriales de Git y comandos](https://www.atlassian.com/es/git/tutorials "Tutoriales de Git")
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Markdown Cheatsheet")