export class TreeData {
    constructor(
        public name?: string,
        public acceso?: boolean,
        public children?: TreeData[],
    ) {
    }
}
