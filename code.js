function depthFirstSearch(graph, startNode, targetNode) {

    let visited = [];
    let path = [];

    //happen to start at the targetNode 
    if(startNode === targetNode){
        return [startNode];
    }

    for(let node in graph){
        visited[node] = false;
    }

    function backtrack(curNode){

        path.push(curNode);
        visited[curNode] = true;

        if(curNode == targetNode){
            return true;
        }

        for(let neighbor in graph[curNode]){

            //neighbor not visited
            if(!visited[neighbor]){

                //recurse on neighbor
                if(backtrack(neighbor)){
                    //path found
                    return true;
                }

            }
        }

        path.pop();
        visited[curNode] = false;
        return false;
    }

    if (backtrack(startNode)) {

        //if theres a path it returns
        return path; 
    } else {
        //no path comes back empty
        return [];
    }
}

/*
var graph = {'foo': {'boo': 7, 'd': 4},
'boo': {'e': 3},
'd': {'bar': 4},
'e': {'foo': 1},
'bar': {'foo': 2}};

console.log(depthFirstSearch(graph, 'foo', 'bar'));
*/
