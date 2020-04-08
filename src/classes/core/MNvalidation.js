export default class MNvalidation{

    static isItTypeMisMatch(val,strType){
        if (typeof val == strType ) { return false } else {
            return true
        }
    }

    static isNotNullUndi(val){
        if (typeof val !== 'undefined' && val !== null) {
            return true
        } else {
            return false
        }
    }
}