pm2 stop "[PROJECT_CODE]_loader_prod"
pm2 delete "[PROJECT_CODE]_loader_prod"
export NODE_ENV=production && pm2 start -f --name "[PROJECT_CODE]_loader_prod" "./loader-compiled.js" -- PROD