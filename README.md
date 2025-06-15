# Formula Student Backend

## Stack
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- File Uploads (Multer)
- Swagger API Docs
- Postman Collection

## Setup
1. `npm install`
2. Create `.env` from `.env.example`
3. `node server.js` or `pm2 start ecosystem.config.js`

## Docs
- Swagger UI: `/api-docs`
- Postman: See `docs/postman_collection.json`

## Deployment
- PM2: `pm2 start ecosystem.config.js --env production`
- Nginx: `nginx.conf.example`
