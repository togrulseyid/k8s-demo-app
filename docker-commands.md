# Docker commands

##### Enter docker container

```bash 
docker exec -it docxker_container_id /bin/bash
docker exec -it docxker_container_id /bin/sh
```

###### Docker id

```shell
docker ps
```

## Docker Network

##### Show network

```bash 
docker network ls
```

##### Create network

```bash 
docker network create mongo-network
```

##### Drop network

```shell
docker run --rm -it --network mongo-network busybox
```

61baa096206a09e353463b068f28ad1a74ed2ef47515fcc9406dd790d0e799c3

## Docker Run

###### hostport: dockerPort

```bash 
docker run -p 27017:27017 -d mongo
```

## Mongo Express (UI)

```bash 
docker run -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=password --name mongodb --network mongo-network mongo
```

```bash 
docker run -d \
   -p 27017:27017
	-e MONGO_INITDB_ROOT_USERNAME=admin \
	-e MONGO_INITDB_ROOT_PASSWORD=password \
   --name mongodb \
   --network mongo-network \
 	mongo
docker logs c2276705521e637a492d6d5d859ec8163c4897cfb622f651514cf20e1ee23a8f
```

# Mongo Express (UI)

```bash 
docker run -d -p 8081:8081 -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_SERVER=mongodb --network mongo-network --name mongo-express mongo-express
```

```bash 
docker run -d -p 8081:8081 \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME="admin" \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD="password" \
    -e ME_CONFIG_MONGODB_SERVER=mongodb \
    --network mongo-network \
    --name mongo-express \
    mongo-express
docker logs b896b4949dc7
```

## BUILD

```bash 
docker build -t k8s:1.0 .
```

## Run Docker Compose

```shell
docker-compose -f mongo.yaml up
```

### Run from Docker file

```shell
docker build -t my-app:1.0 .
docker rmi image_id   #docker images need to be removed before building
docker run -p 8080:8085 -d  --name my-app --network k8s-demo-app_k8s-spring-network my-app:1.0
```

## Docker push image

```shell
docker login
docker tag my-app:1.1 repo.com/registry...../my-app:1.1
docker push repo.com/registry...../my-app:1.1
```
