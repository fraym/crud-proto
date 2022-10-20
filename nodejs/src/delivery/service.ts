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
  createData: {
    path: "/delivery.Service/CreateData",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: CreateEntryRequest) => Buffer.from(CreateEntryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => CreateEntryRequest.decode(value),
    responseSerialize: (value: CreateEntryResponse) => Buffer.from(CreateEntryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => CreateEntryResponse.decode(value),
  },
  updateData: {
    path: "/delivery.Service/UpdateData",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: UpdateEntryRequest) => Buffer.from(UpdateEntryRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => UpdateEntryRequest.decode(value),
    responseSerialize: (value: UpdateEntryResponse) => Buffer.from(UpdateEntryResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => UpdateEntryResponse.decode(value),
  },
  deleteData: {
    path: "/delivery.Service/DeleteData",
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
  createData: handleUnaryCall<CreateEntryRequest, CreateEntryResponse>;
  updateData: handleUnaryCall<UpdateEntryRequest, UpdateEntryResponse>;
  deleteData: handleUnaryCall<DeleteEntryRequest, DeleteEntryResponse>;
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
  createData(
    request: CreateEntryRequest,
    callback: (error: ServiceError | null, response: CreateEntryResponse) => void,
  ): ClientUnaryCall;
  createData(
    request: CreateEntryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: CreateEntryResponse) => void,
  ): ClientUnaryCall;
  createData(
    request: CreateEntryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: CreateEntryResponse) => void,
  ): ClientUnaryCall;
  updateData(
    request: UpdateEntryRequest,
    callback: (error: ServiceError | null, response: UpdateEntryResponse) => void,
  ): ClientUnaryCall;
  updateData(
    request: UpdateEntryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: UpdateEntryResponse) => void,
  ): ClientUnaryCall;
  updateData(
    request: UpdateEntryRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: UpdateEntryResponse) => void,
  ): ClientUnaryCall;
  deleteData(
    request: DeleteEntryRequest,
    callback: (error: ServiceError | null, response: DeleteEntryResponse) => void,
  ): ClientUnaryCall;
  deleteData(
    request: DeleteEntryRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: DeleteEntryResponse) => void,
  ): ClientUnaryCall;
  deleteData(
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
