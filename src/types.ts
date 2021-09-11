export interface IUserDisplayData {
    email: string;
    displayName: string;
}

export interface IDBLecture {
    videoId: string;
    addedBy: IUserDisplayData;
    addedOn: string;
    votes: string[];
    documentId: string;
}
