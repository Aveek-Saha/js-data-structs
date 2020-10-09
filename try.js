var { PriorityQueue } = require('./dist/js-data-structs.cjs');


var q = PriorityQueue();

q.enqueue('this',4);
q.enqueue('that',1);
q.enqueue('here',7);
q.enqueue('there',3);
q.enqueue('where',9);
q.enqueue('near',0);
q.enqueue('hear',2);

console.log(q.peek());
