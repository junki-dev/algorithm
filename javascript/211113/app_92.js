function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseBetween = function (head, left, right) {
  let start = head;
  let cur = head;
  let idx = 1;
  while (idx < left) {
    start = cur;
    cur = cur.next;
    idx++;
  }

  let prev = null;
  let tail = cur;
  while (idx <= right) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    idx++;
  }

  start.next = prev;
  tail.next = cur;

  let test = head;
  while (test) {
    console.log(test.val);
    test = test.next;
  }

  return left === 1 ? prev : head;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
const left = 2;
const right = 3;
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))));
// const head = new ListNode(3, new ListNode(5, null));
// const left = 1;
// const right = 2;

const result = reverseBetween(head, left, right);
console.log(`result >>> ${result}`);
