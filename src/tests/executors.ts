import "reflect-metadata";
import * as R from '..';

@R.Executor({
    actionName: "test"
})
export class TestExecutor implements R.ActionExecutor {
    execute(parameters: any): Promise<any> {
        return Promise.resolve(parameters.a + parameters.b);
    }
}   

export class WrongExecutor implements R.ActionExecutor {
    execute(parameters: any): Promise<any> {
        return Promise.resolve(parameters.a + parameters.b);
    }
}

@R.Executor({
    actionName: "test"
})
export class DuplicateTestExecutor implements R.ActionExecutor {
    execute(parameters: any): Promise<any> {
        return Promise.resolve(parameters.a + parameters.b);
    }
}

@R.Executor({
    actionName: "test"
})
export class WrongTestExecutor {
    doStuff() {

    }
}
export class DumbActivator implements R.Activator {
    activate<T>(type: any) {
        if (type == TestExecutor) {
            return new TestExecutor() as any as T;
        }
    }
}