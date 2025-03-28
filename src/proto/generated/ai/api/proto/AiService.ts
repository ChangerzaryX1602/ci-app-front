// Original file: src/proto/ai.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AiRequest as _ai_api_proto_AiRequest, AiRequest__Output as _ai_api_proto_AiRequest__Output } from '../../../ai/api/proto/AiRequest';
import type { AiResponse as _ai_api_proto_AiResponse, AiResponse__Output as _ai_api_proto_AiResponse__Output } from '../../../ai/api/proto/AiResponse';

export interface AiServiceClient extends grpc.Client {
  Ask(argument: _ai_api_proto_AiRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  Ask(argument: _ai_api_proto_AiRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  Ask(argument: _ai_api_proto_AiRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  Ask(argument: _ai_api_proto_AiRequest, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  ask(argument: _ai_api_proto_AiRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  ask(argument: _ai_api_proto_AiRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  ask(argument: _ai_api_proto_AiRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  ask(argument: _ai_api_proto_AiRequest, callback: grpc.requestCallback<_ai_api_proto_AiResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AiServiceHandlers extends grpc.UntypedServiceImplementation {
  Ask: grpc.handleUnaryCall<_ai_api_proto_AiRequest__Output, _ai_api_proto_AiResponse>;
  
}

export interface AiServiceDefinition extends grpc.ServiceDefinition {
  Ask: MethodDefinition<_ai_api_proto_AiRequest, _ai_api_proto_AiResponse, _ai_api_proto_AiRequest__Output, _ai_api_proto_AiResponse__Output>
}
