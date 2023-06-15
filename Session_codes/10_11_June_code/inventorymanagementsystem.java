import java.util.Scanner;

public class inventorymanagementsystem {
    static int MAX_PRODUCTS = 100; // Maximum number of products in inventory
    static int INVALID_ID = -1; // Invalid product ID

    static int[] productIds = new int[MAX_PRODUCTS];
    static String[] productNames = new String[MAX_PRODUCTS];
    static int[] productQuantities = new int[MAX_PRODUCTS];
    static int productCount = 0;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("========== Inventory Management System ==========");
            System.out.println("1. Add a Product");
            System.out.println("2. Remove a Product");
            System.out.println("3. Update Product Quantity");
            System.out.println("4. Display Inventory");
            System.out.println("5. Sale");
            System.out.println("6. Exit");
            System.out.print("Enter your choice: ");

            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character

            switch (choice) {
                case 1:
                    addProduct(scanner);
                    break;
                case 2:
                    removeProduct(scanner);
                    break;
                case 3:
                    updateProductQuantity(scanner);
                    break;
                case 4:
                    displayInventory();
                    break;
                case 5:
                    makeSale(scanner);
                    break;
                case 6:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }

            System.out.println();
        }
    }

    static void addProduct(Scanner scanner) {
        if (productCount >= MAX_PRODUCTS) {
            System.out.println("Inventory is full. Cannot add more products.");
            return;
        }

        System.out.print("Enter the product ID: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // Consume the newline character

        if (findProductIndex(id) != INVALID_ID) {
            System.out.println("Product with the same ID already exists.");
            return;
        }

        System.out.print("Enter the product name: ");
        String name = scanner.nextLine();

        System.out.print("Enter the quantity in stock: ");
        int quantity = scanner.nextInt();

        productIds[productCount] = id;
        productNames[productCount] = name;
        productQuantities[productCount] = quantity;
        productCount++;

        System.out.println("Product added successfully.");
    }

    static void removeProduct(Scanner scanner) {
        System.out.print("Enter the product ID: ");
        int id = scanner.nextInt();

        int index = findProductIndex(id);
        if (index == INVALID_ID) {
            System.out.println("Product with the specified ID does not exist.");
            return;
        }

        for (int i = index; i < productCount - 1; i++) {
            productIds[i] = productIds[i + 1];
            productNames[i] = productNames[i + 1];
            productQuantities[i] = productQuantities[i + 1];
        }

        productCount--;
        System.out.println("Product removed successfully.");
    }

    static void updateProductQuantity(Scanner scanner) {
        System.out.print("Enter the product ID: ");
        int id = scanner.nextInt();

        int index = findProductIndex(id);
        if (index == INVALID_ID) {
            System.out.println("Product with the specified ID does not exist.");
            return;
        }

        System.out.print("Enter the new quantity: ");
        int quantity = scanner.nextInt();

        productQuantities[index] = quantity;
        System.out.println("Product quantity updated successfully.");
    }

    static void makeSale(Scanner scanner) {
        System.out.print("Enter the product ID: ");
        int id = scanner.nextInt();

        int index = findProductIndex(id);
        if (index == INVALID_ID) {
            System.out.println("Product with the specified ID does not exist.");
            return;
        }

        System.out.print("Enter the quantity sold: ");
        int quantitySold = scanner.nextInt();

        if (quantitySold > productQuantities[index]) {
            System.out.println("Insufficient stock for the sale.");
            return;
        }

        productQuantities[index] -= quantitySold;
        System.out.println("Sale completed successfully. Stock updated.");
    }

    static void displayInventory() {
        if (productCount == 0) {
            System.out.println("Inventory is empty.");
            return;
        }

        System.out.println("========== Inventory ==========");
        System.out.println("ID\tName\t\tQuantity");
        System.out.println("==============================");

        for (int i = 0; i < productCount; i++) {
            System.out.printf("%d\t%-15s%d%n", productIds[i], productNames[i], productQuantities[i]);
        }
    }

    static int findProductIndex(int id) {
        for (int i = 0; i < productCount; i++) {
            if (productIds[i] == id) {
                return i;
            }
        }
        return INVALID_ID;
    }
}
