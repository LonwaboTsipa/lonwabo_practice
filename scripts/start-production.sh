npm install
npm run build
# Enable Properties if needed (shouldn't run this if the clients are managing properties in fundpress)
# npm run properties:staging

pm2 stop "[PROJECT_CODE]_loader_prod"
pm2 delete "[PROJECT_CODE]_loader_prod"
export NODE_ENV=production && pm2 start -f --name "[PROJECT_CODE]_loader_prod" "dist/index.js" -- PROD
