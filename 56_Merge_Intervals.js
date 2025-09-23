var merge = function(intervals) {
    console.log(intervals);
    if (intervals.length === 0) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    const merged = [];
    merged.push(intervals[0]);
    console.log(merged);

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        console.log(current);
        
        const lastMerged = merged[merged.length - 1];
        console.log(lastMerged);
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    console.log(merged);
    return merged;
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
// console.log(merge([[1,4],[4,5]])); // [[1,5]]
console.log(merge([[4,7],[1,4]])); // [[1,7]]

