# food-log

Create a ```.env``` file using an example ```.env.template```.

Run ```npm ci``` in ```client``` and ```server``` dir.

## Build dev

```sh
docker compose --profile dev build
```

## Run dev

```sh
docker compose --profile dev up -d
```

## Build prod

```sh
docker compose --profile prod build
```

## Run prod

```sh
docker compose --profile prod up -d
```
