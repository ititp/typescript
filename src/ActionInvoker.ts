import { ActionResolver } from './Resolver';

/**
 * Responsible of action invocation and execution
 */
export class ActionInvoker {
    constructor(
        private _resolver: ActionResolver
    ) { }

    /**
     * Invoke the specified action
     * @param actionName The action to invoke
     * @param parameters The action parameters
     * @return A promise that will wrap the action execution result
     */
    invoke<T = any>(actionName: string, parameters: any): Promise<T> {
        // TODO 
    }
}