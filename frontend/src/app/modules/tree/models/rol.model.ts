import { TreeData } from './tree-data.model';

export class RolModel {
    constructor(
        public system?: string,
        public name?: string,
        public modules?: TreeData
    ) {
    }
}
