class ListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next
    }
}

var mergeTwoLists = function(list1, list2) {
    // Handle edge cases FIRST
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach remaining nodes
    current.next = list1 !== null ? list1 : list2;

    return dummy.next;
};