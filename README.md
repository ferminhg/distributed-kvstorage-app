# Distributed KV Storage

## How to run

### Build & start a server
    
```bash
npm run start
```

### Run tests

```bash
npm run test
npm run test:co
```


## 🐳 Containers 

Build docker container:

```bash
docker build . -t fermin/node-web-app
docker run -p 3000:3000 -d fermin/node-web-app
```

Docker compose:
```bash
docker compose up
```


## Resources
- https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript