export interface IFile {
    name: string;
    percent: number;
    size: number;
    status: "error" | "success" | "done" | "uploading" | "removed";
    type: string;
    uid: string;
    url: string;
}

export interface IPost {
    id: string;
    title: string;
    thumbnail: url;
}

export interface IPostVariables {
    id: string;
    title: string;
    thumbnail: url;
}

export interface IUser {
    id: string;
    username: string;
    email: string;
}

export interface IBusiness {
    id: string;
    username: string;
    email: string;
}
