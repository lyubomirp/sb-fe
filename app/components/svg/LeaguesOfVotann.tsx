import React from "react";
import { Svg } from "@/app/types/Svg";

const LeaguesOfVotann: React.FC<Svg> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg"
      version="1.1"
      width="400"
      height="400"
      viewBox="0, 0, 400,400"
      className={className}
    >
      <g id="svgg">
        <path
          id="path0"
          d="M187.106 6.729 C 167.880 9.768,146.587 15.386,135.382 20.377 L 132.534 21.645 132.534 48.221 L 132.534 74.796 150.075 86.799 C 169.325 99.972,178.636 106.150,179.226 106.141 C 179.437 106.138,182.174 104.177,185.307 101.783 L 191.004 97.430 191.158 52.197 C 191.243 27.319,191.108 6.794,190.858 6.586 C 190.609 6.378,188.921 6.443,187.106 6.729 M207.896 6.997 C 207.676 7.216,207.496 27.671,207.496 52.450 L 207.496 97.504 212.444 101.145 C 215.165 103.147,218.006 105.105,218.757 105.496 C 220.008 106.147,222.021 104.916,242.878 90.734 L 265.633 75.262 265.650 48.388 L 265.667 21.514 261.919 19.823 C 249.288 14.125,210.077 4.815,207.896 6.997 M115.714 31.675 C 114.545 32.560,109.620 36.233,104.770 39.837 L 95.952 46.391 95.952 68.773 C 95.952 81.083,96.076 91.154,96.227 91.154 C 96.378 91.154,101.371 87.879,107.321 83.876 L 118.141 76.598 118.141 53.291 C 118.141 40.473,118.073 30.003,117.991 30.026 C 117.909 30.049,116.884 30.791,115.714 31.675 M280.660 53.665 L 280.660 76.745 291.442 83.950 C 297.373 87.912,302.365 91.154,302.537 91.154 C 302.708 91.154,302.849 81.097,302.849 68.805 L 302.849 46.455 292.108 38.520 C 286.201 34.156,281.208 30.585,281.014 30.585 C 280.819 30.585,280.660 40.971,280.660 53.665 M262.261 94.284 C 256.655 98.335,246.628 105.562,239.978 110.345 L 227.887 119.040 227.887 126.987 C 227.886 131.357,228.104 134.933,228.371 134.933 C 228.638 134.933,236.799 129.535,246.507 122.939 C 256.214 116.342,264.564 110.947,265.062 110.951 C 265.560 110.954,270.420 114.091,275.862 117.922 C 292.565 129.679,296.626 131.934,301.106 131.934 C 302.669 131.934,303.032 128.366,302.540 117.867 L 302.111 108.694 287.683 97.975 C 279.747 92.080,273.074 87.181,272.854 87.088 C 272.633 86.995,267.866 90.234,262.261 94.284 M123.228 89.152 C 121.914 90.030,115.234 94.918,108.383 100.014 L 95.926 109.281 96.089 120.450 C 96.275 133.225,96.000 132.703,101.683 131.050 C 104.867 130.125,112.486 125.281,128.115 114.247 L 133.590 110.380 151.634 122.656 C 161.558 129.408,169.829 134.933,170.013 134.933 C 170.198 134.933,170.274 131.239,170.182 126.724 L 170.015 118.515 148.513 103.036 C 124.834 85.988,126.551 86.931,123.228 89.152 M191.328 113.532 C 184.333 119.040,184.255 119.180,184.168 126.387 L 184.108 131.334 198.501 131.334 L 212.894 131.334 212.894 125.088 L 212.894 118.843 205.946 113.694 C 197.593 107.505,198.962 107.520,191.328 113.532 M124.312 133.913 C 119.966 137.277,116.395 140.215,116.376 140.440 C 116.357 140.666,122.346 145.238,129.685 150.600 C 153.248 167.815,151.708 166.796,152.894 165.962 C 154.826 164.603,167.317 152.415,167.290 151.915 C 167.269 151.535,142.375 134.369,133.790 128.815 L 132.214 127.796 124.312 133.913 M256.972 134.095 C 252.024 137.543,244.134 142.971,239.438 146.156 C 231.138 151.786,230.930 151.980,231.942 153.115 C 234.690 156.198,245.941 166.117,246.689 166.117 C 247.155 166.117,252.898 162.260,259.450 157.546 C 277.683 144.430,282.444 140.792,282.102 140.237 C 281.749 139.666,266.441 127.711,266.152 127.781 C 266.050 127.805,261.919 130.647,256.972 134.095 M184.108 170.492 L 184.108 195.256 191.154 200.893 C 199.772 207.787,198.763 207.787,206.482 200.900 L 212.868 195.202 212.881 170.465 L 212.894 145.727 198.501 145.727 L 184.108 145.727 184.108 170.492 M98.779 151.886 L 95.908 154.423 96.080 171.174 L 96.252 187.925 110.945 198.641 C 131.811 213.861,136.048 216.700,136.908 216.037 C 137.306 215.730,145.120 209.893,154.273 203.066 L 170.915 190.654 170.915 180.113 L 170.915 169.573 168.966 171.046 C 164.289 174.582,155.486 181.002,153.993 181.967 L 152.365 183.020 144.398 177.716 C 140.017 174.799,128.701 167.218,119.253 160.869 C 109.805 154.520,101.979 149.331,101.862 149.338 C 101.745 149.344,100.357 150.491,98.779 151.886 M271.504 166.135 C 250.398 180.296,246.277 182.844,245.314 182.328 C 244.685 181.992,240.574 179.038,236.178 175.764 C 226.725 168.724,227.386 168.324,227.329 181.114 L 227.286 190.415 244.319 203.150 C 253.687 210.154,261.753 216.039,262.243 216.227 C 262.802 216.441,270.560 211.140,282.992 202.048 L 302.849 187.528 302.849 171.207 L 302.849 154.887 299.876 152.106 C 298.241 150.577,296.824 149.326,296.727 149.327 C 296.631 149.328,285.280 156.892,271.504 166.135 M95.952 253.883 L 95.952 302.728 105.997 312.464 L 116.042 322.200 116.216 273.094 C 116.312 246.086,116.230 222.909,116.035 221.589 C 115.711 219.404,103.871 209.511,96.801 205.517 C 96.072 205.106,95.952 211.931,95.952 253.883 M291.754 212.793 L 282.159 219.854 282.006 270.946 C 281.921 299.047,282.022 322.039,282.229 322.039 C 282.436 322.039,287.160 317.690,292.727 312.374 L 302.849 302.709 302.845 259.151 C 302.842 218.302,302.573 205.673,301.710 205.714 C 301.512 205.724,297.031 208.909,291.754 212.793 M215.742 212.711 L 207.496 218.529 207.496 228.005 L 207.496 237.481 216.660 237.481 L 225.824 237.481 235.401 245.292 L 244.978 253.103 245.277 305.535 L 245.577 357.967 255.295 347.349 L 265.014 336.732 265.040 286.593 L 265.067 236.455 259.520 232.357 C 244.728 221.431,225.345 207.404,224.705 207.163 C 224.311 207.014,220.277 209.510,215.742 212.711 M168.985 210.645 C 166.483 212.376,157.405 218.921,148.811 225.187 L 133.185 236.582 133.163 286.357 L 133.141 336.132 142.882 346.808 L 152.624 357.484 152.991 333.315 C 153.193 320.022,153.396 296.571,153.441 281.203 L 153.523 253.261 156.372 250.869 C 157.939 249.554,162.277 246.003,166.013 242.979 L 172.806 237.481 182.055 237.481 L 191.304 237.481 191.252 230.735 C 191.223 227.024,191.021 222.646,190.802 221.005 L 190.405 218.022 182.991 212.759 C 174.258 206.560,174.773 206.638,168.985 210.645 M173.479 256.547 L 168.548 259.970 168.613 265.067 C 168.649 267.871,168.844 273.314,169.047 277.163 L 169.415 284.162 175.355 279.641 L 181.294 275.121 192.446 275.197 C 198.580 275.238,206.567 275.447,210.195 275.661 L 216.792 276.051 222.159 280.454 C 229.089 286.139,228.742 286.375,228.281 276.312 C 228.066 271.612,227.889 266.235,227.888 264.363 L 227.886 260.959 222.231 257.016 L 216.576 253.073 197.493 253.099 L 178.411 253.124 173.479 256.547 M179.551 298.837 L 169.297 306.147 168.908 316.342 C 168.694 321.949,168.524 336.792,168.530 349.325 L 168.540 372.114 178.758 380.510 C 184.377 385.127,189.197 388.985,189.467 389.081 C 189.738 389.178,190.142 367.993,190.364 342.005 C 190.587 316.016,190.866 294.010,190.984 293.103 C 191.312 290.596,190.638 290.934,179.551 298.837 M207.759 313.493 C 207.950 325.615,208.271 347.604,208.472 362.359 C 208.766 383.983,208.987 389.101,209.609 388.746 C 210.033 388.504,214.842 384.663,220.294 380.210 L 230.208 372.114 230.245 355.022 C 230.266 345.622,230.104 330.823,229.886 322.136 L 229.490 306.340 226.437 304.085 C 218.991 298.585,208.603 291.454,208.034 291.454 C 207.609 291.454,207.522 298.447,207.759 313.493 "
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default LeaguesOfVotann;