import { merge } from "../src/merge_sort.ts";

describe("merge test",() => {

    test("collection 1 or 2 is exhausted first", () => {
        const collection1 : number[] = [1,2,3]
        const collection2 : number[] = [4,7,10]
        const collection3 : number[] = [9,8,6]
        expect(merge(collection1,collection2,collection3)).toStrictEqual([1,2,3,4,6,7,8,9,10]);
    })

    test("collection 3 is exhausted first", () => {
        const collection1 : number[] = [4,5,6]
        const collection2 : number[] = [7,8,9]
        const collection3 : number[] = [3,2,1]
        expect(merge(collection1,collection2,collection3)).toStrictEqual([1,2,3,4,5,6,7,8,9]);
    })

    test("collection 1 or 2 is exhausted last", () => {
        const collection1 : number[] = [1,2,3]
        const collection2 : number[] = [4,7,10,9999]
        const collection3 : number[] = [9,8,6]
        expect(merge(collection1,collection2,collection3)).toStrictEqual([1,2,3,4,6,7,8,9,10,9999]);
    })

    test("collection 3 is exhausted last", () => {
        const collection1 : number[] = [1,2,3]
        const collection2 : number[] = [4,7,10]
        const collection3 : number[] = [100,90,80,9,8,6]
        expect(merge(collection1,collection2,collection3)).toStrictEqual([1,2,3,4,6,7,8,9,10,80,90,100]);
    })

    test("collection 1 or 2 is empty",() => {
        const collection1 : number[] = []
        const collection2 : number[] = [4,6]
        const collection3 : number[] = [9,8]
        expect(merge(collection1,collection2,collection3)).toStrictEqual([4,6,8,9]);        
    })

    test("collection 3 is empty",() => {
        const collection1 : number[] = [3,4]
        const collection2 : number[] = [4,6]
        const collection3 : number[] = []
        expect(merge(collection1,collection2,collection3)).toStrictEqual([3,4,4,6]);        
    })

    test("all collections are empty",() => {
        const collection1 : number[] = []
        const collection2 : number[] = []
        const collection3 : number[] = []
        expect(merge(collection1,collection2,collection3)).toStrictEqual([]);    
    })

    test("all collections are duplicated",() => {
        const collection1 : number[] = [1,1,1]
        const collection2 : number[] = [1,1,1]
        const collection3 : number[] = [1,1,1]
        expect(merge(collection1,collection2,collection3)).toStrictEqual([1,1,1,1,1,1,1,1,1]);    
    })

})