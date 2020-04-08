import MNvalidation from './MNvalidation.js';

test('Test isNotNullUndi',()=>{
    let val=null
    let bool= MNvalidation.isNotNullUndi(val)
    expect(bool).toBe(false)
    val=undefined
    val =''
    bool= MNvalidation.isNotNullUndi(val)  
    expect(bool).toBe(true)
    val =null
    bool= MNvalidation.isNotNullUndi(val)  
    expect(bool).toBe(false)
     

})
test('Test isItTypeMisMatch',()=>{
    let bool= MNvalidation.isItTypeMisMatch('nour','string')
    expect(bool).toBe(false)

    bool= MNvalidation.isItTypeMisMatch(1,'number')
    expect(bool).toBe(false)   
    
    bool= MNvalidation.isItTypeMisMatch(false,'boolean')
    expect(bool).toBe(false)

})