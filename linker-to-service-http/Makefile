up:
	@docker-compose up -d

down:
	@docker-compose down

restart:
	@docker-compose restart

test:
	@curl -H "Host: web" http://127.0.0.1:4140

toggle-health:
	@curl http://127.0.0.1:3000/health/toggle

simulate:
	@wrk -t5 -c10 -d300s -H "Host: web" http://127.0.0.1:4140

dashboard:
	open http://127.0.0.1:9990

scale:
	@docker-compose up -d --scale web=5