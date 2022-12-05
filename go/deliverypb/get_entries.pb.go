// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.9
// source: delivery/get_entries.proto

package deliverypb

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetEntriesRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type                      string `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	TenantId                  string `protobuf:"bytes,2,opt,name=tenant_id,json=tenantId,proto3" json:"tenant_id,omitempty"`
	Id                        string `protobuf:"bytes,3,opt,name=id,proto3" json:"id,omitempty"`
	Limit                     int32  `protobuf:"varint,4,opt,name=limit,proto3" json:"limit,omitempty"`
	Page                      int32  `protobuf:"varint,5,opt,name=page,proto3" json:"page,omitempty"`
	ReturnEmptyDataIfNotFound bool   `protobuf:"varint,6,opt,name=returnEmptyDataIfNotFound,proto3" json:"returnEmptyDataIfNotFound,omitempty"`
}

func (x *GetEntriesRequest) Reset() {
	*x = GetEntriesRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_get_entries_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetEntriesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetEntriesRequest) ProtoMessage() {}

func (x *GetEntriesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_get_entries_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetEntriesRequest.ProtoReflect.Descriptor instead.
func (*GetEntriesRequest) Descriptor() ([]byte, []int) {
	return file_delivery_get_entries_proto_rawDescGZIP(), []int{0}
}

func (x *GetEntriesRequest) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *GetEntriesRequest) GetTenantId() string {
	if x != nil {
		return x.TenantId
	}
	return ""
}

func (x *GetEntriesRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GetEntriesRequest) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *GetEntriesRequest) GetPage() int32 {
	if x != nil {
		return x.Page
	}
	return 0
}

func (x *GetEntriesRequest) GetReturnEmptyDataIfNotFound() bool {
	if x != nil {
		return x.ReturnEmptyDataIfNotFound
	}
	return false
}

type Entry struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data map[string]string `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
}

func (x *Entry) Reset() {
	*x = Entry{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_get_entries_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Entry) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Entry) ProtoMessage() {}

func (x *Entry) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_get_entries_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Entry.ProtoReflect.Descriptor instead.
func (*Entry) Descriptor() ([]byte, []int) {
	return file_delivery_get_entries_proto_rawDescGZIP(), []int{1}
}

func (x *Entry) GetData() map[string]string {
	if x != nil {
		return x.Data
	}
	return nil
}

type GetEntriesResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Result []*Entry `protobuf:"bytes,1,rep,name=result,proto3" json:"result,omitempty"`
	Limit  int32    `protobuf:"varint,2,opt,name=limit,proto3" json:"limit,omitempty"`
	Page   int32    `protobuf:"varint,3,opt,name=page,proto3" json:"page,omitempty"`
}

func (x *GetEntriesResponse) Reset() {
	*x = GetEntriesResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_delivery_get_entries_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetEntriesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetEntriesResponse) ProtoMessage() {}

func (x *GetEntriesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_delivery_get_entries_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetEntriesResponse.ProtoReflect.Descriptor instead.
func (*GetEntriesResponse) Descriptor() ([]byte, []int) {
	return file_delivery_get_entries_proto_rawDescGZIP(), []int{2}
}

func (x *GetEntriesResponse) GetResult() []*Entry {
	if x != nil {
		return x.Result
	}
	return nil
}

func (x *GetEntriesResponse) GetLimit() int32 {
	if x != nil {
		return x.Limit
	}
	return 0
}

func (x *GetEntriesResponse) GetPage() int32 {
	if x != nil {
		return x.Page
	}
	return 0
}

var File_delivery_get_entries_proto protoreflect.FileDescriptor

var file_delivery_get_entries_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x64, 0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x65,
	0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x64, 0x65,
	0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x22, 0xbc, 0x01, 0x0a, 0x11, 0x47, 0x65, 0x74, 0x45, 0x6e,
	0x74, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x6e, 0x61, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x14, 0x0a,
	0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69,
	0x6d, 0x69, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x67, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x12, 0x3c, 0x0a, 0x19, 0x72, 0x65, 0x74, 0x75, 0x72,
	0x6e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x44, 0x61, 0x74, 0x61, 0x49, 0x66, 0x4e, 0x6f, 0x74, 0x46,
	0x6f, 0x75, 0x6e, 0x64, 0x18, 0x06, 0x20, 0x01, 0x28, 0x08, 0x52, 0x19, 0x72, 0x65, 0x74, 0x75,
	0x72, 0x6e, 0x45, 0x6d, 0x70, 0x74, 0x79, 0x44, 0x61, 0x74, 0x61, 0x49, 0x66, 0x4e, 0x6f, 0x74,
	0x46, 0x6f, 0x75, 0x6e, 0x64, 0x22, 0x6f, 0x0a, 0x05, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x2d,
	0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x64,
	0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x2e, 0x44, 0x61,
	0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x37, 0x0a,
	0x09, 0x44, 0x61, 0x74, 0x61, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05,
	0x76, 0x61, 0x6c, 0x75, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x76, 0x61, 0x6c,
	0x75, 0x65, 0x3a, 0x02, 0x38, 0x01, 0x22, 0x67, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x45, 0x6e, 0x74,
	0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x27, 0x0a, 0x06,
	0x72, 0x65, 0x73, 0x75, 0x6c, 0x74, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x64,
	0x65, 0x6c, 0x69, 0x76, 0x65, 0x72, 0x79, 0x2e, 0x45, 0x6e, 0x74, 0x72, 0x79, 0x52, 0x06, 0x72,
	0x65, 0x73, 0x75, 0x6c, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x6c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x70,
	0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x70, 0x61, 0x67, 0x65, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_delivery_get_entries_proto_rawDescOnce sync.Once
	file_delivery_get_entries_proto_rawDescData = file_delivery_get_entries_proto_rawDesc
)

func file_delivery_get_entries_proto_rawDescGZIP() []byte {
	file_delivery_get_entries_proto_rawDescOnce.Do(func() {
		file_delivery_get_entries_proto_rawDescData = protoimpl.X.CompressGZIP(file_delivery_get_entries_proto_rawDescData)
	})
	return file_delivery_get_entries_proto_rawDescData
}

var file_delivery_get_entries_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_delivery_get_entries_proto_goTypes = []interface{}{
	(*GetEntriesRequest)(nil),  // 0: delivery.GetEntriesRequest
	(*Entry)(nil),              // 1: delivery.Entry
	(*GetEntriesResponse)(nil), // 2: delivery.GetEntriesResponse
	nil,                        // 3: delivery.Entry.DataEntry
}
var file_delivery_get_entries_proto_depIdxs = []int32{
	3, // 0: delivery.Entry.data:type_name -> delivery.Entry.DataEntry
	1, // 1: delivery.GetEntriesResponse.result:type_name -> delivery.Entry
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_delivery_get_entries_proto_init() }
func file_delivery_get_entries_proto_init() {
	if File_delivery_get_entries_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_delivery_get_entries_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetEntriesRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_delivery_get_entries_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Entry); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_delivery_get_entries_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetEntriesResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_delivery_get_entries_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_delivery_get_entries_proto_goTypes,
		DependencyIndexes: file_delivery_get_entries_proto_depIdxs,
		MessageInfos:      file_delivery_get_entries_proto_msgTypes,
	}.Build()
	File_delivery_get_entries_proto = out.File
	file_delivery_get_entries_proto_rawDesc = nil
	file_delivery_get_entries_proto_goTypes = nil
	file_delivery_get_entries_proto_depIdxs = nil
}
