import MNfield from "./MNfield";

test('testing constructor',()=>{
    let fld= new MNfield('nono',215,20)
    expect(fld.width).toBe(20)

})

test('testing constructor with no name',()=>{
    let fld= new MNfield()
    expect(fld.width).toBe(undefined)

})
