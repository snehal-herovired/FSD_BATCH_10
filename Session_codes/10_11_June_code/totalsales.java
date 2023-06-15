
public class totalsales {
    public static void main(String[] args) {
        int[][] salesData = {
                { 10, 20, 30, 50 },
                { 190, 210, 70, 120 },
                { 400, 130, 175, 140 },
                { 95, 100, 85, 160 },
                { 110, 100, 90, 130 },
                { 120, 140, 75, 110 },
                { 130, 125, 95, 150 }
        };
        int[] tsales = new int[salesData.length];
        for (int day = 0; day < salesData.length; day++) {
            int daytotal = 0;
            for (int prod = 0; prod < salesData[day].length; prod++) {
                daytotal += salesData[day][prod];

            }
            tsales[day] = daytotal;
        }
        for (int i = 0; i < tsales.length; i++) {
            System.out.println("day" + (i + 1) + ":" + tsales[i]);
        }
    }
}
