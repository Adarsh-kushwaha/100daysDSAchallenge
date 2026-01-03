class ListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}

function reverseLL(head){
    let prev = null;
    let current = head;

    while(current !== null){
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    return prev;
}