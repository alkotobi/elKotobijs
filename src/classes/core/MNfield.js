import { Fieldwidth, Errors, FieldTypes } from "./Types";
import MNvalidation from './MNvalidation'

export default class MNfield {

    /**
     * 
     * @param {the name of the field} name 
     * @param {in pixel} width 
     */

    constructor(name, value, width) {
        if (MNvalidation.isNotNullUndi(name)) { this.name = name } else {
            // throw Errors.NullValueError
            return undefined
        }//its return {} in this case???
        this.type = (MNvalidation.isNotNullUndi(value)) ? typeof value : 'string',
            this.label = name,
            this.width = MNvalidation.isNotNullUndi(width) ? width : Fieldwidth.xs,
            this.readOnly = false,
            this.value = MNvalidation.isNotNullUndi(value) ? value : '',
            this.required = false,
            this.visible = true
    }

    static createIdField() {
        return {
            name: 'ID',
            type: 'number',
            label: 'ID',
            width: 10,
            readOnly: false,
            value: -1,
            required: false,
            visible: true
        }
    }
    setWidthLarge() {
        this.width = Fieldwidth.large
    }
    setWidthMedium() {
        this.width = Fieldwidth.medium
    }
    setWidthSmall() {
        this.width = Fieldwidth.small
    }
    setWidthXs() {
        this.width = Fieldwidth.xs
    }
    setWidth(nmWidth) {
        if (typeof nmWidth == FieldTypes.number) { this.width = nmWidth } else {
            throw Errors.TypeMisMatchError
        }
    }
    setLabel(strLbl) {
        if (typeof strLbl == FieldTypes.string) { this.label = strLbl } else {
            throw Errors.TypeMisMatchError
        }
    }
    /**
     * @throws TypeMisMatchError if the param is not boolean
     * @param {must be boolean or will throw error} blValue 
     */
    setReadOnly(blValue) {
        if (typeof blValue == FieldTypes.boolean) { this.readOnly = blValue } else {
            throw Errors.TypeMisMatchError
        }

    }
    setRequired(blValue) {
        if (typeof blValue == FieldTypes.boolean) { this.required = blValue } else {
            throw Errors.TypeMisMatchError
        }

    }
    setVisible(blValue) {
        if (typeof blValue == FieldTypes.boolean) { this.visible = blValue } else {
            throw Errors.TypeMisMatchError
        }

    }
    setCanEdit() {
        this.readOnly = false
    }
    setValue(val) {
        if (typeof val == this.type) {
            this.value = val
        } else {
            throw Errors.TypeMisMatchError
        }
    }
    update(value, satLabel, blReaOnly, nmWidth) {
        this.setValue(value)
        this.setLabel(satLabel)
        this.setReadOnly(blReaOnly)
        this.setWidth(nmWidth)

    }
}