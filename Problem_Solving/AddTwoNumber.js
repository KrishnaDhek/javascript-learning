class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  let carry = 0;

  while (l1 || l2 || carry) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    curr.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    curr = curr.next;
  }

  return dummy.next;
}

function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return dummy.next;
}

function printLinkedList(head) {
  let result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  console.log(result.join(' -> '));
}



let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);

let answer = addTwoNumbers(l1, l2);

printLinkedList(answer);
