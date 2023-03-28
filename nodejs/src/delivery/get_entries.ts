/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { CrudAuthData, EntryFilter } from "./shared_crud";

export const protobufPackage = "delivery";

export interface GetEntryRequest {
  type: string;
  auth: CrudAuthData | undefined;
  id: string;
  filter: EntryFilter | undefined;
  returnEmptyDataIfNotFound: boolean;
}

export interface GetEntryListRequest {
  type: string;
  auth: CrudAuthData | undefined;
  limit: number;
  page: number;
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

export interface GetEntryResponse {
  result: Entry | undefined;
}

export interface GetEntryListResponse {
  result: Entry[];
  limit: number;
  page: number;
  total: number;
}

function createBaseGetEntryRequest(): GetEntryRequest {
  return { type: "", auth: undefined, id: "", filter: undefined, returnEmptyDataIfNotFound: false };
}

export const GetEntryRequest = {
  encode(message: GetEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.auth !== undefined) {
      CrudAuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.filter !== undefined) {
      EntryFilter.encode(message.filter, writer.uint32(34).fork()).ldelim();
    }
    if (message.returnEmptyDataIfNotFound === true) {
      writer.uint32(40).bool(message.returnEmptyDataIfNotFound);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEntryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEntryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.auth = CrudAuthData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.filter = EntryFilter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag != 40) {
            break;
          }

          message.returnEmptyDataIfNotFound = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetEntryRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      auth: isSet(object.auth) ? CrudAuthData.fromJSON(object.auth) : undefined,
      id: isSet(object.id) ? String(object.id) : "",
      filter: isSet(object.filter) ? EntryFilter.fromJSON(object.filter) : undefined,
      returnEmptyDataIfNotFound: isSet(object.returnEmptyDataIfNotFound)
        ? Boolean(object.returnEmptyDataIfNotFound)
        : false,
    };
  },

  toJSON(message: GetEntryRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.auth !== undefined && (obj.auth = message.auth ? CrudAuthData.toJSON(message.auth) : undefined);
    message.id !== undefined && (obj.id = message.id);
    message.filter !== undefined && (obj.filter = message.filter ? EntryFilter.toJSON(message.filter) : undefined);
    message.returnEmptyDataIfNotFound !== undefined &&
      (obj.returnEmptyDataIfNotFound = message.returnEmptyDataIfNotFound);
    return obj;
  },

  create(base?: DeepPartial<GetEntryRequest>): GetEntryRequest {
    return GetEntryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetEntryRequest>): GetEntryRequest {
    const message = createBaseGetEntryRequest();
    message.type = object.type ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null)
      ? CrudAuthData.fromPartial(object.auth)
      : undefined;
    message.id = object.id ?? "";
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? EntryFilter.fromPartial(object.filter)
      : undefined;
    message.returnEmptyDataIfNotFound = object.returnEmptyDataIfNotFound ?? false;
    return message;
  },
};

function createBaseGetEntryListRequest(): GetEntryListRequest {
  return { type: "", auth: undefined, limit: 0, page: 0, filter: undefined, order: [] };
}

export const GetEntryListRequest = {
  encode(message: GetEntryListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.auth !== undefined) {
      CrudAuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(24).int64(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(32).int64(message.page);
    }
    if (message.filter !== undefined) {
      EntryFilter.encode(message.filter, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.order) {
      EntryOrder.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEntryListRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEntryListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.type = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.auth = CrudAuthData.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.page = longToNumber(reader.int64() as Long);
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.filter = EntryFilter.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.order.push(EntryOrder.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetEntryListRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      auth: isSet(object.auth) ? CrudAuthData.fromJSON(object.auth) : undefined,
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      filter: isSet(object.filter) ? EntryFilter.fromJSON(object.filter) : undefined,
      order: Array.isArray(object?.order) ? object.order.map((e: any) => EntryOrder.fromJSON(e)) : [],
    };
  },

  toJSON(message: GetEntryListRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.auth !== undefined && (obj.auth = message.auth ? CrudAuthData.toJSON(message.auth) : undefined);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.filter !== undefined && (obj.filter = message.filter ? EntryFilter.toJSON(message.filter) : undefined);
    if (message.order) {
      obj.order = message.order.map((e) => e ? EntryOrder.toJSON(e) : undefined);
    } else {
      obj.order = [];
    }
    return obj;
  },

  create(base?: DeepPartial<GetEntryListRequest>): GetEntryListRequest {
    return GetEntryListRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetEntryListRequest>): GetEntryListRequest {
    const message = createBaseGetEntryListRequest();
    message.type = object.type ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null)
      ? CrudAuthData.fromPartial(object.auth)
      : undefined;
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntryOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.field = reader.string();
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.descending = reader.bool();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = Entry_DataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.data[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEntry_DataEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
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

function createBaseGetEntryResponse(): GetEntryResponse {
  return { result: undefined };
}

export const GetEntryResponse = {
  encode(message: GetEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.result !== undefined) {
      Entry.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEntryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.result = Entry.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetEntryResponse {
    return { result: isSet(object.result) ? Entry.fromJSON(object.result) : undefined };
  },

  toJSON(message: GetEntryResponse): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = message.result ? Entry.toJSON(message.result) : undefined);
    return obj;
  },

  create(base?: DeepPartial<GetEntryResponse>): GetEntryResponse {
    return GetEntryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetEntryResponse>): GetEntryResponse {
    const message = createBaseGetEntryResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? Entry.fromPartial(object.result)
      : undefined;
    return message;
  },
};

function createBaseGetEntryListResponse(): GetEntryListResponse {
  return { result: [], limit: 0, page: 0, total: 0 };
}

export const GetEntryListResponse = {
  encode(message: GetEntryListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.result) {
      Entry.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.limit !== 0) {
      writer.uint32(16).int64(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(24).int64(message.page);
    }
    if (message.total !== 0) {
      writer.uint32(32).int64(message.total);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEntryListResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEntryListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.result.push(Entry.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag != 16) {
            break;
          }

          message.limit = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag != 24) {
            break;
          }

          message.page = longToNumber(reader.int64() as Long);
          continue;
        case 4:
          if (tag != 32) {
            break;
          }

          message.total = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetEntryListResponse {
    return {
      result: Array.isArray(object?.result) ? object.result.map((e: any) => Entry.fromJSON(e)) : [],
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      page: isSet(object.page) ? Number(object.page) : 0,
      total: isSet(object.total) ? Number(object.total) : 0,
    };
  },

  toJSON(message: GetEntryListResponse): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) => e ? Entry.toJSON(e) : undefined);
    } else {
      obj.result = [];
    }
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.page !== undefined && (obj.page = Math.round(message.page));
    message.total !== undefined && (obj.total = Math.round(message.total));
    return obj;
  },

  create(base?: DeepPartial<GetEntryListResponse>): GetEntryListResponse {
    return GetEntryListResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<GetEntryListResponse>): GetEntryListResponse {
    const message = createBaseGetEntryListResponse();
    message.result = object.result?.map((e) => Entry.fromPartial(e)) || [];
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    message.total = object.total ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string } ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & { $case: T["$case"] }
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new tsProtoGlobalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
