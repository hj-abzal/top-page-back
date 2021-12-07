export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Producsts
}

export class TopPageModel {
    _id: string;
    firstCategory: TopLevelCategory;
    secondCategory: string;
    title: string;
    category: string;
    hh?: {
        count: number;
        juniotSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string;
    tags: string[];
}
