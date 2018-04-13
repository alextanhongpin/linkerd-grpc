# linkerd-grpc

The repository demonstrates on how to do a simple linker-to-service load balancing.

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

Check if the load balance is taking place:

```bash
$ docker logs $(docker ps -a -q --filter name=client)
```

Output:

```bash
greeting from 2bd4a57bea8e: Hello, John Doe
greeting from 2bd4a57bea8e: Hello, John Doe
greeting from 2bd4a57bea8e: Hello, John Doe
greeting from c4d36aed4f67: Hello, John Doe
greeting from 2bd4a57bea8e: Hello, John Doe
greeting from c4d36aed4f67: Hello, John Doe
greeting from c4d36aed4f67: Hello, John Doe
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

