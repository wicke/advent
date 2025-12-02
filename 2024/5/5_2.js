const fs = require('fs');
var text = fs.readFileSync('data2.txt', 'utf8')
var text2 = fs.readFileSync('rules2.txt', 'utf8')
var data = text.split("\n")
var rules = text2.split("\n")


function parseData(input) {
    return input.map((row) => row.split(','));
}

var a = [];
var midCount = 0;

function runUpdate(data) {
    //console.log(data);
    data.map((row) => {
        updatePage = row.split(',');
        //console.log(updatePage);


        const allPassReverse = updatePage
            .slice(1) // Exclude the first element
            .reverse() // Reverse the array
            .every((page, index) => {
                const actualIndex = updatePage.length - index; // Adjust index to match the original array
                //console.log(actualIndex);
                const result = checkBackward(page, updatePage, actualIndex);
                return result;
            });


        if (allPassReverse ? console.log(" ##  B PASS  ##") : console.log(" XX B FAIL XX"));
        if (!allPassReverse) {
            console.log('-------------------REORDER');
            const result = reorderArray(row, rules);
            console.log("Reordered array:", result);
            const middleIndex = Math.floor(result.length / 2);
            const midPage = result[middleIndex];
            console.log(midPage);
            midCount += Number(midPage);
        }
    })

    console.log("MIDDLE SUMS: " + midCount);
}


function checkBackward(page, row, index) {
    console.log("CHECKING B: " + page + " " + index);
    for (var i = index - 2; i >= 0; i--) {
        var ruleCheck = page + "|" + row[i];
        console.log('--> ' + ruleCheck);
        var checkPass = true
        rules.map((rule) => {
            if (rule === ruleCheck) {
                checkPass = false;
                console.log(rule);
            }
        })
        if (!checkPass) break;
    }
    return checkPass;
}

function reorderArrays(inputArray, rules) {

    const reorderedArrays = inputArray.map(arr => reorderArray(arr, rules));

    // Step 4: Sum the middle number of each reordered array
    const middleSum = reorderedArrays.reduce((sum, arr) => {
        const middleIndex = Math.floor(arr.length / 2);
        return sum + arr[middleIndex];
    }, 0);

    return { reorderArrays: reorderedArrays.map(arr => arr.join(',')), middleSum };

}
function reorderArray(inputArray, rules) {
    // Step 1: Build a graph and in-degree map
    const graph = new Map();
    const inDegree = new Map();
    //console.log(inputArray);
    //const arr = input.split(',').map(Number);
    ///const arr = [...new Set(inputArray.flatMap(str => str.split(',').map(Number)))];
    const arr = inputArray.split(',').map(Number);

    // Initialize graph and in-degree map
    arr.forEach(num => {
        graph.set(num, []);
        inDegree.set(num, 0);
    });

    // Add edges based on rules
    rules.forEach(rule => {
        const [first, second] = rule.split('|').map(Number);
        if (graph.has(first) && graph.has(second)) {
            // console.log("HAS " + first + ":" + second);
            graph.get(first).push(second);
            inDegree.set(second, inDegree.get(second) + 1);
        }
        // console.log(graph);
    });

    // Step 2: Perform topological sort using Kahn's algorithm
    const queue = [];
    const sorted = [];

    // Start with nodes with no dependencies
    inDegree.forEach((value, key) => {
        if (value === 0) {
            queue.push(key);
        }
    });

    while (queue.length > 0) {
        const current = queue.shift();
        sorted.push(current);

        // Reduce the in-degree of neighbors
        graph.get(current).forEach(neighbor => {
            inDegree.set(neighbor, inDegree.get(neighbor) - 1);
            if (inDegree.get(neighbor) === 0) {
                queue.push(neighbor);
            }
        });
    }

    // If sorted array doesn't include all elements, there was a cycle in the rules
    if (sorted.length !== arr.length) {
        throw new Error("The rules contain a cycle and cannot be resolved.");
    }

    // Step 3: Reorder the input array based on the sorted order
    const positionMap = new Map();
    sorted.forEach((num, index) => positionMap.set(num, index));

    return arr.sort((a, b) => positionMap.get(a) - positionMap.get(b));
}

// Example usage:
// const arr = [97, 13, 75, 29, 47];
// const rules = [
//     "47|53", "97|13", "97|61", "97|47", "75|29", "61|13", "75|53",
//     "29|13", "97|29", "53|29", "61|53", "97|53", "61|29", "47|13",
//     "75|47", "97|75", "47|61", "75|61", "47|29", "75|13", "53|13"
// ];

try {
    runUpdate(data);
    // const result = reorderArrays(data, rules);
    // console.log("Reordered array:", result);
    //13402 too high
} catch (error) {
    console.error(error.message);
}



// runUpdate(data);
// console.log(midCount);
