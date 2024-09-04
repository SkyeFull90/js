function deleteNth<T>(arr: T[], n: number): T[] {
    const result: T[] = [];
    const counts: { [key: string]: number } = {};
  
    for (const element of arr) {
      const key = String(element);
      if (!counts[key] || counts[key] < n) {
        result.push(element);
        counts[key] = (counts[key] || 0) + 1;
      }
    }
  
    return result;
  }

const numbers = [1, 2, 3, 1, 2, 1, 2, 3];
const result = deleteNth(numbers, 2);
console.log(result); // Output: [1, 2, 3, 1, 2, 3]