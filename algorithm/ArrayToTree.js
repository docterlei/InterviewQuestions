
let input = [
    {id: 1, value:'学校', parentId: null},
    {id: 2, value:'班级1', parentId: 1},
    {id: 3, value:'班级2', parentId: 1},
    {id: 4, value:'学生1', parentId: 2},
    {id: 5, value:'学生2', parentId: 3},
    {id: 6, value:'学生3', parentId: 3},
]

function arrayToTree(array) {
    let root = array[0];
    array.shift()
    let tree = {
        id: root.id,
        value: root.value,
        children: array.length > 0 ? toTree(root.id, array) : []
    }
    return tree;
}

function toTree(parentId, array) {
    let children = [];
    let len = array.length;

    for(let i = 0; i < len; i++) {
        let node = array[i];
        if(node.parentId === parentId) {
            children.push({
                id: node.id,
                value: node.value,
                children: toTree(node.id, array)
            })
        }
    }
    return children
}

console.log(arrayToTree(input))