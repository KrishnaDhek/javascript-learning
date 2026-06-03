import java.util.HashMap;

public class TwoSum {
    public static void main(String[] args) {
        int nums[] = { 8, 47, 9, 12 };
        int target = 56;
        int ans[] = twoSum(nums, target);

        for (int i : ans) {
            System.out.println(i);
        }
    }

    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int diff = target - nums[i];
            if (map.containsKey(diff)) {
                return new int[] { map.get(diff), i };
            }
            map.put(nums[i], i);
        }
        return new int[] { -1, -1 };

    }
}