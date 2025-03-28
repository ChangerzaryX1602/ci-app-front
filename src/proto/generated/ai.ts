import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AiServiceClient as _ai_api_proto_AiServiceClient, AiServiceDefinition as _ai_api_proto_AiServiceDefinition } from './ai/api/proto/AiService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ai: {
    api: {
      proto: {
        AiRequest: MessageTypeDefinition
        AiResponse: MessageTypeDefinition
        AiService: SubtypeConstructor<typeof grpc.Client, _ai_api_proto_AiServiceClient> & { service: _ai_api_proto_AiServiceDefinition }
      }
    }
  }
}

