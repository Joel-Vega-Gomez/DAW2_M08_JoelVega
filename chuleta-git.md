git add <fitxer>
# Añade algo al staging
git commit -m "Descripció del commit"
# Añade algo al repositorio local
git commit -a
# Añade algo al repositorio local saltando staging
git reset <file>
# Elimina el archivo de staging
git reset <commit>
# Elimina el comit pasado
git diff 
--staged: Muestra los cambios pero no con respecto a staging sino con respecto a el repo, osea los que vas a comitear.
# Muestra los cambios realizados en worksapce con respecto a staging.
git diff HEAD
# Muestra los cambios realizados tanto en worksapce como en staging con respecto al repo local.

git status 
# Muestra los archivos:
#	Modificados.
#	Nuevos.
#	Stageados (preparados para el proximo commit).
#	Git no sigue (No termino de entender esto).

git log --oneline 
# Muestra un resumen del registro de commits.

git show 
# Muestra los detalles del ultimo commit.
<commit> 
# Muestra los detalles de ese commit en particular, mediante el hash del commit.

git restore --staged <file> 
# Permite sacar el archivo de staging.
git restore <file>
# Permite restaurar la ultima version del archivo confirmada (desde staging).
git restore --source <commit_HASH> chuleta-git.md
# Permite restaurar la version de un archivo de un commit anterior.
#
# Es muy sencillo, la diferencia es si estamos restaurando un archivo del workspace desde una version anterior o 
# cargandonos uno que esta staged

git rm <file>
# Permite eliminar un archivo del  proyecto
# Este comando borra el archivo del workspace y mete el borrado en staging, es decir confirma el borrado directemante.
# (De normal borrariamos y hariamos "git add ." para que detecte el archivo borrado pero esto borra y confirma
# para finalmente hacer comit y quede registrado el cambio en el repo).

git mv <path/file>
# Permite mover o renombrar, es el de linux pero stagea los cambios directamente.

.gitignore 
# Sirve para que git ignore el staging y commit de ciertos archivos o carpetas.
#
# Para carpetas hay que escribir dentro del archivo "nombre_de_la_carpeta/".
# Para archivos "nombre_del_archivo.md".
# Para extensiones "*.bat".

git branch 
# Permite ver las ramas actuales y donde se esta situado

git branch <branch>
# Permite crear una rama sin ir a ella.

git switch <branch>
# Permite ir a la rama indicada

git switch -c <branch>
# Permite crear y moverse a la rama designada (opcion más comun).

git log --oneline --graph --all
# Permite ver donde se ramifico y mergeo el proyecto (se ejecuta antes y despues de merge para ver que ha ocurrido).

git log rama1 rama2 <file>
# Permite ver el hisotrial de cambios del <file> en cada rama.

git merge <branch>
# Permite fusionar <branch> a la rama en la que estamos actualmente.

git branch -d <branch>
# Permite eliminar <branch>

git merge --abort
# Prmite detener el merge en curso, por si se necesita revisar/corregir algo.

# Para eliminar el conflicto hay que editar el/los archivos y eliminar las marcas de conflicto
# Luego hay que stagear esos archivos para finalmente hacer commit.
