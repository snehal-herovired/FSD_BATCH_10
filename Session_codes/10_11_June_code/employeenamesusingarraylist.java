import java.util.ArrayList;
import java.util.Scanner;

public class employeenamesusingarraylist {
    public static void main(String[] args) {
        // Create an empty data structure to store the names of Employees.
        ArrayList<String> EmpNames = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        // Prompt the user to enter the names of employees.
        System.out.println("Enter Employee names (type 'done' to finish):");
        String input;
        // Read the input from the user and add each name to the data structure.
        while (!(input = scanner.nextLine()).equalsIgnoreCase("done")) {
            EmpNames.add(input);
        }
        // After all the names have been entered, display the names of the students.
        System.out.println("Student names in the class:");
        for (String name : EmpNames) {
            System.out.println(name);
        }
        scanner.close();
    }
}
