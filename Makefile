.PHONY: help
help: ## Show this help.
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"; printf "\Targets:\n"} /^[$$()% a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m	 %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

.PHONY: proto
proto: ## Generates the code from .proto files
	./proto.sh
	cd ./go && go get -u all && go mod tidy
	cd ./nodejs && npm install && npm run proto


.PHONY: build
build: ## Builds the nodejs code
	cd ./nodejs && npm install && npm run build

.PHONY: publish-nodejs
publish-nodejs: ## Publishes the nodejs code to the npm registry
	cd ./nodejs && npm run np:publish
