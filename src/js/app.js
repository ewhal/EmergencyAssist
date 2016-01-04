import app from './index.js'

try {
  app.initialize();
} catch(e) {
  console.log(e.stack);
}
