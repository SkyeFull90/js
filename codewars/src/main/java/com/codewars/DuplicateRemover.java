package com.codewars;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DuplicateRemover {

    public static <T> List<T> deleteNth(List<T> arr, int n) {
        List<T> result = new ArrayList<>();
        Map<T, Integer> counts = new HashMap<>();

        for (T element : arr) {
            counts.putIfAbsent(element, 0);
            if (counts.get(element) < n) {
                result.add(element);
                counts.put(element, counts.get(element) + 1);
            }
        }

        return result;
    }

    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 1, 2, 1, 2, 3);
        List<Integer> result = deleteNth(numbers, 2);
        System.out.println(result); // Output: [1, 2, 3, 1, 2, 3]
    }
}