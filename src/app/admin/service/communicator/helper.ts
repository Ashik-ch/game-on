export class BaserRestApiJson {
    url!: string;
    pathParameters?: string;
    method!: 'post' | 'get' | 'put' | 'delete';
}