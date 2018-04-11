# linkerd-grpc

The repository demonstrates on how to do a simple linker-to-service load balancing.

To view other configuration, just switch to other branches. The curret examples available are:

- linker-to-linker-no-tls (through namerd)
- linker-to-service-no-tls
- linker-to-service-through-namerd
- master (linker-to-service example)

## Proto Example

```protobuf
syntax = "proto3";

package echo;

service Echo {
	rpc Greet (GreetRequest) returns (GreetResponse) {}
}

message GreetRequest {
	string text = 1;
}

message GreetResponse {
	string text = 1;
}
```


## Run

We have a pre-built nodejs grpc image for both the server and client.

```bash
$ docker-compose up -d
```

## Validate Client

```bash
$ docker logs $(docker ps -a -q --filter name=client)
```

Output:

```bash
greeting from 7203bbf57d87: Hello, John Doe
```

## Validate Server

```bash
$ docker logs $(docker ps -a -q --filter name=server)
```

Output:

```bash
7203bbf57d87 listening to port 0.0.0.0:50051. press ctrl + c to cancel.
got metadata: secret {"_internal_repr":{"authorization":["secret"],"user-agent":["grpc-node/1.10.1 grpc-c/6.0.0-pre1 (linux; chttp2; glamorous)"],"l5d-dst-service":["/grpc/echo.Echo/Greet"],"via":["h2 linkerd"],"l5d-dst-client":["/$/inet/server/50051"],"l5d-dst-residual":["/echo/Greet"],"l5d-ctx-trace":["T1qG2D+FkK4T0LfTj5bJRBPQt9OPlslEAAAAAAAAAAA="],"l5d-reqid":["13d0b7d38f96c944"]}}
```