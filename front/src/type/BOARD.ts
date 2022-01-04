export interface BOARD_LIST {
    _id?:string;
    createDate?:Date;
    updateDate?:Date;
    title: string;
    writer: string;
    isDelete?: boolean;
}

export interface BOARD extends BOARD_LIST{
    content: string;
}

export const DEFAULT_BOARD_LIST: BOARD_LIST[] = [{
    title:'',
    writer:'',
}]
