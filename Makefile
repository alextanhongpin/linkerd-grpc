up:
	@docker-compose up -d

down:
	@docker-compose down

describe-client:
	@docker logs $(shell docker ps -a -q --filter name=client)

describe-server:
	@docker logs $(shell docker ps -a -q --filter name=server)

describe-linkerd:
	@docker logs $(shell docker ps -a -q --filter name=linkerd)