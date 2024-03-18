export interface IButton {
    children: string;
    isDisabled: boolean;
    typeButton: string;
}

export interface IInput {
    title: string;
    isDisabled: boolean;
    type: string;
    placeholder: string;
}

export interface ITitle {
    typeTitle: string;
    children: string;
}

export interface IText {
    children: string;
    type: string;
}

export interface ILink{
    children: string;
}