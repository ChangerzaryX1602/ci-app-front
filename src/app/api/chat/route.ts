import { NextRequest, NextResponse } from "next/server";
import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "@proto/generated/ai";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const { question } = await request.json();

    if (!question) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const PROTO_PATH = path.join(process.cwd(), "/src/proto/ai.proto");

    const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
      keepCase: true,
      defaults: true,
      oneofs: true,
    });

    const protoDescriptor = grpc.loadPackageDefinition(
      packageDefinition
    ) as unknown as ProtoGrpcType;
    const { AiService } = protoDescriptor.ai.api.proto;

    // Create client and make call
    const client = new AiService(
      process.env.CHAT_ENDPOINT as string,
      grpc.credentials.createInsecure()
    );

    // Create a proper AiRequest object
    const aiRequest = {
      question: question,
      // Add other required fields based on your AiRequest definition
    };

    const response = await new Promise((resolve, reject) => {
      client.Ask(aiRequest, (err, response) => {
        if (err) return reject(err);
        resolve(response);
      });
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
