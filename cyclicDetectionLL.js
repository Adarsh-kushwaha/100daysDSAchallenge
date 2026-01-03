// slow and fast pointer algo (Floyd’s Cycle Detection Algorithm)

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
    if(head === null || head.next === null){
        return false
    }

    let fast = head;
    let slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow == fast){
            return true;
        }
    }

    return false;
};
