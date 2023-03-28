/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AuthData, EventMetadata } from "./shared_crud";

export const protobufPackage = "delivery";

export interface CreateEntryRequest {
  type: string;
  auth: AuthData | undefined;
  id: string;
  data: { [key: string]: string };
  eventMetadata: EventMetadata | undefined;
}

export interface CreateEntryRequest_DataEntry {
  key: string;
  value: string;
}

export interface CreateEntryResponse {
  newData: { [key: string]: string };
  validationErrors: string[];
  fieldValidationErrors: { [key: string]: string };
}

export interface CreateEntryResponse_NewDataEntry {
  key: string;
  value: string;
}

export interface CreateEntryResponse_FieldValidationErrorsEntry {
  key: string;
  value: string;
}

function createBaseCreateEntryRequest(): CreateEntryRequest {
  return { type: "", auth: undefined, id: "", data: {}, eventMetadata: undefined };
}

export const CreateEntryRequest = {
  encode(message: CreateEntryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.auth !== undefined) {
      AuthData.encode(message.auth, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    Object.entries(message.data).forEach(([key, value]) => {
      CreateEntryRequest_DataEntry.encode({ key: key as any, value }, writer.uint32(34).fork()).ldelim();
    });
    if (message.eventMetadata !== undefined) {
      EventMetadata.encode(message.eventMetadata, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryRequest();
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

          message.auth = AuthData.decode(reader, reader.uint32());
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

          const entry4 = CreateEntryRequest_DataEntry.decode(reader, reader.uint32());
          if (entry4.value !== undefined) {
            message.data[entry4.key] = entry4.value;
          }
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.eventMetadata = EventMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateEntryRequest {
    return {
      type: isSet(object.type) ? String(object.type) : "",
      auth: isSet(object.auth) ? AuthData.fromJSON(object.auth) : undefined,
      id: isSet(object.id) ? String(object.id) : "",
      data: isObject(object.data)
        ? Object.entries(object.data).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      eventMetadata: isSet(object.eventMetadata) ? EventMetadata.fromJSON(object.eventMetadata) : undefined,
    };
  },

  toJSON(message: CreateEntryRequest): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.auth !== undefined && (obj.auth = message.auth ? AuthData.toJSON(message.auth) : undefined);
    message.id !== undefined && (obj.id = message.id);
    obj.data = {};
    if (message.data) {
      Object.entries(message.data).forEach(([k, v]) => {
        obj.data[k] = v;
      });
    }
    message.eventMetadata !== undefined &&
      (obj.eventMetadata = message.eventMetadata ? EventMetadata.toJSON(message.eventMetadata) : undefined);
    return obj;
  },

  create(base?: DeepPartial<CreateEntryRequest>): CreateEntryRequest {
    return CreateEntryRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateEntryRequest>): CreateEntryRequest {
    const message = createBaseCreateEntryRequest();
    message.type = object.type ?? "";
    message.auth = (object.auth !== undefined && object.auth !== null) ? AuthData.fromPartial(object.auth) : undefined;
    message.id = object.id ?? "";
    message.data = Object.entries(object.data ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.eventMetadata = (object.eventMetadata !== undefined && object.eventMetadata !== null)
      ? EventMetadata.fromPartial(object.eventMetadata)
      : undefined;
    return message;
  },
};

function createBaseCreateEntryRequest_DataEntry(): CreateEntryRequest_DataEntry {
  return { key: "", value: "" };
}

export const CreateEntryRequest_DataEntry = {
  encode(message: CreateEntryRequest_DataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryRequest_DataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryRequest_DataEntry();
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

  fromJSON(object: any): CreateEntryRequest_DataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateEntryRequest_DataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CreateEntryRequest_DataEntry>): CreateEntryRequest_DataEntry {
    return CreateEntryRequest_DataEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateEntryRequest_DataEntry>): CreateEntryRequest_DataEntry {
    const message = createBaseCreateEntryRequest_DataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCreateEntryResponse(): CreateEntryResponse {
  return { newData: {}, validationErrors: [], fieldValidationErrors: {} };
}

export const CreateEntryResponse = {
  encode(message: CreateEntryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    Object.entries(message.newData).forEach(([key, value]) => {
      CreateEntryResponse_NewDataEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    });
    for (const v of message.validationErrors) {
      writer.uint32(18).string(v!);
    }
    Object.entries(message.fieldValidationErrors).forEach(([key, value]) => {
      CreateEntryResponse_FieldValidationErrorsEntry.encode({ key: key as any, value }, writer.uint32(26).fork())
        .ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          const entry1 = CreateEntryResponse_NewDataEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.newData[entry1.key] = entry1.value;
          }
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.validationErrors.push(reader.string());
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          const entry3 = CreateEntryResponse_FieldValidationErrorsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.fieldValidationErrors[entry3.key] = entry3.value;
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

  fromJSON(object: any): CreateEntryResponse {
    return {
      newData: isObject(object.newData)
        ? Object.entries(object.newData).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
      validationErrors: Array.isArray(object?.validationErrors)
        ? object.validationErrors.map((e: any) => String(e))
        : [],
      fieldValidationErrors: isObject(object.fieldValidationErrors)
        ? Object.entries(object.fieldValidationErrors).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: CreateEntryResponse): unknown {
    const obj: any = {};
    obj.newData = {};
    if (message.newData) {
      Object.entries(message.newData).forEach(([k, v]) => {
        obj.newData[k] = v;
      });
    }
    if (message.validationErrors) {
      obj.validationErrors = message.validationErrors.map((e) => e);
    } else {
      obj.validationErrors = [];
    }
    obj.fieldValidationErrors = {};
    if (message.fieldValidationErrors) {
      Object.entries(message.fieldValidationErrors).forEach(([k, v]) => {
        obj.fieldValidationErrors[k] = v;
      });
    }
    return obj;
  },

  create(base?: DeepPartial<CreateEntryResponse>): CreateEntryResponse {
    return CreateEntryResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateEntryResponse>): CreateEntryResponse {
    const message = createBaseCreateEntryResponse();
    message.newData = Object.entries(object.newData ?? {}).reduce<{ [key: string]: string }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.validationErrors = object.validationErrors?.map((e) => e) || [];
    message.fieldValidationErrors = Object.entries(object.fieldValidationErrors ?? {}).reduce<
      { [key: string]: string }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseCreateEntryResponse_NewDataEntry(): CreateEntryResponse_NewDataEntry {
  return { key: "", value: "" };
}

export const CreateEntryResponse_NewDataEntry = {
  encode(message: CreateEntryResponse_NewDataEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryResponse_NewDataEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryResponse_NewDataEntry();
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

  fromJSON(object: any): CreateEntryResponse_NewDataEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateEntryResponse_NewDataEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(base?: DeepPartial<CreateEntryResponse_NewDataEntry>): CreateEntryResponse_NewDataEntry {
    return CreateEntryResponse_NewDataEntry.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateEntryResponse_NewDataEntry>): CreateEntryResponse_NewDataEntry {
    const message = createBaseCreateEntryResponse_NewDataEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseCreateEntryResponse_FieldValidationErrorsEntry(): CreateEntryResponse_FieldValidationErrorsEntry {
  return { key: "", value: "" };
}

export const CreateEntryResponse_FieldValidationErrorsEntry = {
  encode(
    message: CreateEntryResponse_FieldValidationErrorsEntry,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateEntryResponse_FieldValidationErrorsEntry {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateEntryResponse_FieldValidationErrorsEntry();
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

  fromJSON(object: any): CreateEntryResponse_FieldValidationErrorsEntry {
    return { key: isSet(object.key) ? String(object.key) : "", value: isSet(object.value) ? String(object.value) : "" };
  },

  toJSON(message: CreateEntryResponse_FieldValidationErrorsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  create(
    base?: DeepPartial<CreateEntryResponse_FieldValidationErrorsEntry>,
  ): CreateEntryResponse_FieldValidationErrorsEntry {
    return CreateEntryResponse_FieldValidationErrorsEntry.fromPartial(base ?? {});
  },

  fromPartial(
    object: DeepPartial<CreateEntryResponse_FieldValidationErrorsEntry>,
  ): CreateEntryResponse_FieldValidationErrorsEntry {
    const message = createBaseCreateEntryResponse_FieldValidationErrorsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
