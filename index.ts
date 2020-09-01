/**
 * Class representing an extended map
 */
export default class ExtendedMap<K, V> extends Map<K, V> {

  /**
   * Checks to see if every item in the map satisfies the function condition
   * @arg func A function
   */
  every(func: (item: V) => boolean) {
    for (const item of this.values()) {
      if (!func(item)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Filters all the items that satisfy the function condition
   * @arg func A function
   */
  filter(func: (item: V) => boolean) {
    const arr = [];
    for (const item of this.values()) {
      if (func(item)) {
        arr.push(item);
      }
    }
    return arr;
  }

  /**
   * Finds the first item that satisfies the function condition
   * @arg func A function
   */
  find(func: (item: V) => boolean) {
    for (const item of this.values()) {
      if (func(item)) {
        return item;
      }
    }
  }

  /**
   * Maps out all the items
   * @arg func A function
   */
  map<U>(func: (item: V) => U) {
    const arr = [];
    for (const item of this.values()) {
      arr.push(func(item));
    }
    return arr;
  }

  /**
   * Returns a random item
   */
  random() {
    const items = this.values();
    const random = Math.floor(Math.random() * this.size);
    for (let i = 0; i < random; i++) {
      items.next();
    }
    return items.next().value;
  }

  /**
   * Reduces all items down into a single value
   * @arg func A function
   * @arg initialValue Initial value
   */
  reduce<U>(func: (a: U, b: V) => U, initialValue?: U): U {
    const items = this.values();
    let result = initialValue ?? items.next().value;
    for (const item of items) {
      result = func(result, item);
    }
    return result;
  }

  /**
   * Reverses the order of items
   */
  reverse() {
    let i = this.size;
    const arr = new Array<V>(i--);
    for (const item of this.values()) {
      arr[i--] = item;
    }
    return arr;
  }

  /**
   * Checks to see if at least one item satisfies the function condition
   * @arg func A function
   */
  some(func: (item: V) => boolean) {
    for (const item of this.values()) {
      if (func(item)) {
        return true;
      }
    }
    return false;
  }
}
