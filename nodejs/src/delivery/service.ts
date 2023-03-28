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
import { CreateEntryRequest, CreateEntryResponse } from "./create_entry";
import { DeleteEntriesRequest, DeleteEntriesResponse } from "./delete_entries";
import { GetEntryListRequest, GetEntryListResponse, GetEntryRequest, GetEntryResponse } from "./get_entries";
import { UpdateEntryRequest, UpdateEntryResponse } from "./update_entry";

export const protobufPackage = "delivery";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  getEntry: {
    path: "/delivery.Service/GetEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEntryRequest) => Buffer.from(GetEntryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEntryRequest.decode(value),
    responseSerialize: (value: GetEntryResponse) => Buffer.from(GetEntryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEntryResponse.decode(value),
  },
  getEntryList: {
    path: "/delivery.Service/GetEntryList",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEntryListRequest) => Buffer.from(GetEntryListRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEntryListRequest.decode(value),
    responseSerialize: (value: GetEntryListResponse) => Buffer.from(GetEntryListResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEntryListResponse.decode(value),
  },
  createEntry: {
    path: "/delivery.Service/CreateEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateEntryRequest) => Buffer.from(CreateEntryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateEntryRequest.decode(value),
    responseSerialize: (value: CreateEntryResponse) => Buffer.from(CreateEntryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateEntryResponse.decode(value),
  },
  updateEntry: {
    path: "/delivery.Service/UpdateEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateEntryRequest) => Buffer.from(UpdateEntryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateEntryRequest.decode(value),
    responseSerialize: (value: UpdateEntryResponse) => Buffer.from(UpdateEntryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateEntryResponse.decode(value),
  },
  deleteEntries: {
    path: "/delivery.Service/DeleteEntries",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteEntriesRequest) => Buffer.from(DeleteEntriesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteEntriesRequest.decode(value),
    responseSerialize: (value: DeleteEntriesResponse) => Buffer.from(DeleteEntriesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteEntriesResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  getEntry: handleUnaryCall<GetEntryRequest, GetEntryResponse>;
  getEntryList: handleUnaryCall<GetEntryListRequest, GetEntryListResponse>;
  createEntry: handleUnaryCall<CreateEntryRequest, CreateEntryResponse>;
  updateEntry: handleUnaryCall<UpdateEntryRequest, UpdateEntryResponse>;
  deleteEntries: handleUnaryCall<DeleteEntriesRequest, DeleteEntriesResponse>;
}

export interface ServiceClient extends Client {
  getEntry(
    request: GetEntryRequest,
    callback: (error: ServiceError | null, response: GetEntryResponse) => void,
  ): ClientUnaryCall;
  getEntry(
    request: GetEntryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEntryResponse) => void,
  ): ClientUnaryCall;
  getEntry(
    request: GetEntryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEntryResponse) => void,
  ): ClientUnaryCall;
  getEntryList(
    request: GetEntryListRequest,
    callback: (error: ServiceError | null, response: GetEntryListResponse) => void,
  ): ClientUnaryCall;
  getEntryList(
    request: GetEntryListRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEntryListResponse) => void,
  ): ClientUnaryCall;
  getEntryList(
    request: GetEntryListRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEntryListResponse) => void,
  ): ClientUnaryCall;
  createEntry(
    request: CreateEntryRequest,
    callback: (error: ServiceError | null, response: CreateEntryResponse) => void,
  ): ClientUnaryCall;
  createEntry(
    request: CreateEntryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateEntryResponse) => void,
  ): ClientUnaryCall;
  createEntry(
    request: CreateEntryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateEntryResponse) => void,
  ): ClientUnaryCall;
  updateEntry(
    request: UpdateEntryRequest,
    callback: (error: ServiceError | null, response: UpdateEntryResponse) => void,
  ): ClientUnaryCall;
  updateEntry(
    request: UpdateEntryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateEntryResponse) => void,
  ): ClientUnaryCall;
  updateEntry(
    request: UpdateEntryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateEntryResponse) => void,
  ): ClientUnaryCall;
  deleteEntries(
    request: DeleteEntriesRequest,
    callback: (error: ServiceError | null, response: DeleteEntriesResponse) => void,
  ): ClientUnaryCall;
  deleteEntries(
    request: DeleteEntriesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteEntriesResponse) => void,
  ): ClientUnaryCall;
  deleteEntries(
    request: DeleteEntriesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteEntriesResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceClient = makeGenericClientConstructor(ServiceService, "delivery.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ServiceClient;
  service: typeof ServiceService;
};
