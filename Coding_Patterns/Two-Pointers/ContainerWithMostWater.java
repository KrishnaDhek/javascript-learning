public class ContainerWithMostWater {
    public static int maxArea(int[] height){
        int left =0;
        int right = height.length-1;
        int maxWater =0;

        while(left<right){
            // to avoid overflow we need to find the minimum length
            int len = Math.min(height[left], height[right]);
            // to find the max distance between two indices
            int width = right-left;
            maxWater = Math.max(maxWater, len*width);
            // as the width is decreasing, we need to find the max hight
            // so that we can accumulate maximum water
            if(height[left]<height[right]){
                left++;
            }
            else{
                right--;
            }

        }
        return maxWater;

    }
    public static void main(String[] args) {
        int[] height ={1,8,6,2,5,4,8,3,7};
        System.out.println(maxArea(height));
    }
    
}