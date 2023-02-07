/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { EntryFilter } from "./entry_filter";

export const protobufPackage = "delivery";

export interface GetEntriesRequest {
  type: string;
  tenantId: string;
  id: string;
  limit: number;
  page: number;
  returnEmptyDataIfNotFound: boolean;
  filter: EntryFilter | undefined;
  order: EntryOrder[];
}

export interface EntryOrder {
  field: string;
  descending: boolean;
}

export interface Entry {
  data: { [key: string]: string };
}

export interface Entry_DataEntry {
  key: string;
  value: string;
}

export interface GetEntriesResponse {
  result: Entry[];
  limit: number;
  page: number;
}

function createBaseGetEntriesRequest(): GetEntriesRequest {
  return {
    type: "",
    tenantId: "",
    id: "",
    limit: 0,
    page: 0,
    returnEmptyDataIfNotFound: false,
    filter: undefined,
    order: [],
  };
}

export const GetEntriesRequest = {
  encode(message: GetEntriesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.tenantId !== "") {
      writer.uint32(18).string(message.tenantId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.limit !== 0) {
      writer.uint32(32).int32(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(40).int32(message.page);
    }
    if (message.returnEmptyDataIfNotFound === true) {
      writer.uint32(48).bool(message.returnEmptyDataIfNotFound);
    }
    if (message.filter !== undefined) {
      EntryFilter.encode(message.filter, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.order) {
      EntryOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEntriesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEntriesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.tenantId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.limit = reader.int32();
          break;
        case 5:
          message.page = reader.int32();
          break;
        case 6:
          message.returnEmptyDataIfNotFound = reader.bool();
          break;
        case 7:
          message.filter = EntryFilter.decode(reader, reader.uint32());
          break;
        case 8:
          message.order.push(EntryOrder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEntriesRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      tenantId: isSet(object.tenantId) ? String(object.tenantId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      returnEmptyDataIfNotFound: isSet(object.returnEmptyDataIfNotFound)
        ? Boolean(object.returnEmptyDataIfNotFound)
        : false,
      filter: isSet(object.filter) ? EntryFilter.fromJSON(object.filter) : undefined,
      order: Array.isArray(object?.order) ? object.order.map((e: any) => EntryOrder.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetEntriesRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.tenantId !== undefined && (obj.tenantId = message.tenantId);
    message.id !== undefined && (obj.id = message.id);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.returnEmptyDataIfNotFound !== undefined &&
      (obj.returnEmptyDataIfNotFound = message.returnEmptyDataIfNotFound);
    message.filter !== undefined && (obj.filter = message.filter ? EntryFilter.toJSON(message.filter) : undefined);
    if (message.order) {
      obj.order = message.order.map((e) => e ? EntryOrder.toJSON(e) : undefined);
    } else {
      obj.order = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetEntriesRequest>): GetEntriesRequest {
    return GetEntriesRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetEntriesRequest>): GetEntriesRequest {
    const message = createBaseGetEntriesRequest();
    message.type = object.type ?? "";
    message.tenantId = object.tenantId ?? "";
    message.id = object.id ?? "";
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    message.returnEmptyDataIfNotFound = object.returnEmptyDataIfNotFound ?? false;
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? EntryFilter.fromPartial(object.filter)
      : undefined;
    message.order = object.order?.map((e) => EntryOrder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEntryOrder(): EntryOrder {
  return { field: "", descending: false };
}

export const EntryOrder = {
  encode(message: EntryOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.descending === true) {
      writer.uint32(16).bool(message.descending);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EntryOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntryOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.string();
          break;
        case 2:
          message.descending = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EntryOrder {
    return {
      field: isSet(object.field) ? String(object.field) : "",
      descending: isSet(object.descending) ? Boolean(object.descending) : false,
    };
  },

  toJSON(message: EntryOrder): unknown {
    const obj: any = {};
    message.field !== undefined && (obj.field = message.field);
    message.descending !== undefined && (obj.descending = message.descending);
    return obj;
  },

  create(base?: DeepPartial<EntryOrder>): EntryOrder {
    return EntryOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EntryOrder>): EntryOrder {
    const message = createBaseEntryOrder();
    message.field = object.field ?? "";
    message.descending = object.descending ?? false;
    return message;
  },
};

function createBaseEntry(): Entry {
  return { data: {} };
}

export const Entry = {
  encode(message: Entry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.data).forEach(([key, value]) => {
      Entry_DataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Entry_DataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Entry {
    return {
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Entry): unknown {
    const obj: any = {};
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = v;
      });
    }
    return obj;
  },

  create(base?: DeepPartial<Entry>): Entry {
    return Entry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Entry>): Entry {
    const message = createBaseEntry();
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseEntry_DataEntry(): Entry_DataEntry {
  return { key: "", value: "" };
}

export const Entry_DataEntry = {
  encode(message: Entry_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Entry_DataEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Entry_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: Entry_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<Entry_DataEntry>): Entry_DataEntry {
    return Entry_DataEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Entry_DataEntry>): Entry_DataEntry {
    const message = createBaseEntry_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetEntriesResponse(): GetEntriesResponse {
  return { result: [], limit: 0, page: 0 };
}

export const GetEntriesResponse = {
  encode(message: GetEntriesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int32(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(24).int32(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEntriesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEntriesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result.push(Entry.decode(reader, reader.uint32()));
          break;
        case 2:
          message.limit = reader.int32();
          break;
        case 3:
          message.page = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetEntriesResponse {
    return {
      result: Array.isArray(object?.result) ? object.result.map((e: any) => Entry.fromJSON(e)) : [],
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
    };
  },

  toJSON(message: GetEntriesResponse): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) => e ? Entry.toJSON(e) : undefined);
    } else {
      obj.result = [];
    }
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.page !== undefined && (obj.page = Math.round(message.page));
    return obj;
  },

  create(base?: DeepPartial<GetEntriesResponse>): GetEntriesResponse {
    return GetEntriesResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetEntriesResponse>): GetEntriesResponse {
    const message = createBaseGetEntriesResponse();
    message.result = object.result?.map((e) => Entry.fromPartial(e)) || [];
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
