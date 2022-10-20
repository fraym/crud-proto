#! /bin/bash
rm -rf ./src/management
rm -rf ./src/delivery

cd ..

protoc \
	--plugin=./nodejs/node_modules/.bin/protoc-gen-ts_proto \
	--ts_proto_out=./nodejs/src \
	--ts_proto_opt=esModuleInterop=true \
	--ts_proto_opt=env=node \
	--ts_proto_opt=oneof=unions \
	--ts_proto_opt=outputServices=grpc-js \
	management/*.proto

protoc \
	--plugin=./nodejs/node_modules/.bin/protoc-gen-ts_proto \
	--ts_proto_out=./nodejs/src \
	--ts_proto_opt=esModuleInterop=true \
	--ts_proto_opt=env=node \
	--ts_proto_opt=oneof=unions \
	--ts_proto_opt=outputServices=grpc-js \
	delivery/*.proto

cd nodejs
