/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  ChannelOptions,
  Client,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { CreateEntryRequest, CreateEntryResponse } from "./create_entry";
import { DeleteEntryRequest, DeleteEntryResponse } from "./delete_entry";
import { GetEntriesRequest, GetEntriesResponse } from "./get_entries";
import { UpdateEntryRequest, UpdateEntryResponse } from "./update_entry";

export const protobufPackage = "delivery";

export type ServiceService = typeof ServiceService;
export const ServiceService = {
  getEntries: {
    path: "/delivery.Service/GetEntries",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: GetEntriesRequest) => Buffer.from(GetEntriesRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => GetEntriesRequest.decode(value),
    responseSerialize: (value: GetEntriesResponse) => Buffer.from(GetEntriesResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => GetEntriesResponse.decode(value),
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
  deleteEntry: {
    path: "/delivery.Service/DeleteEntry",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: DeleteEntryRequest) => Buffer.from(DeleteEntryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => DeleteEntryRequest.decode(value),
    responseSerialize: (value: DeleteEntryResponse) => Buffer.from(DeleteEntryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => DeleteEntryResponse.decode(value),
  },
} as const;

export interface ServiceServer extends UntypedServiceImplementation {
  getEntries: handleUnaryCall<GetEntriesRequest, GetEntriesResponse>;
  createEntry: handleUnaryCall<CreateEntryRequest, CreateEntryResponse>;
  updateEntry: handleUnaryCall<UpdateEntryRequest, UpdateEntryResponse>;
  deleteEntry: handleUnaryCall<DeleteEntryRequest, DeleteEntryResponse>;
}

export interface ServiceClient extends Client {
  getEntries(
    request: GetEntriesRequest,
    callback: (error: ServiceError | null, response: GetEntriesResponse) => void,
  ): ClientUnaryCall;
  getEntries(
    request: GetEntriesRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: GetEntriesResponse) => void,
  ): ClientUnaryCall;
  getEntries(
    request: GetEntriesRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: GetEntriesResponse) => void,
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
  deleteEntry(
    request: DeleteEntryRequest,
    callback: (error: ServiceError | null, response: DeleteEntryResponse) => void,
  ): ClientUnaryCall;
  deleteEntry(
    request: DeleteEntryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteEntryResponse) => void,
  ): ClientUnaryCall;
  deleteEntry(
    request: DeleteEntryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: DeleteEntryResponse) => void,
  ): ClientUnaryCall;
}

export const ServiceClient = makeGenericClientConstructor(ServiceService, "delivery.Service") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ChannelOptions>): ServiceClient;
  service: typeof ServiceService;
};
