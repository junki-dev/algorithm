function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let left = head,
    right = head.next;

  while (right) {
    if (left.val === right.val) {
      right = right.next;
      left.next = right;
    } else {
      left = left.next;
      right = right.next;
    }
  }

  let test = head;
  while (test) {
    console.log(test.val);
    test = test.next;
  }

  return head;
};

// const head = new ListNode(1, new ListNode(1, new ListNode(2, null)));
const head = new ListNode();
const result = deleteDuplicates(head);
console.log(`result >>> ${result}`);
