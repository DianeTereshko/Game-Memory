export class Card implements ICard {
    id:number;
    name:string;
    icon:string;
    status:IStatus
    constructor(){
        this.id = null;
        this.name = null;
        this.icon = null;
        this.status = new Status;
    }
}

export interface ICard {
    id:number;
    name:string;
    icon:string;
    status:IStatus
}

export class Status implements IStatus {
    deleted: boolean;
    todelete:boolean;
    isVisible:boolean;
    constructor() {
        this.deleted = false;
        this.todelete = false;
        this.isVisible = false;

    }
}

export interface IStatus {
    deleted: boolean;
    todelete:boolean;
    isVisible:boolean;
}

