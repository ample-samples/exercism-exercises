const VERBOSE_LOGS = false;

interface Node {
  next: Node | null,
  prev: Node | null,
  element: any
}

export class LinkedList<TElement> {
  head: null | Node;
  tail: null | Node;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(element: TElement): TElement {
    // Add node to the end of the list
    const newNode = {next: null, prev: this.tail, element};

    if (this.tail) {
      this.tail.next = newNode 
    } else {
      this.head = newNode;
    }

    this.tail = newNode;

    this.length++;

    if (VERBOSE_LOGS) {console.log("push() => \nthis.head: ", this.head, "\nthis.tail:", this.tail)}
    return element;
  }

  public pop(): null | TElement {
    // Remove node at the end of the list
    if (!this.tail) return null;
    const removedElement = this.tail.element;

    this.tail = this.tail.prev ? this.head : this.tail.prev;

    this.length--;

    if (this.length === 0) {
      this.head = null;
    }

    if (VERBOSE_LOGS) {console.log("pop() => \nthis.head: ", this.head, "\nthis.tail:", this.tail)}
    return removedElement;
  }

  public shift(): null | TElement {
    // Remove node at the beginning
    if (!this.head) return null;

    const removedElement = this.head.element;

    this.head = this.head.next;

    this.length--;

    if (this.length === 0) { this.tail = null }

    if (VERBOSE_LOGS) {console.log("shift() => \nthis.head: ", this.head, "\nthis.tail:", this.tail)}
    return removedElement;
  }

  public unshift(element: TElement): TElement {
    // Add node to the beginning
    const newNode = {next: this.head, prev: null, element} ;

    if (this.head) {
      this.head.prev = newNode 
    } else {
      this.tail = newNode;
    }

    this.head = newNode;

    this.length++;

    if (VERBOSE_LOGS) {console.log("unshift() => \nthis.head: ", this.head, "\nthis.tail:", this.tail)}
    return element;
  }

  public delete(element: TElement): void {
    let nodeToDelete: null | Node = null;

    for (let workingNode = this.head; workingNode !== null; workingNode = workingNode.next) {
      if (workingNode.element === element) nodeToDelete = workingNode;
    }

    if (nodeToDelete === null) return;

    if (nodeToDelete === this.head) {
    // Element to delete is the head or the only node in the list
      this.shift();

      return;
    } else if (nodeToDelete === this.tail) {
    // Element to delete is the tail
      this.pop();

      return;
    } else if (nodeToDelete.next !== null && nodeToDelete.prev !== null){
    // Element to delete is in the middle of the list
      nodeToDelete.next.prev = nodeToDelete.prev;
      nodeToDelete.prev.next = nodeToDelete.next;
      this.length--;

      return;
    }
    return;
  }

  public count(): number {
    return this.length;
  }
}
