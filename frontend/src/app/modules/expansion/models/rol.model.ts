import { ProfileModel } from './perfil.model';

export class RolModel {
    constructor(
        public system?: string,
        public name?: string,
        public profiles?: ProfileModel[]
    ) {
    }
}
