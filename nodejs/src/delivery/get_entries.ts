/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "delivery";

export interface GetEntriesRequest {
  type: string;
  tenantId: string;
  id: string;
  limit: number;
  page: number;
  returnEmptyDataIfNotFound: boolean;
  filter: DataFilter | undefined;
}

export interface DataFilter {
  fields: { [key: string]: DataFieldFilter };
  and: DataFilter[];
  or: DataFilter[];
}

export interface DataFilter_FieldsEntry {
  key: string;
  value: DataFieldFilter | undefined;
}

export interface DataFieldFilter {
  type: string;
  operation: string;
  value: string;
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
  return { type: "", tenantId: "", id: "", limit: 0, page: 0, returnEmptyDataIfNotFound: false, filter: undefined };
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
      DataFilter.encode(message.filter, writer.uint32(58).fork()).ldelim();
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
          message.filter = DataFilter.decode(reader, reader.uint32());
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
      filter: isSet(object.filter) ? DataFilter.fromJSON(object.filter) : undefined,
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
    message.filter !== undefined && (obj.filter = message.filter ? DataFilter.toJSON(message.filter) : undefined);
    return obj;
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
      ? DataFilter.fromPartial(object.filter)
      : undefined;
    return message;
  },
};

function createBaseDataFilter(): DataFilter {
  return { fields: {}, and: [], or: [] };
}

export const DataFilter = {
  encode(message: DataFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.fields).forEach(([key, value]) => {
      DataFilter_FieldsEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.and) {
      DataFilter.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.or) {
      DataFilter.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = DataFilter_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        case 2:
          message.and.push(DataFilter.decode(reader, reader.uint32()));
          break;
        case 3:
          message.or.push(DataFilter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataFilter {
    return {
      fields: isObject(object.fields)
        ? Object.entries(object.fields).reduce<{ [key: string]: DataFieldFilter }>((acc, [key, value]) => {
          acc[key] = DataFieldFilter.fromJSON(value);
          return acc;
        }, {})
        : {},
      and: Array.isArray(object?.and) ? object.and.map((e: any) => DataFilter.fromJSON(e)) : [],
      or: Array.isArray(object?.or) ? object.or.map((e: any) => DataFilter.fromJSON(e)) : [],
    };
  },

  toJSON(message: DataFilter): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = DataFieldFilter.toJSON(v);
      });
    }
    if (message.and) {
      obj.and = message.and.map((e) => e ? DataFilter.toJSON(e) : undefined);
    } else {
      obj.and = [];
    }
    if (message.or) {
      obj.or = message.or.map((e) => e ? DataFilter.toJSON(e) : undefined);
    } else {
      obj.or = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<DataFilter>): DataFilter {
    const message = createBaseDataFilter();
    message.fields = Object.entries(object.fields ?? {}).reduce<{ [key: string]: DataFieldFilter }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = DataFieldFilter.fromPartial(value);
        }
        return acc;
      },
      {},
    );
    message.and = object.and?.map((e) => DataFilter.fromPartial(e)) || [];
    message.or = object.or?.map((e) => DataFilter.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDataFilter_FieldsEntry(): DataFilter_FieldsEntry {
  return { key: "", value: undefined };
}

export const DataFilter_FieldsEntry = {
  encode(message: DataFilter_FieldsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      DataFieldFilter.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataFilter_FieldsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataFilter_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = DataFieldFilter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataFilter_FieldsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? DataFieldFilter.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: DataFilter_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? DataFieldFilter.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<DataFilter_FieldsEntry>): DataFilter_FieldsEntry {
    const message = createBaseDataFilter_FieldsEntry();
    message.key = object.key ?? "";
    message.value = (object.value !== undefined && object.value !== null)
      ? DataFieldFilter.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseDataFieldFilter(): DataFieldFilter {
  return { type: "", operation: "", value: "" };
}

export const DataFieldFilter = {
  encode(message: DataFieldFilter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DataFieldFilter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataFieldFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.operation = reader.string();
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DataFieldFilter {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: DataFieldFilter): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.operation !== undefined && (obj.operation = message.operation);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<DataFieldFilter>): DataFieldFilter {
    const message = createBaseDataFieldFilter();
    message.type = object.type ?? "";
    message.operation = object.operation ?? "";
    message.value = object.value ?? "";
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
