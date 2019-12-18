import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
 
export interface TableItem {
    name: string;
    id: number;
    raiting:number;
    game:number;
    besttime:string;
}
 
const EXAMPLE_DATA: TableItem[] = [
    { id: 1, name: 'Андрей', raiting: 1245, game: 39, besttime: '1:37' },
    { id: 2, name: 'Виктория', raiting: 1140, game: 30, besttime: '2:07' },
    { id: 3, name: 'Леонид', raiting: 1067, game: 28, besttime: '2:30' },
    { id: 4, name: 'Юрий', raiting: 789, game: 26, besttime: '2:48' },
    { id: 5, name: 'Артем', raiting: 654, game: 40, besttime: '2:50' },
    { id: 6, name: 'Ольга', raiting: 545, game: 59, besttime: '2:30' },
    { id: 7, name: 'Геннадий', raiting: 501, game: 47, besttime: '2:37' },
    { id: 8, name: 'Владлен', raiting: 423, game: 17, besttime: '2:05' },
    { id: 9, name: 'Вячеслав', raiting: 420, game: 22, besttime: '2:54' },
    { id: 10, name: 'Давид', raiting: 317, game: 42, besttime: '2:39' },
    { id: 11, name: 'Карим', raiting: 310, game: 65, besttime: '2:20' },
    { id: 12, name: 'Мария', raiting: 290, game: 15, besttime: '2:17' },
    { id: 13, name: 'Ярослав', raiting: 257, game: 14, besttime: '2:44' },
    { id: 14, name: 'Данила', raiting: 250, game: 18, besttime: '2:54' },
    { id: 15, name: 'Кирилл', raiting: 170, game: 12, besttime: '2:35' },
    { id: 16, name: 'Ипполит', raiting: 168, game: 10, besttime: '2:08' },
    { id: 17, name: 'Любовь', raiting: 140, game: 30, besttime: '3:04' },
    { id: 18, name: 'Виктория', raiting: 135, game: 39, besttime: '3:05' },
    { id: 19, name: 'Анатолий', raiting: 85, game: 4, besttime: '3:55' },
    { id: 20, name: 'Семен', raiting: 54, game: 5, besttime: '3:20' },
];
 
export class TableDataSource extends DataSource<TableItem>
{
    data: TableItem[] = EXAMPLE_DATA;
    paginator: MatPaginator;
    sort: MatSort;
 
    constructor() {
        super();
    }
 
    connect(): Observable<TableItem[]> {
        const dataMutations = [
            observableOf(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
 
        return merge(...dataMutations).pipe(map(() => {
            return this.getPagedData(this.getSortedData([...this.data]));
        }));
    }

    disconnect() { }
 
    private getPagedData(data: TableItem[]) {
        const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    }
    private getSortedData(data: TableItem[]) {
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
 
        return data.sort((a, b) => {
            const isAsc = this.sort.direction === 'asc';
            switch (this.sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'id': return compare(+a.id, +b.id, isAsc);
                default: return 0;
            }
        });
    }
}
 
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

