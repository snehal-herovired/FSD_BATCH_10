public class secondsmallestint {
    public static void main(String[] args) {
        // Initialize two variables, smallest and secondSmallest
        int[] numbers = { 10, 5, 3, 8, 2, 7 };
        int smallest = numbers[0];
        int secondSmallest = numbers[1];
        // Iterate through each element in the array.
        for (int number : numbers) {// Compare the current element with the smallest variable.
            if (number < smallest) { // If the current element is smaller than smallest, update both smallest and
                                     // secondSmallest accordingly.
                secondSmallest = smallest;
                smallest = number;
            } else if (number < secondSmallest && number != smallest) { // If the current element is greater than or
                                                                        // equal to smallest but smaller than
                                                                        // secondSmallest, update secondSmallest only.
                secondSmallest = number;
                // After iterating through all the elements, secondSmallest will hold the second
                // smallest element in the array.
            }
        }
        System.out.println("Second smallest element: " + secondSmallest); // Return the value of secondSmallest.
    }
}
