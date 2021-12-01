export interface CAT_TYPE {
    _id?:string;
    name: string;
    age: number;
    breed: string;
    createDate?: Date;
    updateDate?: Date;
    isDelete?: boolean;
    __v?:number;
}

export enum CAT_BACKEND {
    GET_LIST = '/cat/getList',
    INSERT_CAT = '/cat/insert'
}
