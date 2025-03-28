// import { AiService } from '../lib/grpc-client';
// import { promisify } from 'util';
// import * as grpc from '@grpc/grpc-js';

// const target = 'http://changerzaryx.ddns.net:50051/api/v1/ask';

// export class ClientService extends AiService {
//   constructor() {
//     super(target, grpc.credentials.createInsecure());
//   }

//   public async getClient(question: string) {
//     const clientInfo = promisify(this.Ask).bind(this);
//     return await clientInfo({ question })
//       .then((client) => ({ client, error: null }))
//       .catch((error) => ({ error, client: null }));
//   }
// }