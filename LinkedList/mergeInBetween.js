/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let current = list1;
    let current1 = list2;
  
    let slow = null;
    let fast = null;
  
  
    while(current.next){
        if(current.next?.val === a){
            slow = current;
            while(slow.val !== b ){
                slow = slow.next
            }
            slow = slow.next
            current.next = list2
        }
        current = current.next;
    }
  
  current.next = slow
  
   
  
      return list1
  };