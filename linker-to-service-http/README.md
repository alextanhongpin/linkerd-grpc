# Testing Failures

## Start

```bash
$ docker-compose up -d
```

## Dashboard

```bash
$ make dashboard
```

## Simulate

To simulate running traffic:

```bash
$ make simulate
```

## Scale

Scaling takes a little time for linkerd to register the services:

```bash
$ make scale
```

## Toggle Health

Toggle the health of the endpoints manually:

```bash
$ curl localhost:<PORT>/health/toggle 
```

## Stop

```bash
$ make down
```