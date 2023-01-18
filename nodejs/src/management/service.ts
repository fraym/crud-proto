/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { CreateTypesRequest, CreateTypesResponse } from "./create_types";
import { GetTypesRequest, GetTypesResponse } from "./get_types";
import { RemoveTypesRequest, RemoveTypesResponse } from "./remove_types";
import { UpdateTypesRequest, UpdateTypesResponse } from "./update_types";

export const protobufPackage = "management";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  createTypes: {
    path: "/management.Service/CreateTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateTypesRequest) => Buffer.from(CreateTypesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateTypesRequest.decode(value),
    responseSerialize: (value: CreateTypesResponse) => Buffer.from(CreateTypesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateTypesResponse.decode(value),
  },
  updateTypes: {
    path: "/management.Service/UpdateTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateTypesRequest) => Buffer.from(UpdateTypesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateTypesRequest.decode(value),
    responseSerialize: (value: UpdateTypesResponse) => Buffer.from(UpdateTypesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateTypesResponse.decode(value),
  },
  removeTypes: {
    path: "/management.Service/RemoveTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RemoveTypesRequest) => Buffer.from(RemoveTypesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RemoveTypesRequest.decode(value),
    responseSerialize: (value: RemoveTypesResponse) => Buffer.from(RemoveTypesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RemoveTypesResponse.decode(value),
  },
  getTypes: {
    path: "/management.Service/GetTypes",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetTypesRequest) => Buffer.from(GetTypesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetTypesRequest.decode(value),
    responseSerialize: (value: GetTypesResponse) => Buffer.from(GetTypesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetTypesResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  createTypes: handleUnaryCall<CreateTypesRequest, CreateTypesResponse>;
  updateTypes: handleUnaryCall<UpdateTypesRequest, UpdateTypesResponse>;
  removeTypes: handleUnaryCall<RemoveTypesRequest, RemoveTypesResponse>;
  getTypes: handleUnaryCall<GetTypesRequest, GetTypesResponse>;
}

export interface ServiceClient extends Client {
  createTypes(
    request: CreateTypesRequest,
    callback: (error: ServiceError | null, response: CreateTypesResponse) => void,
  ): ClientUnaryCall;
  createTypes(
    request: CreateTypesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateTypesResponse) => void,
  ): ClientUnaryCall;
  createTypes(
    request: CreateTypesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateTypesResponse) => void,
  ): ClientUnaryCall;
  updateTypes(
    request: UpdateTypesRequest,
    callback: (error: ServiceError | null, response: UpdateTypesResponse) => void,
  ): ClientUnaryCall;
  updateTypes(
    request: UpdateTypesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateTypesResponse) => void,
  ): ClientUnaryCall;
  updateTypes(
    request: UpdateTypesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateTypesResponse) => void,
  ): ClientUnaryCall;
  removeTypes(
    request: RemoveTypesRequest,
    callback: (error: ServiceError | null, response: RemoveTypesResponse) => void,
  ): ClientUnaryCall;
  removeTypes(
    request: RemoveTypesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RemoveTypesResponse) => void,
  ): ClientUnaryCall;
  removeTypes(
    request: RemoveTypesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RemoveTypesResponse) => void,
  ): ClientUnaryCall;
  getTypes(
    request: GetTypesRequest,
    callback: (error: ServiceError | null, response: GetTypesResponse) => void,
  ): ClientUnaryCall;
  getTypes(
    request: GetTypesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetTypesResponse) => void,
  ): ClientUnaryCall;
  getTypes(
    request: GetTypesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetTypesResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceClient = makeGenericClientConstructor(ServiceService, "management.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServiceClient;
  service: typeof ServiceService;
};
