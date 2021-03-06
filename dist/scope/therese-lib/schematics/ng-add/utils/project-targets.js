"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetBuildNotFoundError = exports.getProjectTargetOptions = void 0;
const schematics_1 = require("@angular-devkit/schematics");
/** Resolves the architect options for the build target of the given project. */
const getProjectTargetOptions = (project, buildTarget) => {
    if (project.targets &&
        project.targets[buildTarget] &&
        project.targets[buildTarget].options) {
        return project.targets[buildTarget].options;
    }
    if (project.architect &&
        project.architect[buildTarget] &&
        project.architect[buildTarget].options) {
        return project.architect[buildTarget].options;
    }
    throw new Error(`Cannot determine project target configuration for: ${buildTarget}.`);
};
exports.getProjectTargetOptions = getProjectTargetOptions;
const targetBuildNotFoundError = () => new schematics_1.SchematicsException(`Project target "build" not found.`);
exports.targetBuildNotFoundError = targetBuildNotFoundError;
//# sourceMappingURL=project-targets.js.map