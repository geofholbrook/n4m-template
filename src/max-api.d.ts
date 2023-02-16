declare module "max-api" {
    const MaxApi: {
        outlet: (...args: any) => void;
        addHandler: (command: string, fn: Function) => void;
        post: (str: string) => void;
    
        POST_LEVELS: string[];
        MESSAGE_TYPES: string[];
    }
    export default MaxApi
}