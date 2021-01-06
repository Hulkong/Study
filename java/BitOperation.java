package java;

public class BitOperation {
    static boolean getBit(int num, int i) {
        return (num & (1 << i)) != 0;
    }

    static int setBit(int num, int i) {
        return num | (1 << i);
    }

    static int clearBit(int num, int i) {
        return num & (1 << i);
    }

    static int clearLeftBits(int num, int i) {
        return num & ((1 << i) - 1);
    }

    static int clearRightBits(int num, int i) {
        return num & (-1 << (i + 1));
    }

    static int updateBit(int num, int i, boolean val) {
        return (num & (i << i)) | ((val ? 1 : 0) << i);
    }

    public static void main(String[] args) {
        // 1 0 0 1
        System.out.println(getBit(9, 3));

        // 0 1 0 1
        System.out.println(getBit(5, 3));

        // 1 1 0 1
        System.out.println(setBit(5, 3));

        // 1 0 0 1
        System.out.println(clearBit(9, 3));

        // 10101001
        System.out.println(clearLeftBits(169, 3));

        // 10100000
        System.out.println(clearRightBits(169, 3));

        // 10100001
        System.out.println(updateBit(169, 3, false));
    }
}
