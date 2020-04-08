import MNfield from "./MNfield";
import { Fieldwidth, Errors, FieldTypes } from "./Types";


test('testing constructor',()=>{
    let fld= new MNfield('nono',215,20)
    expect(fld.width).toBe(20)

})

test('testing constructor with no name',()=>{
    let fld= new MNfield()
    console.log(fld)
    expect(fld).toEqual({})

})

test('testing constructor with no width',()=>{
    let fld= new MNfield('nono',20)
    expect(fld.width).toBe(10)

})

test('testing createIdField',()=>{
    let fld= new MNfield.createIdField
    expect(fld).toEqual({
        name: 'ID',
        type: 'number',
        label: 'ID',
        width: 10,
        readOnly: false,
        value: -1,
        required: false,
        visible: true
    })

})

test('testing setWidthLarge',()=>{
    let fld= new MNfield('nono',20)
    fld.setWidthLarge()
    expect(fld.width).toBe(Fieldwidth.large)

})

test('testing setWidthMedium',()=>{
    let fld= new MNfield('nono',20)
    fld.setWidthMedium()
    expect(fld.width).toBe(Fieldwidth.medium)

})

test('testing setWidthSmall',()=>{
    let fld= new MNfield('nono',20)
    fld.setWidthSmall()
    expect(fld.width).toBe(Fieldwidth.small)

})

test('testing setWidthXs',()=>{
    let fld= new MNfield('nono',20)
    fld.setWidthXs()
    expect(fld.width).toBe(Fieldwidth.xs)

})

test('testing setWidth(nmWidth)',()=>{
    let fld= new MNfield('nono',20)
    fld.setWidth(500)
    expect(fld.width).toBe(500)

})

test('testing setLabel(strLbl)',()=>{
    let fld= new MNfield('nono',20)
    fld.setLabel('str')
    expect(fld.label).toBe('str')

})

test('testing setReadOnly(blValue)',()=>{
    let fld= new MNfield('nono',20)
    fld.setReadOnly(true)
    expect(fld.readOnly).toBe(true)

})

test('testing setRequired(blValue)',()=>{
    let fld= new MNfield('nono',20)
    fld.setRequired(true)
    expect(fld.required).toBe(true)

})

test('testing setVisible(blValue)',()=>{
    let fld= new MNfield('nono',20)
    fld.setVisible(true)
    expect(fld.visible).toBe(true)

})

test('testing setCanEdit()',()=>{
    let fld= new MNfield('nono',20)
    fld.setCanEdit()
    expect(fld.readOnly).toBe(false)

})

test('testing setValue(val)',()=>{
    let fld= new MNfield('nono',20)
    
    fld.setValue(30)
    expect(fld.value).toBe(30)

})

test('testing update(value, satLabel, blReaOnly, nmWidth)',()=>{
    let fld= new MNfield('nono',20)
    
    fld.update(30, 'label', true, 20)
    expect(fld.value).toBe(30)
    expect(fld.label).toBe('label')
    expect(fld.readOnly).toBe(true)
    expect(fld.width).toBe(20)

})


