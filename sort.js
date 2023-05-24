#!/usr/bin/env node

/**
 * 对链表进行插入排序，
从链表第一个元素开始可以视为部分已排序，每次操作从链表中移除一个元素，然后原地将移除的元素插入到已排好序的部分。
数据范围：链表长度满足 
1≤n≤1000  ，链表中每个元素满足 
例如输入{2,4,1,5,3}时，对应的返回值为{1,2,3,4,5}，转换过程如下图所示：
*/

function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param head ListNode类
 * @return ListNode类
 */
// 思路：创建一个新链表，遍历原链表，每次取出一个节点，然后将其插入新链表中正确的位置
// 1.创建一个新链表，遍历原链表，每次取出一个节点，然后将其插入新链表中正确的位置
// 2.插入时，从新链表的头部开始比较，找到第一个大于等于当前节点的位置，将当前节点插入到该位置之前
// 3.如果新链表中所有节点都小于当前节点，则将当前节点插入到新链表的尾部
// 4.最后返回新链表即可

function insertionSortList(head) {
  // write code here
  if (!head || !head.next) return head;
  // 创建一个新链表
  let dummy = new ListNode(0);
  // 遍历原链表 每次取出一个节点 然后将其插入新链表中正确的位置 
  // 插入时 从新链表的头部开始比较 找到第一个大于等于当前节点的位置 将当前节点插入到该位置之前 如果新链表中所有节点都小于当前节点 则将当前节点插入到新链表的尾部 最后返回新链表即可
  // 2 4 1
  // pre.val = 2
  // cur.val = 4
  
  dummy.next = head;
  let pre = head;
  let cur = head.next;
  while (cur) {
    if (pre.val <= cur.val) {
      pre = pre.next;
      cur = pre.next;
    } else {
      let p = dummy;
      while (p.next.val <= cur.val) {
        p = p.next;
      }
      pre.next = cur.next;
      cur.next = p.next;
      p.next = cur;
    }
    cur = pre.next;
  }
  return dummy.next;
}
module.exports = {
  insertionSortList: insertionSortList,
};

// 测试
let head = new ListNode(2);
head.next = new ListNode(4);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(5);
head.next.next.next.next = new ListNode(3);
console.log(insertionSortList(head));


// 遍历链表并打印每个节点
function printList(head) {
  let per  = head;
  while (per) {
    console.log(per.val);
    per = per.next;
  }
}

// 链表中间插入新的节点

function insertNode(head, newNode) {
  let per = head;
  while (per) {
    if (per.next === null) {
      per.next = newNode;
      break;
    }
    per = per.next;
  }
}
// 找到链表的中间位置,并插入一个新的节点
function insertNode(head, newNode) {
  let per = head;
  let fast = head;
  while (fast && fast.next) {
    per = per.next;
    fast = fast.next.next;
  }
  newNode.next = per.next;
  per.next = newNode;
}
// 判断链表是否有环
function hasCycle(head) {
  let per = head;
  let fast = head;
  while (fast && fast.next) {
    per = per.next;
    fast = fast.next.next;
    if (per === fast) {
      return true;
    }
  }
  return false;
}
// 判断链表是否有环,并返回环的入口
function detectCycle(head) {
  let per = head;
  let fast = head;
  while (fast && fast.next) {
    per = per.next;
    fast = fast.next.next;
    if (per === fast) {
      per = head;
      while (per !== fast) {
        per = per.next;
        fast = fast.next;
      }
      return per;
    }
  }
  return null;
}
// 判断两个链表是否相交
function getIntersectionNode(headA, headB) {
  let perA = headA;
  let perB = headB;
  while (perA !== perB) {
    perA = perA === null ? headB : perA.next;
    perB = perB === null ? headA : perB.next;
  }
  return perA;
}
// 判断两个链表是否相交,并返回相交的第一个节点
function getIntersectionNode(headA, headB) {
  let perA = headA;
  let perB = headB;
  while (perA !== perB) {
    perA = perA === null ? headB : perA.next;
    perB = perB === null ? headA : perB.next;
  }
  return perA;
}

// 链表相关的算法题
// 1.删除链表中的节点
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

// 2.删除链表中的重复元素
function deleteDuplicates(head) {
  let per = head;
  while (per && per.next) {
    if (per.val === per.next.val) {
      per.next = per.next.next;
    } else {
      per = per.next;
    }
  }
  return head;
}
// 3.删除链表中的重复元素 II
// 4.反转链表
// 5.反转链表 II
// 6.旋转链表
// 7.合并两个有序链表
// 8.合并两个有序链表 II
// 9.链表求和
// 10.链表求和 II
// 11.链表划分


// array = [4,3,1,5,2] 进行插入排序
// 1.创建一个新数组，遍历原数组，每次取出一个元素，然后将其插入新数组中正确的位置
// 2.插入时，从新数组的头部开始比较，找到第一个大于等于当前元素的位置，将当前元素插入到该位置之前
// 3.如果新数组中所有元素都小于当前元素，则将当前元素插入到新数组的尾部
// 4.最后返回新数组即可
// function insertionSort(array) {
//   // write code here
//   // 1.创建一个新数组，遍历原数组，每次取出一个元素，然后将其插入新数组中正确的位置
//   if (!array || array.length === 0) return array;
//   let res = [array[0]];
//   // 2.插入时，从新数组的头部开始比较，找到第一个大于等于当前元素的位置，将当前元素插入到该位置之前
//   for (let i = 1; i < array.length; i++) {
//     let cur = array[i];
//     if (res[res.length - 1] <= cur) {
//       res.push(cur);
//     } else {
//       let j = 0;
//       while (res[j] < cur) {
//         j++;
//       }
//       res.splice(j, 0, cur);
//     }
//   }
//   return res;
// }
// // 测试
// let array = [4, 3, 1, 5, 2];
// console.log(insertionSort(array));

function insertionSort(array) {
  // 定义一个新数组，遍历原数组，每次取出一个元素，然后将其插入新数组中正确的位置
  let arr = [array[0]]
  if (!array || array.length === 0) return array

  for (let




}
