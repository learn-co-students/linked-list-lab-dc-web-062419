function getName(node){
  return node['name']
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  let nextNode = node['next']
  return collection[nextNode]
}

function nodeAt(index, linkedList, collection){
  let node = headNode(linkedList, collection)
  for(let i = 0; i < index; i++){
    node = next(node, collection)
  }
  return node
}

function addressAt(index, linkedList, collection){
  if (index == 0){
    return linkedList
  } else {
    let node = nodeAt(index-1, linkedList, collection)
    return node['next']
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection)
  let index = 0
  while (currentNode != node) {
    index++
    currentNode = next(currentNode, collection)
  }
  return index
}

function insertNodeAt(index, newAddress, linkedList, collection){
  let prevNode = nodeAt(index-1, linkedList, collection)
  let nextNode = nodeAt(index, linkedList, collection)

  let nextNodeIndex = indexAt(nextNode, collection, linkedList)

  let nextNodeAddr = addressAt(nextNodeIndex, linkedList, collection)

  prevNode['next'] = newAddress
  let newNode = collection[newAddress]
  newNode['next'] = nextNodeAddr
}

function deleteNodeAt(index, linkedList, collection){
  let prevNode;

  let currentNode = headNode(linkedList, collection)

  for(let i=0; i<index; i++){
    prevNode = currentNode
    currentNode = next(currentNode, collection)
  }

  prevNode.next = currentNode.next
}