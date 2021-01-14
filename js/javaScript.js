var facebook_array = ['https://www.facebook.com/tamaiji.ryuko.7/', 'https://www.facebook.com/phuongnamdeptrai', 'https://www.facebook.com/theminh.nguyen.180625', 'https://www.facebook.com/vokhaiminhheo', 'https://www.facebook.com/osw0825/']
var twitter_array = ['https://twitter.com/nguynthminh19']
var instagram_array = ['https://www.instagram.com/cchminh/']
var imageArray = ["image/team_profile/khanh_linh.jpg", "image/team_profile/nguyen_phuong_nam.jpg", "image/team_profile/nguyen_the_minh.jpg", "image/team_profile/vo_khai_minh.jpg", "image/team_profile/bui_nguyen_ngoc_tuan.jpg"]
var group_member_name = ["Vo Tran Khanh Linh", "Nguyen Phuong Nam", "Nguyen The Minh", "Vo Khai Minh", "Bui Nguyen Ngoc Tuan"]
var personal_information = ["content 1", "content 2", "content 3", "content 4", "content 5"]
var personal_github_link = ["Khanh_Linh_github", "Nam_github", "Minh_github", "Khai_Minh_github", "Tuan_github"]
    //auto changing
var image = document.getElementById("info");
var facebook = document.getElementById("facebook");
var twitter = document.getElementById("twitter");
var instagram = document.getElementById("insta");
var name1 = document.getElementById("Person_name");
var content = document.getElementById("personal_description");
var personal_github = document.getElementById("github");
var i = 1;

var change_image_interval = setInterval(function change_image_every_3sec() {
    image.src = imageArray[i];
    facebook.href = facebook_array[i];
    twitter.href = twitter_array[i];
    instagram.href = instagram_array[i];
    name1.innerHTML = group_member_name[i]
    content.innerHTML = personal_information[i]
    personal_github.href = personal_github_link[i]
    i = i + 1;
    if (i == imageArray.length) {
        i = 0;
    }
}, 3000);

function changeimage(click) {

    var image_clicked = document.getElementById("info");

    clearInterval(change_image_interval)
    switch (parseInt(click)) {
        case 1:
            facebook.href = facebook_array[0];
            image_clicked.src = imageArray[0];
            twitter.href = twitter_array[0];
            instagram.href = instagram_array[0];
            name1.innerHTML = group_member_name[0];
            content.innerHTML = personal_information[0];
            personal_github.href = personal_github_link[0];
            break;
        case 2:
            facebook.href = facebook_array[1];
            image_clicked.src = imageArray[1];
            name1.innerHTML = group_member_name[1];
            content.innerHTML = personal_information[1];
            twitter.href = twitter_array[0];
            instagram.href = instagram_array[0];
            personal_github.href = personal_github_link[0];
            break;
        case 3:
            facebook.href = facebook_array[2];
            image_clicked.src = imageArray[2];
            name1.innerHTML = group_member_name[2];
            content.innerHTML = personal_information[2];
            personal_github.href = personal_github_link[0];
            break;
        case 4:
            facebook.href = facebook_array[3];
            image_clicked.src = imageArray[3];
            twitter.href = twitter_array[0];
            instagram.href = instagram_array[0];
            name1.innerHTML = group_member_name[3];
            content.innerHTML = personal_information[3];
            personal_github.href = personal_github_link[0];
            break;
        case 5:
            facebook.href = facebook_array[4];
            image_clicked.src = imageArray[4];
            twitter.href = twitter_array[0];
            instagram.href = instagram_array[0];
            name1.innerHTML = group_member_name[4];
            content.innerHTML = personal_information[4];
            personal_github.href = personal_github_link[0];
            break;
    }
}



$("#info").hover(
    function() {
        $("#info").animate({ left: '+=150', }, 2000);
    },
    function() {
        $("#info").animate({ left: '-=150', }, 2000);
    });