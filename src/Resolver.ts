import "reflect-metadata";

import { Activator } from './Activator';
import { ActionExecutor, ActionMetadata, METADATA_KEY } from './ActionExecutor';

export interface ExecutorInfo {
    type: Function;
    instance: ActionExecutor;
}

export class ActionResolver {
    private executors: Map<string, ExecutorInfo>;

    constructor(
        private activator: Activator
    ) {
        this.executors = new Map<string, ExecutorInfo>();
    }

    /**
     * Register a new action executor by adding it to the map
     * @param executor The executor class to register
     */
    registerExecutor(executor: any) {
        // TODO 
    }

    /**
     * Get the executor for the given action
     * @param actionName The action name to resolve
     * @return Return the @link{IActionExecutor} associated with the action
     */
    resolve(actionName: string): ActionExecutor {
        if (!this.executors.has(actionName)) {
            throw `No executor found for the action ${actionName}`;
        }
            
        // TODO 
    }
}
