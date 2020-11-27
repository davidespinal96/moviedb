import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl{
    constructor(){
        super();
    }

    itemsPerPageLabel = 'Películas Por Página';
    nextPageLabel = 'Página Siguiente';
    previousPageLabel = 'Página Anterior';

    getRangeLabel = (page: number, page_size: number, length: number) => {
        if(length === 0 || page_size === 0){
            return `0 de ${length}`;
        }
        length = Math.max(length,0);
        const startIndex = page * page_size;
        const endIndex = startIndex < length ? Math.min(startIndex + page_size, length) : startIndex + page_size;
        return `${startIndex + 1} - ${endIndex} de ${length}`;
    }
}