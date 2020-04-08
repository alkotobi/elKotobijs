import MNfield from "./MNfield";
import { Errors } from "./Types";


export default class MNfields {
    constructor() {
        this.fields = [MNfield.createIdField()]
    }
    addField(fld) {
        if (!(fld instanceof Mnfield)){ throw Errors.TypeMisMatchError}
        if (fld) {
            this.fields.push(fld)
        } else {
            throw Errors.NullValueError
        }
    }
    removeFieldByInd(ind) {
        this.fields.splice(ind, 1)
    }
    removeFieldByName(name) {
        const fld = this.fields.find(name, (filed) => {
            filed.name == name
        })
        if (fld) {
            this.fields.splice(this.fields.indexOf(fld),1)
        }
    }

}