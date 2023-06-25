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
  
    let count = 0
  
  
    while(current.next){
        if(count+1 === a){
            slow = current;
            while(count !== b ){
                slow = slow.next
                count++
            }
            slow = slow.next
            current.next = list2
        }
        current = current.next;
        count++;
    }
  
  current.next = slow
  
   
  
      return list1
  };