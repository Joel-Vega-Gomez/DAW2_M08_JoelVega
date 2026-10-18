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
# Muestra los cambios realizados en worksapce con respecto a staging.
git diff HEAD
# Muestra los cambios realizados tanto en worksapce como en staging con respecto al repo local.

git status 
# Muestra los archivos sin seguimiento en workspace respecto a staging.
# Muestra los cambios realizados con respecto a staging.

git log --oneline 
# Muestra un resumen del registro de commits.

git show 
# Muestra los detalles del ultimo commit.
