export function merge(collection1 : number[], collection2 : number[], collection3 : number[]) : number[] {

    const collections : number[][] = [collection1, collection2, collection3]
    const collectionIndexs : number[] = [0,0,collection3.length - 1]

    const result = []

    while(true){
        let foundMin = false;
        let minInt = 0;
        let minIndex = 0;
        collectionIndexs.forEach((collectionIndex, i) => {
            if(
                collectionIndex >= 0 
                && collectionIndex < collections[i].length 
                && (!foundMin || collections[i][collectionIndex] < minInt)
            ){
                foundMin = true;
                minInt = collections[i][collectionIndex];
                minIndex = i;
            }
        })

        if(!foundMin) break;

        const collectionIndex = collectionIndexs[minIndex];
        const minNum = collections[minIndex][collectionIndex];
        result.push(minNum);

        if(minIndex == 2) collectionIndexs[minIndex] -= 1;
        else collectionIndexs[minIndex] += 1;
    }

    return result
}

