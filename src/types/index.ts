export interface IVolume {
    id: string;
    volumeInfo: {
        title: string;
        subtitle: string;
        authors: string[];
        description: string;
        pageCount: number;
        categories: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
    };
}
