function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  let fixed = new ListNode(0);
  fixed.next = head;
  let prev = fixed,
    cur = head;

  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next;
    }

    if (prev.next === cur) {
      prev = cur;
    } else {
      prev.next = cur.next;
    }

    cur = cur.next;
  }

  return fixed.next;
};

const head = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5, null)))),
    ),
  ),
);
const result = deleteDuplicates(head);
console.log(`result >>> ${result}`);
