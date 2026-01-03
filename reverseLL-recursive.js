class ListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}

function reverseLL(head){
    if(head === null || head.next === null){
        return head;
    }

    const newHead = reverseLL(head.next)

    head.next.next = head;
    head.next = null

    return newHead;
}