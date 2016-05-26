pm2 stop "[PROJECT_CODE]_loader_staging"
pm2 delete "[PROJECT_CODE]_loader_staging"
export NODE_ENV=staging && pm2 start -f --name "[PROJECT_CODE]_loader_staging" "./loader-compiled.js" -- STAGING