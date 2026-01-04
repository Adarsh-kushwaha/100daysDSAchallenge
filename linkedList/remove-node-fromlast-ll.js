class ListNode {
    constructor(val, next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var removeNthFromEnd = function(head, n) {
    if(head.next === null){
        return head.next
    }

    let dummyNode = new ListNode(0);
    dummyNode.next = head;
    let left = dummyNode;
    let right = dummyNode;

    for(i=0; i<=n; i++){
        right = right.next;
    }

    while(right !== null){
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;
    return dummyNode.next;
};