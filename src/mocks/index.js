import worker from './browser';
import { server } from './server';

// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }

if (typeof window === 'undefined') {
  server.printHandlers();
  server.listen();
} else {
  worker.start();
}
