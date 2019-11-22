import "reflect-metadata";

import { Activator } from './Activator';
import { IActionExecutor, ActionMetadata, METADATA_KEY } from './ActionExecutor';

export interface ExecutorInfo {
    type: Function;
    instance: IActionExecutor;
}

export class ActionResolver {
    private _executors : Map<string, ExecutorInfo>;
   
    constructor(
        private _activator: Activator
    ) {
        this._executors = new Map<string, ExecutorInfo>();
    }

    /**
     * Register a new action executor by adding it to the map
     * @param executor The executor class to register
     */
    registerExecutor( executor: Function ) {
       
    }

    /**
     * Get the executor for the given action
     * @param actionName The action name to resolve
     * @return Return the @link{IActionExecutor} associated with the action
     */
    resolve(actionName: string): IActionExecutor {
        if(!this._executors.has(actionName)) { 
            throw `No executor found for the action ${actionName}`;
        }

    }
}
