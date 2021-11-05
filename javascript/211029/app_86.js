function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var partition = function (head, x) {
  let leftTmp = new ListNode(0);
  let rightTmp = new ListNode(0);
  let left = leftTmp;
  let right = rightTmp;
  let cur = head;

  while (cur) {
    if (cur.val < x) {
      left.next = cur;
      left = cur;
    } else {
      right.next = cur;
      right = cur;
    }

    cur = cur.next;
  }

  left.next = rightTmp.next;
  right.next = null;

  return leftTmp.next;
};

const head = new ListNode(
  1,
  new ListNode(
    4,
    new ListNode(3, new ListNode(2, new ListNode(5, new ListNode(2)))),
  ),
);
const x = 3;
partition(head, x);
