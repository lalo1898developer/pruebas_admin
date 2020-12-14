import { ProfileModel } from './profile.model';

export class RolModel {
    constructor(
        public _id?: string,
        public System?: string,
        public name?: string,
        public Profile?: string,
        public profiles?: ProfileModel[]
    ) {
    }
}
