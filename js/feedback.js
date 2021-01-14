var khanhlinh_feedback = ["about herself", "khanhlinh=> ngoctuan", "khanhlinh=> phuong nam", "khanhlinh=> the minh", "khanhlinh=> khai minh"];
var ngoctuan_feedback = ["ngoctuan => ngoclinh", "about himself", "ngoctuan => phuong nam", "ngoctuan => the minh", "ngoctuan => khai minh"];
var phuongnam_feedback = ["phuongnam => khanhlinh ", "phuongnam => ngoc tuan", "about himself", "phuongnam=>theminh", "phuongnam => khai minh"];
var theminh_feedback = ["theminh=> khanhlinh", "theminh=> ngoc tuan", "theminh=> phuong nam", "about himself", "theminh=> khai minh"];
var khaiminh_feedback = ["khaiminh => khanhlinh ", "khaiminh => ngoctuan", "khaiminh => phuongnam", "khaiminh => theminh", "about himself"];
var khanhlinh = document.getElementById("khanhlinh");
var ngoctuan = document.getElementById("ngoctuan");
var phuongnam = document.getElementById("phuongnam")
var theminh = document.getElementById("theminh")
var khaiminh = document.getElementById("khaiminh")

function getting_feedback(click) {
    erase.innerHTML = ""
    switch (parseInt(click)) {
        //feedback about khanhlinh
        case 1:
            khanhlinh.innerHTML = khanhlinh_feedback[0]
            ngoctuan.innerHTML = ngoctuan_feedback[0]
            phuongnam.innerHTML = phuongnam_feedback[0]
            theminh.innerHTML = theminh_feedback[0]
            khaiminh.innerHTML = khaiminh_feedback[0]
            break;
            //feedback about ngoc tuan
        case 2:
            khanhlinh.innerHTML = khanhlinh_feedback[1]
            ngoctuan.innerHTML = ngoctuan_feedback[1]
            phuongnam.innerHTML = phuongnam_feedback[1]
            theminh.innerHTML = theminh_feedback[1]
            khaiminh.innerHTML = khaiminh_feedback[1]
            break;
            //feedback about Phuong Nam
        case 3:
            khanhlinh.innerHTML = khanhlinh_feedback[2]
            ngoctuan.innerHTML = ngoctuan_feedback[2]
            phuongnam.innerHTML = phuongnam_feedback[2]
            theminh.innerHTML = theminh_feedback[2]
            khaiminh.innerHTML = khaiminh_feedback[2]
            break;
            //feedback about the minh
        case 4:
            khanhlinh.innerHTML = khanhlinh_feedback[3]
            ngoctuan.innerHTML = ngoctuan_feedback[3]
            phuongnam.innerHTML = phuongnam_feedback[3]
            theminh.innerHTML = theminh_feedback[3]
            khaiminh.innerHTML = khaiminh_feedback[3]
            break;
            //feedback about khai minh
        case 5:
            khanhlinh.innerHTML = khanhlinh_feedback[4]
            ngoctuan.innerHTML = ngoctuan_feedback[4]
            phuongnam.innerHTML = phuongnam_feedback[4]
            theminh.innerHTML = theminh_feedback[4]
            khaiminh.innerHTML = khaiminh_feedback[4]
            break;
    }
}
document.getElementById("testing123").innerHTML = "testing"