npm install
npm run build
# Enable Properties if needed (shouldn't run this if the clients are managing properties in fundpress)
# npm run properties:staging

pm2 stop "[PROJECT_CODE]_loader_staging"
pm2 delete "[PROJECT_CODE]_loader_staging"
export NODE_ENV=staging && pm2 start -f --name "[PROJECT_CODE]_loader_staging" "dist/index.js" -- STAGING
