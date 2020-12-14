export class TreeData {
    constructor(
        public is_active?: boolean,
        public _id?: string,
        public name?: string,
        public Module?: string,
        public System?: string,
        public submodules?: TreeData[]
    ) {
    }
}