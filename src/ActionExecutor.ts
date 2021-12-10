import "reflect-metadata";

export interface ActionMetadata {
    actionName: string;
}

export const METADATA_KEY = Symbol("ActionExecutorMeta");

/**
 * Action executor decorator. This must be used on every executor class
 * @param metadata The metadata to associate with the ActionExecutor class
 */
export function Executor<TFunction extends Function>(metadata: ActionMetadata): Function {
    return function (constructor: any) {
        
        // TODO store metadata on class
    };
}

/**
 * All ActionExector need to satisify the ActionExecutor interface in order to be excecuted
 */
export interface ActionExecutor {
    execute(parameters: any): Promise<any>;
}



