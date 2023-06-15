import java.util.ArrayList;

public class differentcombination {
    public static void main(String[] args) {
        String str = "abc";
        // Initialize an empty arraylist to store the combinations.
        ArrayList<String> combinations = new ArrayList<>();
        // Convert the given string into a character array.
        generateCombinations(str.toCharArray(), 0, combinations);

        System.out.println("Combinations of the string '" + str + "':");
        // Use nested loops to generate different combinations
        // The outer loop will iterate over the indices of the character array.
        for (String combination : combinations) {
            System.out.println(combination);
        }
    }

    private static void generateCombinations(char[] chars, int index, ArrayList<String> combinations) {
        if (index == chars.length - 1) {
            combinations.add(String.valueOf(chars));
        } else {
            // The inner loop will swap characters at different indices to generate
            // different combinations.
            for (int i = index; i < chars.length; i++) {
                // After each swap, convert the character array back to a string and add it to
                // the array of combinations.
                swap(chars, index, i);
                generateCombinations(chars, index + 1, combinations);
                swap(chars, index, i); // backtrack
            }
        }
    }

    private static void swap(char[] chars, int i, int j) {
        char temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }

}
