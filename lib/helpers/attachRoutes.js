import routes from '../routes';

export default function attachRoutes(app) {
  routes.forEach(({ path, controller }) => app.use(path, controller));
}
