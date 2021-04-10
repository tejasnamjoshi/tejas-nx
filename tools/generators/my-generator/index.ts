import { formatFiles, generateFiles, getProjects, joinPathFragments, logger, names, Tree } from '@nrwl/devkit';
import { runTasksInSerial } from '@nrwl/workspace/src/utilities/run-tasks-in-serial';
import { __awaiter } from 'tslib';

export default async function (host: Tree, schema: any) {
  return __awaiter(this, void 0, void 0, function* () {
    const options = yield normalizeOptions(host, schema);
    createComponentFiles(host, options);
    const tasks = [];
    yield formatFiles(host);
    return runTasksInSerial(...tasks);
  });
}

function createComponentFiles(host, options) {
  const componentDir = joinPathFragments(
    options.projectSourceRoot,
    options.directory
  );
  const src = joinPathFragments(__dirname, './files');
  generateFiles(
    host,
    src,
    componentDir,
    Object.assign(Object.assign({}, options), { tmpl: '' })
  );
  for (const c of host.listChanges()) {
    if (options.skipTests && /.*spec.tsx/.test(c.path)) {
      host.delete(c.path);
    }
  }
}

function normalizeOptions(host, options) {
  return __awaiter(this, void 0, void 0, function* () {
    const className = names(options.name).className;
    const componentFileName = className;
    const project = getProjects(host).get(options.project);
    if (!project) {
      logger.error(
        `Cannot find the ${options.project} project. Please double check the project name.`
      );
      throw new Error();
    }
    const { sourceRoot: projectSourceRoot } = project;
    const directory = yield getDirectory(options);
    return Object.assign(Object.assign({}, options), {
      directory,
      className,
      fileName: componentFileName,
      projectSourceRoot,
    });
  });
}
function getDirectory(options) {
  return __awaiter(this, void 0, void 0, function* () {
    const dirName = names(options.name).className;
    const baseDir = options.directory;
    return joinPathFragments(baseDir, dirName);
  });
}
