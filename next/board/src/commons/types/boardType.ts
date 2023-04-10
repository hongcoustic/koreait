import { MutableRefObject } from "react";
import { IQuery } from "./generated/types";

export interface IBoardDetailPresenterProps {
    data:Pick<IQuery, 'fetchBoard'>;
    onUpdateClick:()=>void;
}

export interface IBoardListPresenterProps{
    data: Pick<IQuery, 'fetchBoards'>;
    onButtonClick:(number:number)=>void;
    onNewBoard:()=>void;
}

export interface IRowItemProps{
    type:'number'|'title'|'date'|'writer';
}

export interface IBoardWriteContainerProps{
    isEdit?:boolean;
    data?:Pick<IQuery, 'fetchBoard'>;
}

export interface IBoardWritePresenterProps{
    inputRefs:MutableRefObject<HTMLInputElement[]>;
    onButton1:()=>void;
    isEdit?:boolean;
    data?:any;
}