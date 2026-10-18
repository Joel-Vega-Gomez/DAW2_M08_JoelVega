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


