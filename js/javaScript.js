var facebook_array = ['https://www.facebook.com/tamaiji.ryuko.7/', 'https://www.facebook.com/phuongnamdeptrai', 'https://www.facebook.com/theminh.nguyen.180625', 'https://www.facebook.com/vokhaiminhheo', 'https://www.facebook.com/osw0825/']
var twitter_array = ['not_using_social_media.html', 'not_using_social_media.html', 'https://twitter.com/nguynthminh19', 'not_using_social_media.html', 'not_using_social_media.html']
var instagram_array = ['https://www.instagram.com/meoconkute2k8/', 'https://www.instagram.com/namtoptall', 'https://www.instagram.com/cchminh/', 'https://www.instagram.com/khai._.mon', 'https://www.instagram.com/ngxj.twns/']
var imageArray = ["image/team_profile/khanh_linh.jpg", "image/team_profile/nguyen_phuong_nam.jpg", "image/team_profile/nguyen_the_minh.jpg", "image/team_profile/vo_khai_minh.jpg", "image/team_profile/bui_nguyen_ngoc_tuan.jpg"]
var group_member_name = ["Vo Tran Khanh Linh", "Nguyen Phuong Nam", "Nguyen The Minh", "Vo Khai Minh", "Bui Nguyen Ngoc Tuan"]
var personal_information = ["The last one and the only girl in our group project. Linh had an extraordinarily high school time when she studied abroad in Fairmont Preparatory Academy (United States) and have just listened to the sound of the country to come back, take part in RMIT IT bachelor degree. Her keen interest in IT started when she first tried the Oculus, also PlayStation Virtual Reality and was amazed at how people can actualize virtual reality. Until now, she has been impressed by how fast this field is being developed, from time to time, the games get more real. For experiences, Linh took a yearlong course about creating a basic website, also a semester-long course about Computer Science, which was mostly focused on JavaScript. However, she claimed that her experiences were not enough for future career, so Linh returned to Vietnam (Mostly due to the pandemic) and went to RMIT University. ", "Like The Minh, Nam also originates from the capital of Vietnam. Nam is an ambivert, who restricts to the crown and only feels confident in a group of friends or someone he already knows online. Nam likes to play with his guitar and sometimes, games to relax. Specifically, Nam is a football enthusiast and he usually spends loads of time watching football matches and hours exploring those matches, looking for the match data analysis. His data analysis enthusiasm is the main factor of choosing information technology for further education. However, his ability to use English was not enough for RMIT that time so Nam had to take an Advance English Course and missed the first few weeks. Unfortunately, He also already failed in one of three general elective courses and doubted his capability to IT. ", "Minh comes from Hanoi city which is the capital city of our country. One of his pass-time hobbies is enjoying the world of manga through reading manga novels. He finds that it is really fun reading stuff and on top of that, every single manga – light novel tells you a story that you can read whenever you want because each chapter is short, and it is very entertaining. Chosen to be the project leader, Minh has his own interest in Artificial Intelligence, and he chose to learn IT because of it. Otherwise, Minh also managed to be entranced in making video games on the road of researching programming and information technology. Before going to RMIT, he studied some online IT courses and felt that RMIT would provide more material to achieve his dream. ", "The remains “Minh” in our group, his name his duplicate from the former but in a different form of middle name and last name. He is the one who brings our group together. Minh comes from the city of Quang Ngai, middle of Vietnam. His leisure time favorable is playing video games. Minh said that in high school, he plays game almost every day for an unhealthy amount of time and, for example, 2k3 hours on CSGO. Minh is the type of person that loves to discover and have a creative mind, so IT had always been the right choice for him. He had been interested in IT since grade 8, when he saw a string of codes and being impressed. Beside he loves this area because IT industry contains multiple career paths such as a computer programmer, game development, software engineer … and whatever way you choose, people can find work almost everywhere. Specifically, two of his ideal jobs are web developer and mobile games developer.", "Our next member is Bui Nguyen Ngoc Tuan. a local citizen of Ho Chi Minh City. His hobbies are playing online games and dancing with K-pop choreographies. As well as the remaining group members, Tuan is currently enrolling RMIT’s Bachelor of Information Technology as a first-year student. His IT interest started when he was around 13 and the idea of being a mobile application developer came accidentally and was his dream job.  To be more specific, Tuan used to wonder how POPCAP, his childhood-favorable game company, writes codes that turn into a simple yet enticing entertaining application. He chose RMIT because from his opinion, RMIT is one of the best universities for students who are interested in an IT major to start off with modern learning tools and professional lectures. "]
var personal_github_link = ["https://github.com/s3878600", "https://github.com/namtoptall/namnp2002", "https://github.com/NguyenTheMinh196", "https://github.com/Minh0811", "https://github.com/XcSteven"]
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